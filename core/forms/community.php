<!-- admin menu form for editing 3D Community Information -->
	<div id="wtw_adminmenu25b" style="display:none;visibility:hidden;">
		<h2>3D Community Name</h2>
		<input type="text" id="wtw_tcommunityname" maxlength="255" onclick="WTW.checkKey(this, 'displayname', 0, 0);" onkeyup="WTW.checkKey(this, 'displayname', 0, 0);" onblur="WTW.checkKey(this, 'displayname', 0, 1);" /><br />
		<br />
		<h2>Version</h2>
		<input type="text" id="wtw_tinfocommunityversion" maxlength="255" /><br />
		<br />
		<h2>3D Community Description</h2>
		<div class="wtw-menulevel0text" style="text-align:left;">shows on the meta tags of the 3D Website</div>
		<input type="text" id="wtw_tcommunitydescription" maxlength="255" onclick="WTW.checkKey(this, 'safetext', 0, 0);" onkeyup="WTW.checkKey(this, 'safetext', 0, 0);" onblur="WTW.checkKey(this, 'safetext', 0, 1);" /><br />
		<br />
		<h2>Google Analytics ID</h2>
		<input type="text" id="wtw_tcommunityanalyticsid" maxlength="255" onclick="WTW.checkKey(this, 'webname', 1, 0);" onkeyup="WTW.checkKey(this, 'webname', 1, 0);" onblur="WTW.checkKey(this, 'webname', 1, 1);" /><br />
		<hr class="wtw-menuhr" />
		<h2 style="margin-bottom:3px;">Alt Tag for 3D Community</h2>
		<input type="text" id="wtw_tcommunityalttag" maxlength="255" onclick="WTW.checkKey(this, 'displayname', 0, 0);" onkeyup="WTW.checkKey(this, 'displayname', 0, 0);" onblur="WTW.checkKey(this, 'displayname', 0, 1);" /><br />
		<br />
<!--	<div id="wtw_communityadvancedoptslink" onclick="WTW.toggleAdvanced(this, 'wtw_communityadvancedopts');" class="wtw-showhideadvanced" >-- Show Advanced Options --</div>
		<div id="wtw_communityadvancedopts" style="display:none;visibility:hidden;">
			<br />
		</div>-->
		<br />
		
		<div id="wtw_save25" class="wtw-greenbutton" onclick="WTW.adminMenuItemSelected(this);" style="font-size:1.4em;">Save Settings</div>
	</div>
