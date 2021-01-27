

//Entity: Calculadora
//Calculadora. (Button) View: Calculadora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONGUSVBTJ_876284 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    var resultado;
    resultado = entities.Calculadora.numero1 + entities.Calculadora.numero2;
    entities.Calculadora.resultado = resultado;
    executeCommandEventArgs.commons.api.viewState.enable('VA_VABUTTONKFMXFJT_591284');
};