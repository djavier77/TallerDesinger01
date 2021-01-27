
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: FormCuentas
task.initData.VC_CUENTASAKB_765678 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    entities.FormCuentas.saldoCuentaOrigen = 2000;
    entities.FormCuentas.saldoCuentaDestino = 1000;
    entities.FormCuentas.cuentaOrigen = 240403023;
    entities.FormCuentas.cuentaDestino = 99051382;
    initDataEventArgs.commons.api.viewState.disable('VA_1AYSGWVXFBDXRQF_718307');
    initDataEventArgs.commons.api.viewState.disable('VA_2RBIFKCIFEHEVFE_502307');
    initDataEventArgs.commons.api.viewState.disable('VA_1TTKNHOPNCWLVLW_560307');
    initDataEventArgs.commons.api.viewState.disable('VA_2FRGBPZEZLXZJHP_567307');
};
