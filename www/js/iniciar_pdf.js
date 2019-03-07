
    $(document).on("ready",checkConnection1);


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

    
    var id_documentos_legal = getQueryVariable("id_documentos_legal");
    


    function checkConnection1() {
            
    	
    	 
    			load(id_documentos_legal);
    		
        }
    
    
    
    function load(id){
	
    	
    	
	var base_url = 'http://192.168.1.121:4000/demo_feria/webservices/';
	var pag_service = 'CargarPDFService.php?jsoncallback';
	
	
         $("#load_registrados").fadeIn('slow');
	
	       $.ajax({
	    	   beforeSend: function(objeto){
 	           $("#load_registrados").html('<center><img src="img/load.gif"> Cargando...</center>')
 	           },
	    	   type: 'GET',
			   url: base_url+pag_service,
			   data:{cargar:'cargar_pdf1', action:'ajax', id:id},
			  
			   success: function(x){
	    	        
				 	pdf  =  x;
				 	
				 	document.getElementById("pdf").setAttribute("src", pdf);
				 	$("#load_registrados").html('');
				 	
				 	
				 	
		 	          
				 
			  },
	          error: function(jqXHR,estado,error){
	                	
	                	   $("#pdf_registrados").html("Ocurrio un error al cargar la información de Documentos..."+estado+"  "+error);
	   	     }
	           });
	 
    }
    