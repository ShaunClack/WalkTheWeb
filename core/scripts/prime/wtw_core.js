/* All code is Copyright 2013-2021 Aaron Scott Dishno Ed.D., HTTP3D Inc. - WalkTheWeb, and the contributors */
/* "3D Browsing" is a USPTO Patented (Serial # 9,940,404) and Worldwide PCT Patented Technology by Aaron Scott Dishno Ed.D. and HTTP3D Inc. */
/* Read the included GNU Ver 3.0 license file for details and additional release information. */

/* these functions are the core startup sequence, fetching of data, and render loop related functions */

WTWJS.prototype.initLoadSequence = function() {
	/* called by windows onload, checks if the browser supports Babylon engine */
	try {
		if (BABYLON.Engine.isSupported()) {
			/* if yes, runs the load sequence */
			WTW.loadSequence();
		} else {
			/* if no, redirects to help and information webpage */
			window.location.href = "https://www.walktheweb.com/wiki/trouble-viewing-3d-websites/";
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-initLoadSequence=" + ex.message);
	} 
}

WTWJS.prototype.loadSequence = function() {
	/* when babylon engine is supported, this is the load sequence of functions */
	/* each function can be found in order after this function */
	try {
		if (typeof WTW.adminInit == 'function') {
			/* check if loading in admin mode, if so, the function is loaded - sets WTW.adminView variable */
			WTW.adminView = 1;
		}
		/* load the content rating */
		WTW.setContentRating();
		/* sets up the environment with babylon engine */
		WTW.initEnvironment();
		/* see if user is logged in and set the associated settings */
		WTW.loadLoginSettings();
		/* load the 3D Community or default setings to the 3D Scene */
		WTW.loadInitSettings();
		/* get user settings that were saved by cookies - implemented before the load scene function */
		WTW.loadUserSettings();
		/* load rest of scene starting with connecting grids, which trigger loading action zones, molds, and then automations */
		WTW.loadScene();
		/* additional settings that are loaded after the scene is loaded - like initializing multiplayer functions */
		WTW.loadUserSettingsAfterEngine();
		/* load avatar for edit in admin mode only */
		if (WTW.adminView == 1 && avatarid != '') {
			WTW.loadAvatarForEdit();
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-continueLoadSequence=" + ex.message);
	} 
}

WTWJS.prototype.setContentRating = function() {
	/* get the content rating */
	try {
		var zwebtype = '';
		if (communityid != '') {
			zwebtype = 'community';
		} else if (buildingid != '') {
			zwebtype = 'building';
		} else if (thingid != '') {
			zwebtype = 'thing';
		} else if (avatarid != '') {
			zwebtype = 'avatar';
		}
		WTW.getAsyncJSON("/connect/rating.php?webid=" + communityid + buildingid + thingid + avatarid + "&webtype=" + zwebtype, 
			function(zresponse) {
				zresponse = JSON.parse(zresponse);
				if (dGet('wtw_rating') != null) {
					if (zresponse.unratedcontent == '1') {
						dGet('wtw_rating').innerHTML = zresponse.rating + "*";
					} else {
						dGet('wtw_rating').innerHTML = zresponse.rating;
					}
					dGet('wtw_rating').onmouseover = function() {WTW.showToolTip('Content Rating - Click for more');};
					dGet('wtw_rating').onmouseout = function() {WTW.hideToolTip();};
					
					dGet('wtw_contentrating').innerHTML = atob(zresponse.contentrating);
				}
			}
		);
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-setContentRating=" + ex.message);
	} 
}

WTWJS.prototype.initEnvironment = function() {
	/* Initialize canvas, scene, and default settings for scene */
	try {
		/* every user has an instance assigned */
		/* this allows different browsers or computers to have their own instance */
		/* instance is used in the avatar name, helpful in multiplayer mode */
		var zinstanceid = WTW.getCookie("instanceid");
		if (dGet('wtw_tinstanceid').value == '' && zinstanceid != null) {
			if (zinstanceid.length == 24) {
				dGet('wtw_tinstanceid').value = zinstanceid;
			}
		}
		if (dGet('wtw_tinstanceid').value.length != 24) {
			zinstanceid = WTW.getRandomString(24);
			dGet('wtw_tinstanceid').value = zinstanceid;
		}
		WTW.setCookie("instanceid", zinstanceid, 365);
		window.name = zinstanceid;
		/* add mouse over for canvas */
		/* sets WTW.canvasFocus variable to allow avatar movement only when canvas has focus */
		/* also prevents animations an movement to keep going when mouse leaves the window */
		dGet("wtw_renderCanvas").onmouseover = function() {WTW.canvasFocus = 1;};
		dGet("wtw_renderCanvas").onmouseout = function() {WTW.canvasFocus = 0;WTW.keysPressed=[];};
		
		/* set up canvas for babylon */
		canvas = dGet("wtw_renderCanvas");
		/* event listener allows screen shots of the canvas */
		canvas.addEventListener("webglcontextrestored", function (event) {/*initializeResources();*/}, false);
		
		/* initialize babylon game engine */
		engine = new BABYLON.Engine(canvas, true, {deterministicLockstep: false, lockstepMaxSteps: 4, doNotHandleContextLost: WTW.doNotHandleContextLost});
		/* add WalkTheWeb version to the console.log */
		console.log("%c\r\n\r\nWalkTheWeb Open-Source 3D Internet\r\n" + wtw_versiontext + "\r\n", "color:green;font-weight:bold;");
		
		/* optional optimization settings */
		if (WTW.adminView == 1) {
			engine.enableOfflineSupport = WTW.enableOfflineSupportAdmin;
		} else {
			engine.enableOfflineSupport = WTW.enableOfflineSupport;
		}
		
		/* initialize scene */
		scene = new BABYLON.Scene(engine);        
		scene.name = "WalkTheWeb";
		scene.gravity = new BABYLON.Vector3(0, -WTW.init.gravity, 0);
		
		/* initialize cannon physics engine */
		var zphysicsplugin = new BABYLON.CannonJSPlugin();
		scene.enablePhysics(scene.gravity, zphysicsplugin);
		scene.autoClear = false;
		scene.autoClearDepthAndStencil = false;
		scene.collisionsEnabled = true;
		
		/* tested some caching options */
//		scene.useGeometryIdsMap = true;
//		scene.useMaterialMeshMap = true;
//		scene.useClonedMeshMap = true;
		
		/* Add Scene Optimizer */
		var zoptions = new BABYLON.SceneOptimizerOptions(30, 2000);
		zoptions.addOptimization(new BABYLON.ShadowsOptimization(0));
		zoptions.addOptimization(new BABYLON.LensFlaresOptimization(0));
		zoptions.addOptimization(new BABYLON.PostProcessesOptimization(1));
		zoptions.addOptimization(new BABYLON.ParticlesOptimization(1));
		zoptions.addOptimization(new BABYLON.TextureOptimization(2, 256));
		zoptions.addOptimization(new BABYLON.RenderTargetsOptimization(3));
		zoptions.addOptimization(new BABYLON.HardwareScalingOptimization(4, 4));
		var zoptimizer = new BABYLON.SceneOptimizer(scene, zoptions);
		//zoptimizer.start();
		
		scene.ambientColor = new BABYLON.Color3(.3, .3, .3);
		/* scene.clearColor = new BABYLON.Color3(0.1, 0.1, 0.1); //optional light setting  */
		scene.fogEnabled = true;
		scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
		scene.useClonedMeshMap = true;
		if (WTW.adminView == 1) {
			/* set scene to be clearer when in admin mode */
			scene.blockMaterialDirtyMechanism = true;
		}
	
		/* initialize an action manager for the scene */
		scene.actionManager = new BABYLON.ActionManager(scene);
		
		/* set mouse over and mouse out functions for meshes in scene */
		WTW.mouseOver = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, WTW.mouseOverMold);
		WTW.mouseOut = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, WTW.mouseOutMold);
		
		if (WTW.highlightLayer == null) {
			/* initialize highlight layer for scene - used when selecting objects as needed */
			WTW.highlightLayer = new BABYLON.HighlightLayer("highlightlayer", scene);
		}
		
		/* set 2 light sources so that the front and backs of 3D Objects have at least a minimum light */
		/* direct light immitating the sun */
		WTW.sun = new BABYLON.DirectionalLight("sun", new BABYLON.Vector3(-1, -200, -300), scene);
		WTW.sun.position = new BABYLON.Vector3(0, WTW.sunPositionY, 0);
		WTW.sun.intensity = WTW.getSunIntensity(WTW.init.skyInclination, WTW.init.skyAzimuth);
		WTW.sun.shadowMinZ = 1;
		WTW.sun.shadowMaxZ = 4000;
		/* WTW.sun.ambient = new BABYLON.Color3(.4, .4, .4); //optional light setting */
		/* WTW.sun.diffuse = new BABYLON.Color3(.4, .4, .4); //optional light setting */
		WTW.sun.specular = new BABYLON.Color3(.2, .2, .2);
		WTW.sun.groundColor = new BABYLON.Color3(.1, .1, .1);

		/* lesser light for back sides of 3D Objects */
		WTW.backLight = new BABYLON.DirectionalLight("backlight", new BABYLON.Vector3(1, -200, 300), scene);
		WTW.backLight.intensity = WTW.sun.intensity / 1.2;
		
		/* initialize sky sphere - scaling and material settings */
		WTW.sky = BABYLON.MeshBuilder.CreateSphere("sky", {segments: 40, diameter:1, updatable: true, sideOrientation: BABYLON.Mesh.BACKSIDE}, scene);
		WTW.sky.scaling.x = 5000;
		WTW.sky.scaling.y = 4800;
		WTW.sky.scaling.z = 5000;
		WTW.sky.position.x = 0;
		WTW.sky.position.y = -100;
		WTW.sky.position.z = 0;
		WTW.sky.isPickable = false;
		WTW.sky.disableLighting = true;
		var zskyboxmat = new BABYLON.SkyMaterial("skyMaterial", scene);
		zskyboxmat.backFaceCulling = false;
		WTW.sky.material = zskyboxmat;
		window.setTimeout(function() {
			WTW.loadSkyScene(WTW.init.skyInclination, WTW.init.skyLuminance, WTW.init.skyAzimuth, WTW.init.skyRayleigh, WTW.init.skyTurbidity, WTW.init.skyMieDirectionalG, WTW.init.skyMieCoefficient, .25);
		}, 1000);
		
		/* initialize extra ground (extended ground that never ends while the avatar walks) */
		WTW.extraGround = BABYLON.MeshBuilder.CreateGround("communityeground", {width: 5000, height: 5000, subdivisions: 2, updatable: false}, scene);
		WTW.extraGround.position.x = 0;
		WTW.extraGround.position.y = 0;
		WTW.extraGround.position.z = 0;
		WTW.extraGround.isPickable = false;
		WTW.extraGround.checkCollisions = true;
		WTW.extraGround.material = new BABYLON.StandardMaterial("mat-communityeground", scene);
		WTW.extraGround.material.emissiveColor = new BABYLON.Color3(WTW.sun.intensity, WTW.sun.intensity, WTW.sun.intensity);
		WTW.extraGround.material.diffuseTexture = new BABYLON.Texture(WTW.init.groundTexturePath, scene);
		WTW.extraGround.material.diffuseTexture.uScale = 500;
		WTW.extraGround.material.diffuseTexture.vScale = 500;
		/* set physics on ground */
		WTW.extraGround.physicsImpostor = new BABYLON.PhysicsImpostor(WTW.extraGround, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.5 }, scene);
		
		/* start render cycle */
		WTW.startRender();
		
		/* set moveAvatar function to execute on every frame */
		var zcondition1 = new BABYLON.PredicateCondition(scene.actionManager, function () {
			var ztest = true;
			return ztest;
		});
		scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnEveryFrameTrigger, WTW.moveAvatar, zcondition1));

		/* set initial menubar names for community and building */
		if (dGet('wtw_showcommunityname') != null) {
			dGet('wtw_showcommunityname').innerHTML = "HTTP3D Inc.";
		}
		if (dGet('wtw_showbuildingname') != null) {
			dGet('wtw_showbuildingname').innerHTML = "<span style='color:yellow;'>Welcome to WalkTheWeb</span>";
		}
		WTW.showInline('wtw_showcommunityname');
		WTW.showInline('wtw_showbuildingname');
		if (dGet("wtw_tuserid").value == "") {
			if (dGet('wtw_mainmenudisplayname') != null) {
				dGet('wtw_mainmenudisplayname').innerHTML = "<span style='color:yellow;'>Login</span>";
			}
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-initEnvironment=" + ex.message);
	} 
}

