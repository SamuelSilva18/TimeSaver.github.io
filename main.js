
document.addEventListener('DOMContentLoaded', function(){
	console.log("Hey");

	document.getElementById("buttomSave").onclick = createRecordatorio;
});

function textoValido(texto){
	if(texto == null || texto == "" || texto.lenght < 1){
		return false;
	}else{
		return true;
	}
}

function mostrarError(){
	var html = "";
	html += '<div class="alert alert-danger" role="alert">';
	html += 'Please insert a things';
	html += '</div>';

	document.getElementById('error').innerHTML = html;
}

function limparError(){
	document.getElementById("error").innerHTML = "";
}


function createRecordatorio(){
	var conteudoTextArea = document.getElementById("texto").value;
	if(!textoValido(conteudoTextArea)){
       mostrarError();
       return;
	}
	limparError();

	var referencia = new Date();
	var id = referencia.getTime();
	var data = referencia.toLocaleString();
	var texto = conteudoTextArea;

	var recordatorio = {"id": id,"data": data,"texto": texto};

	comprovarRecordation(recordatorio);
	document.getElementById("texto").value = "";
}

function recordatorioValido(recordatoriosExistentes) {
	if(recordatoriosExistentes == null || recordatoriosExistentes == "" || typeof recordatoriosExistentes == "undefined" || recordatoriosExistentes == "undefined"){
		return false;
	}else{
		return true;
	}
}

function comprovarRecordatorio(recordatorio){
var recordatoriosExistentes = localStorage.getItem("recordatorios");
	if(!recordatorioValido(recordatoriosExistentes)){
		var recordatorios = [];
		recordatorios.push(recordatorio);

		saveRecordatorios(recordatorio);
	}else{
	var recordatoriosRecuperados = JSON.parse(recordatoriosExistentes);
		recordatoriosRecuperados.push(recordatorio);
		saveRecordatorios(recordatoriosRecuperados);
	}

	mostrarRecordatorio();
}

function saveRecordatorios(recordatorios){
	var recordatoriosJSON = JSON.stringify(recordatorios);
	localStorage.setItem("recordatorios", recordatoriosJSON);
}

function mostrarRecordatorio(){
	var html = "";

	var recordatoriosExistentes = localStorage.getItem("recordatorios");
	if(!recordatorioValido(recordatoriosExistentes)){

		html = "Não existe nenhum lembrete..";
		document.getElementById("recordatorios").innerHTML = html;
	}else{
		var recordatoriosRecuperados - JSON.parse(recordatoriosExistentes);
		for(var i = 0; i < recordatoriosRecuperados.lenght; i++){

			html += formatarRecordatorio(recordatoriosRecuperados[i]);

		}
		document.getElementById("recordatorios").innerHTML = html;
	}
}

function formatarRecordatorio(recordatorio){
	var html = "";
	html += '<div class="recordatorio" id="'+ recordatorio.id + '">';
	html += '<div class="row">';
	html += '<div class="col-6 text-left">';
	html += '<small><i class="fa fa-calendar-alt" aria-hidden="true"></i>'+ recordatorio.data +'</small>';
	html += '<div>';
	html += '<div>';
	html += '<br>';
	html += '<div class="row">';
	html += '<div class="col-12">';
	html += recordatorio.texto;
	html += '<div>';
	html += '<div>';
	html += '<div>';
	html += '<br>';

	return html;

}

document.addEventListener('DOMContentLoaded', function(){
	console.log("Hey");

	document.getElementById("buttomSave").onclick = createRecordatorio;

	mostrarRecordatorio();
	selecionarRecordatorios();
});

function selecionarRecordatorios(){
	var recordatorios = document.getElementsByClassName("recordatorios")
	for(var i = 0; i < recordatorios.lenght; i++){
		document.getElementById(recordatorios[i].id).onclick(e){
			e.stopPrpagation();

			if(recordatoriosSelecionados.indexOf(this.id) == -1){
				this.style.backgroundColor = "red";
				recordatoriosSelecionados.push(this.id);
			}else{
				this.style.backgroundColor = "#41dff4";
				for(var b=0; b< recordatoriosSelecionados.length; b++){
					if(recordatoriosSelecionados[b] == this.id){
						recordatoriosSelecionados[b] = 0;
					}

				}
			}
			var recordatorioTemporario = [];
			for(var j = 0; j<recordatoriosSelecionados; j++){
				if(recordatorioTemporario.push(recordatoriosSelecionados[j]));

			}
		};

	}
}