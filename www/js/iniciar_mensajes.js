

	$(document).on("ready",mensajes);

	var succes="";
	var error="";
	var inter="";
	
	
	function getQueryVariable(variable)
	{
		  
	       var query = window.location.search.substring(1);
	       var vars = query.split("&");
	      
	       for (var i=0;i<vars.length;i++) {
	               var pair = vars[i].split("=");
	               if(pair[0] == variable){return pair[1];}
	       }
	       return(false);
	      
	}
	
	succes = getQueryVariable("succes");
	error = getQueryVariable("error");
	inter = getQueryVariable("inter");

	


	function mensajes() {
	        
		if(succes!=""){
			var res = succes.replace("%20", " ");
		   swal("Gracias por Calificarnos", "Hola "+res+" tu calificación se registro correctamente.", "success");	
		   $("#cedula").val("");
				
		}else{}
		
	    if(error!=""){
		
	        swal("Gracias por Calificarnos", "Cedula no existe registrada en nuestra base de datos.", "error");
		    $("#cedula").val("");
	    	
		}else{}
		   
	    if(inter!=""){
			
	        swal("Ups...", "Tu dispositivo se encuentra sin internet.", "info");
		    $("#cedula").val("");
	    	
		}else{}
		   
	}




