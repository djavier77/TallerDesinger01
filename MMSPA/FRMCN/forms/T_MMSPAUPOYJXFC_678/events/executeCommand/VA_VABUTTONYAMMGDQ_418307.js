

//Entity: FromCuentas
//FromCuentas. (Button) View: FormCuentas
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONYAMMGDQ_418307 = function(  entities, executeCommandEventArgs ) {
    executeCommandEventArgs.commons.execServer = false;
    if(entities.FormCuentas.valorTransferir <= entities.FormCuentas.saldoCuentaOrigen){
        entities.FormCuentas.saldoCuentaDestino = entities.FormCuentas.saldoCuentaDestino + entities.FormCuentas.valorTransferir;   
        entities.FormCuentas.saldoCuentaOrigen = entities.FormCuentas.saldoCuentaOrigen - entities.FormCuentas.valorTransferir; 
        executeCommandEventArgs.commons.messageHandler.showMessagesSuccess("Transaccion exitosa", false, null, 5000);
       }
    else{
        executeCommandEventArgs.commons.messageHandler.showMessagesError("El saldo es insuficiente", false, null, 500);
    }

};