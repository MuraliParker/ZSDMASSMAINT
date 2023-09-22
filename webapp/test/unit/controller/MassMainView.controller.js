/*global QUnit*/

sap.ui.define([
	"comsdmassmaintparker/zsdmassmaint/controller/MassMainView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MassMainView Controller");

	QUnit.test("I should test the MassMainView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
