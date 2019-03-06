
$(document).on("ready",procesos_con_internet);

/*

var online = 0;
function checkConnection() {
	 
	var networkState = navigator.network.connection.type;
    var states = {};
    
    states[Connection.UNKNOWN]  = '1';  //Conexión desconocida;
    states[Connection.ETHERNET] = '1';  //Conexión ethernet;
    states[Connection.WIFI]     = '1';  //Conexión WiFi';
    states[Connection.CELL_2G]  = '1';  //Conexión movil 2G';
    states[Connection.CELL_3G]  = '1';  //Conexión movil 3G';
    states[Connection.CELL_4G]  = '1';  //Conexión movil 4G';
    states[Connection.NONE]     = '0';  //Sin conexión';
      
    online=states[networkState];
   
     if (online=='1'){
	
    	 procesos_con_internet();
	
     }else{
	
		procesos_sin_internet();
	
	}
	
   }
*/

function procesos_con_internet() {

	 var base_url = 'http://186.4.157.125:80/webcapremci/webservices_evaluacion/';
		var pag_service = 'SincronizacionService.php?jsoncallback=?' ;
		var nombre_usuarios = "";
		
		$(document).on('click', '#btn_excelente', function(){
		
			 var cedula = $("#cedula").val();
			 var calificacion = "Excelente";
			 var imei= "9999999999";
	    	 var error="";

	    	   if (cedula == "")
		    	{
			    	
		    		$("#mensaje_cedula").text("Introduzca Cedula");
		    		$("#mensaje_cedula").fadeIn("slow"); //Muestra mensaje de error
		    		error="SI";
		            return false;
			    }
		    	else 
		    	{
		    		$("#mensaje_cedula").fadeOut("slow"); //Muestra mensaje de error
		    		error="NO";
				}
	    	   
	    	   if(error=="NO"){
		  		
	    		
	    		 
  	    		   $.ajax({
  	    			   type: 'GET',
  	    			   url: base_url+pag_service,
  	    			   data:{cedula:cedula, calificacion:calificacion, imei:imei},
  	    			   dataType: 'json',
  	    			   success: function (x) {
  	    				 
  	    				$.each(x, function(i, j) {			
							nombre_usuarios  =  j.nombre_usuarios;
						});
  	    				swal("Gracias por Calificarnos", "Hola "+nombre_usuarios+" tu calificación se registro correctamente.", "success");	
  	    				$("#cedula").val("");
  	    				
  	    			 },
  	    				     error: function (jqXHR, textStatus, errorThrown) {
  	    				    	swal("Gracias por Calificarnos", "Cedula no existe registrada en nuestra base de datos.", "error");
  	    				    	$("#cedula").val("");
  	    				    	
  	    			 }

  	    			});
	    		   
		  }
	    	   
		});
		
		
		
		
		
		
		$(document).on('click', '#btn_bueno', function(){
    		
 			 var cedula = $("#cedula").val();
 			 var calificacion = "Bueno";
 			 var imei= "9999999999";
 	    	 var error="";

 	    	   if (cedula == "")
			    	{
				    	
			    		$("#mensaje_cedula").text("Introduzca Cedula");
			    		$("#mensaje_cedula").fadeIn("slow"); //Muestra mensaje de error
			    		error="SI";
			            return false;
				    }
			    	else 
			    	{
			    		$("#mensaje_cedula").fadeOut("slow"); //Muestra mensaje de error
			    		error="NO";
					}
 	    	   
 	    	   if(error=="NO"){
 	    		
 	    		   $.ajax({
 	    			   type: 'GET',
 	    			   url: base_url+pag_service,
 	    			   data:{cedula:cedula, calificacion:calificacion, imei:imei},
 	    			   dataType: 'json',
 	    			   success: function (x) {
 	    				 
 	    				$.each(x, function(i, j) {			
							nombre_usuarios  =  j.nombre_usuarios;
						});
 	    					
 	    				swal("Gracias por Calificarnos", "Hola "+nombre_usuarios+" tu calificación se registro correctamente.", "success");	
  	    				
 	    				$("#cedula").val("");
 	    			 },
 	    				     error: function (jqXHR, textStatus, errorThrown) {
 	    				    	swal("Gracias por Calificarnos", "Cedula no existe registrada en nuestra base de datos.", "error");
 	    				    	$("#cedula").val("");
 	    			 }

 	    			});
 	    		
 	    		   
			     
 	    		 
 	    	   }
  	    	   
  		});
		
		
		

		$(document).on('click', '#btn_regular', function(){
    		
 			 var cedula = $("#cedula").val();
 			 var calificacion = "Regular";
 			 var imei= "9999999999";
 	    	 var error="";

 	    	   if (cedula == "")
			    	{
				    	
			    		$("#mensaje_cedula").text("Introduzca Cedula");
			    		$("#mensaje_cedula").fadeIn("slow"); //Muestra mensaje de error
			    		error="SI";
			            return false;
				    }
			    	else 
			    	{
			    		$("#mensaje_cedula").fadeOut("slow"); //Muestra mensaje de error
			    		error="NO";
					}
 	    	   
 	    	   if(error=="NO"){
 	    		 
 	    		   $.ajax({
 	    			   type: 'GET',
 	    			   url: base_url+pag_service,
 	    			   data:{cedula:cedula, calificacion:calificacion, imei:imei},
 	    			   dataType: 'json',
 	    			   success: function (x) {
 	    				 
 	    				$.each(x, function(i, j) {			
							nombre_usuarios  =  j.nombre_usuarios;
						});
 	    					
 	    				swal("Gracias por Calificarnos", "Hola "+nombre_usuarios+" tu calificación se registro correctamente.", "success");	
  	    				
 	    				$("#cedula").val("");
 	    			 },
 	    				     error: function (jqXHR, textStatus, errorThrown) {
 	    				    	swal("Gracias por Calificarnos", "Cedula no existe registrada en nuestra base de datos.", "error");
 	    				    	$("#cedula").val("");
 	    			 }

 	    			});
 	    		
 	    		
 	    		   
			  }
  	    	   
  		});
		
		
		
		

		$(document).on('click', '#btn_malo', function(){
    		
 			 var cedula = $("#cedula").val();
 			 var calificacion = "Malo";
 			 var imei= "9999999999";
 	    	 var error="";

 	    	   if (cedula == "")
			    	{
				    	
			    		$("#mensaje_cedula").text("Introduzca Cedula");
			    		$("#mensaje_cedula").fadeIn("slow"); //Muestra mensaje de error
			    		error="SI";
			            return false;
				    }
			    	else 
			    	{
			    		$("#mensaje_cedula").fadeOut("slow"); //Muestra mensaje de error
			    		error="NO";
					}
 	    	   
 	    	   if(error=="NO"){
 	    		 
 	    		   $.ajax({
 	    			   type: 'GET',
 	    			   url: base_url+pag_service,
 	    			   data:{cedula:cedula, calificacion:calificacion, imei:imei},
 	    			   dataType: 'json',
 	    			   success: function (x) {
 	    				 
 	    				$.each(x, function(i, j) {			
							nombre_usuarios  =  j.nombre_usuarios;
						});
 	    					
 	    				swal("Gracias por Calificarnos", "Hola "+nombre_usuarios+" tu calificación se registro correctamente.", "success");	
  	    				
 	    				$("#cedula").val("");
 	    			 },
 	    				     error: function (jqXHR, textStatus, errorThrown) {
 	    				    	swal("Gracias por Calificarnos", "Cedula no existe registrada en nuestra base de datos.", "error");
 	    				   $("#cedula").val("");
 	    			 }

 	    			});
 	    		
 	    		   
			  }
  	    	   
  		});
		
		
	 
		 $( "#cedula" ).focus(function() {
			  $("#mensaje_cedula").fadeOut("slow");
		     });
		 
	 
}





