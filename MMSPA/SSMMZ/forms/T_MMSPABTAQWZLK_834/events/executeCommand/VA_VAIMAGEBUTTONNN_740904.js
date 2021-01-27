

//Entity: FiltroBusquedaPersona
//FiltroBusquedaPersona. (ImageButton) View: formFiltro
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_740904 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    let valor = entities.FiltroBusquedaPersona.filtro;
    
    if(valor === 'PE'){
         executeCommandEventArgs.commons.api.grid.refresh('QV_HP64_QLZ86');
        //executeQueryEventArgs.commons.serverParameters.Persona = true;
        }
        
    else if(valor === 'CL'){
    
        executeCommandEventArgs.commons.api.grid.refresh('QV_GS41_EZE19');
        //executeQueryEventArgs.commons.serverParameters.Cliente = true;
    }

};