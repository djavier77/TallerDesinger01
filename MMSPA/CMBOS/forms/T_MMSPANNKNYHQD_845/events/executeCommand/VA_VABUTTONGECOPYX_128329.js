

//Entity: Combos
//Combos. (Button) View: FormEstadoCivil
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONGECOPYX_128329 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    entities.Combos.estadoCivil = "";
    entities.Combos.actividadActual = "";
    entities.Combos.cboEstadoCivil = "Seleccione";
    executeCommandEventArgs.commons.api.viewState.hide('G_COMBOSYLNT_749329');

};