

//Entity: FiltroBusquedaPersona
//FiltroBusquedaPersona.filtro (ComboBox) View: formFiltro
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_FILTROUDKKWAGHX_950904 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    
    let valor = changedEventArgs.newValue;

    if(valor === "PE"){
		changedEventArgs.commons.api.viewState.hide('G_FILTROZJJU_285904');
        changedEventArgs.commons.api.viewState.show('G_FILTROMMNV_251904');

	}else{
        changedEventArgs.commons.api.viewState.hide('G_FILTROMMNV_251904');
		changedEventArgs.commons.api.viewState.show('G_FILTROZJJU_285904');
	}

};