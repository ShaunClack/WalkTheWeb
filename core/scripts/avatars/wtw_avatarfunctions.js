/* All code is Copyright 2013-2021 Aaron Scott Dishno Ed.D., HTTP3D Inc. - WalkTheWeb, and the contributors */
/* "3D Browsing" is a USPTO Patented (Serial # 9,940,404) and Worldwide PCT Patented Technology by Aaron Scott Dishno Ed.D. and HTTP3D Inc. */
/* Read the included GNU Ver 3.0 license file for details and additional release information. */

/* These functions provide many of the common functions for browse and admin modes */
/* avatar functions are used to control various animations or interactions betwen avatars and molds */

WTWJS.prototype.moveAvatar = function(zavatar, zkeyspressed) {
	/* provides animation and movement to avatar based on keys pressed (keyboard, mouse, and touch) */
	try {
		if (zavatar == undefined) {
			zavatar = WTW.myAvatar;
		}
		if (zkeyspressed == undefined) {
			zkeyspressed = WTW.keysPressed;
		}
		if (WTW.animationSet == undefined || WTW.animationSet == null) {
			WTW.animationSet = '';
		}
		if (zavatar != null && WTW.cameraFocus == 1 && WTW.placeHolder == 0) {
			zavatar.rotation.x = 0;
			zavatar.rotation.z = 0;
			var zincrement = .2;
			var zactivecount = 0;
			var zmoveevents = [];
			if (zavatar.WTW != null) {
				if (zavatar.WTW.animations != null) {
					if (zavatar.WTW.animations.running != null) {
						WTW.resetActiveAnimations(zavatar);
						if (zkeyspressed != null) {
							for (var k=0;k < zkeyspressed.length;k++) {
								if (zkeyspressed[k] != null) {
									let zanim = '';
									if (WTW.isNumeric(zkeyspressed[k])) {
										switch (zkeyspressed[k]) {
											case 32: //space jump
												var zonwalk = false;
												var zonwalkbackwards = false;
												var zonrun = false;
												var zonrunbackwards = false;
												if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onwalk', WTW.animationSet)] != undefined) {
													if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onwalk', WTW.animationSet)].active == 1) {
														zonwalk = true;
													}
												}
												if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onwalkbackwards', WTW.animationSet)] != undefined) {
													if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onwalkbackwards', WTW.animationSet)].active == 1) {
														zonwalkbackwards = true;
													}
												}
												if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onrun', WTW.animationSet)] != undefined) {
													if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onrun', WTW.animationSet)].active == 1) {
														zonrun = true;
													}
												}
												if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onrunbackwards', WTW.animationSet)] != undefined) {
													if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onrunbackwards', WTW.animationSet)].active == 1) {
														zonrunbackwards = true;
													}
												}
												if (zonwalk) {
													zanim = WTW.checkAnimationSet(zavatar, 'onjumpwalk', WTW.animationSet);
													if (zavatar.WTW.animations.running[zanim] != undefined) {
														zavatar.WTW.animations.running[zanim].active = 1;
													}
													zanim = '';
													zactivecount += 1;
												} else if (zonwalkbackwards) {
													zanim = WTW.checkAnimationSet(zavatar, 'onjumpwalkbackwards', WTW.animationSet);
													if (zavatar.WTW.animations.running[zanim] != undefined) {
														zavatar.WTW.animations.running[zanim].active = 1;
													}
													zanim = '';
													zactivecount += 1;
												} else if (zonrun) {
													zanim = WTW.checkAnimationSet(zavatar, 'onjumprun', WTW.animationSet);
													if (zavatar.WTW.animations.running[zanim] != undefined) {
														zavatar.WTW.animations.running[zanim].active = 1;
													}
													zanim = '';
													zactivecount += 1;
												} else if (zonrunbackwards) {
													zanim = WTW.checkAnimationSet(zavatar, 'onjumprunbackwards', WTW.animationSet);
													if (zavatar.WTW.animations.running[zanim] != undefined) {
														zavatar.WTW.animations.running[zanim].active = 1;
													}
													zanim = '';
													zactivecount += 1;
												} else {
													zanim = WTW.checkAnimationSet(zavatar, 'onjump', WTW.animationSet);
												}
												break;
											case 38: //arrow w forward
											case 87: //w forward
												var zonjump = false;
												if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onjump', WTW.animationSet)] != undefined) {
													if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onjump', WTW.animationSet)].active == 1) {
														zonjump = true;
													}
												}
												if (zonjump) {
													if (WTW.shiftKey) {
														zanim = WTW.checkAnimationSet(zavatar, 'onjumprun', WTW.animationSet);
													} else {
														zanim = WTW.checkAnimationSet(zavatar, 'onjumpwalk', WTW.animationSet);
													}
													if (zavatar.WTW.animations.running[zanim] != undefined) {
														zavatar.WTW.animations.running[zanim].active = 1;
													}
													zanim = '';
													zactivecount += 1;
												} else {
													if (WTW.shiftKey) {
														zanim = WTW.checkAnimationSet(zavatar, 'onrun', WTW.animationSet);
													} else {
														zanim = WTW.checkAnimationSet(zavatar, 'onwalk', WTW.animationSet);
													}
												}
												break;
											case 1038: //arrow w forward
												zanim = WTW.checkAnimationSet(zavatar, 'onwalk', WTW.animationSet);
												break;
											case 2038: //arrow w forward
												zanim = WTW.checkAnimationSet(zavatar, 'onrun', WTW.animationSet);
												break;
											case 40: //arrow s backwards
											case 83: //s backwards
												var zonjump = false;
												if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onjump', WTW.animationSet)] != undefined) {
													if (zavatar.WTW.animations.running[WTW.checkAnimationSet(zavatar, 'onjump', WTW.animationSet)].active == 1) {
														zonjump = true;
													}
												}
												if (zonjump) {
													if (WTW.shiftKey) {
														zanim = WTW.checkAnimationSet(zavatar, 'onjumprunbackwards', WTW.animationSet);
													} else {
														zanim = WTW.checkAnimationSet(zavatar, 'onjumpwalkbackwards', WTW.animationSet);
													}
													if (zavatar.WTW.animations.running[zanim] != undefined) {
														zavatar.WTW.animations.running[zanim].active = 1;
													}
													zanim = '';
													zactivecount += 1;
												} else {
													if (WTW.shiftKey) {
														zanim = WTW.checkAnimationSet(zavatar, 'onrunbackwards', WTW.animationSet);
													} else {
														zanim = WTW.checkAnimationSet(zavatar, 'onwalkbackwards', WTW.animationSet);
													}
												}
												break;
											case 1040: //arrow s backwards
												zanim = WTW.checkAnimationSet(zavatar, 'onwalkbackwards', WTW.animationSet);
												break;
											case 2040: //arrow s backwards
												zanim = WTW.checkAnimationSet(zavatar, 'onrunbackwards', WTW.animationSet);
												break;
											case 37: //arrow q rotate left
											case 81: //q rotate left
												if (WTW.shiftKey) {
													zanim = WTW.checkAnimationSet(zavatar, 'onrunturnleft', WTW.animationSet);
												} else {
													zanim = WTW.checkAnimationSet(zavatar, 'onturnleft', WTW.animationSet);
												}
												break;
											case 1037: //mouse rotate left
												zanim = WTW.checkAnimationSet(zavatar, 'onturnleft', WTW.animationSet);
												break;
											case 2037: //mouse rotate left
												zanim = WTW.checkAnimationSet(zavatar, 'onrunturnleft', WTW.animationSet);
												break;
											case 39: //arrow e rotate right
											case 69: //e rotate right
												if (WTW.shiftKey) {
													zanim = WTW.checkAnimationSet(zavatar, 'onrunturnright', WTW.animationSet);
												} else {
													zanim = WTW.checkAnimationSet(zavatar, 'onturnright', WTW.animationSet);
												}
												break;
											case 1039: //mouse rotate right
												zanim = WTW.checkAnimationSet(zavatar, 'onturnright', WTW.animationSet);
												break;
											case 2039: //mouse rotate right
												zanim = WTW.checkAnimationSet(zavatar, 'onrunturnright', WTW.animationSet);
												break;
											case 65: //a strafe left
											case 1065: //mouse strafe left
												if (WTW.shiftKey) {
													zanim = WTW.checkAnimationSet(zavatar, 'onrunstrafeleft', WTW.animationSet);
												} else {
													zanim = WTW.checkAnimationSet(zavatar, 'onstrafeleft', WTW.animationSet);
												}
												break;
											case 2065: //mouse strafe left
												zanim = WTW.checkAnimationSet(zavatar, 'onrunstrafeleft', WTW.animationSet);
												break;
											case 68: //d strafe right
											case 1068: //mouse strafe right
												if (WTW.shiftKey) {
													zanim = WTW.checkAnimationSet(zavatar, 'onrunstraferight', WTW.animationSet);
												} else {
													zanim = WTW.checkAnimationSet(zavatar, 'onstraferight', WTW.animationSet);
												}
												break;
											case 2068: //mouse strafe right
												zanim = WTW.checkAnimationSet(zavatar, 'onrunstraferight', WTW.animationSet);
												break;
											case 82: //r rotate up
											case 1082: //mouse rotate up
												zanim = WTW.checkAnimationSet(zavatar, 'onrotateup', WTW.animationSet);
												break;
											case 70: //f rotate down
											case 1070: //mouse rotate down
												zanim = WTW.checkAnimationSet(zavatar, 'onrotatedown', WTW.animationSet);
												break;
											case 0: //pause animation
												zanim = WTW.checkAnimationSet(zavatar, 'onpause', WTW.animationSet);
												break;
										} 
										if (zanim != '') {
											if (zavatar.WTW.animations.running[zanim] != undefined) {
												zavatar.WTW.animations.running[zanim].active = 1;
											}
											zanim = '';
											zactivecount += 1;
										}
									} else {
										zanim = WTW.checkAnimationSet(zavatar, zkeyspressed[k], WTW.animationSet);
										if (zavatar.WTW.animations.running[zanim] != undefined) {
											zavatar.WTW.animations.running[zanim].active = 1;
										}
										zactivecount += 1;
									}
								}
							}
						}
						if (WTW.animationSet == "vehicle-boat") {
							WTW.moveAvatarVehicle(zavatar, zkeyspressed);
						} else {
							let zanimset = WTW.checkAnimationSet(zavatar, 'onwait', WTW.animationSet);
							if (zkeyspressed.length == 0) {
								if (zavatar.WTW.animations.running[zanimset] != undefined) {
									zavatar.WTW.animations.running[zanimset].active = 1;
								}
								zactivecount += 1;
							}
							if (zactivecount == 0) {
								zactivecount = 1;
							}
							if (WTW.fps < 5) {
								WTW.fps = 5;
							}
							/* set the weight for each animation running */
							var zweight = 0;
							if (zavatar.WTW.animations.running['onjumpwalk'] != undefined) {
								if (zavatar.WTW.animations.running['onjumpwalk'].active == 1) {
									zavatar.WTW.animations.running['onjumpwalk'].weight = 1;
									// clear other weights
									zavatar.WTW.animations.running[zanimset].weight = 0;
								}
							}
							if (zavatar.WTW.animations.running['onjumpwalkbackwards'] != undefined) {
								if (zavatar.WTW.animations.running['onjumpwalkbackwards'].active == 1) {
									zavatar.WTW.animations.running['onjumpwalkbackwards'].weight = 1;
									// clear other weights
									zavatar.WTW.animations.running[zanimset].weight = 0;
								}
							}
							if (zavatar.WTW.animations.running['onjumprun'] != undefined) {
								if (zavatar.WTW.animations.running['onjumprun'].active == 1) {
									zavatar.WTW.animations.running['onjumprun'].weight = 1;
									// clear other weights
									zavatar.WTW.animations.running[zanimset].weight = 0;
								}
							}
							if (zavatar.WTW.animations.running['onjumprunbackwards'] != undefined) {
								if (zavatar.WTW.animations.running['onjumprunbackwards'].active == 1) {
									zavatar.WTW.animations.running['onjumprunbackwards'].weight = 1;
									// clear other weights
									zavatar.WTW.animations.running[zanimset].weight = 0;
								}
							}
							for(var zevent in zavatar.WTW.animations.running) {
								if (zavatar.WTW.animations.running[zevent] != undefined) {
									if (zavatar.WTW.animations.running[zevent].active == 0) {
										if (zavatar.WTW.animations.running[zevent].weight > zincrement) {
											if (zevent != 'onwait') {
												zavatar.WTW.animations.running[zevent].weight -= zincrement;
											}
										} else {
											zavatar.WTW.animations.running[zevent].weight = 0;
										}
									} else {
										if (zavatar.WTW.animations.running[zevent].weight < (1/zactivecount)) {
											if (zavatar.WTW.animations.running[zevent].weight + zincrement > (1/zactivecount)) {
												zavatar.WTW.animations.running[zevent].weight = (1/zactivecount);
											} else {
												zavatar.WTW.animations.running[zevent].weight += zincrement;
											}
										} else {
											if (zavatar.WTW.animations.running[zevent].weight - zincrement < (1/zactivecount)) {
												zavatar.WTW.animations.running[zevent].weight = (1/zactivecount);
											} else {
												zavatar.WTW.animations.running[zevent].weight -= zincrement;
											}
										}
									}
									zmoveevents[zmoveevents.length] = {
										'event':zevent,
										'weight':zavatar.WTW.animations.running[zevent].weight,
										'active':zavatar.WTW.animations.running[zevent].active
									}
									zweight += zavatar.WTW.animations.running[zevent].weight;

									if (zavatar.WTW.animations.running[zevent].weight > 0) {
										/* check for jump animation */
										var zavatarscale = WTW.getMeshOrNodeByID(zavatar.name + "-scale");
										var zavatarcenter = WTW.getMeshOrNodeByID(zavatar.name + "-center");
										var zavatarcamera = WTW.getMeshOrNodeByID(zavatar.name + "-camera");
										if (zavatarscale != null && zavatarcenter != null && zavatarcamera != null) {
											if (zevent.indexOf('jump') > -1) {
												/* this next code raises the avatar placeholder and adjusts the avatar scaling, camera, and center mass during a jump animation */
												if (zavatarscale.position.y == 0) {
													zavatar.position.y += 2;
													zavatarscale.position.y -= 2;
													zavatarcenter.position.y -= 2;
													zavatarcamera.position.y -= 2;
												}
											} else if (zavatarscale.position.y != 0) {
													/* return from avatar jump placeholder movement */
													zavatar.position.y -= 2;
													zavatarscale.position.y = 0;
													zavatarcenter.position.y += 2;
													zavatarcamera.position.y += 2;
											}
										}
										
										/* sets movement based on event, weight, move settings, and framerate */
										switch (zevent) {
											case 'onjump':
												break;
											case 'onwait':
												var zstride = WTW.init.gravity * 15 * zavatar.WTW.animations.running[zevent].weight / WTW.fps;
												var zmove = WTW.getMoveDownVector(zavatar.name, -zstride);
												var zavatary = zavatar.position.y;
												zavatar.moveWithCollisions(zmove);
												if (zavatary != zavatar.position.y) {
													WTW.checkZones = true;
												}
												break;
											case 'onrotateup':
												if (WTW.mouseY == WTW.mouseStartY) {
													WTW.cameraYOffset -= 400/WTW.sizeY * WTW.turnSpeed * zavatar.WTW.animations.running[zevent].weight;
												} else if (WTW.isMouseDown == 1) {
													WTW.cameraYOffset += 100/WTW.sizeY * (WTW.mouseY - WTW.mouseStartY) * WTW.turnSpeed * zavatar.WTW.animations.running[zevent].weight;
													WTW.mouseStartY = WTW.mouseY;
												}
												zweight -= zavatar.WTW.animations.running[zevent].weight;
												break;
											case 'onrotatedown':
												if (WTW.mouseY == WTW.mouseStartY) {
													WTW.cameraYOffset += 400/WTW.sizeY * WTW.turnSpeed * zavatar.WTW.animations.running[zevent].weight;
												} else if (WTW.isMouseDown == 1) {
													WTW.cameraYOffset -= 100/WTW.sizeY * (WTW.mouseStartY - WTW.mouseY) * WTW.turnSpeed * zavatar.WTW.animations.running[zevent].weight;
													WTW.mouseStartY = WTW.mouseY;
												}
												zweight -= zavatar.WTW.animations.running[zevent].weight;
												break;
											case 'onwalk':
												var zstride = 15 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, 0, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											case 'onjumpwalk':	
												var zstride = 15 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, 0, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											case 'onjumpwalkbackwards':	
												var zstride = 15 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, 180, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											case 'onrun':
												var zstride = 25 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, 0, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											case 'onjumprun':
												var zstride = 25 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, 0, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											case 'onjumprunbackwards':
												var zstride = 25 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, 180, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											case 'onwalkbackwards':
												var zstride = 10 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, 180, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											case 'onrunbackwards':
												var zstride = 25 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, 180, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											case 'onturnleft':
												zavatar.rotation.y -= WTW.getRadians(70 * zavatar.WTW.animations.running[zevent].weight * WTW.turnSpeed / WTW.fps);
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.turnAnimationSpeed;
												var zstride = WTW.init.gravity * 15 * zavatar.WTW.animations.running[zevent].weight / WTW.fps;
												var zmove = WTW.getMoveDownVector(zavatar.name, -zstride);
												var zavatary = zavatar.position.y;
												zavatar.moveWithCollisions(zmove);
												if (zavatary != zavatar.position.y) {
													WTW.checkZones = true;
												}
												break;
											case 'onrunturnleft':
												zavatar.rotation.y -= WTW.getRadians(120 * zavatar.WTW.animations.running[zevent].weight * WTW.turnSpeed / WTW.fps);
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.turnAnimationSpeed * 1.5;
												var zstride = WTW.init.gravity * 15 * zavatar.WTW.animations.running[zevent].weight / WTW.fps;
												var zmove = WTW.getMoveDownVector(zavatar.name, -zstride);
												var zavatary = zavatar.position.y;
												zavatar.moveWithCollisions(zmove);
												if (zavatary != zavatar.position.y) {
													WTW.checkZones = true;
												}
												break;
											case 'onturnright':
												zavatar.rotation.y += WTW.getRadians(70 * zavatar.WTW.animations.running[zevent].weight * WTW.turnSpeed / WTW.fps);
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.turnAnimationSpeed;
												var zstride = WTW.init.gravity * 15 * zavatar.WTW.animations.running[zevent].weight / WTW.fps;
												var zmove = WTW.getMoveDownVector(zavatar.name, -zstride);
												var zavatary = zavatar.position.y;
												zavatar.moveWithCollisions(zmove);
												if (zavatary != zavatar.position.y) {
													WTW.checkZones = true;
												}
												break;
											case 'onrunturnright':
												zavatar.rotation.y += WTW.getRadians(120 * zavatar.WTW.animations.running[zevent].weight * WTW.turnSpeed / WTW.fps);
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.turnAnimationSpeed * 1.5;
												var zstride = WTW.init.gravity * 15 * zavatar.WTW.animations.running[zevent].weight / WTW.fps;
												var zmove = WTW.getMoveDownVector(zavatar.name, -zstride);
												var zavatary = zavatar.position.y;
												zavatar.moveWithCollisions(zmove);
												if (zavatary != zavatar.position.y) {
													WTW.checkZones = true;
												}
												break;
											case 'onstrafeleft':
												var zstride = 4 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, -90, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											case 'onrunstrafeleft':
												var zstride = 8 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, -90, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											case 'onstraferight':
												var zstride = 4 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, 90, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											case 'onrunstraferight':
												var zstride = 8 * zavatar.WTW.animations.running[zevent].weight * WTW.walkSpeed / WTW.fps;
												zavatar.WTW.animations.running[zevent].speedRatio = WTW.walkAnimationSpeed;
												var zmove = WTW.getMoveVector(zavatar.name, 90, zstride, zevent);
												zavatar.moveWithCollisions(zmove);
												WTW.checkZones = true;
												break;
											default:
												zweight = WTW.pluginsSetAvatarMovement(zavatar, zevent, zweight);
												break;
										}
										if (WTW.cameraYOffset < -10) {
											WTW.cameraYOffset = -10;
										}
										if (WTW.cameraYOffset > 20) {
											WTW.cameraYOffset = 20;
										}
										/* sets the camera to properly follow and rotate from the avatar position */
										WTW.setMovingCameras(zavatar);
									}
								}
							}
							if (zavatar.WTW.animations.running[zanimset] != undefined) {
								if (zanimset != 'onwait') {
									zavatar.WTW.animations.running['onwait'].weight = 0;
								}
								/* if the animation settings do not equal 1, add or remove onwait for the difference */
								if (zweight < 1) {
									zavatar.WTW.animations.running[zanimset].weight += 1 - zweight;
								} else {
									zavatar.WTW.animations.running[zanimset].weight -= zweight - 1;
								}
								zmoveevents = WTW.setMovementEventsKey(zmoveevents, zanimset, zavatar.WTW.animations.running[zanimset].weight);
							}
						}
					}
				}
			}
			WTW.pluginsMoveAvatar(zavatar, zmoveevents);
		} else {
			WTW.setMovingCameras(zavatar);
		}
	} catch(ex) {
		WTW.log("core-scripts-avatars-wtw_avatarfunctions.js-moveAvatar=" + ex.message);
	}
}

