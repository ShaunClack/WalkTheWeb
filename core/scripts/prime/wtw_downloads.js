/* All code is Copyright 2013-2021 Aaron Scott Dishno Ed.D., HTTP3D Inc. - WalkTheWeb, and the contributors */
/* "3D Browsing" is a USPTO Patented (Serial # 9,940,404) and Worldwide PCT Patented Technology by Aaron Scott Dishno Ed.D. and HTTP3D Inc. */
/* Read the included GNU Ver 3.0 license file for details and additional release information. */

/* These functions are used to download selected 3D Communities, 3D Buildings, 3D Things, or related content */
/* downloads are hosted by 3dnet.walktheweb.com 3D Internet (WalkTheWeb Downloads) */

WTWJS.prototype.updateProgressText = function(ztext) {
	/* note that updates the progress of the installation step */
	try {
		if (dGet('wtw_progresstext') != null) {
			dGet('wtw_progresstext').innerHTML = ztext;
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-updateProgressText=" + ex.message);
	}
}

WTWJS.prototype.updateProgressBar = function(zprogress, ztotal) {
	/* updates the current progress bar positon */
	try {
		if (dGet('wtw_progressbar') != null) {
			zpercent = Math.round(100/ztotal * zprogress);
			dGet('wtw_progressbar').style.width = zpercent + "%";
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-updateProgressBar=" + ex.message);
	}
	return zprogress;
}

WTWJS.prototype.communitySearch = async function(zsearch) {
	/* keyword search to find a community to download to your instance */
	try {
		zsearch = WTW.encode(zsearch);
		WTW.getAsyncJSON("https://3dnet.walktheweb.com/connect/sharesearch.php?search=" + zsearch + "&webtype=community", 
			function(zresponse) {
				WTW.communitySearchReply(JSON.parse(zresponse));
			}
		);
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-communitySearch=" + ex.message);
	}
}

WTWJS.prototype.communitySearchReply = function(zresponse) {
	/* receives search results and parses for screen display */
	try {
		var ztempsearchresults = '';
		dGet('wtw_commtempsearchresults').innerHTML = "";
		for (var i=0; i < zresponse.length; i++) {
			var zdownloads = 0;
			var zcommunityid = zresponse[i].servercommunityid;
			var zupdatedate  = WTW.formatDate(zresponse[i].updatedate);
			if (WTW.isNumeric(zresponse[i].downloads)) {
				zdownloads = zresponse[i].downloads;
			}
			ztempsearchresults += "<input type='button' id='wtw_bcommtempselect" + i + "' class='wtw-searchresultbutton' value='Download' onclick=\"WTW.downloadWeb('" + zcommunityid + "','community');\" />";
			ztempsearchresults += "<h3 class=\"wtw-black\">" + zresponse[i].templatename + "</h3><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>" + zresponse[i].description + "</div><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>Created By: <b>" + zresponse[i].displayname + "</b> (<b>" + zupdatedate + "</b>)</div><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>Downloaded: <b>" + zdownloads + "</b> times.</div><br />";
			if (zresponse[i].imageurl != "") {
				ztempsearchresults += "<div style=\"clear:both;\"></div><img id='wtw_search" + zcommunityid + "' src='" + zresponse[i].imageurl + "' onmouseover=\"this.style.border='1px solid yellow';\" onmouseout=\"this.style.border='1px solid gray';\" onclick=\"WTW.downloadWeb('" + zcommunityid + "','community');\" style=\"margin:2%;border:1px solid gray;cursor:pointer;width:96%;height:auto;\" alt='" + zresponse[i].templatename + "' title='" + zresponse[i].templatename + "' />";
			}
			ztempsearchresults += "<br /><hr style=\"width:96%;\" />";
		}
		dGet('wtw_commtempsearchresults').innerHTML = ztempsearchresults;
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-communitySearchReply=" + ex.message);
	}
}

WTWJS.prototype.buildingSearch = async function(zsearch) {
	/* keyword search to find a building to download to your instance */
	try {
		zsearch = WTW.encode(zsearch);
		WTW.getAsyncJSON("https://3dnet.walktheweb.com/connect/sharesearch.php?search=" + zsearch + "&webtype=building", 
			function(zresponse) {
				WTW.buildingSearchReply(JSON.parse(zresponse));
			}
		);
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-buildingSearch=" + ex.message);
	}
}

WTWJS.prototype.buildingSearchReply = function(zresponse) {
	/* receives search results and parses for screen display */
	try {
		var ztempsearchresults = '';
		dGet('wtw_buildtempsearchresults').innerHTML = "";
		for (var i=0; i < zresponse.length; i++) {
			var zdownloads = 0;
			var zbuildingid = zresponse[i].serverbuildingid;
			var zupdatedate  = WTW.formatDate(zresponse[i].updatedate);
			if (WTW.isNumeric(zresponse[i].downloads)) {
				zdownloads = zresponse[i].downloads;
			}
			ztempsearchresults += "<br /><input type='button' id='wtw_btempselect" + i + "' class='wtw-searchresultbutton' value='Download' onclick=\"WTW.downloadWeb('" + zbuildingid + "','building');return (false);\" />";
			ztempsearchresults += "<h3 class=\"wtw-black\">" + zresponse[i].templatename + "</h3><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>" + zresponse[i].description + "</div><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>Created By: <b>" + zresponse[i].displayname + "</b> (<b>" + zupdatedate + "</b>)</div><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>Downloaded: <b>" + zdownloads + "</b> times.</div><br />";
			if (zresponse[i].imageurl != "") {
				ztempsearchresults += "<img id='wtw_search" + zbuildingid + "' src='" + zresponse[i].imageurl + "' onmouseover=\"this.style.border='1px solid yellow';\" onmouseout=\"this.style.border='1px solid gray';\" onclick=\"WTW.downloadWeb('" + zbuildingid + "','building');return (false);\" style=\"margin:2%;border:1px solid gray;cursor:pointer;width:96%;height:auto;\" alt='" + zresponse[i].templatename + "' title='" + zresponse[i].templatename + "' />";
			}
			ztempsearchresults += "<br /><hr style=\"width:96%;\" />";
		}
		dGet('wtw_buildtempsearchresults').innerHTML = ztempsearchresults;
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-buildingSearchReply=" + ex.message);
	}
}

WTWJS.prototype.thingSearch = async function(zsearch) {
	/* keyword search to find a thing to download to your instance */
	try {
		zsearch = WTW.encode(zsearch);
		WTW.getAsyncJSON("https://3dnet.walktheweb.com/connect/sharesearch.php?search=" + zsearch + "&webtype=thing", 
			function(zresponse) {
				WTW.thingSearchReply(JSON.parse(zresponse));
			}
		);
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-thingSearch=" + ex.message);
	}
}

WTWJS.prototype.thingSearchReply = function(zresponse) {
	/* receives search results and parses for screen display */
	try {
		var ztempsearchresults = '';
		dGet('wtw_thingtempsearchresults').innerHTML = "";
		for (var i=0; i < zresponse.length; i++) {
			var zdownloads = 0;
			var zthingid = zresponse[i].serverthingid;
			var zupdatedate  = WTW.formatDate(zresponse[i].updatedate);
			if (WTW.isNumeric(zresponse[i].downloads)) {
				zdownloads = zresponse[i].downloads;
			}
			ztempsearchresults += "<br /><input type='button' id='wtw_bthingtempselect" + i + "' class='wtw-searchresultbutton' value='Download' onclick=\"WTW.downloadWeb('" + zthingid + "', 'thing');return (false);\" />";
			ztempsearchresults += "<h3 class=\"wtw-black\">" + zresponse[i].templatename + "</h3><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>" + zresponse[i].description + "</div><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>Created By: <b>" + zresponse[i].displayname + "</b> (<b>" + zupdatedate + "</b>)</div><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>Downloaded: <b>" + zdownloads + "</b> times.</div><br />";
			if (zresponse[i].imageurl != "") {
				ztempsearchresults += "<img id='wtw_search" + zthingid + "' src='" + zresponse[i].imageurl + "' onmouseover=\"this.style.border='1px solid yellow';\" onmouseout=\"this.style.border='1px solid gray';\" onclick=\"WTW.downloadWeb('" + zthingid + "', 'thing');return (false);\" style=\"margin:2%;border:1px solid gray;cursor:pointer;width:96%;height:auto;\" alt='" + zresponse[i].templatename + "' title='" + zresponse[i].templatename + "' />";
			}
			ztempsearchresults += "<br /><hr style=\"width:96%;\" />";
		}
		dGet('wtw_thingtempsearchresults').innerHTML = ztempsearchresults;
		WTW.setWindowSize();
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-thingSearchReply=" + ex.message);
	}
}

WTWJS.prototype.avatarSearch = async function(zsearch) {
	/* keyword search to find a avatar to download to your instance */
	try {
		zsearch = WTW.encode(zsearch);
		WTW.getAsyncJSON("https://3dnet.walktheweb.com/connect/sharesearch.php?search=" + zsearch + "&webtype=avatar", 
			function(zresponse) {
				WTW.avatarSearchReply(JSON.parse(zresponse));
			}
		);
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-avatarSearch=" + ex.message);
	}
}

WTWJS.prototype.avatarSearchReply = function(zresponse) {
	/* receives search results and parses for screen display */
	try {
		var ztempsearchresults = '';
		dGet('wtw_avatartempsearchresults').innerHTML = "";
		for (var i=0; i < zresponse.length; i++) {
			var zdownloads = 0;
			var zavatarid = zresponse[i].serveravatarid;
			var zupdatedate  = WTW.formatDate(zresponse[i].updatedate);
			if (WTW.isNumeric(zresponse[i].downloads)) {
				zdownloads = zresponse[i].downloads;
			}
			ztempsearchresults += "<br /><input type='button' id='wtw_bavatartempselect" + i + "' class='wtw-searchresultbutton' value='Download' onclick=\"WTW.downloadWeb('" + zavatarid + "', 'avatar');return (false);\" />";
			ztempsearchresults += "<h3 class=\"wtw-black\">" + zresponse[i].templatename + "</h3><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>" + zresponse[i].description + "</div><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>Created By: <b>" + zresponse[i].displayname + "</b> (<b>" + zupdatedate + "</b>)</div><br />";
			ztempsearchresults += "<div style='white-space:normal;font-weight:normal;color:#000000;'>Downloaded: <b>" + zdownloads + "</b> times.</div><br />";
			if (zresponse[i].imageurl != "") {
				ztempsearchresults += "<img id='wtw_search" + zavatarid + "' src='" + zresponse[i].imageurl + "' onmouseover=\"this.style.border='1px solid yellow';\" onmouseout=\"this.style.border='1px solid gray';\" onclick=\"WTW.downloadWeb('" + zavatarid + "', 'avatar');return (false);\" style=\"margin:2%;border:1px solid gray;cursor:pointer;width:96%;height:auto;\" alt='" + zresponse[i].templatename + "' title='" + zresponse[i].templatename + "' />";
			}
			ztempsearchresults += "<br /><hr style=\"width:96%;\" />";
		}
		dGet('wtw_avatartempsearchresults').innerHTML = ztempsearchresults;
		WTW.setWindowSize();
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-avatarSearchReply=" + ex.message);
	}
}

WTWJS.prototype.downloadWeb = async function(zcopywebid, zwebtype) {
	/* This process takes the selected 3D Web and downloads a copy to the local instance */
	try {
		if (zwebtype == 'avatar') {
			var zrequest = {
				'webid': zcopywebid,
				'webtype': zwebtype,
				'function':'downloadweb'
			};
			WTW.postAsyncJSON("/core/handlers/avatars.php", zrequest, 
				function(zresponse) {
					zresponse = JSON.parse(zresponse);
					/* note serror would contain errors */
					WTW.completedWebDownload(zresponse);
				}
			);
		} else {
			var zisinstall = true;
			var zcommunityid = '';
			var zbuildingpositionx = 0;
			var zbuildingpositiony = 0;
			var zbuildingpositionz = 0;
			var zbuildingscalingx = 1;
			var zbuildingscalingy = 1;
			var zbuildingscalingz = 1;
			var zbuildingrotationx = 0;
			var zbuildingrotationy = 0;
			var zbuildingrotationz = 0;
			if (WTW.adminView != undefined) {
				if (WTW.adminView == 1) {
					zisinstall = false;
				}
			}
			if (zisinstall && zwebtype == 'building') {
				if (dGet('wtw_tcommunityid') != null) {
					zcommunityid = dGet('wtw_tcommunityid').value;
					zbuildingpositionx = dGet('wtw_tbuildingpositionx').value;
					zbuildingpositiony = dGet('wtw_tbuildingpositiony').value;
					zbuildingpositionz = dGet('wtw_tbuildingpositionz').value;
					zbuildingscalingx = dGet('wtw_tbuildingscalingx').value;
					zbuildingscalingy = dGet('wtw_tbuildingscalingy').value;
					zbuildingscalingz = dGet('wtw_tbuildingscalingz').value;
					zbuildingrotationx = dGet('wtw_tbuildingrotationx').value;
					zbuildingrotationy = dGet('wtw_tbuildingrotationy').value;
					zbuildingrotationz = dGet('wtw_tbuildingrotationz').value;
				}
				
			}
			var zrequest = {
				'webid': zcopywebid,
				'webtype': zwebtype,
				'communityid': zcommunityid,
				'buildingpositionx': zbuildingpositionx,
				'buildingpositiony': zbuildingpositiony,
				'buildingpositionz': zbuildingpositionz,
				'buildingscalingx': zbuildingscalingx,
				'buildingscalingy': zbuildingscalingy,
				'buildingscalingz': zbuildingscalingz,
				'buildingrotationx': zbuildingrotationx,
				'buildingrotationy': zbuildingrotationy,
				'buildingrotationz': zbuildingrotationz,
				'function':'downloadweb'
			};
			WTW.postAsyncJSON("/core/handlers/communities.php", zrequest, 
				function(zresponse) {
					zresponse = JSON.parse(zresponse);
					/* note serror would contain errors */
					WTW.completedWebDownload(zresponse);
				}
			);
		}
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-downloadWeb=" + ex.message);
	}
}

WTWJS.prototype.completedWebDownload = function(zresponse) {
	/* download is complete, notidfy user */
	try {
		WTW.updateProgressText("WalkTheWeb Download Completed");
		WTW.updateProgressBar(100,100);
		var zisinstall = true;
		if (WTW.adminView != undefined) {
			if (WTW.adminView == 1) {
				zisinstall = false;
			}
		}
		if (zisinstall) {
			window.location.href = "/";
		} else {
			WTW.hide('wtw_installprogress');
			WTW.hide('wtw_commtempsearchresults');
			WTW.hide('wtw_buildtempsearchresults');
			WTW.hide('wtw_thingtempsearchresults');
			WTW.hide('wtw_avatartempsearchresults');
			WTW.show('wtw_downloadcomplete');
			switch (zresponse.webtype) {
				case "community":
					dGet('wtw_downloadcompletemessage').innerHTML = "You can find your <b>New 3D Community</b> in the <b>Admin Menu</b><br />or select from the following:";
					dGet('wtw_bopenwebdownload').value = "Open Your New 3D Community in the Editor";
					dGet('wtw_bcontinuewebdownload').onclick = function() { WTW.openFullPageForm('importpage','communities'); };
					WTW.hideAdminMenu();
					WTW.getSelectCommunitiesList();
					WTW.show('wtw_adminmenu22');
					break;
				case "building":
					dGet('wtw_downloadcompletemessage').innerHTML = "You can find your <b>New 3D Building</b> in the <b>Admin Menu</b><br />or select from the following:";
					dGet('wtw_bopenwebdownload').value = "Open Your New 3D Building in the Editor";
					dGet('wtw_bcontinuewebdownload').onclick = function() { WTW.openFullPageForm('importpage','buildings'); };
					WTW.hideAdminMenu();
					WTW.getSelectBuildingsList();
					WTW.show('wtw_adminmenu2');
					break;
				case "thing":
					dGet('wtw_downloadcompletemessage').innerHTML = "You can find your <b>New 3D Thing</b> in the <b>Admin Menu</b><br />or select from the following:";
					dGet('wtw_bopenwebdownload').value = "Open Your New 3D Thing in the Editor";
					dGet('wtw_bcontinuewebdownload').onclick = function() { WTW.openFullPageForm('importpage','things'); };
					WTW.hideAdminMenu();
					WTW.getSelectThingsList();
					WTW.show('wtw_adminmenu32');
					break;
				case "avatar":
					dGet('wtw_downloadcompletemessage').innerHTML = "You can find your <b>New 3D Avatar</b> in the <b>Admin Menu</b><br />or select from the following:";
					dGet('wtw_bopenwebdownload').value = "Open Your New 3D Avatar in the Editor";
					dGet('wtw_bcontinuewebdownload').onclick = function() { WTW.openFullPageForm('importpage','avatars'); };
					WTW.hideAdminMenu();
					WTW.openSelectAvatar();
					WTW.show('wtw_adminSelectAvatarDiv');
					break;
			}
			dGet('wtw_bopenwebdownload').onclick = function() { window.location.href = '/admin.php?'+ zresponse.webtype + 'id=' + zresponse.webid; };
			WTW.show('wtw_selectwebform');
		}		
		
	} catch (ex) {
		WTW.log("core-scripts-prime-wtw_downloads.js-completedWebDownload=" + ex.message);
	}
}
