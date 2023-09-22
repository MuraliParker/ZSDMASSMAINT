sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sd.massmaint.parker.zsdmassmaint.controller.SOMassView1", {
            onInit: function () {

            },
            onPressMassSO:function(){               
                this.getView().byId("idSOCreate").setVisible(true);
                this.getView().byId("idSOChange").setVisible(true);
                this.getView().byId("idCMCreate").setVisible(false);
                this.getView().byId("idCMChange").setVisible(false);
                this.getView().byId("idCancelButt").setVisible(true);
            },
            onPressMassCM:function(){               
                this.getView().byId("idSOCreate").setVisible(false);
                this.getView().byId("idSOChange").setVisible(false);
                this.getView().byId("idCMCreate").setVisible(true);
                this.getView().byId("idCMChange").setVisible(true);   
                this.getView().byId("idCancelButt").setVisible(true);             
            },
            onCancel:function(){
                this.getView().byId("idSOCreate").setVisible(false);
                this.getView().byId("idSOChange").setVisible(false);
                this.getView().byId("idCMCreate").setVisible(false);
                this.getView().byId("idCMChange").setVisible(false);
                this.getView().byId("idCancelButt").setVisible(false); 
            },
            onPressSOCreate:function(oEvent){                                
                this.getOwnerComponent().getRouter().navTo("RoutSOMassView2",{
                        keyVal:"idSOCreate"
                });                            
            },
            onPressSOChange:function(){
                this.getOwnerComponent().getRouter().navTo("RoutSOMassView2",{
                        keyVal:"idSOChange"
                }); 
            }

        });
    });
