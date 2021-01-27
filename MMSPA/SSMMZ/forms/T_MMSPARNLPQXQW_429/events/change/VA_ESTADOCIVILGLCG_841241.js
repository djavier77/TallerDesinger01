

//Entity: Persona
//Persona.estadocivil (ComboBox) View: formPersona
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_ESTADOCIVILGLCG_841241 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    let estado=changedEventArgs.newValue;
	
	if(estado == "SO"){
		changedEventArgs.commons.api.viewState.hide('VA_NOMBRECONYUGUEU_317241');
		changedEventArgs.commons.api.viewState.hide('VA_APELLIDOCONYUUU_924241');

	}else{
		changedEventArgs.commons.api.viewState.show('VA_NOMBRECONYUGUEU_317241');
		changedEventArgs.commons.api.viewState.show('VA_APELLIDOCONYUUU_924241');
	}


};