WTWJS.prototype.pickUpObject = function(zavatarname, zmoldname, zavatarjointname, zoffset) {
	/* pick up object to avatar */
	/* zavatarname = name of avatar to pick up object (my avatar is: "myavatar" + dGet('wtw_tinstanceid').value ) */
	/* zmoldname = name of mold to pick up (can get from mouse click on item as picked name) */
	/* zavatarjointname = each avatar has embedded boxes for joints that can serve as a parent to an object */
	/* 		(zavatarjointname values are: 'headtop', 'chest', 'righthand', 'lefthand', 'righthip', 'lefthip', 'rightfoot', or 'leftfoot') */
	/* zoffset = offset values of position, rotation, and scaling used for parenting mold to zavatarjointname */
	try {
		if (zavatarjointname == undefined || zavatarjointname == "") {
			zavatarjointname = "righthand";
		}
		if (zoffset == undefined) {
			/* rotation is degrees */
			zoffset = {
				'position': {
					'x':0,
					'y':0,
					'z':0
				},
				'scaling': {
					'x':1,
					'y':1,
					'z':1
				},
				'rotation': {
					'x':0,
					'y':0,
					'z':0
				}
			}
		}
		var zavatarjointmold = WTW.getMeshOrNodeByID(zavatarname + '-' + zavatarjointname);
		var zmold = WTW.getMeshOrNodeByID(zmoldname);
		if (zavatarjointmold != null && zmold != null) {
			zmold.parent = zavatarjointmold;
			if (zoffset.position != undefined) {
				if (zoffset.position.x != undefined) {
					zmold.position.x = zoffset.position.x;
				}
				if (zoffset.position.y != undefined) {
					zmold.position.y = zoffset.position.y;
				}
				if (zoffset.position.z != undefined) {
					zmold.position.z = zoffset.position.z;
				}
			}
			if (zoffset.scaling != undefined) {
				if (zoffset.scaling.x != undefined) {
					zmold.scaling.x = zoffset.scaling.x;
				}
				if (zoffset.scaling.y != undefined) {
					zmold.scaling.y = zoffset.scaling.y;
				}
				if (zoffset.scaling.z != undefined) {
					zmold.scaling.z = zoffset.scaling.z;
				}
			}
			if (zoffset.rotation != undefined) {
				if (zoffset.rotation.x != undefined) {
					zmold.rotation.x = WTW.getRadians(zoffset.rotation.x);
				}
				if (zoffset.rotation.y != undefined) {
					zmold.rotation.y = WTW.getRadians(zoffset.rotation.y);
				}
				if (zoffset.rotation.z != undefined) {
					zmold.rotation.z = WTW.getRadians(zoffset.rotation.z);
				}
			}
		}
	} catch (ex) {
		WTW.log("core-scripts-avatars-wtw_avatarfunctions.js-pickUpObject=" + ex.message);
	}
}

