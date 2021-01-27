

//Entity: Combos
//Combos.cboEstadoCivil (ComboBox) View: FormEstadoCivil
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_8683JYMWQUKXFNN_486329 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    if(entities.Combos.cboEstadoCivil==1){
        changedEventArgs.commons.api.viewState.hide('G_COMBOSYLNT_749329');
    }
    
    else if(entities.Combos.cboEstadoCivil==2){
        changedEventArgs.commons.api.viewState.show('G_COMBOSYLNT_749329');
        entities.Combos.estadoCivil = "Soltero";
        entities.Combos.actividadActual = "Listo para la farra";
        
    }
    else if(entities.Combos.cboEstadoCivil==3){
             changedEventArgs.commons.api.viewState.show('G_COMBOSYLNT_749329');
             entities.Combos.estadoCivil = "Casado";
             entities.Combos.actividadActual = "Lavando los platos";
            }

};