/*global XLSX*/
sap.ui.define([
    "./BaseController",
    "sap/ui/export/Spreadsheet",
    "com/sd/massmaint/parker/zsdmassmaint/model/formatter",
    "com/sd/massmaint/parker/zsdmassmaint/model/createModel",
    "com/sd/massmaint/parker/zsdmassmaint/model/changeModel",
    "sap/ui/model/type/String",
    "sap/ui/comp/valuehelpdialog/ValueHelpRangeOperation",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageView",
    "sap/m/MessagePopoverItem",
    "sap/m/Link",
    "sap/m/Dialog",
    "sap/ui/core/IconPool",
    "sap/m/Button",
    "sap/m/Bar",
    "sap/m/Text",
    "sap/m/SearchField",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, Spreadsheet, formatter, createModel, changeModel, TypeString, ValueHelpRangeOperation,
        Filter, FilterOperator, JSONModel, MessageToast, MessageView, MessagePopoverItem, Link, Dialog, IconPool, Button, Bar,
        Text, SearchField, Fragment) {
        "use strict";

        return BaseController.extend("com.sd.massmaint.parker.zsdmassmaint.controller.SOMassView2", {
            formatter: formatter,
            oSOModel: null,
            oCreateModel: createModel,
            oChangeModel: changeModel,
            
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RoutSOMassView2").attachPatternMatched(this._onPatternMatched, this);
                this._oMultiInput = this.getView().byId("multiInput");
                this.enableMessageView();

            },
            _onPatternMatched: function (oEvent) {

                this.selKeyVal = oEvent.getParameter("arguments").keyVal;
                this.oUiModeModel = new JSONModel({
                    CreateMode: false,
                    ChangeMode: true
                });

                if (this.selKeyVal === "idSOCreate") {
                    this.getView().byId("idDLFileButt").setVisible(false);
                    this.oSOModel = createModel;
                    this.oUiModeModel.setData({
                        CreateMode: true,
                        ChangeMode: false
                    });
                } else if (this.selKeyVal === "idSOChange") {
                    this.getView().byId("idDLFileButt").setVisible(true);
                    // this.getView().byId("getSOForm").setVisible(true);
                    this.oSOModel = changeModel;
                    this.oUiModeModel.setData({
                        CreateMode: false,
                        ChangeMode: true
                    });
                    this.enableValueHelp();
                }
                this.localModel = new sap.ui.model.json.JSONModel();
                this.getView().setModel(this.localModel, "localModel");
                this.getView().setModel(this.oUiModeModel, "UiMode");

            },
            onNavButtonPress: function () {
                // this.getView().byId("FileUploaderId").setVisible(false);
                this.getView().byId("idCreateMassSO").setVisible(false);
                this.getView().byId("idTestRunButt").setVisible(false);
                this.getView().byId("idActualRunButt").setVisible(false);
                this.getView().byId("idDLTempButt").setVisible(true);
                this.getOwnerComponent().getRouter().navTo("RoutSOMassView1");
                var oData = [];
                var oJsonModelData = this.getView().getModel("localModel");
                oJsonModelData.setData(oData);
                this.oMessageModel.setData([]);
            },
            onPressMassSOCreate: function () {
                this.getView().byId("idDLTempButt").setVisible(true);
                this.getView().byId("idCreateMassSO").setVisible(false);
                var oData = [];
                var oJsonModelData = this.getView().getModel("localModel");
                oJsonModelData.setData(oData);
            },
            getPayLoad: function (ConsRunType) {
                var oTableObj = this.getView().byId("idTabData").getModel("localModel").getData();
                var oTableObjLen = oTableObj.items.length;

                var bTestRun = this.oRunType === "TestRun" ? "X" :"";
               
                var aItems = [];
                for (var i = 0; i < oTableObjLen; i++) {
                    var oPushRow = this.oSOModel.getRowObject(oTableObj.items[i]);
                    aItems.push(oPushRow);
                }
                if (this.selKeyVal === "idSOCreate") {
                    var oPayLoad = {
                        "Salesdocumentin": "SOCREATE",
                        "TestRun": bTestRun,
                        "HeaderToItemNav": aItems
                    };

                } else if (this.selKeyVal === "idSOChange") {
                    var oPayLoad = {
                        "SalesDoc": "SOCHANGE",
                        "TestRun":bTestRun,
                        "ChangeHeaderToItemNav": aItems
                    };

                }
                return oPayLoad;
            },
            messageFormatter: function (rowNumber, errorMsg) {
                var aMessages = [];
                var aMsgs = errorMsg.split("@");
                for (let index = 0; index < aMsgs.length; index++) {
                    var sMessage = aMsgs[index];
                    if (sMessage) {
                        var aObjMsg = sMessage.split("#");
                        aMessages.push({
                            rowNumber: rowNumber,
                            status: aObjMsg[0],
                            message: aObjMsg[1]
                        });
                    }

                }
                return aMessages;
            },
            validateRequiredValues: function(aRows){
                for (let index = 0; index < aRows.length; index++) {
                    var oRow = aRows[index];
                    var nRow = index+1;
                    var bValid = true;
                    if (this.selKeyVal === "idSOCreate") {
                        bValid = this.validateCreateRequired(oRow, nRow);
                    } else if (this.selKeyVal === "idSOChange") {
                        bValid = this.validateChangeRequired(oRow,nRow);
                    }
                    if(!bValid){
                        return bValid;
                    }
                }
                return true;
            },
            validateCreateRequired: function(oRow, index){

                if (oRow.DocType === "Required Value" || oRow.DocType ==="" || oRow.DocType === undefined) {
                    MessageToast.show(this.getResourceBundle().getText("DocType")+" "+this.getResourceBundle().getText("inRow")+index);
                    return false;
                } else if (oRow.SalesOrg === "Required Value" || oRow.SalesOrg ==="" || oRow.SalesOrg === undefined) {
                    MessageToast.show(this.getResourceBundle().getText("SalesOrg")+" "+this.getResourceBundle().getText("inRow")+index);
                    return false;
                }else if (oRow.DistrChan === "Required Value" || oRow.DistrChan ==="" || oRow.DistrChan === undefined){
                    MessageToast.show(this.getResourceBundle().getText("DistrChan")+" "+this.getResourceBundle().getText("inRow")+index);
                    return false;
                }else if (oRow.Division === "Required Value" || oRow.Division ==="" || oRow.Division === undefined){
                    MessageToast.show(this.getResourceBundle().getText("Division")+" "+this.getResourceBundle().getText("inRow")+index);
                    return false;
                }else if (oRow.PurchNoS === "Required Value" || oRow.PurchNoS ==="" || oRow.PurchNoS === undefined){
                    MessageToast.show(this.getResourceBundle().getText("PurchNoS")+" "+this.getResourceBundle().getText("inRow")+index);
                    return false;
                }else if (oRow.ORD_REASON === "Required Value" || oRow.ORD_REASON ==="" || oRow.ORD_REASON === undefined){
                    MessageToast.show(this.getResourceBundle().getText("ORD_REASON")+" "+this.getResourceBundle().getText("inRow")+index);
                    return false;
                }else{
                    return true;
                }
            },
            validateChangeRequired: function(oRow, index){
                                
                if (oRow.Indicator === "Required Value" || oRow.Indicator ==="" || oRow.Indicator === undefined) {
                    MessageToast.show(this.getResourceBundle().getText("Indicator")+" "+this.getResourceBundle().getText("inRow")+index);
                    return false;
                } else if (oRow.Salesdocumentin === "Required Value" || oRow.Salesdocumentin ==="" || oRow.Salesdocumentin === undefined) {
                    MessageToast.show(this.getResourceBundle().getText("Salesdocumentin")+" "+this.getResourceBundle().getText("inRow")+index);
                    return false;
                }else if (oRow.PurchNoS === "Required Value" || oRow.PurchNoS ==="" || oRow.PurchNoS === undefined){
                    MessageToast.show(this.getResourceBundle().getText("PurchNoS")+" "+this.getResourceBundle().getText("inRow")+index);
                    return false;
                }else if (oRow.ORD_REASON === "Required Value" || oRow.ORD_REASON ==="" || oRow.ORD_REASON === undefined){
                    MessageToast.show(this.getResourceBundle().getText("ORD_REASON")+" "+this.getResourceBundle().getText("inRow")+index);
                    return false;
                }else{
                    return true;
                }
            },

            onPostSuccess: function (res) {
                console.log("success", res);
                sap.ui.core.BusyIndicator.hide();
                var aRawMessages = [];
                var returnMsg = [];
                if (this.oRunType === "TestRun") {
                    this.getView().byId("idActualRunButt").setVisible(true);
                    this.getView().byId("idTestRunButt").setVisible(true);                            
                    var oTableObj = this.getView().byId("idTabData")
                    var oTableObjLen = this.getView().byId("idTabData").getModel("localModel").getData().items.length;
                   
                    for (var i = 0; i < oTableObjLen; i++) {
                        // oTableObj.getRows()[i].getCells()[80].setText(res.HeaderToItemNav.results[i].ErrorMsg);
                        // oTableObj.getRows()[i].getCells()[79].setText(res.HeaderToItemNav.results[i].SuccessMsg);

                        if (this.selKeyVal === "idSOCreate") {
                            var errorMsg = res.HeaderToItemNav.results[i].ErrorMsg;
                        } else if (this.selKeyVal === "idSOChange") {
                            var errorMsg = res.ChangeHeaderToItemNav.results[i].ErrorMsg;
                        }


                        if (errorMsg) {
                            var aMessages = this.messageFormatter(i, errorMsg);

                            returnMsg = returnMsg.concat(aMessages);
                        };

                    }
                    
                    //   @res.actualrunstatus: Comes From Backend and Lets us know if any Lineitem is failed.
                    if (res.testrunstatus === "X") {
                        MessageToast.show(this.getResourceBundle().getText("failedTestRun"));
                        this.oMessageModel.setData(returnMsg);
                        this.updateMessageView();
                    } else {
                        MessageToast.show(this.getResourceBundle().getText("successTestRun"));
                        this.oMessageModel.setData([]);
                        this.updateMessageView();
                    }
                    console.log("success");
                } else {
                    // this.getView().byId("idActualRunButt").setVisible(false);
                    // this.getView().byId("FileUploaderId").setVisible(false);
                    // this.getView().byId("idTestRunButt").setVisible(false);
                    // this.getView().byId("idDLTempButt").setVisible(false);
                    var oTableObjSucc = this.getView().byId("idTabData")
                    var oTableObjLen = this.getView().byId("idTabData").getModel("localModel").getData().items.length;
                    for (var i = 0; i < oTableObjLen; i++) {
                        // We don't want to see the messages in the Row Level.
                        // oTableObjSucc.getRows()[i].getCells()[80].setText(res.HeaderToItemNav.results[i].ErrorMsg);
                        // oTableObjSucc.getRows()[i].getCells()[79].setText(res.HeaderToItemNav.results[i].SuccessMsg);
                        if (this.selKeyVal === "idSOCreate") {
                            var errorMsg = res.HeaderToItemNav.results[i].ErrorMsg;
                        } else if (this.selKeyVal === "idSOChange") {
                            var errorMsg = res.ChangeHeaderToItemNav.results[i].ErrorMsg;
                        }


                        if (errorMsg) {
                            var aMessages = this.messageFormatter(i, errorMsg);

                            returnMsg = returnMsg.concat(aMessages);
                        };
                    }
                    //   @res.actualrunstatus: Comes From Backend and Lets us know if any Lineitem is failed.
                    if (res.actualrunstatus === "X") {
                        MessageToast.show(this.getResourceBundle().getText("failedActualRun"));
                    } else {
                        MessageToast.show(this.getResourceBundle().getText("successActualRun"));
                    }
                    // this.getView().byId("idCreateMassSO").setVisible(true);  
                    // (this.getView().getModel("localModel")).setData(res.HeaderToItemNav);  
                    this.oMessageModel.setData(returnMsg);
                    this.updateMessageView();                                                                                 
                }
                
            },
            onPostFail: function (oError) {
                sap.ui.core.BusyIndicator.hide();
                sap.m.MessageToast.show(this.getResourceBundle().getText("teschincalIssue"));
                console.log(oError);
            },
            updateMessageView: function(){
                // Model binding is not working so doing it manually;
                var oMsgButton = this.getView().byId("messageViewBtn");
                oMsgButton.setIcon(this.buttonIconFormatter());
                oMsgButton.setType(this.buttonTypeFormatter());
                oMsgButton.setText(this.highestSeverityMessages());
                var aMsg = this.oMessageModel.getData();
                if (aMsg && aMsg.length > 0) {
                    // Auto Open the Message View.
                    oMsgButton.firePress();
                }
                
            },
            onPressTestRun: function (oEvent) {
                this.oRunType = "TestRun";
                this.preparePayLoad();

            },
            onPressActualRun: function (oEvent) {
                this.oRunType = "ActualRun";
                this.preparePayLoad();

            },
            preparePayLoad:function(){
                var oPayLoad = this.getPayLoad();
                var aRows = [];
                if (this.selKeyVal === "idSOCreate") {
                    aRows = oPayLoad.HeaderToItemNav;
                } else if (this.selKeyVal === "idSOChange") {
                    aRows = oPayLoad.ChangeHeaderToItemNav;
                }
                if (!this.validateRequiredValues(aRows)) {
                    return;
                }

                sap.ui.core.BusyIndicator.show();
                var oDataModel = this.getOwnerComponent().getModel();

                // Clear Old Messages in Message View.
                this.oMessageModel.setData([]);
                
                console.log("Post Payload:",oPayLoad);
                if (this.selKeyVal === "idSOCreate") {
                    oDataModel.create("/SalesKeySet", oPayLoad, {
                        success: this.onPostSuccess.bind(this),
                        error: this.onPostFail.bind(this)
                    });
                } else if (this.selKeyVal === "idSOChange") {
                    oDataModel.create("/SalesKeychangeSet", oPayLoad, {
                        success: this.onPostSuccess.bind(this),
                        error: this.onPostFail.bind(this)
                    });
                }

            },
            onUpload: function (e) {
                // oButton.setBusy(true)
                sap.ui.core.BusyIndicator.show();
                this._import(e.getParameter("files") && e.getParameter("files")[0]);
                this.getView().byId("idTestRunButt").setVisible(true);
                this.getView().byId("idActualRunButt").setVisible(true);   
                // this.getView().byId("idTabData").getBinding("rows");                         
                this.getView().byId("idTabData").setVisible(true);
                sap.ui.core.BusyIndicator.hide();
                sap.m.MessageToast.show(this.getResourceBundle().getText("fileUploadSuccess"));
            },
            _import: function (file) {
                var that = this;
                var excelData = {};
                if (file && window.FileReader) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var data = e.target.result;
                        var workbook = XLSX.read(data, {
                            type: 'binary'
                        });
                        workbook.SheetNames.forEach(function (sheetName) {
                            // Here is your object for every sheet in workbook
                            excelData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                            console.log("excelData:", excelData);
                        });
                        // Setting the data to the local model 
                        that.localModel.setData({
                            items: excelData
                        });
                        that.localModel.refresh(true);
                    };
                    reader.onerror = function (ex) {
                        sap.m.MessageToast.show(this.getResourceBundle().getText("errorOnDataUpload"));
                    };
                    reader.readAsBinaryString(file);
                }
            },
            onExportToXL: function () {

                var oModel = this.getOwnerComponent().getModel();
                var oSettings = this.oSOModel.getSettings();
                if (this.selKeyVal === "idSOCreate") {
                    oSettings.fileName = "Download template_Create.xlsx";
                } else if (this.selKeyVal === "idSOChange") {
                    oSettings.fileName = "Download template_Change.xlsx";
                }
                
                var oSheet = new Spreadsheet(oSettings);
                oSheet.build().finally(function () {
                    oSheet.destroy();
                });
                this.getView().byId("FileUploaderId").setVisible(true);
            },

            onExportWithData: function () {

                var oTable = this.getView().byId("idTabData");
                // var oRowBinding = oTable.getBinding('rows');

                var oSettings = this.oSOModel.getSettings();
                oSettings.dataSource = this.getView().getModel("localModel").getProperty("/items");

                var oSheet = new Spreadsheet(oSettings);

                oSheet.build().finally(function () {
                    oSheet.destroy();
                });
            },
            enableValueHelp: function () {
                this._oMultiInput = this.getView().byId("multiInput");

                this._oMultiInput.addValidator(this._onMultiInputValidate);
                this.oColModel = new JSONModel(sap.ui.require.toUrl("com/sd/massmaint/parker/zsdmassmaint/model") + "/columnsModel.json");
                this.valueHelpModel = new JSONModel([]);
                this.loadSalesDocumentData();
                // multiInput for LineItem Number
                this._oLineItemNum = this.byId("lineItemNumber");
                // multiInput for Schedule Line Number
                this._oSchLineNum = this.byId("scheduleLineNumber");


            },

            onValueHelpRequested: function () {
                var aCols = this.oColModel.getData().cols;
                this._oBasicSearchField = new SearchField({
                    showSearchButton: false
                });
                
                this._oValueHelpDialog = sap.ui.xmlfragment("com.sd.massmaint.parker.zsdmassmaint.view.ValueHelpDialogMultipleConditions", this);
                this.getView().addDependent(this._oValueHelpDialog);
               
                this._oValueHelpDialog.setIncludeRangeOperations([
                    ValueHelpRangeOperation.EQ,
                    ValueHelpRangeOperation.BT,
                    ValueHelpRangeOperation.Contains,
                ], "string");

                this._oValueHelpDialog.setRangeKeyFields([{
                    label: "Sales Document",
                    key: "Vbeln",
                    type: "string",
                    typeInstance: new TypeString({}, {
                        maxLength: 10
                    })
                }]);

                
                this._oValueHelpDialog.getTableAsync().then(function (oTable) {
                    oTable.setModel(this.valueHelpModel);
                    oTable.setModel(this.oColModel, "columns");

                    if (oTable.bindRows) {
                        oTable.bindAggregation("rows", "/");
                    }

                    if (oTable.bindItems) {
                        oTable.bindAggregation("items", "/", function () {
                            return new ColumnListItem({
                                cells: aCols.map(function (column) {
                                    return new Label({ text: "{" + column.template + "}" });
                                })
                            });
                        });

                        oTable.attachRowSelectionChange(this.onTableItemSelect, this);

                    }

                    this._oValueHelpDialog.update();
                }.bind(this));

                this._oValueHelpDialog.setTokens(this._oMultiInput.getTokens());
                this._oValueHelpDialog.open();
            },
            onVHLineItem: function(){

                this.pVHLineItem = sap.ui.xmlfragment("com.sd.massmaint.parker.zsdmassmaint.view.ValueHelpLineItemNumber"
                    ,this);
                this.getView().addDependent(this.pVHLineItem);
                this.pVHLineItem.setIncludeRangeOperations([
                    ValueHelpRangeOperation.EQ,
                    ValueHelpRangeOperation.BT,
                    ValueHelpRangeOperation.Contains
                ], "string");

                this.pVHLineItem.setRangeKeyFields([{
                            label: "Line Item Number",
                            key: "ItemNumber",
                            type: "string",
                            typeInstance: new TypeString({}, {
                                maxLength: 6
                            })
                        }]);

                this.pVHLineItem.setTokens(this._oLineItemNum.getTokens());
                this.pVHLineItem.open();

            },
            onVHLineItemOkPress: function (oEvent) {
                var aTokens = oEvent.getParameter("tokens");
                this._oLineItemNum.setTokens(aTokens);
                this.pVHLineItem.close();
            },
            onVHLineItemCancelPress: function () {
                this.pVHLineItem.close();
            },

            onVHLineItemAfterClose: function(){
                this.pVHLineItem.destroy();
            },

            //****ScheduleLineItem Dialog.
            onVHScheduleLineItem: function(){
                this.pVHSchLineItem = sap.ui.xmlfragment("com.sd.massmaint.parker.zsdmassmaint.view.ValueHelpScheduleLineNumber"
                    ,this);
                this.getView().addDependent(this.pVHSchLineItem);
                this.pVHSchLineItem.setIncludeRangeOperations([
                    ValueHelpRangeOperation.EQ,
                    ValueHelpRangeOperation.BT,
                    ValueHelpRangeOperation.Contains
                ], "string");
                this.pVHSchLineItem.setRangeKeyFields([{
                            label: "Line Item Number",
                            key: "SchedLine",
                            type: "string",
                            typeInstance: new TypeString({}, {
                                maxLength: 4
                            })
                        }]);
                this.pVHSchLineItem.setTokens(this._oSchLineNum.getTokens());
                this.pVHSchLineItem.open();

               
            },
            onVHScheduleLineItemOkPress: function (oEvent) {
                var aTokens = oEvent.getParameter("tokens");
                this._oSchLineNum.setTokens(aTokens);
                this.pVHSchLineItem.close();
            },
            onVHScheduleLineItemCancelPress: function () {
                this.pVHSchLineItem.close();
            },

            onVHScheduleLineItemAfterClose: function(){
                this.pVHSchLineItem.destroy();
            },

            loadSalesDocumentData: function () {

                this.getOwnerComponent().getModel().read("/EamsShlpDmzHVbelnSet",
                    {
                        success: function (result) {
                            // everything is OK 
                            console.log("Value Help Succes:", result);
                            this.valueHelpModel.setData(result.results);
                        }.bind(this),
                        error: function (err) {
                            // some error occuerd 

                            console.log("Error:", err);
                        },
                        async: true,  // execute async request to not stuck the main thread
                        // filters: aFilters,
                        urlParameters: {
                            "$top": 100,
                            "$skip": 0
                        },
                    });

            },
            onFilterBarSearch: function (oEvent) {
                var sSearchQuery = this._oBasicSearchField.getValue(),
                    aSelectionSet = oEvent.getParameter("selectionSet");

                sSearchQuery = aSelectionSet[0].getValue();

                this.getOwnerComponent().getModel().read("/EamsShlpDmzHVbelnSet/?$filter=substringof('" + sSearchQuery + "',Vbeln)",
                    {
                        success: function (result) {
                            // everything is OK 
                            console.log("Value Help Succes:", result);
                            this.valueHelpModel.setData(result.results);
                        }.bind(this),
                        error: function (err) {
                            // some error occuerd 

                            console.log("Error:", err);
                        },
                        async: true,  // execute async request to not stuck the main thread
                        filters: [
                            new Filter({ path: "Vbeln", operator: FilterOperator.Contains, value1: sSearchQuery }),

                        ],
                        urlParameters: {
                            "$top": 100,
                            "$skip": 0
                        },
                    });

               
            },

            _filterTable: function (oFilter) {
                var oValueHelpDialog = this._oValueHelpDialog;

                oValueHelpDialog.getTableAsync().then(function (oTable) {
                    if (oTable.bindRows) {
                        oTable.getBinding("rows").filter(oFilter);
                    }

                    if (oTable.bindItems) {
                        oTable.getBinding("items").filter(oFilter);
                    }

                    oValueHelpDialog.update();
                });
            },

            _onMultiInputValidate: function (oArgs) {
                if (oArgs.suggestionObject) {
                    var oObject = oArgs.suggestionObject.getBindingContext().getObject(),
                        oToken = new Token();

                    oToken.setKey(oObject.Vbeln);
                    oToken.setText("=" + oObject.Vbeln);
                    return oToken;
                }

                return null;
            },

            onValueHelpOkPress: function (oEvent) {
                var aTokens = oEvent.getParameter("tokens");
                this._oMultiInput.setTokens(aTokens);
                this._oValueHelpDialog.close();
            },

            onValueHelpCancelPress: function () {
                this._oValueHelpDialog.close();
            },

            onValueHelpAfterClose: function () {
                this._oValueHelpDialog.destroy();
            },
            getSOFilters: function(aFilters,aTokens,sPath){
               
                for (let index = 0; index < aTokens.length; index++) {
                    var oToken = aTokens[index];
                    var aCustomData = oToken.getCustomData();
                    var oFilvalue = aCustomData[0].getValue();
                    var tokenKey = aCustomData[0].getKey();
                    // var cOperator = oFilvalue.operation ? oFilvalue.operation : FilterOperator.EQ;
                    var cOperator = this.getConstOperator(oFilvalue.operation,oFilvalue.exclude);
                    if (tokenKey === "range") {
                        aFilters.push(new Filter({
                            path: sPath,
                            operator: cOperator,
                            value1: oFilvalue.value1,
                            value2: oFilvalue.value2
                        }));
                    } else if (tokenKey === "row") {
                        aFilters.push(new Filter({
                            path: sPath,
                            operator: cOperator,
                            value1: oToken.getKey(),
                            value2: ""
                        }));

                    }

                }
                return aFilters;
            },
            getConstOperator: function(Operator,bExclude){
                if (Operator === FilterOperator.EQ && !bExclude) {
                    return FilterOperator.EQ;
                } else if(Operator === FilterOperator.EQ && bExclude){
                    return FilterOperator.NE;
                } else if(Operator === 'Empty' && !bExclude){
                    return "";
                } else if(Operator === 'Empty' && bExclude){
                    return FilterOperator.Any;
                } else if(Operator === FilterOperator.BT && !bExclude){
                    return FilterOperator.BT;
                } else if(Operator === FilterOperator.Contains && !bExclude){
                    return FilterOperator.Contains
                } else{
                    return FilterOperator.EQ;
                }

            },
            onGetSOData: function (oEvent) {
                var aTokens = this._oMultiInput.getTokens();
                if (aTokens.length === 0) {
                    MessageToast.show(this.getResourceBundle().getText("selectSO"));
                    this.onValueHelpRequested();
                    return;
                }
                console.log("SO aTokens", aTokens);
                var aFilters =[];
                var aFilters = this.getSOFilters(aFilters,aTokens,"Salesdocumentin");

                aTokens = this._oLineItemNum.getTokens();
                console.log("_oLineItemNum aTokens", aTokens);

                aFilters = this.getSOFilters(aFilters,aTokens,"ItemNumber");

                aTokens = this._oSchLineNum.getTokens();
                console.log("_oSchLineNum aTokens", aTokens);
                
                aFilters = this.getSOFilters(aFilters,aTokens,"SchedLine");


                aFilters = this.getNonKeyFilters(aFilters);
                console.log("aFilters", aFilters);

                this.getView().getModel().read("/SalesMassChangeSet",
                    {
                        success: function (result) {
                            // everything is OK 
                            console.log("Succes:", result);
                            
                            var aBindRow = [];

                            var aHeaderToItemNav = result.results;
                            if (aHeaderToItemNav.length > 0) {
                                MessageToast.show(this.getResourceBundle().getText("getSOSuccess"));
                                this.getView().byId("idActualRunButt").setVisible(true);  
                                this.getView().byId("idTestRunButt").setVisible(true);
                            } else {
                                // MessageToast.show(this.getResourceBundle().getText("noDataFound"));
                                this.onMessageDialog(this.getResourceBundle().getText("noDataFound"));
                                return;
                            }


                            for (let index = 0; index < aHeaderToItemNav.length; index++) {
                                var oHeaderToItemNav = aHeaderToItemNav[index];
                                var oBindRow = this.oSOModel.getBindingRowObject(oHeaderToItemNav);
                                aBindRow.push(oBindRow);
                            }

                            this.getView().getModel("localModel").setProperty("/items", aBindRow);
                            this.getView().byId("idTabData").setVisible(true);
                            sap.ui.core.BusyIndicator.hide();
                            
                        }.bind(this),
                        error: function (err) {
                            // some error occuerd 
                            this.getView().byId("idTestRunButt").setVisible(false);
                            console.log("Error:", err);
                        }.bind(this),
                        async: true,  // execute async request to not stuck the main thread
                        filters: aFilters
                    });

            },
            onMessageDialog: function (sText) {
                if (!this.onNoDataDialogBox) {
                    this.onNoDataDialogBox = new Dialog({
                        type: sap.m.DialogType.Message,
                        title: this.getResourceBundle().getText("sMessage"),
                        content: new Text({ text: sText }),
                        beginButton: new Button({
                            type: sap.m.ButtonType.Emphasized,
                            text: this.getResourceBundle().getText("ok"),
                            press: function () {
                                this.onNoDataDialogBox.close();
                            }.bind(this)
                        })
                    });
                }
    
                this.onNoDataDialogBox.open();
            },
            // Getting the non key filters:
            getNonKeyFilters: function(aFilters){
               
                var overallDeliveryStatus = this.getView().byId("orderOverAllDelvStatus").getSelectedKey();
                if (overallDeliveryStatus && overallDeliveryStatus != undefined && overallDeliveryStatus !="") {
                    aFilters.push(new Filter({
                        path: "OrdDelStat",
                        operator: FilterOperator.EQ,
                        value1: overallDeliveryStatus,
                        value2: ""
                    }));
                }

                var lineItemOverallDeliveryStatus = this.getView().byId("lineItemOverAllDelvStatus").getSelectedKey();
                if (lineItemOverallDeliveryStatus && lineItemOverallDeliveryStatus != undefined && lineItemOverallDeliveryStatus !="") {
                    aFilters.push(new Filter({
                        path: "ItmDelStat",
                        operator: FilterOperator.EQ,
                        value1: lineItemOverallDeliveryStatus,
                        value2: ""
                    }));
                }

                return aFilters;
            },
           
            // Display the button type according to the message with the highest severity
            // The priority of the message types are as follows: Error > Warning > Success > Info
            buttonTypeFormatter: function () {
                var sHighestSeverityIcon;
                var aMessages = this.oMessageModel.oData;

                aMessages.forEach(function (sMessage) {

                    switch (sMessage.status) {
                        case "E":
                            sHighestSeverityIcon = "Negative";
                            break;
                        case "W":
                            sHighestSeverityIcon = sHighestSeverityIcon !== "Negative" ? "Critical" : sHighestSeverityIcon;
                            break;
                        case "S":
                            sHighestSeverityIcon = sHighestSeverityIcon !== "Negative" && sHighestSeverityIcon !== "Critical" ? "Success" : sHighestSeverityIcon;
                            break;
                        default:
                            sHighestSeverityIcon = !sHighestSeverityIcon ? "Neutral" : sHighestSeverityIcon;
                            break;
                    }
                });

                return sHighestSeverityIcon;
            },

            // Display the number of messages with the highest severity
            highestSeverityMessages: function () {
                var sHighestSeverityIconType = this.buttonTypeFormatter();
                var sHighestSeverityMessageType;

                switch (sHighestSeverityIconType) {
                    case "Negative":
                        sHighestSeverityMessageType = "E";
                        break;
                    case "Critical":
                        sHighestSeverityMessageType = "W";
                        break;
                    case "Success":
                        sHighestSeverityMessageType = "S";
                        break;
                    default:
                        sHighestSeverityMessageType = !sHighestSeverityMessageType ? "I" : sHighestSeverityMessageType;
                        break;
                }

                return this.oMessageModel.oData.reduce(function (iNumberOfMessages, oMessageItem) {
                    return oMessageItem.status === sHighestSeverityMessageType ? ++iNumberOfMessages : iNumberOfMessages;
                }, 0);
            },

            // Set the button icon according to the message with the highest severity
            buttonIconFormatter: function () {
                var sIcon;
                var aMessages = this.oMessageModel.oData;
                aMessages.forEach(function (sMessage) {
                    switch (sMessage.status) {
                        case "E":
                            sIcon = "sap-icon://message-error";
                            break;
                        case "W":
                            sIcon = sIcon !== "sap-icon://message-error" ? "sap-icon://message-warning" : sIcon;
                            break;
                        case "S":
                            sIcon = "sap-icon://message-error" && sIcon !== "sap-icon://message-warning" ? "sap-icon://message-success" : sIcon;
                            break;
                        default:
                            sIcon = !sIcon ? "sap-icon://message-information" : sIcon;
                            break;
                    }
                });

                return sIcon;
            },
            enableMessageView: function () {

                var oMessageTemplate = new MessagePopoverItem({

                    type: {
                        path: "messages>status",
                        formatter: formatter.getMessageType
                    },
                    title: '{messages>message}',
                    description: '{messages>message}',
                    // subtitle: '{messages>subtitle}',
                    // counter: '{messages>counter}',
                    groupName: 'Row : {messages>rowNumber}',
                    // link: oLink
                });

                this.oMessageModel = new JSONModel();
                this.oMessageModel.setData([]);

                var oBackButton = new Button({
                    icon: IconPool.getIconURI("nav-back"),
                    visible: false,
                    press: function (oEvent) {
                        this.oMessageView.navigateBack();
                        oEvent.getSource().setVisible(false);
                    }.bind(this)
                });

                this.oMessageView = new MessageView({
                    showDetailsPageHeader: false,
                    itemSelect: function () {
                        oBackButton.setVisible(true);
                    },
                    items: {
                        path: 'messages>/',
                        template: oMessageTemplate
                    },
                    groupItems: true
                });

                this.getView().byId("messageViewBtn").setModel(this.oMessageModel, "messages");
                // this.getView().byId("messageViewBtn").getModel("messages").refresh(true);
                this.oMessageView.setModel(this.oMessageModel, "messages");
                this.getView().addDependent(this.oMessageView);

                this.oDialog = new Dialog({
                    content: this.oMessageView,
                    contentHeight: "50%",
                    contentWidth: "50%",
                    endButton: new Button({
                        text: "Close",
                        type: sap.m.ButtonType.Emphasized,
                        press: function () {
                            this.getParent().close();
                        }
                    }),
                    customHeader: new Bar({
                        contentMiddle: [
                            new Text({ text: "Messages" })
                        ],
                        contentLeft: [oBackButton]
                    }),
                    verticalScrolling: false
                });

            },

            handleMessageViewPress: function (oEvent) {
                this.oMessageView.navigateBack();
                this.oDialog.open();
            },
            onExit: function () {
                this.oMessageModel.setData([]);

                this.oUiModeModel.setData({
                    CreateMode: false,
                    ChangeMode: false
                });
            }
        });
    });