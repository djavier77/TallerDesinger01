
//Start signature to Callback event to CM_TMMSPARN_XP0
task.executeCommandCallback.CM_TMMSPARN_XP0 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_LG64_ZTV43');
    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});
};
