
//Start signature to Callback event to CM_TMMSPAPM_4A7
task.executeCommandCallback.CM_TMMSPAPM_4A7 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
     executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_OH41_UYH16');
    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});
};