/*


function procesos_sin_internet() {
	

		
		$(document).on('click', '#btn_excelente', function(){
		
			 var cedula = $("#cedula").val();
			 var error="";

	    	   if (cedula == "")
		    	{
			    	
		    		$("#mensaje_cedula").text("Introduzca Cedula");
		    		$("#mensaje_cedula").fadeIn("slow"); //Muestra mensaje de error
		    		error="SI";
		            return false;
			    }
		    	else 
		    	{
		    		$("#mensaje_cedula").fadeOut("slow"); //Muestra mensaje de error
		    		error="NO";
				}
	    	   
	    	   if(error=="NO"){
		  		
	    		    swal("Gracias por Calificarnos", "Tu dispositivo se encuentra sin internet.", "error");
  	    		    $("#cedula").val("");
  	    	   }

  	    			
	    		   
		  
	    	   
		});
		
		
		
		
		
		
		$(document).on('click', '#btn_bueno', function(){
    		
 			 var cedula = $("#cedula").val();
 			 var error="";

 	    	   if (cedula == "")
			    	{
				    	
			    		$("#mensaje_cedula").text("Introduzca Cedula");
			    		$("#mensaje_cedula").fadeIn("slow"); //Muestra mensaje de error
			    		error="SI";
			            return false;
				    }
			    	else 
			    	{
			    		$("#mensaje_cedula").fadeOut("slow"); //Muestra mensaje de error
			    		error="NO";
					}
 	    	   
 	    	   if(error=="NO"){
 	    		
 	    		  
 	    		
 	    		  swal("Gracias por Calificarnos", "Tu dispositivo se encuentra sin internet.", "error");
	    		    $("#cedula").val("");
			     
 	    		 
 	    	   }
  	    	   
  		});
		
		
		

		$(document).on('click', '#btn_regular', function(){
    		
 			 var cedula = $("#cedula").val();
 			 var error="";

 	    	   if (cedula == "")
			    	{
				    	
			    		$("#mensaje_cedula").text("Introduzca Cedula");
			    		$("#mensaje_cedula").fadeIn("slow"); //Muestra mensaje de error
			    		error="SI";
			            return false;
				    }
			    	else 
			    	{
			    		$("#mensaje_cedula").fadeOut("slow"); //Muestra mensaje de error
			    		error="NO";
					}
 	    	   
 	    	   if(error=="NO"){
 	    		 
 	    		  swal("Gracias por Calificarnos", "Tu dispositivo se encuentra sin internet.", "error");
	    		    $("#cedula").val("");
 	    		
 	    		   
			  }
  	    	   
  		});
		
		
		
		

		$(document).on('click', '#btn_malo', function(){
    		
 			 var cedula = $("#cedula").val();
 			 var error="";

 	    	   if (cedula == "")
			    	{
				    	
			    		$("#mensaje_cedula").text("Introduzca Cedula");
			    		$("#mensaje_cedula").fadeIn("slow"); //Muestra mensaje de error
			    		error="SI";
			            return false;
				    }
			    	else 
			    	{
			    		$("#mensaje_cedula").fadeOut("slow"); //Muestra mensaje de error
			    		error="NO";
					}
 	    	   
 	    	   if(error=="NO"){
 	    		 
 	    		  swal("Gracias por Calificarnos", "Tu dispositivo se encuentra sin internet.", "error");
	    		    $("#cedula").val("");
 	    		
 	    		   
			  }
  	    	   
  		});
		
		
	 
		 $( "#cedula" ).focus(function() {
			  $("#mensaje_cedula").fadeOut("slow");
		     });
		 
	 
	
}


*/
