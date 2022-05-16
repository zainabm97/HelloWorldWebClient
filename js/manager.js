'use strict';

module.exports = function (oAppData) {
	var
		TextUtils = require('%PathToCoreWebclientModule%/js/utils/Text.js'),
		
		App = require('%PathToCoreWebclientModule%/js/App.js'),
		
		sHash = 'helloworld'
	;
	
	if (App.getUserRole() === Enums.UserRole.NormalUser)
	{
		return {
			getScreens: function ()
			{
				var oScreens = {};
				oScreens[sHash] = function () {
					return require('modules/%ModuleName%/js/views/MainView.js');
				};
				return oScreens;
			},
			getHeaderItem: function ()
			{
				var CHeaderItemView = require('%PathToCoreWebclientModule%/js/views/CHeaderItemView.js');

				return {
					item: new CHeaderItemView(TextUtils.i18n('%MODULENAME%/ACTION_SHOW_HELLOWORLDAPP')),
					name: sHash
				};
			}
		};
	}
	
	return null;
};
