/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5.plain./sapui5_plain_noodata/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
