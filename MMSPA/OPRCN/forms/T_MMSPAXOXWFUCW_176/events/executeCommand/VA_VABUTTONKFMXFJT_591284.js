

//Entity: Calculadora
//Calculadora. (Button) View: Calculadora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONKFMXFJT_591284 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    entities.Calculadora.numero1 = '';
    entities.Calculadora.numero2 = '';
    entities.Calculadora.resultado = '';
    executeCommandEventArgs.commons.api.viewState.disable('VA_VABUTTONKFMXFJT_591284');
};