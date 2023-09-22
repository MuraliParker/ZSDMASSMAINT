sap.ui.define([], function () {
    "use strict";
    return {
        getColumns: function () {
            var aCols = [{

                label: "Sales Document Type* - SOHeader Key",
                property: "localModel>Sales Document Type* - SOHeader Key"
            },
            {
                label: "Sales Organization* - SOHeader Key",
                property: "localModel>Sales Organization* - SOHeader Key"
            },
            {
                label: "Distribution Channel* - SOHeader Key",
                property: "localModel>Distribution Channel* - SOHeader Key"
            },
            {

                label: "Division* - SOHeader Key",
                property: "localModel>Division* - SOHeader Key"
            },
            {
                label: "Order Reason* - SOHeader Key",
                property: "localModel>Order Reason* - SOHeader Key"
            },
            {
                label: "Customer purchase order number* - SOHeader Key",
                property: "localModel>Customer purchase order number* - SOHeader Key"
            },
            {
                label: "Customer purchase order date - SOHeader Sales - Key",
                property: "localModel> Customer purchase order date - SOHeader Sales - Key"
            },
            {
                label: "Requested delivery date - SOHeader Sales",
                property: "localModel>Requested delivery date - SOHeader Sales"
            },
            {

                label: "Delivery Block - SOHeader Sales",
                property: "localModel>Delivery Block - SOHeader Sales"
            },
            {
                label: "Incoterms - SOHeader Sales",
                property: "localModel>Incoterms - SOHeader Sales"
            },
            {
                label: "Incoterms Location 2 (Destination) - SOHeader Sales",
                property: "localModel>Incoterms Location 2 (Destination) - SOHeader Sales"
            },
            {

                label: "Terms of Payment Key - SOHeader Sales",
                property: "localModel>Terms of Payment Key - SOHeader Sales"
            },
            {
                label: "Customer Group 1 (Freight Code) - SOHeader Sales",
                property: "localModel>Customer Group 1 (Freight Code) - SOHeader Sales"
            },
            {
                label: "Ref document number (Contract or Quote number) - SOHeader- Sales",
                property: "localModel>Ref document number (Contract or Quote number) - SOHeader- Sales"
            },
            {
                label: "Document category for ref document - # B= Quotes G = Contracts  SOHeader Sales",
                property: "localModel>Document category for ref document - # B= Quotes G = Contracts  SOHeader Sales"
            },
            {
                label: "Sales Document Item number - SOPartners - Key",
                property: "localModel>Sales Document Item number - SOPartners - Key"
            },
            {
                label: "Partner Function 1* - SOPartners - Key",
                property: "localModel>Partner Function 1* - SOPartners - Key"
            },
            {

                label: "Customer Number* - SOPartners1 - Key",
                property: "localModel>Customer Number* - SOPartners1 - Key"
            },
            {
                label: "Partner Function 2* - SOPartners - Key",
                property: "localModel>Partner Function 2* - SOPartners - Key"
            },
            {
                label: "Customer Number* - SOPartners2 - Key",
                property: "localModel>Customer Number* - SOPartners2 - Key"
            },
            {

                label: "Partner Function 3* - SOPartners - Key",
                property: "localModel>Partner Function 3* - SOPartners - Key"
            },
            {
                label: "Customer Number* - SOPartners3 - Key",
                property: "localModel>Customer Number* - SOPartners3 - Key"
            },
            {
                label: "Partner Function 4* - SOPartners - Key",
                property: "localModel>Partner Function 4* - SOPartners - Keyy"
            },
            {

                label: "Customer Number* - SOPartners4 - Key",
                property: "localModel>Customer Number* - SOPartners4 - Key"
            },
            {
                label: "Partner Function 5* - SOPartners - Key",
                property: "localModel>Partner Function 5* - SOPartners - Key"
            },
            {
                label: "Customer Number* - SOPartners5 - Key",
                property: "localModel>Customer Number* - SOPartners5 - Key"
            },
            {

                label: "Text ID 1 - Sales order Header Texts - Key",
                property: "localModel>Text ID 1 - Sales order Header Texts - Key"
            },
            {
                label: "Language key - Sales order Header Texts1 - Text",
                property: "localModel>Language key - Sales order Header Texts1 - Text"
            },
            {
                label: "Text - Sales order Header Texts1 - Text",
                property: "localModel>Text - Sales order Header Texts1 - Text"
            },
            {

                label: "Text ID 2 - Sales order Header Texts - Key",
                property: "localModel>Text ID 2 - Sales order Header Texts - Key"
            },
            {
                label: "Language key - Sales order Header Texts2 - Text",
                property: "localModel>Language key - Sales order Header Texts2 - Text"
            },
            {
                label: "Text - Sales order Header Texts2 - Text",
                property: "localModel>Text - Sales order Header Texts2 - Text"
            },
            {

                label: "Text ID 3 - Sales order Header Texts - Key",
                property: "localModel>Text ID 3 - Sales order Header Texts - Key"
            },
            {
                label: "Language key - Sales order Header Texts3 - Text",
                property: "localModel>Language key - Sales order Header Texts3 - Text"
            },
            {
                label: "Text - Sales order Header Texts3 - Text",
                property: "localModel>Text - Sales order Header Texts3 - Text"
            },
            {

                label: "Text ID 4 - Sales order Header Texts - Key",
                property: "localModel>Text ID 4 - Sales order Header Texts - Key"
            },
            {
                label: "Language key - Sales order Header Texts4 - Text",
                property: "localModel>Language key - Sales order Header Texts4 - Text"
            },
            {
                label: "Text - Sales order Header Texts4 - Text",
                property: "localModel>Text - Sales order Header Texts4 - Texty"
            },
            {

                label: "Text ID 5 - Sales order Header Texts - Key",
                property: "localModel>Text ID 5 - Sales order Header Texts - Key"
            },
            {
                label: "Language key - Sales order Header Texts5 - Text",
                property: "localModel>Language key - Sales order Header Texts5 - Text"
            },
            {
                label: "Text - Sales order Header Texts5 - Text",
                property: "localModel>Text - Sales order Header Texts5 - Text"
            },
            {

                label: "Sales Document line Item* - Sales order Item details - Key",
                property: "localModel>Sales Document line Item* - Sales order Item details - Key"
            },
            {
                label: "Material Number*  - Sales order Item details - Key",
                property: "localModel>Material Number*  - Sales order Item details - Key"
            },
            {
                label: "UoM - Sales order Item details - Item",
                property: "localModel>UoM - Sales order Item details - Item"
            },
            {

                label: "Quantity - Sales order Item details - Item",
                property: "localModel>Quantity - Sales order Item details - Item"
            },
            {
                label: "Customer Material Number - Sales order Item details - Item",
                property: "localModel>Customer Material Number - Sales order Item details - Item"
            },
            {
                label: "Customer PO Item number - Sales order Item details - Item",
                property: "localModel>Customer PO Item number - Sales order Item details - Item"
            },
            {

                label: "Ref document Line item number - Sales order Item details - Item",
                property: "localModel>Ref document Line item number - Sales order Item details - Item"
            },
            {
                label: "Customer Ref Date Used in ZRCR order type - Sales order Item details - Item",
                property: "localModel>Customer Ref Date Used in ZRCR order type - Sales order Item details - Item"
            },
            {
                label: "Your Reference Used in ZRCR order type - Sales order Item details - Item",
                property: "localModel>Your Reference Used in ZRCR order type - Sales order Item details - Item"
            },
            {

                label: "Sales Document line Item* - Sales order Item conditions",
                property: "localModel>Sales Document line Item* - Sales order Item conditions"
            },
            {
                label: "Condition Type ZMAN, GRWR* - Sales order Item conditions",
                property: "localModel>Condition Type ZMAN, GRWR* - Sales order Item conditions"
            },
            {
                label: "Amount - Sales order Item conditions - Condition Details",
                property: "localModel>Amount - Sales order Item conditions - Condition Details"
            },
            {

                label: "Condition unit (currency or percentage) - Sales order Item conditions - Condition Details",
                property: "localModel>Condition unit (currency or percentage) - Sales order Item conditions - Condition Details"
            },
            {
                label: "Condition Pricing Unit - Sales order Item conditions - Condition Details",
                property: "localModel>Condition Pricing Unit - Sales order Item conditions - Condition Details"
            },
            {
                label: "Condition Unit of Measure - Sales order Item conditions - Condition Detailsn",
                property: "localModel>Condition Unit of Measure - Sales order Item conditions - Condition Details"
            },
            {
                label: "Numerator for Conversion - Sales order Item conditions - Condition Details",
                property: "localModel>Numerator for Conversion - Sales order Item conditions - Condition Details"
            },
            {
                label: "Denominator for Conversion - Sales order Item conditions - Condition Details",
                property: "localModel>Denominator for Conversion - Sales order Item conditions - Condition Details"
            },
            {
                label: "Base Unit of Measure - Sales order Item conditions - Condition Details",
                property: "localModel>Base Unit of Measure - Sales order Item conditions - Condition Details"
            },
            {

                label: "Sales Document Item* - Sales order Schedule Line Data",
                property: "localModel>Sales Document Item* - Sales order Schedule Line Data"
            },
            {
                label: "Delivery Schedule Line Number* - Sales order Schedule Line Data",
                property: "localModel>Delivery Schedule Line Number* - Sales order Schedule Line Data"
            },
            {
                label: "Delivery Block - Sales order Schedule Line Data - Item",
                property: "localModel>Delivery Block - Sales order Schedule Line Data - Item"
            },
            {

                label: "Order quantity in sales units* - Sales order Schedule Line Data - Item",
                property: "localModel>Order quantity in sales units* - Sales order Schedule Line Data - Item"
            },
            {
                label: "Schedule line date or Delivery Date - SOSchedule Line Data - Item",
                property: "localModel>Schedule line date or Delivery Date - SOSchedule Line Data - Item"
            },
            {
                label: "SD Sales order Line Item - SD - SOItem texts - Key",
                property: "localModel>SD Sales order Line Item - SD - SOItem texts - Key"
            },
            {

                label: "Text ID 1 - SD - SOItem texts - Key",
                property: "localModel>Text ID 1 - SD - SOItem texts - Key"
            },
            {
                label: "Language key - SD - SOItem texts1 - Text",
                property: "localModel>Language key - SD - SOItem texts1 - Text"
            },
            {
                label: "Text - SD - SOItem texts1 - Text",
                property: "localModel>Text - SD - SOItem texts1 - Text"
            },
            {

                label: "Text ID 2 - SD - SOItem texts - Text",
                property: "localModel>Text ID 2 - SD - SOItem texts - Text"
            },
            {
                label: "Language key - SD - SOItem texts2 - Text",
                property: "localModel>Language key - SD - SOItem texts2 - Text"
            },
            {
                label: "Text - SD - SOItem texts2 - Text",
                property: "localModel>Text - SD - SOItem texts2 - Text"
            },
            {

                label: "Text ID 3 - SD - SOItem texts - Text",
                property: "localModel>Text ID 3 - SD - SOItem texts - Text"
            },
            {
                label: "Language key - SD - SOItem texts3 - Text",
                property: "localModel>Language key - SD - SOItem texts3 - Text"
            },
            {
                label: "Text - SD - SOItem texts3 - Text",
                property: "localModel>Text - SD - SOItem texts3 - Text"
            },
            {

                label: "Text ID 4 - SD - SOItem texts - Text",
                property: "localModel>Text ID 4 - SD - SOItem texts - Text"
            },
            {
                label: "Language key - SD - SOItem texts4 - Text",
                property: "localModel>Language key - SD - SOItem texts4 - Text"
            },
            {
                label: "Text - SD - SOItem texts4 - Text",
                property: "localModel>Text - SD - SOItem texts4 - Text"
            },
            {

                label: "Text ID 5 - SD - SOItem texts - Text",
                property: "localModel>Text ID 5 - SD - SOItem texts - Texty"
            },
            {
                label: "Language key - SD - SOItem texts5 - Text",
                property: "localModel>Language key - SD - SOItem texts5 - Text"
            },
            {
                label: "Text - SD - SOItem texts5 - Text",
                property: "localModel>Text - SD - SOItem texts5 - Text"
            },
            // {
            //     label: "Success",
            //     property: "localModel>Success"
            // },
            // {
            //     label: "Errors based on PO Number",
            //     property: "localModel>Errors based on PO Number"
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
                        sheetName: "Create"
                    }
                },
                // dataSource:oRowBinding,
                dataSource: [
                    {
                        localModel: [
                            {
                                "Sales Document Type* - SOHeader Key": "",
                                "Sales Organization* - SOHeader Key": "",
                                "Distribution Channel* - SOHeader Key": "",
                                "Division* - SOHeader Key": "",
                                "Order Reason* - SOHeader Key": "",
                                "Customer purchase order number* - SOHeader Key": "",
                                "Customer purchase order date - SOHeader Sales - Key": "",
                                "Requested delivery date - SOHeader Sales": "",
                                "Delivery Block - SOHeader Sales": "",
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
                fileName: "Create Mass Sales Orders.xlsx",
                worker: true,
            };
            return oSettings;
        },

        getRowObject: function(oRow){
           var oRetRow = {
                "Salesdocumentin": "SOCREATE",
                "DocType": oRow["Sales Document Type* - SOHeader Key"],
                "SalesOrg": oRow["Sales Organization* - SOHeader Key"],
                "DistrChan": oRow["Distribution Channel* - SOHeader Key"],
                "ORD_REASON": oRow["Order Reason* - SOHeader Key"],


                "Division": oRow["Division* - SOHeader Key"],
                "PurchNoS": oRow["Customer purchase order number* - SOHeader Key"],
                "PoDatS": this.getPostDate(oRow["Customer purchase order date - SOHeader Sales - Key"]),
                "ReqDateH": this.getPostDate(oRow["Requested delivery date - SOHeader Sales"]),
                "DlvBlock": oRow["Delivery Block - SOHeader Sales"],
                "Incoterms1": oRow["Incoterms - SOHeader Sales"],
                "Incoterms3l": oRow["Incoterms Location 2 (Destination) - SOHeader Sales"],


                "Pmnttrms": oRow["Terms of Payment Key - SOHeader Sales"],
                "CustGrp1": oRow["Customer Group 1 (Freight Code) - SOHeader Sales"],
                "RefDocL": oRow["Ref document number (Contract or Quote number) - SOHeader- Sales"],
                "SdDocCat": oRow["Document category for ref document - # B= Quotes G = Contracts  SOHeader Sales"],
                "PartnItem": oRow["Sales Document Item number - SOPartners - Key"],


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

        }

    };
});