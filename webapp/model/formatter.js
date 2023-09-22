sap.ui.define([], function() {	
"use strict";
	return {	
        statusText:function(valText){
            if(valText === null || valText === undefined) {                			                
				return "Required Value";
            } else  {
                return valText;
            }
        },		
		statusColor: function(val) {
			if(val === undefined || val === null || val === "Enter Value" ) {                			                
				return "Error";
            } else {
                return "Success";
            }
        },

        getMessageType: function(type){
            switch(type) {
                case "E":
                  // code block
                  return sap.ui.core.MessageType.Error;
                case "I":
                  // code block
                  return sap.ui.core.MessageType.Information;
                  case "S":
                  // code block
                  return sap.ui.core.MessageType.Success;
                  case "W":
                  // code block
                  return sap.ui.core.MessageType.Warning;
                default:
                  return sap.ui.core.MessageType.None;
              }

        }
        
    };
});