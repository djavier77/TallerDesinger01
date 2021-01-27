
//Start signature to Callback event to CM_TMMSPARN_8LZ
task.executeCommandCallback.CM_TMMSPARN_8LZ = function(entities, executeCommandCallbackEventArgs) {
     //here your code
     executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_LG64_ZTV43');
     executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});
};
