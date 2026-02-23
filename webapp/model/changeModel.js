sap.ui.define([], function () {
    "use strict";
    return {
        getColumns: function () {
            var aCols = [

                {
                    label: "Insert or Update Indicator* I = Insert;U= Update",
                    property: "Indicator"
                },
                {
                    label: "Sales Document Number* - SOHeader Key",
                    property: "Salesdocumentin"
                },
                {
                    label: "Order Reason* - SOHeader Key",
                    property: "ORD_REASON"
                },
                {
                    label: "Customer purchase order number* - SOHeader Key",
                    property: "PurchNoS"
                },
                {
                    label: "Customer purchase order date - SOHeader Sales - Key",
                    property: "PoDatS"
                },
                {
                    label: "Requested delivery date - SOHeader Sales",
                    property: "ReqDateH"
                },
                {

                    label: "Delivery Block - SOHeader Sales",
                    property: "DlvBlock"
                },
                {

                    label: "Order Overall Delivery Status - SOHeader Sales",
                    property: "OrdDelStat"
                },
                {

                    label: "Line-item overall delivery status - SOHeader Sales",
                    property: "ItmDelStat"
                },
                {
                    label: "Incoterms - SOHeader Sales",
                    property: "Incoterms1"
                },
                {
                    label: "Incoterms Location 2 (Destination) - SOHeader Sales",
                    property: "Incoterms3l"
                },
                {

                    label: "Terms of Payment Key - SOHeader Sales",
                    property: "Pmnttrms"
                },
                {
                    label: "Customer Group 1 (Freight Code) - SOHeader Sales",
                    property: "CustGrp1"
                },
                {
                    label: "Ref document number (Contract or Quote number) - SOHeader- Sales",
                    property: "RefDocL"
                },
                {
                    label: "Document category for ref document - # B= Quotes G = Contracts  SOHeader Sales",
                    property: "SdDocCat"
                },
                {
                    label: "Sales Document Item number - SOPartners - Key",
                    property: "PartnItem"
                },
                {
                    label: "Partner Function 1* - SOPartners - Key",
                    property: "PartnRole1"
                },
                {

                    label: "Customer Number* - SOPartners1 - Key",
                    property: "PartnNumb1"
                },
                {
                    label: "Partner Function 2* - SOPartners - Key",
                    property: "PartnRole2"
                },
                {
                    label: "Customer Number* - SOPartners2 - Key",
                    property: "PartnNumb2"
                },
                {

                    label: "Partner Function 3* - SOPartners - Key",
                    property: "PartnRole3"
                },
                {
                    label: "Customer Number* - SOPartners3 - Key",
                    property: "PartnNumb3"
                },
                {
                    label: "Partner Function 4* - SOPartners - Key",
                    property: "PartnRole4"
                },
                {

                    label: "Customer Number* - SOPartners4 - Key",
                    property: "PartnNumb4"
                },
                {
                    label: "Partner Function 5* - SOPartners - Key",
                    property: "PartnRole5"
                },
                {
                    label: "Customer Number* - SOPartners5 - Key",
                    property: "PartnNumb5"
                },
                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> Start
                {
                    label: "Partner Function 6* - SOPartners - Key",
                    property: "PartnRole6"
                },
                {
                    label: "Customer Number* - SOPartners6 - Key",
                    property: "PartnNumb6"
                },

                {
                    label: "Partner Function 7* - SOPartners - Key",
                    property: "PartnRole7"
                },
                {
                    label: "Customer Number* - SOPartners7 - Key",
                    property: "PartnNumb7"
                },
                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> End


                {

                    label: "Text ID 1 - Sales order Header Texts - Key",
                    property: "HdrTextId1"
                },
                {
                    label: "Language key - Sales order Header Texts1 - Text",
                    property: "HdrLangu1"
                },
                {
                    label: "Text - Sales order Header Texts1 - Text",
                    property: "HdrTextLine1"
                },
                {

                    label: "Text ID 2 - Sales order Header Texts - Key",
                    property: "HdrTextId2"
                },
                {
                    label: "Language key - Sales order Header Texts2 - Text",
                    property: "HdrLangu2"
                },
                {
                    label: "Text - Sales order Header Texts2 - Text",
                    property: "HdrTextLine2"
                },
                {

                    label: "Text ID 3 - Sales order Header Texts - Key",
                    property: "HdrTextId3"
                },
                {
                    label: "Language key - Sales order Header Texts3 - Text",
                    property: "HdrLangu3"
                },
                {
                    label: "Text - Sales order Header Texts3 - Text",
                    property: "HdrTextLine3"
                },
                {

                    label: "Text ID 4 - Sales order Header Texts - Key",
                    property: "HdrTextId4"
                },
                {
                    label: "Language key - Sales order Header Texts4 - Text",
                    property: "HdrLangu4"
                },
                {
                    label: "Text - Sales order Header Texts4 - Text",
                    property: "HdrTextLine4"
                },
                {

                    label: "Text ID 5 - Sales order Header Texts - Key",
                    property: "HdrTextId5"
                },
                {
                    label: "Language key - Sales order Header Texts5 - Text",
                    property: "HdrLangu5"
                },
                {
                    label: "Text - Sales order Header Texts5 - Text",
                    property: "HdrTextLine5"
                },
                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> Start

                {

                    label: "Text ID 6 - Sales order Header Texts - Key",
                    property: "HdrTextId6"
                },
                {
                    label: "Language key - Sales order Header Texts6 - Text",
                    property: "HdrLangu6"
                },
                {
                    label: "Text - Sales order Header Texts6 - Text",
                    property: "HdrTextLine6"
                },

                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> End
                {

                    label: "Sales Document line Item* - Sales order Item details - Key",
                    property: "ItemNumber"
                },
                {
                    label: "Material Number*  - Sales order Item details - Key",
                    property: "Material"
                },
                {
                    label: "UoM - Sales order Item details - Item",
                    property: "TargetQu"
                },
                {

                    label: "Quantity - Sales order Item details - Item",
                    property: "TargetQty"
                },
                {
                    label: "Customer Material Number - Sales order Item details - Item",
                    property: "CustMat35"
                },
                {
                    label: "Customer PO Item number - Sales order Item details - Item",
                    property: "PoItmNo"
                },
                {

                    label: "Ref document Line item number - Sales order Item details - Item",
                    property: "RefDocIt"
                },
                {
                    label: "Customer Ref Date Used in ZRCR order type - Sales order Item details - Item",
                    property: "CustRefDate"
                },
                {
                    label: "Your Reference Used in ZRCR order type - Sales order Item details - Item",
                    property: "Ref1"
                },
                {

                    label: "Sales Document line Item* - Sales order Item conditions",
                    property: "CondItem"
                },
                {
                    label: "Condition Type ZMAN, GRWR* - Sales order Item conditions",
                    property: "CondType"
                },
                {
                    label: "Amount - Sales order Item conditions - Condition Details",
                    property: "CondValue"
                },
                {

                    label: "Condition unit (currency or percentage) - Sales order Item conditions - Condition Details",
                    property: "Currency"
                },
                {
                    label: "Condition Pricing Unit - Sales order Item conditions - Condition Details",
                    property: "CondPUnt"
                },
                {
                    label: "Condition Unit of Measure - Sales order Item conditions - Condition Detailsn",
                    property: "CondUnit"
                },
                {
                    label: "Numerator for Conversion - Sales order Item conditions - Condition Details",
                    property: "Numconvert"
                },
                {
                    label: "Denominator for Conversion - Sales order Item conditions - Condition Details",
                    property: "Denominato"
                },
                {
                    label: "Base Unit of Measure - Sales order Item conditions - Condition Details",
                    property: "IsoUnit"
                },
                {

                    label: "Sales Document Item* - Sales order Schedule Line Data",
                    property: "SchedItem"
                },
                {
                    label: "Delivery Schedule Line Number* - Sales order Schedule Line Data",
                    property: "SchedLine"
                },
                {
                    label: "Delivery Block - Sales order Schedule Line Data - Item",
                    property: "ReqDlvBl"
                },
                {

                    label: "Order quantity in sales units* - Sales order Schedule Line Data - Item",
                    property: "ReqQty"
                },
                {
                    label: "Schedule line date or Delivery Date - SOSchedule Line Data - Item",
                    property: "DlvDate"
                },
                {
                    label: "SD Sales order Line Item - SD - SOItem texts - Key",
                    property: "ItemText"
                },
                {

                    label: "Text ID 1 - SD - SOItem texts - Key",
                    property: "ItemTextId1"
                },
                {
                    label: "Language key - SD - SOItem texts1 - Text",
                    property: "ItemLangu1"
                },
                {
                    label: "Text - SD - SOItem texts1 - Text",
                    property: "ItemTextLine1"
                },
                {

                    label: "Text ID 2 - SD - SOItem texts - Text",
                    property: "ItemTextId2"
                },
                {
                    label: "Language key - SD - SOItem texts2 - Text",
                    property: "ItemLangu2"
                },
                {
                    label: "Text - SD - SOItem texts2 - Text",
                    property: "ItemTextLine2"
                },
                {

                    label: "Text ID 3 - SD - SOItem texts - Text",
                    property: "ItemTextId3"
                },
                {
                    label: "Language key - SD - SOItem texts3 - Text",
                    property: "ItemTextId3"
                },
                {
                    label: "Text - SD - SOItem texts3 - Text",
                    property: "ItemTextLine3"
                },
                {

                    label: "Text ID 4 - SD - SOItem texts - Text",
                    property: "ItemTextId4"
                },
                {
                    label: "Language key - SD - SOItem texts4 - Text",
                    property: "ItemLangu4"
                },
                {
                    label: "Text - SD - SOItem texts4 - Text",
                    property: "ItemTextLine4"
                },
                {

                    label: "Text ID 5 - SD - SOItem texts - Text",
                    property: "ItemTextId5"
                },
                {
                    label: "Language key - SD - SOItem texts5 - Text",
                    property: "ItemLangu5"
                },
                {
                    label: "Text - SD - SOItem texts5 - Text",
                    property: "ItemTextLine5"
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
            if (sDate && sDate != '00000000' && sDate != '') {
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
                var postDate = "" + oDate.getFullYear() + sMonth + sDay;
                console.log("postDate: sDate:" + sDate + " : " + postDate);
                return postDate;
            }
            return "";
        },

        // convertDate: function (yyyymmddDateString) {
        //     // Extract year, month, and day parts from the YYYYMMDD string
        //     const year = yyyymmddDateString.substring(0, 4);
        //     const month = yyyymmddDateString.substring(4, 6);
        //     const day = yyyymmddDateString.substring(6, 8);

        //     // Concatenate the parts in the desired DD/MM/YYYY format
        //     return `${day}/${month}/${year}`;
        // },
        // isValidYYYYMMDD: function (dateString) {
        //     // Regex to match YYYYMMDD format
        //     // ^\d{4} matches exactly four digits for the year at the beginning of the string.
        //     // (0[1-9]|1[0-2]) matches a month from 01 to 12.
        //     // (0[1-9]|[12]\d|3[01]) matches a day from 01 to 31.
        //     // $ asserts the position at the end of the string.
        //     const regex = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;

        //     if (!regex.test(dateString)) {
        //         return false; // Does not match the basic YYYYMMDD pattern
        //     }

        //     // Further validation for date validity (e.g., 31 days in April, leap years)
        //     const year = parseInt(dateString.substring(0, 4), 10);
        //     const month = parseInt(dateString.substring(4, 6), 10);
        //     const day = parseInt(dateString.substring(6, 8), 10);

        //     // Create a Date object - remember month is 0-indexed in JavaScript Date
        //     const date = new Date(year, month - 1, day);

        //     // Check if the created Date object matches the input values
        //     // This helps catch invalid dates like '20230230' (February 30th)
        //     return date.getFullYear() === year &&
        //         date.getMonth() === month - 1 &&
        //         date.getDate() === day;
        // },

        appendZero: function (nDate) {
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
                                "Indicator": "",
                                "Salesdocumentin": "",
                                // "Sales Document Type* - SOHeader Key": "",
                                // "Sales Organization* - SOHeader Key": "",
                                // "Distribution Channel* - SOHeader Key": "",
                                // "Division* - SOHeader Key": "",
                                "ORD_REASON": "",
                                "PurchNoS": "",
                                "PoDatS": "",
                                "ReqDateH": "",
                                "DlvBlock": "",
                                "OrdDelStat": "",
                                "Incoterms1": "",
                                "Incoterms3l": "",
                                "Pmnttrms": "",
                                "CustGrp1": "",
                                "RefDocL": "",
                                "SdDocCat": "",
                                "PartnItem": "",
                                "PartnRole1": "",
                                "PartnNumb1": "",
                                "PartnRole2": "",
                                "PartnNumb2": "",
                                "PartnRole3": "",
                                "PartnNumb3": "",
                                "PartnRole4": "",
                                "PartnNumb4": "",
                                "PartnRole5": "",
                                "PartnNumb5": "",

                                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> Start

                                "PartnRole6": "",
                                "PartnNumb6": "",

                                "PartnRole7": "",
                                "PartnNumb7": "",

                                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> End
                                "ItmDelStat": "",
                                "HdrTextId1": "",
                                "HdrLangu1": "",
                                "HdrTextLine1": "",
                                "HdrTextId2": "",
                                "HdrLangu2": "",
                                "HdrTextLine2": "",
                                "HdrTextId3": "",
                                "HdrLangu3": "",
                                "HdrTextLine3": "",
                                "HdrTextId4": "",
                                "HdrLangu4": "",
                                "HdrTextLine4": "",
                                "HdrTextId5": "",
                                "HdrLangu5": "",
                                "HdrTextLine5": "",

                                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> Start

                                "HdrTextId6": "",
                                "HdrLangu6": "",
                                "HdrTextLine6": "",

                                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> End
                                "ItemNumber": "",
                                "Material": "",
                                "TargetQu": "",
                                "TargetQty": "",
                                "CustMat35": "",
                                "PoItmNo": "",
                                "RefDocIt": "",
                                "CustRefDate": "",
                                "Ref1": "",
                                "CondItem": "",
                                "CondType": "",
                                "CondValue": "",
                                "Currency": "",
                                "CondPUnt": "",
                                "CondUnit": "",
                                "Numconvert": "",
                                "Denominato": "",
                                "IsoUnit": "",
                                "SchedItem": "",
                                "SchedLine": "",
                                "ReqDlvBl": "",
                                "ReqQty": "",
                                "DlvDate": "",
                                "ItemText": "",
                                "ItemTextId1": "",
                                "ItemLangu1": "",
                                "ItemTextLine1": "",
                                "ItemTextId2": "",
                                "ItemLangu2": "",
                                "ItemTextLine2": "",
                                "ItemTextId3": "",
                                "ItemTextId3": "",
                                "ItemTextLine3": "",
                                "ItemTextId4": "",
                                "ItemLangu4": "",
                                "ItemTextLine4": "",
                                "ItemTextId5": "",
                                "ItemLangu5": "",
                                "ItemTextLine5": "",
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

        getRowLabelWithKey(sKey) {
            var aColumns = this.getColumns();
            var _column = aColumns.find(oColumn => oColumn.property === sKey);
            if (_column) {
                console.log(sKey, "=>", _column.label);
                return _column.label;
            }

        },


        getRowObjectFromExcel: function (oRow) {
            var oRetRow = {
                "Indicator": oRow[this.getRowLabelWithKey("Indicator")] ? oRow[this.getRowLabelWithKey("Indicator")] : "U",
                "Salesdocumentin": oRow[this.getRowLabelWithKey("Salesdocumentin")],
                "ORD_REASON": oRow[this.getRowLabelWithKey("ORD_REASON")],


                // "Division": oRow[this.getRowLabelWithKey("Division* - SOHeader Key")],
                "PurchNoS": oRow[this.getRowLabelWithKey("PurchNoS")],
                // "PoDatS": this.getPostDate(oRow[this.getRowLabelWithKey("PoDatS")]),
                // "ReqDateH": this.getPostDate(oRow[this.getRowLabelWithKey("ReqDateH")]),
                "PoDatS": oRow[this.getRowLabelWithKey("PoDatS")],
                "ReqDateH": oRow[this.getRowLabelWithKey("ReqDateH")],
                "DlvBlock": oRow[this.getRowLabelWithKey("DlvBlock")],
                "Incoterms1": oRow[this.getRowLabelWithKey("Incoterms1")],
                "Incoterms3l": oRow[this.getRowLabelWithKey("Incoterms3l")],
                "OrdDelStat": oRow[this.getRowLabelWithKey("OrdDelStat")],


                "Pmnttrms": oRow[this.getRowLabelWithKey("Pmnttrms")],
                "CustGrp1": oRow[this.getRowLabelWithKey("CustGrp1")],
                "RefDocL": oRow[this.getRowLabelWithKey("RefDocL")],
                "SdDocCat": oRow[this.getRowLabelWithKey("SdDocCat")],
                "PartnItem": oRow[this.getRowLabelWithKey("PartnItem")],
                "ItmDelStat": oRow[this.getRowLabelWithKey("ItmDelStat")],


                "PartnRole1": oRow[this.getRowLabelWithKey("PartnRole1")],
                "PartnNumb1": oRow[this.getRowLabelWithKey("PartnNumb1")],
                "PartnRole2": oRow[this.getRowLabelWithKey("PartnRole2")],
                "PartnNumb2": oRow[this.getRowLabelWithKey("PartnNumb2")],
                "PartnRole3": oRow[this.getRowLabelWithKey("PartnRole3")],
                "PartnNumb3": oRow[this.getRowLabelWithKey("PartnNumb3")],
                "PartnRole4": oRow[this.getRowLabelWithKey("PartnRole4")],
                "PartnNumb4": oRow[this.getRowLabelWithKey("PartnNumb4")],
                "PartnRole5": oRow[this.getRowLabelWithKey("PartnRole5")],
                "PartnNumb5": oRow[this.getRowLabelWithKey("PartnNumb5")],

                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> Start

                "PartnRole6": oRow[this.getRowLabelWithKey("PartnRole6")],
                "PartnNumb6": oRow[this.getRowLabelWithKey("PartnNumb6")],
                "PartnRole7": oRow[this.getRowLabelWithKey("PartnRole7")],
                "PartnNumb7": oRow[this.getRowLabelWithKey("PartnNumb7")],

                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> End
                "HdrTextId1": oRow[this.getRowLabelWithKey("HdrTextId1")],
                "HdrLangu1": oRow[this.getRowLabelWithKey("HdrLangu1")],
                "HdrTextLine1": oRow[this.getRowLabelWithKey("HdrTextLine1")],
                "HdrTextId2": oRow[this.getRowLabelWithKey("HdrTextId2")],
                "HdrLangu2": oRow[this.getRowLabelWithKey("HdrLangu2")],
                "HdrTextLine2": oRow[this.getRowLabelWithKey("HdrTextLine2")],
                "HdrTextId3": oRow[this.getRowLabelWithKey("HdrTextId3")],
                "HdrLangu3": oRow[this.getRowLabelWithKey("HdrLangu3")],
                "HdrTextLine3": oRow[this.getRowLabelWithKey("HdrTextLine3")],
                "HdrTextId4": oRow[this.getRowLabelWithKey("HdrTextId4")],
                "HdrLangu4": oRow[this.getRowLabelWithKey("HdrLangu4")],
                "HdrTextLine4": oRow[this.getRowLabelWithKey("HdrTextLine4")],
                "HdrTextId5": oRow[this.getRowLabelWithKey("HdrTextId5")],
                "HdrLangu5": oRow[this.getRowLabelWithKey("HdrLangu5")],
                "HdrTextLine5": oRow[this.getRowLabelWithKey("HdrTextLine5")],

                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> Start
                "HdrTextId6": oRow[this.getRowLabelWithKey("HdrTextId6")],
                "HdrLangu6": oRow[this.getRowLabelWithKey("HdrLangu6")],
                "HdrTextLine6": oRow[this.getRowLabelWithKey("HdrTextLine6")],
                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> End

                "ItemNumber": oRow[this.getRowLabelWithKey("ItemNumber")],
                "Material": oRow[this.getRowLabelWithKey("Material")],
                "TargetQu": oRow[this.getRowLabelWithKey("TargetQu")],
                "TargetQty": oRow[this.getRowLabelWithKey("TargetQty")],
                "CustMat35": oRow[this.getRowLabelWithKey("CustMat35")],
                "PoItmNo": oRow[this.getRowLabelWithKey("PoItmNo")],
                "RefDocIt": oRow[this.getRowLabelWithKey("RefDocIt")],
                // "CustRefDate": this.getPostDate(oRow[this.getRowLabelWithKey("CustRefDate")]),
                "CustRefDate": oRow[this.getRowLabelWithKey("CustRefDate")],
                "Ref1": oRow[this.getRowLabelWithKey("Ref1")],
                "CondItem": oRow[this.getRowLabelWithKey("CondItem")],
                "CondType": oRow[this.getRowLabelWithKey("CondType")],
                "CondValue": oRow[this.getRowLabelWithKey("CondValue")],
                "Currency": oRow[this.getRowLabelWithKey("Currency")],
                "CondPUnt": oRow[this.getRowLabelWithKey("CondPUnt")],
                "CondUnit": oRow[this.getRowLabelWithKey("CondUnit")],
                "Numconvert": oRow[this.getRowLabelWithKey("Numconvert")],
                "Denominato": oRow[this.getRowLabelWithKey("Denominato")],
                "IsoUnit": oRow[this.getRowLabelWithKey("IsoUnit")],
                "SchedItem": oRow[this.getRowLabelWithKey("SchedItem")],
                "SchedLine": oRow[this.getRowLabelWithKey("SchedLine")],
                "ReqDlvBl": oRow[this.getRowLabelWithKey("ReqDlvBl")],
                "ReqQty": oRow[this.getRowLabelWithKey("ReqQty")],
                // "DlvDate": this.getPostDate(oRow[this.getRowLabelWithKey("DlvDate")]),
                "DlvDate": oRow[this.getRowLabelWithKey("DlvDate")],
                "ItemText": oRow[this.getRowLabelWithKey("ItemText")],
                "ItemTextId1": oRow[this.getRowLabelWithKey("ItemTextId1")],
                "ItemLangu1": oRow[this.getRowLabelWithKey("ItemLangu1")],
                "ItemTextLine1": oRow[this.getRowLabelWithKey("ItemTextLine1")],
                "ItemTextId2": oRow[this.getRowLabelWithKey("ItemTextId2")],
                "ItemLangu2": oRow[this.getRowLabelWithKey("ItemLangu2")],
                "ItemTextLine2": oRow[this.getRowLabelWithKey("ItemTextLine2")],
                "ItemTextId3": oRow[this.getRowLabelWithKey("ItemTextId3")],
                "ItemLangu3": oRow[this.getRowLabelWithKey("ItemTextId3")],
                "ItemTextLine3": oRow[this.getRowLabelWithKey("ItemTextLine3")],
                "ItemTextId4": oRow[this.getRowLabelWithKey("ItemTextId4")],
                "ItemLangu4": oRow[this.getRowLabelWithKey("ItemLangu4")],
                "ItemTextLine4": oRow[this.getRowLabelWithKey("ItemTextLine4")],
                "ItemTextId5": oRow[this.getRowLabelWithKey("ItemTextId5")],
                "ItemLangu5": oRow[this.getRowLabelWithKey("ItemLangu5")],
                "ItemTextLine5": oRow[this.getRowLabelWithKey("ItemTextLine5")],
                // "SuccessMsg": oRow[this.getRowLabelWithKey("Success")],
                // "ErrorMsg": oRow[this.getRowLabelWithKey("Errors based on PO Number")]
            };

            return oRetRow;

        },

        getRowObject: function (oRow) {
            var oRetRow = {
                "Indicator": oRow["Indicator"] ? oRow["Indicator"] : "U",
                "Salesdocumentin": oRow["Salesdocumentin"],
                "ORD_REASON": oRow["ORD_REASON"],


                // "Division": oRow["Division* - SOHeader Key"],
                "PurchNoS": oRow["PurchNoS"],
                "PoDatS": this.getPostDate(oRow["PoDatS"]),
                "ReqDateH": this.getPostDate(oRow["ReqDateH"]),
                "DlvBlock": oRow["DlvBlock"],
                "Incoterms1": oRow["Incoterms1"],
                "Incoterms3l": oRow["Incoterms3l"],
                "OrdDelStat": oRow["OrdDelStat"],


                "Pmnttrms": oRow["Pmnttrms"],
                "CustGrp1": oRow["CustGrp1"],
                "RefDocL": oRow["RefDocL"],
                "SdDocCat": oRow["SdDocCat"],
                "PartnItem": oRow["PartnItem"],
                "ItmDelStat": oRow["ItmDelStat"],


                "PartnRole1": oRow["PartnRole1"],
                "PartnNumb1": oRow["PartnNumb1"],
                "PartnRole2": oRow["PartnRole2"],
                "PartnNumb2": oRow["PartnNumb2"],
                "PartnRole3": oRow["PartnRole3"],
                "PartnNumb3": oRow["PartnNumb3"],
                "PartnRole4": oRow["PartnRole4"],
                "PartnNumb4": oRow["PartnNumb4"],
                "PartnRole5": oRow["PartnRole5"],
                "PartnNumb5": oRow["PartnNumb5"],

                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> Start

                "PartnRole6": oRow["PartnRole6"],
                "PartnNumb6": oRow["PartnNumb6"],
                "PartnRole7": oRow["PartnRole7"],
                "PartnNumb7": oRow["PartnNumb7"],

                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> End
                "HdrTextId1": oRow["HdrTextId1"],
                "HdrLangu1": oRow["HdrLangu1"],
                "HdrTextLine1": oRow["HdrTextLine1"],
                "HdrTextId2": oRow["HdrTextId2"],
                "HdrLangu2": oRow["HdrLangu2"],
                "HdrTextLine2": oRow["HdrTextLine2"],
                "HdrTextId3": oRow["HdrTextId3"],
                "HdrLangu3": oRow["HdrLangu3"],
                "HdrTextLine3": oRow["HdrTextLine3"],
                "HdrTextId4": oRow["HdrTextId4"],
                "HdrLangu4": oRow["HdrLangu4"],
                "HdrTextLine4": oRow["HdrTextLine4"],
                "HdrTextId5": oRow["HdrTextId5"],
                "HdrLangu5": oRow["HdrLangu5"],
                "HdrTextLine5": oRow["HdrTextLine5"],

                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> Start
                "HdrTextId6": oRow["HdrTextId6"],
                "HdrLangu6": oRow["HdrLangu6"],
                "HdrTextLine6": oRow["HdrTextLine6"],
                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> End

                "ItemNumber": oRow["ItemNumber"],
                "Material": oRow["Material"],
                "TargetQu": oRow["TargetQu"],
                "TargetQty": oRow["TargetQty"],
                "CustMat35": oRow["CustMat35"],
                "PoItmNo": oRow["PoItmNo"],
                "RefDocIt": oRow["RefDocIt"],
                "CustRefDate": this.getPostDate(oRow["CustRefDate"]),
                "Ref1": oRow["Ref1"],
                "CondItem": oRow["CondItem"],
                "CondType": oRow["CondType"],
                "CondValue": oRow["CondValue"],
                "Currency": oRow["Currency"],
                "CondPUnt": oRow["CondPUnt"],
                "CondUnit": oRow["CondUnit"],
                "Numconvert": oRow["Numconvert"],
                "Denominato": oRow["Denominato"],
                "IsoUnit": oRow["IsoUnit"],
                "SchedItem": oRow["SchedItem"],
                "SchedLine": oRow["SchedLine"],
                "ReqDlvBl": oRow["ReqDlvBl"],
                "ReqQty": oRow["ReqQty"],
                "DlvDate": this.getPostDate(oRow["DlvDate"]),
                "ItemText": oRow["ItemText"],
                "ItemTextId1": oRow["ItemTextId1"],
                "ItemLangu1": oRow["ItemLangu1"],
                "ItemTextLine1": oRow["ItemTextLine1"],
                "ItemTextId2": oRow["ItemTextId2"],
                "ItemLangu2": oRow["ItemLangu2"],
                "ItemTextLine2": oRow["ItemTextLine2"],
                "ItemTextId3": oRow["ItemTextId3"],
                "ItemLangu3": oRow["ItemTextId3"],
                "ItemTextLine3": oRow["ItemTextLine3"],
                "ItemTextId4": oRow["ItemTextId4"],
                "ItemLangu4": oRow["ItemLangu4"],
                "ItemTextLine4": oRow["ItemTextLine4"],
                "ItemTextId5": oRow["ItemTextId5"],
                "ItemLangu5": oRow["ItemLangu5"],
                "ItemTextLine5": oRow["ItemTextLine5"],
                // "SuccessMsg": oRow["Success"],
                // "ErrorMsg": oRow["Errors based on PO Number"]
            };

            return oRetRow;

        },

        getBindingRowObject: function (oRow) {
            var oRetRow = {
                "Indicator": oRow.Indicator ? oRow.Indicator : "U",
                "Salesdocumentin": oRow.Salesdocumentin,
                // "DocType": oRow["Sales Document Type* - SOHeader Key"],
                // "SalesOrg": oRow["Sales Organization* - SOHeader Key"],
                // "DistrChan": oRow["Distribution Channel* - SOHeader Key"],
                "ORD_REASON": oRow.ORD_REASON,


                // "Division": oRow["Division* - SOHeader Key"],
                "PurchNoS": oRow.PurchNoS,
                "PoDatS": this.getUIDate(oRow.PoDatS),
                "ReqDateH": this.getUIDate(oRow.ReqDateH),
                "DlvBlock": oRow.DlvBlock,
                "Incoterms1": oRow.Incoterms1,
                "Incoterms3l": oRow.Incoterms3l,
                "OrdDelStat": oRow.OrdDelStat,


                "Pmnttrms": oRow.Pmnttrms,
                "CustGrp1": oRow.CustGrp1,
                "RefDocL": oRow.RefDocL,
                "SdDocCat": oRow.SdDocCat,
                "PartnItem": oRow.PartnItem,
                "ItmDelStat": oRow.ItmDelStat,


                "PartnRole1": oRow.PartnRole1,
                "PartnNumb1": oRow.PartnNumb1,
                "PartnRole2": oRow.PartnRole2,
                "PartnNumb2": oRow.PartnNumb2,
                "PartnRole3": oRow.PartnRole3,
                "PartnNumb3": oRow.PartnNumb3,
                "PartnRole4": oRow.PartnRole4,
                "PartnNumb4": oRow.PartnNumb4,
                "PartnRole5": oRow.PartnRole5,
                "PartnNumb5": oRow.PartnNumb5,

                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> Start

                "PartnRole6": oRow.PartnRole6,
                "PartnNumb6": oRow.PartnNumb6,
                "PartnRole7": oRow.PartnRole7,
                "PartnNumb7": oRow.PartnNumb7,

                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> End

                "HdrTextId1": oRow.HdrTextId1,
                "HdrLangu1": oRow.HdrLangu1,
                "HdrTextLine1": oRow.HdrTextLine1,
                "HdrTextId2": oRow.HdrTextId2,
                "HdrLangu2": oRow.HdrLangu2,
                "HdrTextLine2": oRow.HdrTextLine2,
                "HdrTextId3": oRow.HdrTextId3,
                "HdrLangu3": oRow.HdrLangu3,
                "HdrTextLine3": oRow.HdrTextLine3,
                "HdrTextId4": oRow.HdrTextId4,
                "HdrLangu4": oRow.HdrLangu4,
                "HdrTextLine4": oRow.HdrTextLine4,
                "HdrTextId5": oRow.HdrTextId5,
                "HdrLangu5": oRow.HdrLangu5,
                "HdrTextLine5": oRow.HdrTextLine5,
                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> Start
                "HdrTextId6": oRow.HdrTextId6,
                "HdrLangu6": oRow.HdrLangu6,
                "HdrTextLine6": oRow.HdrTextLine6,
                // US: 431142 : Task 438710: Fiori Development (OTC_2.1_E169)=> End
                "ItemNumber": oRow.ItemNumber,
                "Material": oRow.Material,
                "TargetQu": oRow.TargetQu,
                "TargetQty": oRow.TargetQty,
                "CustMat35": oRow.CustMat35,
                "PoItmNo": oRow.PoItmNo,
                "RefDocIt": oRow.RefDocIt,
                "CustRefDate": this.getUIDate(oRow.CustRefDate),
                "Ref1": oRow.Ref1,
                "CondItem": oRow.CondItem,
                "CondType": oRow.CondType,
                "CondValue": oRow.CondValue,
                "Currency": oRow.Currency,
                "CondPUnt": oRow.CondPUnt,
                "CondUnit": oRow.CondUnit,
                "Numconvert": oRow.Numconvert,
                "Denominato": oRow.Denominato,
                "IsoUnit": oRow.IsoUnit,
                "SchedItem": oRow.SchedItem,
                "SchedLine": oRow.SchedLine,
                "ReqDlvBl": oRow.ReqDlvBl,
                "ReqQty": oRow.ReqQty,
                "DlvDate": this.getUIDate(oRow.DlvDate),
                "ItemText": oRow.ItemText,
                "ItemTextId1": oRow.ItemTextId1,
                "ItemLangu1": oRow.ItemLangu1,
                "ItemTextLine1": oRow.ItemTextLine1,
                "ItemTextId2": oRow.ItemTextId2,
                "ItemLangu2": oRow.ItemLangu2,
                "ItemTextLine2": oRow.ItemTextLine2,
                "ItemTextId3": oRow.ItemTextId3,
                "ItemTextId3": oRow.ItemLangu3,
                "ItemTextLine3": oRow.ItemTextLine3,
                "ItemTextId4": oRow.ItemTextId4,
                "ItemLangu4": oRow.ItemLangu4,
                "ItemTextLine4": oRow.ItemTextLine4,
                "ItemTextId5": oRow.ItemTextId5,
                "ItemLangu5": oRow.ItemLangu5,
                "ItemTextLine5": oRow.ItemTextLine5,
                // "Success": oRow.SuccessMsg,
                // "Errors based on PO Number": oRow.ErrorMsg
            };

            return oRetRow;

        }

    };
});