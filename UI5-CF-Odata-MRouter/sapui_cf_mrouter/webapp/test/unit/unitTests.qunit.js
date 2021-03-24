/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5.cf./sapui_cf_mrouter/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
