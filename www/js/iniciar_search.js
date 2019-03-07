
    $(document).on("ready",load_pdf(1));


    function load_pdf(pagina){
	
	var base_url = 'http://172.16.73.188:4000/demo_feria/demo_feria/webservices/';
	var pag_service = 'CargarPDFService.php?jsoncallback';
	
	
	var search=$("#search").val();
   
         $("#load_registrados").fadeIn('slow');
	
	       $.ajax({
	    	   beforeSend: function(objeto){
 	           $("#load_registrados").html('<center><img src="img/load.gif"> Cargando...</center>')
 	           },
	    	   type: 'GET',
			   url: base_url+pag_service,
			   data:{cargar:'cargar_pdf', action:'ajax', page:pagina, search:search},
			  
			   success: function(x){
	    	        	$("#pdf_registrados").html(x);
      	                $("#load_registrados").html("");
	                
	    	        },
	                error: function(jqXHR,estado,error){
	                	
	                	   $("#pdf_registrados").html("Ocurrio un error al cargar la información de Documentos..."+estado+"  "+error);
	           	     }
	           });
	     
    }
    
    function abrirdf(id=37){
    	
		 var url = 'http://172.16.73.188:4000/demo_feria/demo_feria/view/DevuelvePDFView.php?id_documentos_legal='+id;
		 window.open(url, '_system', 'location=yes');
 
    }
    