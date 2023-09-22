sap.ui.define([], function () {
    "use strict";
    return {
        getColumns: function () {
            var aCols = [
                // {
                //     label: "Sales Document Type* - SOHeader Key",
                //     property: "localModel>Sales Document Type* - SOHeader Key"
                // },
                // {
                //     label: "Sales Organization* - SOHeader Key",
                //     property: "localModel>Sales Organization* - SOHeader Key"
                // },
                // {
                //     label: "Distribution Channel* - SOHeader Key",
                //     property: "localModel>Distribution Channel* - SOHeader Key"
                // },
                // {

                //     label: "Division* - SOHeader Key",
                //     property: "localModel>Division* - SOHeader Key"
                // },
                {
                    label: "Insert or Update Indicator* I = Insert;U= Update",
                    property: "Insert or Update Indicator* I = Insert;U= Update"
                },
                {
                    label: "Sales Document Number* - SOHeader Key",
                    property: "Sales Document Number* - SOHeader Key"
                },
                {
                    label: "Order Reason* - SOHeader Key",
                    property: "Order Reason* - SOHeader Key"
                },
                {
                    label: "Customer purchase order number* - SOHeader Key",
                    property: "Customer purchase order number* - SOHeader Key"
                },
                {
                    label: "Customer purchase order date - SOHeader Sales - Key",
                    property: " Customer purchase order date - SOHeader Sales - Key"
                },
                {
                    label: "Requested delivery date - SOHeader Sales",
                    property: "Requested delivery date - SOHeader Sales"
                },
                {

                    label: "Delivery Block - SOHeader Sales",
                    property: "Delivery Block - SOHeader Sales"
                },
                {

                    label: "Order Overall Delivery Status - SOHeader Sales",
                    property: "Order Overall Delivery Status - SOHeader Sales"
                },
                {

                    label: "Line-item overall delivery status - SOHeader Sales",
                    property: "Line-item overall delivery status - SOHeader Sales"
                },
                {
                    label: "Incoterms - SOHeader Sales",
                    property: "Incoterms - SOHeader Sales"
                },
                {
                    label: "Incoterms Location 2 (Destination) - SOHeader Sales",
                    property: "Incoterms Location 2 (Destination) - SOHeader Sales"
                },
                {

                    label: "Terms of Payment Key - SOHeader Sales",
                    property: "Terms of Payment Key - SOHeader Sales"
                },
                {
                    label: "Customer Group 1 (Freight Code) - SOHeader Sales",
                    property: "Customer Group 1 (Freight Code) - SOHeader Sales"
                },
                {
                    label: "Ref document number (Contract or Quote number) - SOHeader- Sales",
                    property: "Ref document number (Contract or Quote number) - SOHeader- Sales"
                },
                {
                    label: "Document category for ref document - # B= Quotes G = Contracts  SOHeader Sales",
                    property: "Document category for ref document - # B= Quotes G = Contracts  SOHeader Sales"
                },
                {
                    label: "Sales Document Item number - SOPartners - Key",
                    property: "Sales Document Item number - SOPartners - Key"
                },
                {
                    label: "Partner Function 1* - SOPartners - Key",
                    property: "Partner Function 1* - SOPartners - Key"
                },
                {

                    label: "Customer Number* - SOPartners1 - Key",
                    property: "Customer Number* - SOPartners1 - Key"
                },
                {
                    label: "Partner Function 2* - SOPartners - Key",
                    property: "Partner Function 2* - SOPartners - Key"
                },
                {
                    label: "Customer Number* - SOPartners2 - Key",
                    property: "Customer Number* - SOPartners2 - Key"
                },
                {

                    label: "Partner Function 3* - SOPartners - Key",
                    property: "Partner Function 3* - SOPartners - Key"
                },
                {
                    label: "Customer Number* - SOPartners3 - Key",
                    property: "Customer Number* - SOPartners3 - Key"
                },
                {
                    label: "Partner Function 4* - SOPartners - Key",
                    property: "Partner Function 4* - SOPartners - Keyy"
                },
                {

                    label: "Customer Number* - SOPartners4 - Key",
                    property: "Customer Number* - SOPartners4 - Key"
                },
                {
                    label: "Partner Function 5* - SOPartners - Key",
                    property: "Partner Function 5* - SOPartners - Key"
                },
                {
                    label: "Customer Number* - SOPartners5 - Key",
                    property: "Customer Number* - SOPartners5 - Key"
                },
                {

                    label: "Text ID 1 - Sales order Header Texts - Key",
                    property: "Text ID 1 - Sales order Header Texts - Key"
                },
                {
                    label: "Language key - Sales order Header Texts1 - Text",
                    property: "Language key - Sales order Header Texts1 - Text"
                },
                {
                    label: "Text - Sales order Header Texts1 - Text",
                    property: "Text - Sales order Header Texts1 - Text"
                },
                {

                    label: "Text ID 2 - Sales order Header Texts - Key",
                    property: "Text ID 2 - Sales order Header Texts - Key"
                },
                {
                    label: "Language key - Sales order Header Texts2 - Text",
                    property: "Language key - Sales order Header Texts2 - Text"
                },
                {
                    label: "Text - Sales order Header Texts2 - Text",
                    property: "Text - Sales order Header Texts2 - Text"
                },
                {

                    label: "Text ID 3 - Sales order Header Texts - Key",
                    property: "Text ID 3 - Sales order Header Texts - Key"
                },
                {
                    label: "Language key - Sales order Header Texts3 - Text",
                    property: "Language key - Sales order Header Texts3 - Text"
                },
                {
                    label: "Text - Sales order Header Texts3 - Text",
                    property: "Text - Sales order Header Texts3 - Text"
                },
                {

                    label: "Text ID 4 - Sales order Header Texts - Key",
                    property: "Text ID 4 - Sales order Header Texts - Key"
                },
                {
                    label: "Language key - Sales order Header Texts4 - Text",
                    property: "Language key - Sales order Header Texts4 - Text"
                },
                {
                    label: "Text - Sales order Header Texts4 - Text",
                    property: "Text - Sales order Header Texts4 - Texty"
                },
                {

                    label: "Text ID 5 - Sales order Header Texts - Key",
                    property: "Text ID 5 - Sales order Header Texts - Key"
                },
                {
                    label: "Language key - Sales order Header Texts5 - Text",
                    property: "Language key - Sales order Header Texts5 - Text"
                },
                {
                    label: "Text - Sales order Header Texts5 - Text",
                    property: "Text - Sales order Header Texts5 - Text"
                },
                {

                    label: "Sales Document line Item* - Sales order Item details - Key",
                    property: "Sales Document line Item* - Sales order Item details - Key"
                },
                {
                    label: "Material Number*  - Sales order Item details - Key",
                    property: "Material Number*  - Sales order Item details - Key"
                },
                {
                    label: "UoM - Sales order Item details - Item",
                    property: "UoM - Sales order Item details - Item"
                },
                {

                    label: "Quantity - Sales order Item details - Item",
                    property: "Quantity - Sales order Item details - Item"
                },
                {
                    label: "Customer Material Number - Sales order Item details - Item",
                    property: "Customer Material Number - Sales order Item details - Item"
                },
                {
                    label: "Customer PO Item number - Sales order Item details - Item",
                    property: "Customer PO Item number - Sales order Item details - Item"
                },
                {

                    label: "Ref document Line item number - Sales order Item details - Item",
                    property: "Ref document Line item number - Sales order Item details - Item"
                },
                {
                    label: "Customer Ref Date Used in ZRCR order type - Sales order Item details - Item",
                    property: "Customer Ref Date Used in ZRCR order type - Sales order Item details - Item"
                },
                {
                    label: "Your Reference Used in ZRCR order type - Sales order Item details - Item",
                    property: "Your Reference Used in ZRCR order type - Sales order Item details - Item"
                },
                {

                    label: "Sales Document line Item* - Sales order Item conditions",
                    property: "Sales Document line Item* - Sales order Item conditions"
                },
                {
                    label: "Condition Type ZMAN, GRWR* - Sales order Item conditions",
                    property: "Condition Type ZMAN, GRWR* - Sales order Item conditions"
                },
                {
                    label: "Amount - Sales order Item conditions - Condition Details",
                    property: "Amount - Sales order Item conditions - Condition Details"
                },
                {

                    label: "Condition unit (currency or percentage) - Sales order Item conditions - Condition Details",
                    property: "Condition unit (currency or percentage) - Sales order Item conditions - Condition Details"
                },
                {
                    label: "Condition Pricing Unit - Sales order Item conditions - Condition Details",
                    property: "Condition Pricing Unit - Sales order Item conditions - Condition Details"
                },
                {
                    label: "Condition Unit of Measure - Sales order Item conditions - Condition Detailsn",
                    property: "Condition Unit of Measure - Sales order Item conditions - Condition Details"
                },
                {
                    label: "Numerator for Conversion - Sales order Item conditions - Condition Details",
                    property: "Numerator for Conversion - Sales order Item conditions - Condition Details"
                },
                {
                    label: "Denominator for Conversion - Sales order Item conditions - Condition Details",
                    property: "Denominator for Conversion - Sales order Item conditions - Condition Details"
                },
                {
                    label: "Base Unit of Measure - Sales order Item conditions - Condition Details",
                    property: "Base Unit of Measure - Sales order Item conditions - Condition Details"
                },
                {

                    label: "Sales Document Item* - Sales order Schedule Line Data",
                    property: "Sales Document Item* - Sales order Schedule Line Data"
                },
                {
                    label: "Delivery Schedule Line Number* - Sales order Schedule Line Data",
                    property: "Delivery Schedule Line Number* - Sales order Schedule Line Data"
                },
                {
                    label: "Delivery Block - Sales order Schedule Line Data - Item",
                    property: "Delivery Block - Sales order Schedule Line Data - Item"
                },
                {

                    label: "Order quantity in sales units* - Sales order Schedule Line Data - Item",
                    property: "Order quantity in sales units* - Sales order Schedule Line Data - Item"
                },
                {
                    label: "Schedule line date or Delivery Date - SOSchedule Line Data - Item",
                    property: "Schedule line date or Delivery Date - SOSchedule Line Data - Itemy"
                },
                {
                    label: "SD Sales order Line Item - SD - SOItem texts - Key",
                    property: "SD Sales order Line Item - SD - SOItem texts - Key"
                },
                {

                    label: "Text ID 1 - SD - SOItem texts - Key",
                    property: "Text ID 1 - SD - SOItem texts - Key"
                },
                {
                    label: "Language key - SD - SOItem texts1 - Text",
                    property: "Language key - SD - SOItem texts1 - Text"
                },
                {
                    label: "Text - SD - SOItem texts1 - Text",
                    property: "Text - SD - SOItem texts1 - Text"
                },
                {

                    label: "Text ID 2 - SD - SOItem texts - Text",
                    property: "Text ID 2 - SD - SOItem texts - Text"
                },
                {
                    label: "Language key - SD - SOItem texts2 - Text",
                    property: "Language key - SD - SOItem texts2 - Text"
                },
                {
                    label: "Text - SD - SOItem texts2 - Text",
                    property: "Text - SD - SOItem texts2 - Text"
                },
                {

                    label: "Text ID 3 - SD - SOItem texts - Text",
                    property: "Text ID 3 - SD - SOItem texts - Text"
                },
                {
                    label: "Language key - SD - SOItem texts3 - Text",
                    property: "Language key - SD - SOItem texts3 - Text"
                },
                {
                    label: "Text - SD - SOItem texts3 - Text",
                    property: "Text - SD - SOItem texts3 - Text"
                },
                {

                    label: "Text ID 4 - SD - SOItem texts - Text",
                    property: "Text ID 4 - SD - SOItem texts - Text"
                },
                {
                    label: "Language key - SD - SOItem texts4 - Text",
                    property: "Language key - SD - SOItem texts4 - Text"
                },
                {
                    label: "Text - SD - SOItem texts4 - Text",
                    property: "Text - SD - SOItem texts4 - Text"
                },
                {

                    label: "Text ID 5 - SD - SOItem texts - Text",
                    property: "Text ID 5 - SD - SOItem texts - Texty"
                },
                {
                    label: "Language key - SD - SOItem texts5 - Text",
                    property: "Language key - SD - SOItem texts5 - Text"
                },
                {
                    label: "Text - SD - SOItem texts5 - Text",
                    property: "Text - SD - SOItem texts5 - Text"
                },
                // {
                //     label: "Success",
                //     property: "Success"
                // },
                // {
                //     label: "Errors based on PO Number",
                //     property: "Errors based on PO Number"
                // }
            ];

            return aCols;
        },
        getUIDate: function (sDate) {
            if (sDate && sDate != '00000000'&& sDate != '') {
                // var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "YYYY/MM/DD" });
                // var uiDate = dateFormat.format(new Date(sDate));
                var year = +sDate.substring(0, 4);
                var month = +sDate.substring(4, 6);
                var day = +sDate.substring(6, 8);

                var oDate = new Date(year, month - 1, day);
                var sMonth = (oDate.getMonth() + 1);
                sMonth = this.appendZero(sMonth);
                var sDay = this.appendZero(oDate.getDate());
                // var uiDate = "" + (oDate.getMonth() + 1) + "/" + oDate.getDate() + "/" + oDate.getFullYear();
                var uiDate = "" + sMonth + "/" + sDay + "/" + oDate.getFullYear();
                
                console.log("uiDate: sDate:" + sDate + ":" + uiDate);
                return uiDate;
            }
            return "";
        },
        getPostDate: function (sDate) {
            if (sDate && sDate != '00000000' && sDate != '') {
                var oDate = new Date(sDate);
                var sDay = this.appendZero(oDate.getDate())
                var sMonth = oDate.getMonth() + 1;
                sMonth = this.appendZero(sMonth);
                var postDate = "" + oDate.getFullYear() + sMonth + sDay ;
                console.log("postDate: sDate:" + sDate + " : " + postDate);
                return postDate;
            }
            return "";
        },
        appendZero: function(nDate){
            if (nDate < 10) {
                return "0" + nDate;
            }
            return nDate;
        },
        getSettings: function () {
            var oSettings = {
                workbook: {
                    columns: this.getColumns(),
                    context: {
                        sheetName: "Change"
                    }
                },
                // dataSource:oRowBinding,
                dataSource: [
                    {
                        localModel: [
                            {
                                "Insert or Update Indicator* I = Insert;U= Update": "",
                                "Sales Document Number* - SOHeader Key": "",
                                // "Sales Document Type* - SOHeader Key": "",
                                // "Sales Organization* - SOHeader Key": "",
                                // "Distribution Channel* - SOHeader Key": "",
                                // "Division* - SOHeader Key": "",
                                "Order Reason* - SOHeader Key": "",
                                "Customer purchase order number* - SOHeader Key": "",
                                "Customer purchase order date - SOHeader Sales - Key": "",
                                "Requested delivery date - SOHeader Sales": "",
                                "Delivery Block - SOHeader Sales": "",
                                "Order Overall Delivery Status - SOHeader Sales":"",
                                "Incoterms - SOHeader Sales": "",
                                "Incoterms Location 2 (Destination) - SOHeader Sales": "",
                                "Terms of Payment Key - SOHeader Sales": "",
                                "Customer Group 1 (Freight Code) - SOHeader Sales": "",
                                "Ref document number (Contract or Quote number) - SOHeader- Sales": "",
                                "Document category for ref document - # B= Quotes G = Contracts  SOHeader Sales": "",
                                "Sales Document Item number - SOPartners - Key": "",
                                "Partner Function 1* - SOPartners - Key": "",
                                "Customer Number* - SOPartners1 - Key": "",
                                "Partner Function 2* - SOPartners - Key": "",
                                "Customer Number* - SOPartners2 - Key": "",
                                "Partner Function 3* - SOPartners - Key": "",
                                "Customer Number* - SOPartners3 - Key": "",
                                "Partner Function 4* - SOPartners - Key": "",
                                "Customer Number* - SOPartners4 - Key": "",
                                "Partner Function 5* - SOPartners - Key": "",
                                "Customer Number* - SOPartners5 - Key": "",
                                "Line-item overall delivery status - SOHeader Sales":"",
                                "Text ID 1 - Sales order Header Texts - Key": "",
                                "Language key - Sales order Header Texts1 - Text": "",
                                "Text - Sales order Header Texts1 - Text": "",
                                "Text ID 2 - Sales order Header Texts - Key": "",
                                "Language key - Sales order Header Texts2 - Text": "",
                                "Text - Sales order Header Texts2 - Text": "",
                                "Text ID 3 - Sales order Header Texts - Key": "",
                                "Language key - Sales order Header Texts3 - Text": "",
                                "Text - Sales order Header Texts3 - Text": "",
                                "Text ID 4 - Sales order Header Texts - Key": "",
                                "Language key - Sales order Header Texts4 - Text": "",
                                "Text - Sales order Header Texts4 - Text": "",
                                "Text ID 5 - Sales order Header Texts - Key": "",
                                "Language key - Sales order Header Texts5 - Text": "",
                                "Text - Sales order Header Texts5 - Text": "",
                                "Sales Document line Item* - Sales order Item details - Key": "",
                                "Material Number*  - Sales order Item details - Key": "",
                                "UoM - Sales order Item details - Item": "",
                                "Quantity - Sales order Item details - Item": "",
                                "Customer Material Number - Sales order Item details - Item": "",
                                "Customer PO Item number - Sales order Item details - Item": "",
                                "Ref document Line item number - Sales order Item details - Item": "",
                                "Customer Ref Date Used in ZRCR order type - Sales order Item details - Item": "",
                                "Your Reference Used in ZRCR order type - Sales order Item details - Item": "",
                                "Sales Document line Item* - Sales order Item conditions": "",
                                "Condition Type ZMAN, GRWR* - Sales order Item conditions": "",
                                "Amount - Sales order Item conditions - Condition Details": "",
                                "Condition unit (currency or percentage) - Sales order Item conditions - Condition Details": "",
                                "Condition Pricing Unit - Sales order Item conditions - Condition Details": "",
                                "Condition Unit of Measure - Sales order Item conditions - Condition Details": "",
                                "Numerator for Conversion - Sales order Item conditions - Condition Details": "",
                                "Denominator for Conversion - Sales order Item conditions - Condition Details": "",
                                "Base Unit of Measure - Sales order Item conditions - Condition Details": "",
                                "Sales Document Item* - Sales order Schedule Line Data": "",
                                "Delivery Schedule Line Number* - Sales order Schedule Line Data": "",
                                "Delivery Block - Sales order Schedule Line Data - Item": "",
                                "Order quantity in sales units* - Sales order Schedule Line Data - Item": "",
                                "Schedule line date or Delivery Date - SOSchedule Line Data - Item": "",
                                "SD Sales order Line Item - SD - SOItem texts - Key": "",
                                "Text ID 1 - SD - SOItem texts - Key": "",
                                "Language key - SD - SOItem texts1 - Text": "",
                                "Text - SD - SOItem texts1 - Text": "",
                                "Text ID 2 - SD - SOItem texts - Text": "",
                                "Language key - SD - SOItem texts2 - Text": "",
                                "Text - SD - SOItem texts2 - Text": "",
                                "Text ID 3 - SD - SOItem texts - Text": "",
                                "Language key - SD - SOItem texts3 - Text": "",
                                "Text - SD - SOItem texts3 - Text": "",
                                "Text ID 4 - SD - SOItem texts - Text": "",
                                "Language key - SD - SOItem texts4 - Text": "",
                                "Text - SD - SOItem texts4 - Text": "",
                                "Text ID 5 - SD - SOItem texts - Text": "",
                                "Language key - SD - SOItem texts5 - Text": "",
                                "Text - SD - SOItem texts5 - Text": "",
                                // "Success": "",
                                // "Errors based on PO Number": ""
                            }
                        ]
                    }
                ],
                count: 1,
                fileName: "Change Mass Sales Orders.xlsx",
                worker: true,
            };
            return oSettings;
        },

        getRowObject: function (oRow) {
            var oRetRow = {
                "Indicator": oRow["Insert or Update Indicator* I = Insert;U= Update"] ? oRow["Insert or Update Indicator* I = Insert;U= Update"] : "U",
                "Salesdocumentin": oRow["Sales Document Number* - SOHeader Key"],
                // "DocType": oRow["Sales Document Type* - SOHeader Key"],
                // "SalesOrg": oRow["Sales Organization* - SOHeader Key"],
                // "DistrChan": oRow["Distribution Channel* - SOHeader Key"],
                "ORD_REASON": oRow["Order Reason* - SOHeader Key"],


                // "Division": oRow["Division* - SOHeader Key"],
                "PurchNoS": oRow["Customer purchase order number* - SOHeader Key"],
                "PoDatS": this.getPostDate(oRow["Customer purchase order date - SOHeader Sales - Key"]),
                "ReqDateH": this.getPostDate(oRow["Requested delivery date - SOHeader Sales"]),
                "DlvBlock": oRow["Delivery Block - SOHeader Sales"],
                "Incoterms1": oRow["Incoterms - SOHeader Sales"],
                "Incoterms3l": oRow["Incoterms Location 2 (Destination) - SOHeader Sales"],
                "OrdDelStat": oRow["Order Overall Delivery Status - SOHeader Sales"],


                "Pmnttrms": oRow["Terms of Payment Key - SOHeader Sales"],
                "CustGrp1": oRow["Customer Group 1 (Freight Code) - SOHeader Sales"],
                "RefDocL": oRow["Ref document number (Contract or Quote number) - SOHeader- Sales"],
                "SdDocCat": oRow["Document category for ref document - # B= Quotes G = Contracts  SOHeader Sales"],
                "PartnItem": oRow["Sales Document Item number - SOPartners - Key"],
                "ItmDelStat": oRow["Line-item overall delivery status - SOHeader Sales"],


                "PartnRole1": oRow["Partner Function 1* - SOPartners - Key"],
                "PartnNumb1": oRow["Customer Number* - SOPartners1 - Key"],
                "PartnRole2": oRow["Partner Function 2* - SOPartners - Key"],
                "PartnNumb2": oRow["Customer Number* - SOPartners2 - Key"],
                "PartnRole3": oRow["Partner Function 3* - SOPartners - Key"],
                "PartnNumb3": oRow["Customer Number* - SOPartners3 - Key"],
                "PartnRole4": oRow["Partner Function 4* - SOPartners - Key"],
                "PartnNumb4": oRow["Customer Number* - SOPartners4 - Key"],
                "PartnRole5": oRow["Partner Function 5* - SOPartners - Key"],
                "PartnNumb5": oRow["Customer Number* - SOPartners5 - Key"],
                "HdrTextId1": oRow["Text ID 1 - Sales order Header Texts - Key"],
                "HdrLangu1": oRow["Language key - Sales order Header Texts1 - Text"],
                "HdrTextLine1": oRow["Text - Sales order Header Texts1 - Text"],
                "HdrTextId2": oRow["Text ID 2 - Sales order Header Texts - Key"],
                "HdrLangu2": oRow["Language key - Sales order Header Texts2 - Text"],
                "HdrTextLine2": oRow["Text - Sales order Header Texts2 - Text"],
                "HdrTextId3": oRow["Text ID 3 - Sales order Header Texts - Key"],
                "HdrLangu3": oRow["Language key - Sales order Header Texts3 - Text"],
                "HdrTextLine3": oRow["Text - Sales order Header Texts3 - Text"],
                "HdrTextId4": oRow["Text ID 4 - Sales order Header Texts - Key"],
                "HdrLangu4": oRow["Language key - Sales order Header Texts4 - Text"],
                "HdrTextLine4": oRow["Text - Sales order Header Texts4 - Text"],
                "HdrTextId5": oRow["Text ID 5 - Sales order Header Texts - Key"],
                "HdrLangu5": oRow["Language key - Sales order Header Texts5 - Text"],
                "HdrTextLine5": oRow["Text - Sales order Header Texts5 - Text"],
                "ItemNumber": oRow["Sales Document line Item* - Sales order Item details - Key"],
                "Material": oRow["Material Number*  - Sales order Item details - Key"],
                "TargetQu": oRow["UoM - Sales order Item details - Item"],
                "TargetQty": oRow["Quantity - Sales order Item details - Item"],
                "CustMat35": oRow["Customer Material Number - Sales order Item details - Item"],
                "PoItmNo": oRow["Customer PO Item number - Sales order Item details - Item"],
                "RefDocIt": oRow["Ref document Line item number - Sales order Item details - Item"],
                "CustRefDate": this.getPostDate(oRow["Customer Ref Date Used in ZRCR order type - Sales order Item details - Item"]),
                "Ref1": oRow["Your Reference Used in ZRCR order type - Sales order Item details - Item"],
                "CondItem": oRow["Sales Document line Item* - Sales order Item conditions"],
                "CondType": oRow["Condition Type ZMAN, GRWR* - Sales order Item conditions"],
                "CondValue": oRow["Amount - Sales order Item conditions - Condition Details"],
                "Currency": oRow["Condition unit (currency or percentage) - Sales order Item conditions - Condition Details"],
                "CondPUnt": oRow["Condition Pricing Unit - Sales order Item conditions - Condition Details"],
                "CondUnit": oRow["Condition Unit of Measure - Sales order Item conditions - Condition Details"],
                "Numconvert": oRow["Numerator for Conversion - Sales order Item conditions - Condition Details"],
                "Denominato": oRow["Denominator for Conversion - Sales order Item conditions - Condition Details"],
                "IsoUnit": oRow["Base Unit of Measure - Sales order Item conditions - Condition Details"],
                "SchedItem": oRow["Sales Document Item* - Sales order Schedule Line Data"],
                "SchedLine": oRow["Delivery Schedule Line Number* - Sales order Schedule Line Data"],
                "ReqDlvBl": oRow["Delivery Block - Sales order Schedule Line Data - Item"],
                "ReqQty": oRow["Order quantity in sales units* - Sales order Schedule Line Data - Item"],
                "DlvDate": this.getPostDate(oRow["Schedule line date or Delivery Date - SOSchedule Line Data - Item"]),
                "ItemText": oRow["SD Sales order Line Item - SD - SOItem texts - Key"],
                "ItemTextId1": oRow["Text ID 1 - SD - SOItem texts - Key"],
                "ItemLangu1": oRow["Language key - SD - SOItem texts1 - Text"],
                "ItemTextLine1": oRow["Text - SD - SOItem texts1 - Text"],
                "ItemTextId2": oRow["Text ID 2 - SD - SOItem texts - Text"],
                "ItemLangu2": oRow["Language key - SD - SOItem texts2 - Text"],
                "ItemTextLine2": oRow["Text - SD - SOItem texts2 - Text"],
                "ItemTextId3": oRow["Text ID 3 - SD - SOItem texts - Text"],
                "ItemLangu3": oRow["Language key - SD - SOItem texts3 - Text"],
                "ItemTextLine3": oRow["Text - SD - SOItem texts3 - Text"],
                "ItemTextId4": oRow["Text ID 4 - SD - SOItem texts - Text"],
                "ItemLangu4": oRow["Language key - SD - SOItem texts4 - Text"],
                "ItemTextLine4": oRow["Text - SD - SOItem texts4 - Text"],
                "ItemTextId5": oRow["Text ID 5 - SD - SOItem texts - Text"],
                "ItemLangu5": oRow["Language key - SD - SOItem texts5 - Text"],
                "ItemTextLine5": oRow["Text - SD - SOItem texts5 - Text"],
                // "SuccessMsg": oRow["Success"],
                // "ErrorMsg": oRow["Errors based on PO Number"]
            };

            return oRetRow;

        },

        getBindingRowObject: function (oRow) {
            var oRetRow = {
                "Insert or Update Indicator* I = Insert;U= Update": oRow.Indicator ? oRow.Indicator : "U",
                "Sales Document Number* - SOHeader Key": oRow.Salesdocumentin,
                // "DocType": oRow["Sales Document Type* - SOHeader Key"],
                // "SalesOrg": oRow["Sales Organization* - SOHeader Key"],
                // "DistrChan": oRow["Distribution Channel* - SOHeader Key"],
                "Order Reason* - SOHeader Key": oRow.ORD_REASON,


                // "Division": oRow["Division* - SOHeader Key"],
                "Customer purchase order number* - SOHeader Key": oRow.PurchNoS,
                "Customer purchase order date - SOHeader Sales - Key": this.getUIDate(oRow.PoDatS),
                "Requested delivery date - SOHeader Sales": this.getUIDate(oRow.ReqDateH),
                "Delivery Block - SOHeader Sales": oRow.DlvBlock,
                "Incoterms - SOHeader Sales": oRow.Incoterms1,
                "Incoterms Location 2 (Destination) - SOHeader Sales": oRow.Incoterms3l,
                "Order Overall Delivery Status - SOHeader Sales": oRow.OrdDelStat,


                "Terms of Payment Key - SOHeader Sales": oRow.Pmnttrms,
                "Customer Group 1 (Freight Code) - SOHeader Sales": oRow.CustGrp1,
                "Ref document number (Contract or Quote number) - SOHeader- Sales": oRow.RefDocL,
                "Document category for ref document - # B= Quotes G = Contracts  SOHeader Sales": oRow.SdDocCat,
                "Sales Document Item number - SOPartners - Key": oRow.PartnItem,
                "Line-item overall delivery status - SOHeader Sales": oRow.ItmDelStat,


                "Partner Function 1* - SOPartners - Key": oRow.PartnRole1,
                "Customer Number* - SOPartners1 - Key": oRow.PartnNumb1,
                "Partner Function 2* - SOPartners - Key": oRow.PartnRole2,
                "Customer Number* - SOPartners2 - Key": oRow.PartnNumb2,
                "Partner Function 3* - SOPartners - Key": oRow.PartnRole3,
                "Customer Number* - SOPartners3 - Key": oRow.PartnNumb3,
                "Partner Function 4* - SOPartners - Key": oRow.PartnRole4,
                "Customer Number* - SOPartners4 - Key": oRow.PartnNumb4,
                "Partner Function 5* - SOPartners - Key": oRow.PartnRole5,
                "Customer Number* - SOPartners5 - Key": oRow.PartnNumb5,
                "Text ID 1 - Sales order Header Texts - Key": oRow.HdrTextId1,
                "Language key - Sales order Header Texts1 - Text": oRow.HdrLangu1,
                "Text - Sales order Header Texts1 - Text": oRow.HdrTextLine1,
                "Text ID 2 - Sales order Header Texts - Key": oRow.HdrTextId2,
                "Language key - Sales order Header Texts2 - Text": oRow.HdrLangu2,
                "Text - Sales order Header Texts2 - Text": oRow.HdrTextLine2,
                "Text ID 3 - Sales order Header Texts - Key": oRow.HdrTextId3,
                "Language key - Sales order Header Texts3 - Text": oRow.HdrLangu3,
                "Text - Sales order Header Texts3 - Text": oRow.HdrTextLine3,
                "Text ID 4 - Sales order Header Texts - Key": oRow.HdrTextId4,
                "Language key - Sales order Header Texts4 - Text": oRow.HdrLangu4,
                "Text - Sales order Header Texts4 - Text": oRow.HdrTextLine4,
                "Text ID 5 - Sales order Header Texts - Key": oRow.HdrTextId5,
                "Language key - Sales order Header Texts5 - Text": oRow.HdrLangu5,
                "Text - Sales order Header Texts5 - Text": oRow.HdrTextLine5,
                "Sales Document line Item* - Sales order Item details - Key": oRow.ItemNumber,
                "Material Number*  - Sales order Item details - Key": oRow.Material,
                "UoM - Sales order Item details - Item": oRow.TargetQu,
                "Quantity - Sales order Item details - Item": oRow.TargetQty,
                "Customer Material Number - Sales order Item details - Item": oRow.CustMat35,
                "Customer PO Item number - Sales order Item details - Item": oRow.PoItmNo,
                "Ref document Line item number - Sales order Item details - Item": oRow.RefDocIt,
                "Customer Ref Date Used in ZRCR order type - Sales order Item details - Item": this.getUIDate(oRow.CustRefDate),
                "Your Reference Used in ZRCR order type - Sales order Item details - Item": oRow.Ref1,
                "Sales Document line Item* - Sales order Item conditions": oRow.CondItem,
                "Condition Type ZMAN, GRWR* - Sales order Item conditions": oRow.CondType,
                "Amount - Sales order Item conditions - Condition Details": oRow.CondValue,
                "Condition unit (currency or percentage) - Sales order Item conditions - Condition Details": oRow.Currency,
                "Condition Pricing Unit - Sales order Item conditions - Condition Details": oRow.CondPUnt,
                "Condition Unit of Measure - Sales order Item conditions - Condition Details": oRow.CondUnit,
                "Numerator for Conversion - Sales order Item conditions - Condition Details": oRow.Numconvert,
                "Denominator for Conversion - Sales order Item conditions - Condition Details": oRow.Denominato,
                "Base Unit of Measure - Sales order Item conditions - Condition Details": oRow.IsoUnit,
                "Sales Document Item* - Sales order Schedule Line Data": oRow.SchedItem,
                "Delivery Schedule Line Number* - Sales order Schedule Line Data": oRow.SchedLine,
                "Delivery Block - Sales order Schedule Line Data - Item": oRow.ReqDlvBl,
                "Order quantity in sales units* - Sales order Schedule Line Data - Item": oRow.ReqQty,
                "Schedule line date or Delivery Date - SOSchedule Line Data - Item": this.getUIDate(oRow.DlvDate),
                "SD Sales order Line Item - SD - SOItem texts - Key": oRow.ItemText,
                "Text ID 1 - SD - SOItem texts - Key": oRow.ItemTextId1,
                "Language key - SD - SOItem texts1 - Text": oRow.ItemLangu1,
                "Text - SD - SOItem texts1 - Text": oRow.ItemTextLine1,
                "Text ID 2 - SD - SOItem texts - Text": oRow.ItemTextId2,
                "Language key - SD - SOItem texts2 - Text": oRow.ItemLangu2,
                "Text - SD - SOItem texts2 - Text": oRow.ItemTextLine2,
                "Text ID 3 - SD - SOItem texts - Text": oRow.ItemTextId3,
                "Language key - SD - SOItem texts3 - Text": oRow.ItemLangu3,
                "Text - SD - SOItem texts3 - Text": oRow.ItemTextLine3,
                "Text ID 4 - SD - SOItem texts - Text": oRow.ItemTextId4,
                "Language key - SD - SOItem texts4 - Text": oRow.ItemLangu4,
                "Text - SD - SOItem texts4 - Text": oRow.ItemTextLine4,
                "Text ID 5 - SD - SOItem texts - Text": oRow.ItemTextId5,
                "Language key - SD - SOItem texts5 - Text": oRow.ItemLangu5,
                "Text - SD - SOItem texts5 - Text": oRow.ItemTextLine5,
                // "Success": oRow.SuccessMsg,
                // "Errors based on PO Number": oRow.ErrorMsg
            };

            return oRetRow;

        }

    };
});