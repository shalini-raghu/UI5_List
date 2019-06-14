/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Sample_ui5_for_list/UI5_list/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});