WTWJS.prototype.loadLoginSettings = function() {
	/* load login settings */
	try {
		if (WTW.adminView == 1) {
			if (dGet('wtw_tuserid').value == "") {
				/* if not logged in, redirect user to server home page */
				window.location.href = '/';
			}
		}
		/* hook for plugins to be able to intercept the user loading process and add functions to include or replace */
		var zloaddefault = true;
		zloaddefault = WTW.pluginsLoadLoginSettings(zloaddefault);
		if (zloaddefault) {
			/* if no plugin returns false, continue default loading */
			WTW.loadLoginAvatarSelect();
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-loadLoginSettings=" + ex.message);
	} 
}

WTWJS.prototype.loadLoginAvatarSelect = function() {
	/* check login and open login or avatar select window if needed */
	try {
		if (dGet('wtw_tuserid').value == '') {
			/* user not logged in - open login window */
			WTW.openLoginMenu();
			WTW.hide('wtw_menuloggedin');
			WTW.show('wtw_menulogin');
		} else {
			/* logged in, set login values */
			WTW.setLoginValues();
			/* check cookie and load Avatar OR open select Avatar list */
			WTW.hide('wtw_menulogin');
			WTW.hide('wtw_menuloggedin');
			var zuseravatarid = WTW.getCookie("useravatarid");
			if (zuseravatarid != null) {
				var zglobaluseravatarid = '';
				if (WTW.getCookie("globaluseravatarid") != null) {
					zglobaluseravatarid = WTW.getCookie("globaluseravatarid");
				}
				/* if avatar saved, load avatar */
				WTW.getSavedAvatar('myavatar-' + dGet('wtw_tinstanceid').value, zglobaluseravatarid, zuseravatarid, '', false);
			} else {
				/* avatar not saved, open avatar select window */
				WTW.openLocalLogin('Select Avatar',.4,.9);
			}
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-loadLoginAvatarSelect=" + ex.message);
	} 
}

WTWJS.prototype.loadInitSettings = function() {
	/* load the init settings - the default settings for any scene */
	try {
		var zsitename = wtw_defaultsitename;
		if (wtw_domain != null) {
			/* wtw_domain values are passed from the php class function in class_initsession.php */
			wtw_domain = JSON.parse(wtw_domain);
			if (wtw_domain.domaininfo != null) {
				zsitename = wtw_domain.domaininfo.communityname;				
				WTW.buildingName = wtw_domain.buildinginfo.buildingname;
				WTW.communityName = WTW.decode(wtw_domain.communityinfo.communityname);
				if (dGet('wtw_communitysummary') != null) {
					dGet('wtw_communitysummary').innerHTML = WTW.decode(wtw_domain.communityinfo.communityname) + " Community Summary";
				}
				WTW.init.groundTextureID = wtw_domain.domaininfo.textureid;
				WTW.init.groundTexturePath = wtw_domain.domaininfo.texturepath;
				WTW.init.skyTextureID = wtw_domain.domaininfo.skydomeid;
				WTW.init.skyTexturePath = wtw_domain.domaininfo.skydomepath;
				WTW.init.skyInclination = wtw_domain.domaininfo.skyinclination;
				WTW.init.skyLuminance = wtw_domain.domaininfo.skyluminance;
				WTW.init.skyAzimuth = wtw_domain.domaininfo.skyazimuth;
				WTW.init.skyRayleigh = wtw_domain.domaininfo.skyrayleigh;
				WTW.init.skyTurbidity = wtw_domain.domaininfo.skyturbidity;
				WTW.init.skyMieDirectionalG = wtw_domain.domaininfo.skymiedirectionalg;
				WTW.init.skyMieCoefficient = wtw_domain.domaininfo.skymiecoefficient;
				WTW.init.groundPositionY = Number(wtw_domain.startlocation.position.groundpositiony);
				WTW.init.waterPositionY = Number(wtw_domain.startlocation.position.waterpositiony);				
				WTW.init.startPositionX = Number(wtw_domain.startlocation.position.x);
				WTW.init.startPositionY = Number(wtw_domain.startlocation.position.y);
				WTW.init.startPositionZ = Number(wtw_domain.startlocation.position.z);
				WTW.init.startScalingX = Number(wtw_domain.startlocation.scaling.x);
				WTW.init.startScalingY = Number(wtw_domain.startlocation.scaling.y);
				WTW.init.startScalingZ = Number(wtw_domain.startlocation.scaling.z);
				WTW.init.startRotationX = Number(wtw_domain.startlocation.rotation.x);
				WTW.init.startRotationY = Number(wtw_domain.startlocation.rotation.y);
				WTW.init.startRotationZ = Number(wtw_domain.startlocation.rotation.z);
				WTW.editCommunityAccess = wtw_domain.communityinfo.access;
				WTW.editBuildingAccess = wtw_domain.buildinginfo.access;
				if (WTW.isNumeric(wtw_domain.enableemailvalidation)) {
					WTW.enableEmailValidation = Number(wtw_domain.enableemailvalidation);
				}
				try {
					WTW.init.gravity = wtw_domain.domaininfo.gravity;
				} catch (ex) {}
				if (WTW.init.startRotationX > 180) {
					WTW.init.startRotationX -= 360;
				}
				WTW.init.loaded = 1;
			}
		}
		if (communityid == null) {
			communityid = "";
		}
		if (buildingid == null) {
			buildingid = "";
		}
		if (thingid == null) {
			thingid = "";
		}
		if (buildingid != "") {
			communityid = "";
		}
		if (thingid != "") {
			communityid = "";
			buildingid = "";
		}
		/* create the parent most connecting grid box */
		/* everything else parents to this reference point */
		var zparent = new BABYLON.TransformNode(WTW.mainParent);
		zparent.position = new BABYLON.Vector3(0,0,0);
		zparent.rotation = new BABYLON.Vector3(0,0,0);
		zparent.scaling = new BABYLON.Vector3(1,1,1);
		zparent.name = WTW.mainParent;
		zparent.id = WTW.mainParent;
		/* main parent name is WTW.mainParent */
		/* set global main parent mold WTW.mainParentMold */
		WTW.mainParentMold= zparent;
		/* load place holder for where my avatar will be loaded (allows camera to set in place) */
		WTW.loadAvatarPlaceholder();
		/* load primary camera */
		WTW.loadPrimaryCamera();
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-loadInitSettings=" + ex.message);
	} 
}

WTWJS.prototype.loadUserSettings = function() {
	/* get the user settings to be used in the 3d scene */
	try {
		var zcameradistance = WTW.getCookie("cameradistance");
		if (zcameradistance != null) {
			if (WTW.isNumeric(zcameradistance)) {
				WTW.cameraDistance = Number(zcameradistance);
			}
		}
		var zwalkspeed = WTW.getCookie("walkspeed");
		if (zwalkspeed != null) {
			if (WTW.isNumeric(zwalkspeed)) {
				WTW.walkSpeed = Number(zwalkspeed);
			}
		}
		var zwalkanimationspeed = WTW.getCookie("walkanimationspeed");
		if (zwalkanimationspeed != null) {
			if (WTW.isNumeric(zwalkanimationspeed)) {
				WTW.walkAnimationSpeed = Number(zwalkanimationspeed);
			}
		}
		var zturnspeed = WTW.getCookie("turnspeed");
		if (zturnspeed != null) {
			if (WTW.isNumeric(zturnspeed)) {
				WTW.turnSpeed = Number(zturnspeed);
			}
		}
		var zturnanimationspeed = WTW.getCookie("turnanimationspeed");
		if (zturnanimationspeed != null) {
			if (WTW.isNumeric(zturnanimationspeed)) {
				WTW.turnAnimationSpeed = Number(zturnanimationspeed);
			}
		}
		var zshadowsetting = WTW.getCookie("wtw_shadowsetting");
		if (zshadowsetting != null) {
			if (WTW.isNumeric(zshadowsetting)) {
				WTW.shadowSet = Number(zshadowsetting);
			}
		}	
		var zgraphicsetting = WTW.getCookie("graphicsetting");
		if (zgraphicsetting != null) {
			if (WTW.isNumeric(zgraphicsetting)) {
				WTW.graphicSet = Number(zgraphicsetting);
			}
		}		
		var zsoundmute = WTW.getCookie("soundmute");
		if (zsoundmute != null) {
			WTW.toggleSoundMute();
		}
		var zuseravatarid = WTW.getCookie("useravatarid");
		if (zuseravatarid != null) {
			dGet("wtw_tuseravatarid").value = zuseravatarid;
		} else {
			dGet("wtw_tuseravatarid").value = "";
		}

		var zshowcompass = WTW.getCookie("showcompass");

		var zshowarrows = WTW.getCookie("showarrows");
		if (zshowarrows != null) {
			if (zshowarrows == "0") {
				dGet('wtw_arrowsvisibility').innerHTML = "Arrows are Hidden";
				dGet('wtw_arrowsicon').src = "/content/system/images/menuoff.png";
				dGet('wtw_arrowsicon').alt = "Show Arrows";
				dGet('wtw_arrowsicon').title = "Show Arrows";
				WTW.hide('wtw_iwalkarrow');
				WTW.hide('wtw_iwalkarrow2');
			}
		}
		var zshowfps = WTW.getCookie("showfps");
		WTW.showFPS = 0;
		if (zshowfps != null) {
			if (zshowfps == "1") {
				dGet('wtw_fpsvisibility').innerHTML = "Mold Count/FPS are Visible";
				dGet('wtw_fpsicon').src = "/content/system/images/menuon.png";
				dGet('wtw_fpsicon').alt = "Hide Mold Count";
				dGet('wtw_fpsicon').title = "Hide Mold Count";
				WTW.show('wtw_showmeshfps');
				WTW.showFPS = 1;
			}
		}
		if (dGet('wtw_tcameradistance') != null) {
			dGet('wtw_tcameradistance').value = WTW.cameraDistance;
		}
		if (dGet('wtw_twalkanimationspeed') != null) {
			dGet('wtw_twalkanimationspeed').value = WTW.walkAnimationSpeed;
		}
		if (dGet('wtw_twalkspeed') != null) {
			dGet('wtw_twalkspeed').value = WTW.walkSpeed;
		}
		if (dGet('wtw_tturnanimationspeed') != null) {
			dGet('wtw_tturnanimationspeed').value = WTW.turnAnimationSpeed;
		}
		if (dGet('wtw_tturnspeed') != null) {
			dGet('wtw_tturnspeed').value = WTW.turnSpeed;
		}
		if (dGet('wtw_tshadowsetting') != null) {
			dGet('wtw_tshadowsetting').value = WTW.shadowSet;
			WTW.setCookie("wtw_shadowsetting",WTW.shadowSet,365);
		}
		if (dGet('wtw_tgraphicsetting') != null) {
			dGet('wtw_tgraphicsetting').value = WTW.graphicSet;
			WTW.setCookie("graphicsetting",WTW.graphicSet,365);
		}
		switch (WTW.shadowSet) {
			case 0:
                if (WTW.gpuSetting == 'low') {
                    dGet('wtw_shadowhelptitle').innerHTML = "Shadows (None - Low Resolution)<br /><b>This is your recommended setting.<b/>";
                }
                else {
                    dGet('wtw_shadowhelptitle').innerHTML = "Shadows (None - Low Resolution)";
                }
				break;
			case 1:
                if (WTW.gpuSetting == 'medium') {
                    dGet('wtw_shadowhelptitle').innerHTML = "Shadows (Some - Medium Resolution)<br /><b>This is your recommended setting.<b/>";
                }
                else {
                    dGet('wtw_shadowhelptitle').innerHTML = "Shadows (Some - Medium Resolution)";
                }
				break;
			case 2:
                dGet('wtw_shadowhelptitle').innerHTML = "Shadows (Most - High Resolution)";
				break;
			case 3:
                if (WTW.gpuSetting == 'high') {
                    dGet('wtw_shadowhelptitle').innerHTML = "Shadows (All - Ultimate Resolution)<br /><b>This is your recommended setting.<b/>";
                }
                else {
                    dGet('wtw_shadowhelptitle').innerHTML = "Shadows (All - Ultimate Resolution)";
                }
				break;
		}
		switch (WTW.graphicSet) {
			case 0:
				dGet('wtw_graphichelptitle').innerHTML = "Graphics (Low Resolution)";
				break;
			case 1:
				dGet('wtw_graphichelptitle').innerHTML = "Graphics (Optimum Balance)";
				break;
			case 2:
				dGet('wtw_graphichelptitle').innerHTML = "Graphics (High Resolution)";
				break;
		}
		WTW.pluginsLoadUserSettings();
	} catch (ex) { 
		WTW.log("core-scripts-prime-wtw_core.js-loadUserSettings=" + ex.message);
	}
}

WTWJS.prototype.loadScene = async function() {
	/* if a community, fetch the community scene settings */
	try {
		if (communityid != 0) {
			WTW.getAsyncJSON("/connect/community.php?communityid=" + communityid, 
				function(zresponse) {
					WTW.loadCommunity(JSON.parse(zresponse));
				}
			);
		} else {
			/* if not a community, load the scene using the default settings */
			WTW.loadCommunity(null);
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-loadScene=" + ex.message);
	} 
}

WTWJS.prototype.loadUserSettingsAfterEngine = function() {
	/* load any settings that are set after the scene is created */
	try {
		var zgpusetting = WTW.getCookie("gpusetting");
		if (zgpusetting != null) {
			WTW.gpuSetting = zgpusetting;
			if (WTW.gpuSetting != "high" && WTW.gpuSetting != "medium" && WTW.gpuSetting != "low") {
				WTW.gpuSetting = "low";
			}
		} else {
			WTW.gpuSetting = WTW.getGPU();
		}
		WTW.setCookie("gpusetting", WTW.gpuSetting, 30);
		/* allow animations to start before full scene loads */
		scene.resetLastAnimationTimeFrame();
		window.setTimeout(function() {
			WTW.isInitCycle = 0;
			WTW.pluginsLoadUserSettingsAfterEngine();
		}, 5000);
	} catch (ex) { 
		WTW.log("core-scripts-prime-wtw_core.js-loadUserSettingsAfterEngine=" + ex.message);
	}
}


/* the following functions are triggered for further loading of specific objects */

WTWJS.prototype.loadCommunity = function(zaddcommunities) {
	/* load the 3D Community Scene based on the fetched community settings */
	/* Settings include sky, extended ground, water levels, and community name */
	try {
		/* set menu bar text based on loaded web object */
		if (zaddcommunities != null) {
			if (zaddcommunities.communities != undefined) {
				WTW.communities = zaddcommunities.communities;
				if (WTW.communities[0] != null) {
					WTW.communityName = WTW.communities[0].communityinfo.communityname;
					WTW.editCommunityAccess = WTW.communities[0].communityinfo.access;
				}
			}
			if (WTW.communityName == "Walk the Web" || WTW.communityName == "WalkTheWeb") {
				dGet('wtw_showcommunityname').innerHTML = "WalkTheWeb";
				dGet('wtw_showcommunityname').style.cursor = 'default';
			} else {
				dGet('wtw_showcommunityname').innerHTML = WTW.decode(WTW.communityName);
				dGet('wtw_showcommunityname').style.cursor = 'pointer';
			}
		} else {
			if (window.location.href.indexOf('/building/') > -1 || window.location.href.indexOf('/buildings/') > -1) {
				dGet('wtw_showcommunityname').innerHTML = 'View Building';
				dGet('wtw_showcommunityname').style.cursor = 'default';
			} else if (window.location.href.indexOf('/thing/') > -1 || window.location.href.indexOf('/things/') > -1) {
				dGet('wtw_showcommunityname').innerHTML = 'View Thing';
				dGet('wtw_showcommunityname').style.cursor = 'default';
			}
		}
		var zskydomeid = "";
		var zskydomepath = "";
		var zgroundtextureid = WTW.init.groundTextureID;
		var zgroundtexturepath = WTW.init.groundTexturePath;
		var zeguscale = 500;
		var zegvscale = 500;
		var zgroundpositiony = 0;
		var zwaterpositiony = -1;
		var zloadedsettings = false;
		/* only a 3D Community has environment settings (sky, ground, water level), building and things use a default environment */
		if (WTW.communities != null) {
			for (var i=0; i < WTW.communities.length; i++) {
				if (WTW.communities[i] != null) {
					if (WTW.communities[i].communityinfo.communityid == communityid) {
						if (WTW.communities[i].graphics.sky.id != null) {
							zskydomeid = WTW.communities[i].graphics.sky.id;
						}
						if (WTW.communities[i].graphics.sky.path != null) {
							zskydomepath = WTW.communities[i].graphics.sky.path;
						}
						if (WTW.communities[i].graphics.texture.id != null) {
							zgroundtextureid = WTW.communities[i].graphics.texture.id;
						}
						if (WTW.communities[i].graphics.texture.path != null) {
							zgroundtexturepath = WTW.communities[i].graphics.texture.path;
						}
						if (WTW.communities[i].ground.position.y != null) {
							zgroundpositiony = Number(WTW.communities[i].ground.position.y);
						}
						if (WTW.communities[i].water.position.y != null) {
							zwaterpositiony = Number(WTW.communities[i].water.position.y);
						}
						WTW.init.gravity = Number(WTW.communities[i].gravity);
						zloadedsettings = true;
					}
				}
			} 
		}
		if (zloadedsettings == false) {
			/* set defaults if not loaded */
			zskydomeid = WTW.init.skyTextureID;
			zskydomepath = WTW.init.skyTexturePath;
			zgroundtextureid = WTW.init.groundTextureID;
			zgroundtexturepath = WTW.init.groundTexturePath;
			zgroundpositiony = WTW.init.groundPositionY;
			zwaterpositiony = WTW.init.waterPositionY;
		}
		/* set sky scene */
		WTW.loadSkyScene(WTW.init.skyInclination, WTW.init.skyLuminance, WTW.init.skyAzimuth, WTW.init.skyRayleigh, WTW.init.skyTurbidity, WTW.init.skyMieDirectionalG, WTW.init.skyMieCoefficient, .25);
		/* set sun intensity */
		WTW.sun.intensity = WTW.getSunIntensity(WTW.init.skyInclination, WTW.init.skyAzimuth);
		WTW.backLight.intensity = WTW.sun.intensity / 1.2;
		
		/* extended ground */
		/* set ground emissive color based on scene lighting - day or night degrees of hue */
		WTW.extraGround.material.emissiveColor = new BABYLON.Color3(WTW.sun.intensity, WTW.sun.intensity, WTW.sun.intensity);
		if (zgroundtexturepath != "" && zgroundtexturepath != '/content/system/images/dirt-512x512.jpg') {
			WTW.extraGround.material.diffuseTexture = new BABYLON.Texture(zgroundtexturepath, scene);
		}
		WTW.extraGround.material.diffuseTexture.uScale = zeguscale;
		WTW.extraGround.material.diffuseTexture.vScale = zegvscale;
		WTW.extraGround.material.specularColor = new BABYLON.Color3(.1,.1,.1);
		/* refresh-reload ground texture */
		var zgroundcovering = WTW.extraGround.material;
		WTW.extraGround.material.dispose();
		WTW.extraGround.material = zgroundcovering;
		/* if ground is set below 0 (zero) y value, add water to the scene at 0 (zero) y value - otherwise no main water plane is loaded */
		if ((zgroundpositiony < zwaterpositiony) || (WTW.adminView == 1 && communityid != "")) {
			WTW.initLoadUpload(zgroundtextureid, zgroundtextureid, 7);
			/* create water */
			WTW.water = BABYLON.MeshBuilder.CreatePlane("communitywater", {width:5000, height:5000, updatable: true, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
			WTW.water.rotation.x = WTW.getRadians(90);
			WTW.waterMat = new BABYLON.WaterMaterial("communitywatermat", scene, new BABYLON.Vector2(512, 512));
			WTW.waterMat.backFaceCulling = true;
			WTW.waterMat.bumpTexture = new BABYLON.Texture("/content/system/images/waterbump.png", scene);
			WTW.waterMat.windForce = -10;
			WTW.waterMat.waveHeight = .2;
			WTW.waterMat.windDirection = new BABYLON.Vector2(1, 1);
			WTW.waterMat.waterColor = new BABYLON.Color3(0.1, 0.2, 0.5); /* water color blended with the refraction (near) */
			WTW.waterMat.waterColor2 = new BABYLON.Color3(0.3, 0.4, 0.8); /* water color blended with the reflection (far) */
			WTW.waterMat.colorBlendFactor = 0.2;
			WTW.waterMat.bumpHeight = 0.6;
			WTW.waterMat.waveLength = 0.02;	
			WTW.waterMat.alpha = .9;
			WTW.water.isPickable = false;
			WTW.water.checkCollisions = false;
			WTW.water.material = WTW.waterMat;
			WTW.water.position.y = zwaterpositiony;
			WTW.waterMat.addToRenderList(WTW.sky);
			WTW.waterMat.addToRenderList(WTW.extraGround);
//			WTW.water.physicsImpostor = new BABYLON.PhysicsImpostor(WTW.water, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.5 }, scene);
		}
		
		if (WTW.sky.position.x != WTW.init.startPositionX || WTW.sky.position.y != WTW.init.startPositionY - 100 || WTW.sky.position.z != WTW.init.startPositionZ) {
			/* set initial sky position */
			WTW.sky.position.x = WTW.init.startPositionX;
			WTW.sky.position.y = WTW.init.startPositionY - 100;
			WTW.sky.position.z = WTW.init.startPositionZ;
		}
		if (zgroundpositiony != 0) {
			/* set ground position for 3D Community */
			WTW.extraGround.position.y = zgroundpositiony;
		}
		/* add shadows based on Graphics capability or settings if set */
		if (WTW.shadows == null) {
			var zshadowsetting = WTW.getCookie("wtw_shadowsetting");
            if (zshadowsetting == null || isNaN(zshadowsetting))  {
                if (WTW.gpuSetting == 'medium') {
					WTW.shadowSet = 1;
                }
                else if (WTW.gpuSetting == 'high') {
					WTW.shadowSet = 3;
                } else {
					WTW.shadowSet = 3;
                }
            }
			/* set menu for WTW.shadowSet setting */
            WTW.setShadowSettings();
		}
		/* get and fetch connecting grids to start loading the buildings and things in the scene */
		WTW.getConnectingGrids();
		if (WTW.adminView == 1) {
			/* if admin mode, then execute the load admin settings function after 2 seconds */
			/* base mold count is used to set the number of molds befre you build in a scene (used to calculate the number of molds for a web object) */
			WTW.baseMoldCount = scene.meshes.length;
			if (typeof WTW.adminLoadAfterScreen == 'function') {
				window.setTimeout( function() { WTW.adminLoadAfterScreen();},2000 );
			}
		}
		/* preload the default texture for new objects */
		WTW.isUploadReadyOrAdd('t1qlqxd6pzubzzzy');
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-loadCommunity=" + ex.message);
	} 
}

WTWJS.prototype.getConnectingGrids = async function() {
	/* fetch the connecting grids */
	/* connecting grids are pin drops in the 3D Scene that define the position, rotation, and scaling for each web object added to the 3D Scene */
	try {
		var zparentwebid = '';
		/* default the parent web id to a 3D Community - but check if the parent most web object is a community, building, or thing (only one value is set per loaded 3D Scene) */
		if (communityid != "") {
			zparentwebid = communityid;
		} else if (buildingid != "") {
			zparentwebid = buildingid;
		} else if (thingid != "") {
			zparentwebid = thingid;
		}
		/* parent web id will be set if there is a scene to load */
		if (zparentwebid != '') {
			/* the current position (or initial start position) is used to load the closest connecting grids first */
			var zpositionx = WTW.init.startPositionX;
			var zpositiony = WTW.init.startPositionY;
			var zpositionz = WTW.init.startPositionZ;
			if (WTW.myAvatar != null) {
				zpositionx = WTW.myAvatar.position.x;
				zpositiony = WTW.myAvatar.position.y;
				zpositionz = WTW.myAvatar.position.z;
			}
			/* fetch all connecting grids that are in the primary web object loaded */
			/* example, in a 3D Community, get any 3D Buildings, 3D Things, and 3D Things in the 3D Buildings in the 3D Community */
			WTW.getAsyncJSON("/connect/connectinggrids.php?parentwebid=" + zparentwebid + "&startpositionx=" + zpositionx + "&startpositiony=" + zpositiony + "&startpositionz=" + zpositionz + "&userid=" + dGet('wtw_tuserid').value, 
				function(zresponse) {
					WTW.loadConnectingGrids(JSON.parse(zresponse));
				}
			);
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-getConnectingGrids=" + ex.message);
	} 
}

WTWJS.prototype.loadConnectingGrids = function(zaddconnectinggrids) {
	/* load the fetched connecting grid definitions to the connecting grids array */
	/* note, names that end in 'id' identify the definition stored in the database */
	/* note, names that end in 'ind' identify the instance */
	/* allows multiple ids in the same scene - picture 4 chairs around a table - each an instance in their own position, rotation, and scaling */
	try {
		var zparentconnectinggridind = -1;
		var zparentconnectinggridid = "";
		if (zaddconnectinggrids.webitems != undefined) {
			for (var i = 0; i < zaddconnectinggrids.webitems.length; i++) {
				if (zaddconnectinggrids.webitems[i] != null) {
					var zcommunityid = "";
					var zbuildingid = "";
					var zthingid = "";
					/* load connecting grid settings */
					var zconnectinggridind = WTW.getNextCount(WTW.connectingGrids);
					WTW.connectingGrids[zconnectinggridind] = zaddconnectinggrids.webitems[i];
					WTW.connectingGrids[zconnectinggridind].connectinggridind = zconnectinggridind;
					switch (WTW.connectingGrids[zconnectinggridind].childwebtype) {
						case "community":
							zcommunityid = WTW.connectingGrids[zconnectinggridind].childwebid;
							break;
						case "building":
							zbuildingid = WTW.connectingGrids[zconnectinggridind].childwebid;
							break;
						case "thing":
							zthingid = WTW.connectingGrids[zconnectinggridind].childwebid;
							break;
					}
					/* load level defines primary web object (highest level) to load or if it is placed under another web object (like 3D Building in a 3D Community) */
					if (WTW.connectingGrids[zconnectinggridind].loadlevel == "1") {
						/* primary level item loaded in 3D Scene */
						var zparentname = "";
						if (WTW.connectingGrids[zconnectinggridind].parentwebid == "") {
							/* web object has no parent (is the parent of all the rest) */
							zparentconnectinggridind = zconnectinggridind;
							zparentconnectinggridid = WTW.connectingGrids[zconnectinggridind].connectinggridid;
							WTW.connectingGrids[zconnectinggridind].moldname = "connectinggrids-" + zconnectinggridind + "-" + zparentconnectinggridid + "--";
							WTW.connectingGrids[zconnectinggridind].shown = "1";
							WTW.connectingGrids[zconnectinggridind].parentname = zparentname;
							WTW.connectingGrids[zconnectinggridind].parentconnectinggridind = -1;
							WTW.connectingGrids[zconnectinggridind].parentconnectinggridid = "";
							WTW.connectingGrids[zconnectinggridind].status = 2;
							WTW.addMoldToQueue(WTW.connectingGrids[zconnectinggridind].moldname, WTW.connectingGrids[zconnectinggridind], zparentname, "hidden",null);
							dGet('wtw_tconnectinggridname').value = WTW.connectingGrids[zconnectinggridind].moldname;
							dGet('wtw_tconnectinggridind').value = zconnectinggridind;
							dGet('wtw_tconnectinggridid').value = zparentconnectinggridid;
						} else if (zparentconnectinggridind != -1) {
							/* web object has a parent - set the parent */
							WTW.connectingGrids[zconnectinggridind].moldname = "connectinggrids-" + zconnectinggridind + "-" + WTW.connectingGrids[zconnectinggridind].connectinggridid + "-" + zparentconnectinggridind + "-" + zparentconnectinggridid;
							zparentname = "connectinggrids-" + zparentconnectinggridind + "-" + zparentconnectinggridid + "--";
							WTW.mainParent = zparentname;
							WTW.connectingGrids[zconnectinggridind].shown = "0";
							WTW.connectingGrids[zconnectinggridind].parentname = zparentname;
							WTW.connectingGrids[zconnectinggridind].parentconnectinggridind = zparentconnectinggridind;
							WTW.connectingGrids[zconnectinggridind].parentconnectinggridid = zparentconnectinggridid;
						}
						/* fetch action zones for the connecting grid item - triggers further loading of web object */
						if (WTW.connectingGrids[zconnectinggridind].altloadactionzoneid == "") {
							WTW.getJSON("/connect/actionzonesbywebid.php?communityid=" + zcommunityid + "&buildingid=" + zbuildingid + "&thingid=" + zthingid + "&parentname=" + WTW.connectingGrids[zconnectinggridind].moldname + "&connectinggridid=" + WTW.connectingGrids[zconnectinggridind].connectinggridid + "&connectinggridind=" + zconnectinggridind, 
								function(zresponse) {
									WTW.loadActionZones(JSON.parse(zresponse));
								}
							);
						}
					} else {
						/* secondary level item loaded in 3D Scene */
						var zsubparentconnectinggridid = WTW.connectingGrids[zconnectinggridind].parentconnectinggridid;
						var zsubparentconnectinggridind = WTW.getConnectingGridInd(zsubparentconnectinggridid);
						WTW.connectingGrids[zconnectinggridind].moldname = "connectinggrids-" + zconnectinggridind + "-" + WTW.connectingGrids[zconnectinggridind].connectinggridid + "-" + zsubparentconnectinggridind + "-" + zsubparentconnectinggridid;
						zparentname = "connectinggrids-" + zsubparentconnectinggridind + "-" + zsubparentconnectinggridid + "-" + zparentconnectinggridind + "-" + zparentconnectinggridid;
						WTW.connectingGrids[zconnectinggridind].shown = "0";
						WTW.connectingGrids[zconnectinggridind].parentname = zparentname;
						WTW.connectingGrids[zconnectinggridind].parentconnectinggridind = zsubparentconnectinggridind;
						WTW.connectingGrids[zconnectinggridind].parentconnectinggridid = zsubparentconnectinggridid;
						/* fetch action zones for the connecting grid item - triggers further loading of web object */
						if (WTW.connectingGrids[zconnectinggridind].altloadactionzoneid == "") {
							WTW.getJSON("/connect/actionzonesbywebid.php?communityid=" + zcommunityid + "&buildingid=" + zbuildingid + "&thingid=" + zthingid + "&parentname=" + WTW.connectingGrids[zconnectinggridind].moldname + "&connectinggridid=" + WTW.connectingGrids[zconnectinggridind].connectinggridid + "&connectinggridind=" + zconnectinggridind, 
								function(zresponse) {
									WTW.loadActionZones(JSON.parse(zresponse));
								}
							);
						}
					}
					/* hook that allows plugins to execute code at this point in the loading connecting grids process */
					WTW.pluginsLoadConnectingGrids(zconnectinggridind, zcommunityid, zbuildingid, zthingid);
				}
			}
		}
		var zcondition2 = new BABYLON.PredicateCondition(scene.actionManager, function () {
			var ztest = false;
			if (WTW.loadMoldQueue.length > 0 && WTW.checkLoadQueue == 0) {
				ztest = true;
			}
			return ztest;
		});
		scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnEveryFrameTrigger, WTW.processMoldQueue, zcondition2));
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-loadConnectingGrids=" + ex.message);
	} 
}

WTWJS.prototype.getActionZones = async function(zconnectinggridind) {
	/* fetch action zones for a connecting grid */
	/* action zones are areas or events that trigger functions to execute */
	/* Load Zone is the main action zone that fetches molds (mesh definitions) from web servers when your avatar enters the Load Zone (often a rectangle cube) */
	try {
		if (WTW.connectingGrids[zconnectinggridind] != null) {
			var zcommunityid = "";
			var zbuildingid = "";
			var zthingid = "";
			var zaltloadactionzoneid = "";
			/* load the settings from the connecting grid */
			/* webtype identifies 3D Community, Building, or Thing */
			/* webid is the communityid, buildingid, or thingid for the web object */
			/* parent vs child items determine the relationship and placement in the 3D Scene */
			switch (WTW.connectingGrids[zconnectinggridind].childwebtype) {
				case "community":
					zcommunityid = WTW.connectingGrids[zconnectinggridind].childwebid;
					break;
				case "building":
					zbuildingid = WTW.connectingGrids[zconnectinggridind].childwebid;
					break;
				case "thing":
					zthingid = WTW.connectingGrids[zconnectinggridind].childwebid;
					break;
			}
			if (WTW.connectingGrids[zconnectinggridind] != null) {
				if (WTW.connectingGrids[zconnectinggridind].altloadactionzoneid != undefined) {
					zaltloadactionzoneid = WTW.connectingGrids[zconnectinggridind].altloadactionzoneid;
				}
			}
			/* fetch the action zones from the internet for a given web object */
			if (zaltloadactionzoneid == "") {
				WTW.getAsyncJSON("/connect/actionzonesbywebid.php?communityid=" + zcommunityid + "&buildingid=" + zbuildingid + "&thingid=" + zthingid + "&parentname=" + WTW.connectingGrids[zconnectinggridind].moldname + "&connectinggridid=" + WTW.connectingGrids[zconnectinggridind].connectinggridid + "&connectinggridind=" + zconnectinggridind, 
					function(zresponse) {
						WTW.loadActionZones(JSON.parse(zresponse));
					}
				);
			}
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-getActionZones=" + ex.message);
	} 
}

WTWJS.prototype.loadActionZones = function(zaddactionzones) {
	/* load the fetched action zone definitions to the action zones array */
	try {
		if (zaddactionzones.actionzones != undefined) {
			for (var i = 0; i < zaddactionzones.actionzones.length; i++) {
				/* only add the action zone definition if it is not already in the array (avoid deplicates) */
				if (WTW.isItemInArray(WTW.actionZones, zaddactionzones.actionzones[i].actionzoneid, zaddactionzones.actionzones[i].connectinggridind, -1, "actionzones") == false) {
					var zactionzoneind = WTW.getNextCount(WTW.actionZones);
					var zaltconnectinggridid = "";
					var zaltconnectinggridind = -1;
					WTW.actionZones[zactionzoneind] = zaddactionzones.actionzones[i];
					WTW.actionZones[zactionzoneind].actionzoneind = zactionzoneind;
					/* set initial status - user not in load zone, door closed, mirror reflections not loaded, etc... */
					WTW.actionZones[zactionzoneind].status = 0;
					if (WTW.actionZones[zactionzoneind].altconnectinggridid != "" && WTW.actionZones[zactionzoneind].altconnectinggridid != undefined) {
						zaltconnectinggridid = WTW.actionZones[zactionzoneind].altconnectinggridid;
						zaltconnectinggridind = WTW.getConnectingGridInd(zaltconnectinggridid);
					}
					/* set the connecting grid name */
					var zconnectinggridname = WTW.connectingGrids[Number(WTW.actionZones[zactionzoneind].connectinggridind)].moldname;
					/* if there is an alternate connecting grid set the new name */
					if (zaltconnectinggridind > -1 && WTW.connectingGrids[zaltconnectinggridind] != undefined) {
						var zparentname = WTW.connectingGrids[zaltconnectinggridind].moldname;
						if (zconnectinggridname.indexOf("-") > -1) {
							var znamepart = zconnectinggridname.split('-');
							if (znamepart[2] != null) {
								zparentname = "connectinggrids-" + zaltconnectinggridind + "-" + zaltconnectinggridid + "-" + znamepart[1] + "-" + znamepart[2];
							}
						}
						WTW.actionZones[zactionzoneind].parentname = zparentname;
					} else {
						WTW.actionZones[zactionzoneind].parentname = zconnectinggridname;
					}
					/* set the name of the action zone including instance (identify mutiple instances of the same web object in the scene) */
					var zactionzonename = "actionzone-" + zactionzoneind + "-" + WTW.actionZones[zactionzoneind].actionzoneid + "-" + WTW.actionZones[zactionzoneind].connectinggridind + "-" + WTW.actionZones[zactionzoneind].connectinggridid + "-" + WTW.actionZones[zactionzoneind].actionzonetype;
					WTW.actionZones[zactionzoneind].moldname = zactionzonename;
					/* test for alternate connecting grid (example - attach to action zone) */
					WTW.attachConnectingGridToActionZone(zactionzoneind);
				}
			}
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-loadActionZones=" + ex.message);
	} 
}

WTWJS.prototype.attachConnectingGridToActionZone = function(zactionzoneind) {
	/* attach action zones are used to connect a complete web object to another web object with an action zone (like a rotation axle) in between */
	/* example - a ferris wheel cart added to a wheel using a rotation action zone (axle) connector (keep the cart upright while the wheel rotates) */
	try {
		/* the conecting grid would be the ferris wheel cart */
		for (var i=0;i < WTW.connectingGrids.length; i++) {
			if (WTW.connectingGrids[i] != null) {
				var zattachactionzoneid = "";
				var zattachactionzoneind = -1;
				/* the connecting grid settings define if there is an attached action zone */
				if (WTW.connectingGrids[i].attachactionzoneid != undefined) {
					zattachactionzoneid = WTW.connectingGrids[i].attachactionzoneid;
				}
				if (zattachactionzoneid != "") {
					zattachactionzoneind = WTW.getActionZoneInd(zattachactionzoneid, WTW.connectingGrids[i].parentconnectinggridind);
					WTW.connectingGrids[i].attachactionzoneind = zattachactionzoneind;
					if (zactionzoneind == zattachactionzoneind) {
						var zparentname = WTW.getParentActionZoneName(zactionzoneind, WTW.connectingGrids[i].parentconnectinggridind);
						if (zparentname != "") {
							/* parent the web object to the action zone */
							WTW.connectingGrids[i].parentname = zparentname;
							if (WTW.actionZones[zactionzoneind] != null) {
								var zposx = Number(WTW.actionZones[zactionzoneind].position.x);
								var zposy = Number(WTW.actionZones[zactionzoneind].position.y);
								var zposz = Number(WTW.actionZones[zactionzoneind].position.z);
								/* recalculate the connecting grid position based ont he action zone location */
								WTW.connectingGrids[i].position.x = Number(WTW.connectingGrids[i].position.x) - zposx;
								WTW.connectingGrids[i].position.y = Number(WTW.connectingGrids[i].position.y) - zposy;
								WTW.connectingGrids[i].position.z = Number(WTW.connectingGrids[i].position.z) - zposz;
							}
						}
					}
				}
			}
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-attachConnectingGridToActionZone=" + ex.message);
	} 
}

WTWJS.prototype.getMoldsByWebID = async function(zactionzoneind) {
	/* when your avatar enters a Load action zone, the Mold definitions are fetched fro the internet then added to the local arrays to be added to the scene on demand */
	/* webid is the communityid, buildingid, or thingid for the web object */
	try {
		var zcommunityid = "";
		var zbuildingid = "";
		var zthingid = "";
		var zactionzoneid = "";
		var zconnectinggridind = -1;
		var zconnectinggridid = "";
		var zaltloadactionzoneid = "";
		/* get values from load zone in action zone array */
		if (WTW.actionZones[zactionzoneind] != null) {
			WTW.actionZones[zactionzoneind].status = 3;
			zactionzoneid = WTW.actionZones[zactionzoneind].actionzoneid;
			if (WTW.actionZones[zactionzoneind].thinginfo.thingid != undefined) {
				zthingid = WTW.actionZones[zactionzoneind].thinginfo.thingid;
			}
			if (WTW.actionZones[zactionzoneind].buildinginfo.buildingid != undefined && zthingid == '') {
				zbuildingid = WTW.actionZones[zactionzoneind].buildinginfo.buildingid;
			}
			if (WTW.actionZones[zactionzoneind].communityinfo.communityid != undefined && zthingid == '' && zbuildingid == '') {
				zcommunityid = WTW.actionZones[zactionzoneind].communityinfo.communityid;
			}
			zconnectinggridind = WTW.actionZones[zactionzoneind].connectinggridind;
			zconnectinggridid = WTW.actionZones[zactionzoneind].connectinggridid;
			var zparentname = "";
			if (WTW.connectingGrids[zconnectinggridind] != null) {
				zparentname = WTW.connectingGrids[zconnectinggridind].moldname
				if (WTW.connectingGrids[zconnectinggridind].altloadactionzoneid != undefined) {
					zaltloadactionzoneid = WTW.connectingGrids[zconnectinggridind].altloadactionzoneid;
				}
			}
			if (zparentname == "") {
				/* updated 3.3.2 was missing assignment */
				zparentname = WTW.actionZones[zactionzoneind].parentname;
			}
		}
		/* fetch action zones to be loaded by the load zone */
		if (zaltloadactionzoneid == "") {
			WTW.getAsyncJSON("/connect/actionzonesbywebid.php?communityid=" + zcommunityid + "&buildingid=" + zbuildingid + "&thingid=" + zthingid + "&parentname=" + zparentname + "&connectinggridid=" + zconnectinggridid + "&connectinggridind=" + zconnectinggridind, 
				function(zresponse) {
					WTW.loadActionZones(JSON.parse(zresponse));
				}
			);
		}
		/* graphics settings can be used to limit the texture file sizes loaded (try to help computers with less resources available) */
		var zgpusetting = WTW.gpuSetting;
		if (zgpusetting == "medium") {
			/* currently there is no individual medium support */
			zgpusetting = "high";
		}
		/* graphics level can force higher or lower graphic resolution */
		/* auto - uses lesser graphics unless directly set in settings to high level per mold texture */
		var zgraphiclevel = '-1'; // auto
		switch (WTW.graphicSet) {
			case 0: /* low */
				/* force 512x512 on all textures */
				zgraphiclevel = '0';
				break;
			case 2: /* high */
				/* force original size graphics on all textures */
				zgraphiclevel = '1';
				break;
		}
		if (WTW.adminView == 1) {
			zgraphiclevel = '-1';
			WTW.show('wtw_graphichelpadmin');
		}
		/* fetch molds (mesh definitions) to be loaded by the load zone */
		WTW.getAsyncJSON("/connect/moldsbywebid.php?webcommunityid=" + communityid + "&webbuildingid=" + buildingid + "&communityid=" + zcommunityid + "&buildingid=" + zbuildingid + "&thingid=" + zthingid + "&parentactionzoneind=" + zactionzoneind + "&actionzoneid=" + zactionzoneid + "&parentname=" + WTW.actionZones[zactionzoneind].parentname + "&connectinggridid=" + zconnectinggridid + "&connectinggridind=" + zconnectinggridind + "&userid=" + dGet("wtw_tuserid").value + "&graphiclevel=" + zgraphiclevel, 
			function(zresponse) {
				WTW.loadMolds(JSON.parse(zresponse));
			}
		);
		/* fetch automations (automated sequences) to be loaded by the load zone (temporarily disabled - until they are added to the admin interface) */
/*		WTW.getAsyncJSON("/connect/automationsbywebid.php?communityid=" + zcommunityid + "&buildingid=" + zbuildingid + "&thingid=" + zthingid + "&parentname=" + parentname + "&connectinggridid=" + zconnectinggridid + "&connectinggridind=" + zconnectinggridind, 
			function(zresponse) {
				WTW.loadAutomations(JSON.parse(zresponse));
			}
		); */
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-getMoldsByWebID=" + ex.message);
	}
}

WTWJS.prototype.loadMolds = function(zaddmolds) {
	/* loads molds to the proper array to be loaded on demand (WTW.setShownMolds() function loads the meshes to the scene) */
	/* meshes vs molds - meshes are loaded to the scene, molds are the definitions that will create the mesh on demand */
	/* materials vs coverings - materials are loaded on the meshes in the scene, coverings are the definitions that create the materials to be added the mesh on demand */
	/* community, buildings, and things use identical structures but have different tables in the database to keep them from getting too big */
	/* 3D Community is the 3D Scene, 3D Building is a structure that can be in many 3D Scenes, and 3D Things can be in 3D Communities or Buildings */
	try {
		var zconnectinggridid = "";
		var zconnectinggridind = -1;
		var zparentactionzoneind = -1;
		if (zaddmolds != null) {
			if (zaddmolds.molds != null) {
				/* process the array of molds to be added to the mold arrays (ready to be loaded to the scene) */
				for (var i = 0; i < zaddmolds.molds.length; i++) {
					if (zaddmolds.molds[i] != null) {
						var zcommunityid = "";
						var zbuildingid = "";
						var zthingid = "";
						var zaltconnectinggridid = "";
						var zaltconnectinggridind = -1;
						var ztestactionzoneid = "";
						var zloadactionzoneind = -1;
						var zinloadactionzone = "0";
						/* check and read values if they exist */
						if (zaddmolds.molds[i].altconnectinggridid != "" && zaddmolds.molds[i].altconnectinggridid != undefined) {
							zaltconnectinggridid = zaddmolds.molds[i].altconnectinggridid;
							zaltconnectinggridind = WTW.getConnectingGridInd(zaltconnectinggridid);
							zaddmolds.molds[i].altconnectinggridind = zaltconnectinggridind;
						}
						if (zconnectinggridind == -1) {
							zconnectinggridid = zaddmolds.molds[i].connectinggridid;
							zconnectinggridind = WTW.getConnectingGridInd(zconnectinggridid);
						}
						if (zaddmolds.molds[i].loadactionzoneind != undefined) {
							zloadactionzoneind = zaddmolds.molds[i].loadactionzoneind;
						}
						if (zloadactionzoneind == -1) {
							zloadactionzoneind = WTW.getActionZoneInd(zaddmolds.molds[i].loadactionzoneid, zconnectinggridind);
							zaddmolds.molds[i].loadactionzoneind = zloadactionzoneind;
						}
						if (zparentactionzoneind == -1) {
							zparentactionzoneind = zaddmolds.molds[i].parentactionzoneind;
						}
						if (zloadactionzoneind == zparentactionzoneind) {
							zinloadactionzone = "1";
							WTW.actionZones[zloadactionzoneind].inloadactionzone = zinloadactionzone;
						} else if (WTW.actionZones[zloadactionzoneind] != null) {
							if (WTW.actionZones[zloadactionzoneind].inloadactionzone != undefined) {
								zinloadactionzone = WTW.actionZones[zloadactionzoneind].inloadactionzone;
							} else {
								var zloadactionzone = WTW.getMeshOrNodeByID(WTW.actionZones[zloadactionzoneind].moldname);
								if (zloadactionzone != null) {
									if (WTW.myAvatar.intersectsMesh(zloadactionzone, false)) { // (precise false)
										zinloadactionzone = "1";
									}
								}
							}
							WTW.actionZones[zloadactionzoneind].inloadactionzone = zinloadactionzone;
						}
						/* check if community and add if yes */
						if (zaddmolds.molds[i].communityinfo.communityid != undefined) {
							zcommunityid = zaddmolds.molds[i].communityinfo.communityid;
							if (zcommunityid != "" && zbuildingid == "" && zthingid == "") {
								if (WTW.isItemInArray(WTW.communitiesMolds, zaddmolds.molds[i].moldid, zconnectinggridind, zaltconnectinggridind, "communitymolds") == false) {
									var zmoldind = WTW.getNextCount(WTW.communitiesMolds);
									WTW.communitiesMolds[zmoldind] = zaddmolds.molds[i];
									WTW.communitiesMolds[zmoldind].moldind = zmoldind;
									WTW.communitiesMolds[zmoldind].connectinggridind = zconnectinggridind;
									WTW.communitiesMolds[zmoldind].connectinggridid = zconnectinggridid;
									var zconnectinggridname = WTW.connectingGrids[Number(zconnectinggridind)].moldname;
									if (zaltconnectinggridind > -1 && WTW.connectingGrids[zaltconnectinggridind] != undefined) {
										var zparentname = WTW.connectingGrids[zaltconnectinggridind].moldname;
										if (zconnectinggridname.indexOf("-") > -1) {
											var znamepart = zconnectinggridname.split('-');
											if (znamepart[2] != null) {
												zparentname = "connectinggrids-" + zaltconnectinggridind + "-" + zaltconnectinggridid + "-" + znamepart[1] + "-" + znamepart[2];
											}
										}
										WTW.communitiesMolds[zmoldind].parentname = zparentname;
									} else {
										WTW.communitiesMolds[zmoldind].parentname = zconnectinggridname;
									}
									if (zaltconnectinggridind > -1) {
										WTW.communitiesMolds[zmoldind].connectinggridind = zaltconnectinggridind;
										WTW.communitiesMolds[zmoldind].connectinggridid = zaltconnectinggridid;
										WTW.communitiesMolds[zmoldind].moldname = "communitymolds-" + zmoldind + "-" + WTW.communitiesMolds[zmoldind].moldid + "-" + zaltconnectinggridind + "-" + zaltconnectinggridid + "-" + WTW.communitiesMolds[zmoldind].shape;
									} else {
										WTW.communitiesMolds[zmoldind].moldname = "communitymolds-" + zmoldind + "-" + WTW.communitiesMolds[zmoldind].moldid + "-" + zconnectinggridind + "-" + zconnectinggridid + "-" + WTW.communitiesMolds[zmoldind].shape;
									}
									WTW.communitiesMolds[zmoldind].inloadactionzone = zinloadactionzone;
									if (ztestactionzoneid != WTW.communitiesMolds[zmoldind].loadactionzoneid) {
										ztestactionzoneid = WTW.communitiesMolds[zmoldind].loadactionzoneid;
									}
								}			
							}								
						}
						/* check if building and add if yes */
						if (zaddmolds.molds[i].buildinginfo.buildingid != undefined) {
							zbuildingid = zaddmolds.molds[i].buildinginfo.buildingid;
							if (zbuildingid != "" && zthingid == "") {
								if (WTW.isItemInArray(WTW.buildingMolds, zaddmolds.molds[i].moldid, zconnectinggridind, zaltconnectinggridind, "buildingmolds") == false) {
									var zmoldind = WTW.getNextCount(WTW.buildingMolds);
									WTW.buildingMolds[zmoldind] = zaddmolds.molds[i];
									WTW.buildingMolds[zmoldind].moldind = zmoldind;
									WTW.buildingMolds[zmoldind].connectinggridind = zconnectinggridind;
									WTW.buildingMolds[zmoldind].connectinggridid = zconnectinggridid;
									var zconnectinggridname = WTW.connectingGrids[Number(zconnectinggridind)].moldname;
									if (zaltconnectinggridind > -1 && WTW.connectingGrids[zaltconnectinggridind] != undefined) {
										var zparentname = WTW.connectingGrids[zaltconnectinggridind].moldname;
										if (zconnectinggridname.indexOf("-") > -1) {
											var znamepart = zconnectinggridname.split('-');
											if (znamepart[2] != null) {
												zparentname = "connectinggrids-" + zaltconnectinggridind + "-" + zaltconnectinggridid + "-" + znamepart[1] + "-" + znamepart[2];
											}
										}
										WTW.buildingMolds[zmoldind].parentname = zparentname;
									} else {
										WTW.buildingMolds[zmoldind].parentname = zconnectinggridname;
									}
									if (zaltconnectinggridind > -1) {
										WTW.buildingMolds[zmoldind].connectinggridind = zaltconnectinggridind;
										WTW.buildingMolds[zmoldind].connectinggridid = zaltconnectinggridid;
										WTW.buildingMolds[zmoldind].moldname = "buildingmolds-" + zmoldind + "-" + WTW.buildingMolds[zmoldind].moldid + "-" + zaltconnectinggridind + "-" + zaltconnectinggridid + "-" + WTW.buildingMolds[zmoldind].shape;
									} else {
										WTW.buildingMolds[zmoldind].moldname = "buildingmolds-" + zmoldind + "-" + WTW.buildingMolds[zmoldind].moldid + "-" + zconnectinggridind + "-" + zconnectinggridid + "-" + WTW.buildingMolds[zmoldind].shape;
									}
									WTW.buildingMolds[zmoldind].inloadactionzone = zinloadactionzone;
									if (ztestactionzoneid != WTW.buildingMolds[zmoldind].loadactionzoneid) {
										ztestactionzoneid = WTW.buildingMolds[zmoldind].loadactionzoneid;
									}
								}						
							}
						} 
						/* check if thing and add if yes */
						if (zaddmolds.molds[i].thinginfo.thingid != undefined) {
							zthingid = zaddmolds.molds[i].thinginfo.thingid;
							if (zthingid != "") {
								if (WTW.isItemInArray(WTW.thingMolds, zaddmolds.molds[i].moldid, zconnectinggridind, zaltconnectinggridind, "thingmolds") == false) {
									var zmoldind = WTW.getNextCount(WTW.thingMolds);
									WTW.thingMolds[zmoldind] = zaddmolds.molds[i];
									WTW.thingMolds[zmoldind].moldind = zmoldind;
									WTW.thingMolds[zmoldind].connectinggridind = zconnectinggridind;
									WTW.thingMolds[zmoldind].connectinggridid = zconnectinggridid;
									var zconnectinggridname = WTW.connectingGrids[Number(zconnectinggridind)].moldname;
									if (zaltconnectinggridind > -1 && WTW.connectingGrids[zaltconnectinggridind] != undefined) {
										var zparentname = WTW.connectingGrids[zaltconnectinggridind].moldname;
										if (zconnectinggridname.indexOf("-") > -1) {
											var znamepart = zconnectinggridname.split('-');
											if (znamepart[2] != null) {
												zparentname = "connectinggrids-" + zaltconnectinggridind + "-" + zaltconnectinggridid + "-" + znamepart[1] + "-" + znamepart[2];
											}
										}
										WTW.thingMolds[zmoldind].parentname = zparentname;
									} else {
										WTW.thingMolds[zmoldind].parentname = zconnectinggridname;
									}
									if (zaltconnectinggridind > -1) {
										WTW.thingMolds[zmoldind].connectinggridind = zaltconnectinggridind;
										WTW.thingMolds[zmoldind].connectinggridid = zaltconnectinggridid;
										WTW.thingMolds[zmoldind].moldname = "thingmolds-" + zmoldind + "-" + WTW.thingMolds[zmoldind].moldid + "-" + zaltconnectinggridind + "-" + zaltconnectinggridid + "-" + WTW.thingMolds[zmoldind].shape;
									} else {
										WTW.thingMolds[zmoldind].moldname = "thingmolds-" + zmoldind + "-" + WTW.thingMolds[zmoldind].moldid + "-" + zconnectinggridind + "-" + zconnectinggridid + "-" + WTW.thingMolds[zmoldind].shape;
									}
									WTW.thingMolds[zmoldind].inloadactionzone = zinloadactionzone;
									if (ztestactionzoneid != WTW.thingMolds[zmoldind].loadactionzoneid) {
										ztestactionzoneid = WTW.thingMolds[zmoldind].loadactionzoneid;
									}
								}					
							}								
						} 
					}
				}
			}		
		} 
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-loadMolds=" + ex.message);
	}
}

WTWJS.prototype.loadAutomations = function(zaddautomations) {
	/* load automations (automated sequences of scripted events) */
	try {
		if (zaddautomations != null) {
			if (zaddautomations.automations != null) {
				var zautomationcount = 0;
				for (var i = 0; i < zaddautomations.automations.length; i++) {
					if (zaddautomations.automations[i] != null) {
						/* gets all steps of an automation */
						if (WTW.isStepInAutomations(zaddautomations.automations[i].step.automationstepid) == false, zaddautomations.automations[i].connectinggridind) {
							var zautomationind = WTW.getNextCount(WTW.automations);
							WTW.automations[zautomationind] = zaddautomations.automations[i];
							WTW.automations[zautomationind].automationind = zautomationind;
							WTW.automations[zautomationind].moldid = WTW.automations[zautomationind].automationid;
							WTW.automations[zautomationind].step.automationstepind = zautomationind;
							WTW.automations[zautomationind].moldname = "automation-" + zautomationind + "-" + WTW.automations[zautomationind].step.automationstepid + "-" + WTW.automations[zautomationind].connectinggridind + "-" + WTW.automations[zautomationind].connectinggridid;
							zautomationcount += 1;
						}
					}
				}
				if (zautomationcount > 0) {
					/* currently disabled the start of automations */
					/* starts after a 5 second delay */
					/* window.setTimeout(function() { WTW.initAutomations(); }, 5000); */
				}
			}
		}	
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-loadAutomations=" + ex.message);
	}
}

WTWJS.prototype.unloadMoldsByWebID = function(zactionzoneind) {
	/* webid is the communityid, buildingid, or thingid for the web object */
	/* this function allows you to remove webid's by its identifying action zone (the action zone is part of the web object) */
	try {
		if (WTW.actionZones[zactionzoneind] != null) {
			/* only one of the 3 ids will have a value per web object */
			var zcommunityid = WTW.actionZones[zactionzoneind].communityinfo.communityid;
			var zbuildingid = WTW.actionZones[zactionzoneind].buildinginfo.buildingid;
			var zthingid = WTW.actionZones[zactionzoneind].thinginfo.thingid;
			/* identifies the connecting grid that places the web object in the scene */
			var zconnectinggridind = WTW.actionZones[zactionzoneind].connectinggridind;
			for (var i=0; i < WTW.actionZones.length; i++) {
				if (WTW.actionZones[i] != null) {
					/* find all loaded action zones under this connecting grid by checking the action zones array */
					if (WTW.actionZones[i].connectinggridind  == zconnectinggridind && WTW.actionZones[i].communityinfo.communityid == zcommunityid && WTW.actionZones[i].buildinginfo.buildingid == zbuildingid && WTW.actionZones[i].thinginfo.thingid == zthingid) {
						var zactionzoneid = WTW.actionZones[i].actionzoneid;
						/* check each mold group (community, building, and thing) to unload molds */
						for (var j=0; j < WTW.communitiesMolds.length; j++) {
							if (WTW.communitiesMolds[j] != null) {
								if (WTW.communitiesMolds[j].loadactionzoneid == zactionzoneid && WTW.communitiesMolds[j].connectinggridind == zconnectinggridind) {
									/* turn off sound and lights before they are removed */
									WTW.disposeSoundAndLights(WTW.communitiesMolds[j].moldname);
									/* delete mold using the queue */
									WTW.addDisposeMoldToQueue(WTW.communitiesMolds[j].moldname, false);
									WTW.communitiesMolds[j] = null;
								}
							}
						}
						for (var j=0; j < WTW.buildingMolds.length; j++) {
							if (WTW.buildingMolds[j] != null) {
								if (WTW.buildingMolds[j].loadactionzoneid == zactionzoneid && WTW.buildingMolds[j].connectinggridind == zconnectinggridind) {
									/* turn off sound and lights before they are removed */
									WTW.disposeSoundAndLights(WTW.buildingMolds[j].moldname);
									/* delete mold using the queue */
									WTW.addDisposeMoldToQueue(WTW.buildingMolds[j].moldname, false);
									WTW.buildingMolds[j] = null;
								}
							}
						}
						for (var j=0; j < WTW.thingMolds.length; j++) {
							if (WTW.thingMolds[j] != null) {
								if (WTW.thingMolds[j].loadactionzoneid == zactionzoneid && WTW.thingMolds[j].connectinggridind == zconnectinggridind) {
									/* turn off sound and lights before they are removed */
									WTW.disposeSoundAndLights(WTW.thingMolds[j].moldname);
									/* delete mold using the queue */
									WTW.addDisposeMoldToQueue(WTW.thingMolds[j].moldname, false);
									WTW.thingMolds[j] = null;
								}
							}
						}
						/* stop and clear any automations (automated sequences) */
						for (var j=0; j < WTW.automations.length; j++) {
							if (WTW.automations[j] != null) {
								if (WTW.automations[j].loadactionzoneid == zactionzoneid && WTW.automations[j].connectinggridind == zconnectinggridind) {
									if (WTW.automations[j].step.timer != null) {
										window.clearInterval(WTW.automations[j].step.timer);
										WTW.automations[j].step.timer = null;
									}
									WTW.automations[j] = null;
								}
							}
						}
					}
				}
			}
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-unloadMoldsByWebID=" + ex.message);
	}
}


/* babylon render cycle */

WTWJS.prototype.startRender = function() {
	/* scene render loop */
	try {
		if (engine != null && engine != undefined) {
			if (WTW.pause == 0) {
				/* if not paused, then stop engine before restart */
				engine.stopRenderLoop();
			}
			WTW.pause = 0;
			engine.runRenderLoop(function () {
				/* defined render loop */
				scene.render();
				try {
					/* plugin hook so plugins can add code to the render loop */
					WTW.pluginsRenderloop();
					/* the following function in the render loop is for driving a vehicle*/
					WTW.vehicleRenderLoop();
					/* WTW.animationRatio = scene.getAnimationRatio(); not currently in use */
					/* set variable for frames per second - used to keep multiplayer in sync for users with different frame rates */
					WTW.fps = (Math.round(engine.getFps() * 100) / 100).toFixed(2);
					if (WTW.isInitCycle == 0 && WTW.myAvatar != null) {
						/* plugin hook so plugins can add code to the render loop only after the initial loading is complete */
						WTW.pluginsRenderloopAfterInit();
					}
					if (WTW.myAvatar != null) {
						/* move the compass rose if the compass is visible */
						var zcompassrose = scene.getMeshByID('compass-0-rose');
						var zcompassclosest = scene.getMeshByID('compass-0-closest');
						if (zcompassrose != null) {
							var zangle = -WTW.myAvatar.rotation.y;
							if (zcompassrose.rotation.y < zangle) {
								zcompassrose.rotation.y += (zangle - zcompassrose.rotation.y)/15;
							} else {
								zcompassrose.rotation.y -= (zcompassrose.rotation.y - zangle)/15;
							}
							if (zcompassclosest != null) {
								/* set the closest building arrow pointer if not already in building */
								if (WTW.closestAngle != null && WTW.closestDistance > 80) {
									zcompassclosest.rotation.y = WTW.getRadians(-WTW.closestAngle);
									zcompassclosest.isVisible = true;
								} else {
									zcompassclosest.isVisible = false;
								}
							}
						}

						/* if my avatar is in the scene, have the extended ground and sky sphere stay centered over my avatar */
						/* compute world matrix guarantees world coordinates are calculated even if the parent is changed */
						WTW.myAvatar.computeWorldMatrix(true);
						var zabspos = WTW.myAvatar.getAbsolutePosition();
						
						/* set sky sphere position */
						WTW.sky.position.x = zabspos.x;
						WTW.sky.position.y = zabspos.y - 100;
						WTW.sky.position.z = zabspos.z;			
						/* set extended ground position */
						WTW.extraGround.position.x = zabspos.x;
						WTW.extraGround.position.z = zabspos.z;
						/* moving the texture on the extended ground makes it appear that the avatar is moveing over it */
						WTW.extraGround.material.diffuseTexture.uOffset = (zabspos.x)/10;
						WTW.extraGround.material.diffuseTexture.vOffset = (zabspos.z)/10;
						if (WTW.water != null) {
							/* keep the extended water position at the avatar like the extended ground */
							WTW.water.position.x = zabspos.x;
							WTW.water.position.z = zabspos.z;
						}
						if (WTW.water != null && zabspos.y < -16) {
							/* sky sphere size when avatar is near the ground */
							WTW.sky.scaling.x = 2500;
							WTW.sky.scaling.y = 2500;
							WTW.sky.scaling.z = 2500;
							scene.fogDensity = 0.01;
							scene.fogColor = new BABYLON.Color3(0.0, 0.3, 0.4);
						} else {
							/* dynamically change hte sky sphere size as my avatar rises higher off ground */
							var zskysize = 1000 + (zabspos.y * 2);
							if (zskysize < 3500) {
								zskysize = 3500;
							}
							scene.fogDensity = 0.0005;
							scene.fogColor = new BABYLON.Color3(0.4, 0.5, 0.6);
							/* transparent fog allows the meshes to go to transparent in the distance */
							WTW.setMeshTransparentFog(WTW.sky,30);
							
							WTW.sky.scaling.x = zskysize;
							WTW.sky.scaling.y = zskysize-200;
							WTW.sky.scaling.z = zskysize;
						}
					} 
					if (WTW.checkShownMolds == 0) {
						/* set shown molds will show the molds where the load zones identified are status 2 (avatar is in zone) */
						WTW.setShownMolds();
					}
					/* sets the closest building on the menu bar */
					WTW.setClosestBuilding();
					if (WTW.checkZones || WTW.isInitCycle == 1) { /* || (WTW.myAvatar.ridealong != undefined && WTW.myAvatar.ridealong != null) */
						/* checks action zones when conditions change that require a check */
						WTW.checkActionZones();
					}
					if (WTW.showFPS == 1) {
						/* if gridlines are shown, it includes them in mesh count - this reverses that count */
						var zgridlines = 0;
						if (WTW.lineY != null) {
							zgridlines = 30;
						}
						var zmeshcount = 0;
						/* calculate mesh count without base design molds included */
						if (scene.meshes.length - WTW.baseMoldCount - zgridlines > 0) {
							zmeshcount = scene.meshes.length - WTW.baseMoldCount - zgridlines;
						}
						/* display count if flag is on */
						dGet('wtw_showmeshfps').innerHTML = "Mold Count = " + (zmeshcount) + "<br />Frames Per Second=" + WTW.fps;
					}
				} catch (ex) {} 
			});
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-startRender=" + ex.message);
	}
}

WTWJS.prototype.stopRender = function() {
	/* stop the render loop (usually triggered by activity timer timeout) */
	try {
		if (engine != null && engine != undefined) {
			WTW.pause = 1;
			engine.stopRenderLoop();
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_core.js-stopRender=" + ex.message);
	}
}

