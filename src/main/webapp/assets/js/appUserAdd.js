 function getTime() {
        $.ajax({
            url : 'getTime.html',
            success : function(data) {
                $('#result').html(data);
            }
        });
    }
  		/**
  		* get user details in ajax to edit
  		* @param {user_code} 
  		* @response JSON object to populate form
  		*/
  		
    	var editUser = function(user_code) {
         $.ajax({
            type: 'GET',
            url:  'editUser',
            dataType: 'json',
            data: { user_code: user_code },
            async: true,
            success: function(result) {
            	$("#user_id").prop('readOnly', true);
            	$("#user_comp_code").prop('readOnly', true);
     			//populate userForm
            	var form = $("#userForm");
     	        var i;
     	        for (i in result) {
     	            form.find('[name="' + i + '"]').val(result[i]);
     	        }
          	
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(jqXHR.status + ' ' + jqXHR.responseText);
            }
       }); 
    }
  	 var deleteUser =function(user_code){
  		 $('#deleteCode').html(user_code);
  	  	 }

 	/**
		* get user details in ajax to edit
		* @param {user_code} 
		* @response JSON object to populate form
		*/
		
 	var delUser = function() {
		 var user_code =  $('#deleteCode').text();
		// alert(user_code); 
     $.ajax({
         type: 'DELETE',
         url:  'deleteUser/'+user_code,
         contentType: "application/json",
         dataType: 'json',
       /*   data: { user_code: user_code }, */
         async: true,
         success: function(result) {
      		   //	alert("Result" + result.msg);
        	 location.reload();
         },
         error: function(jqXHR, textStatus, errorThrown) {
             alert("Status"+jqXHR.status + ' ' + jqXHR.responseText);
         }
    });   
 }
		/**
		* get FAKE user
		*/
		var getFakeEmp = function() {
			 var user_code =  $('#deleteCode').text();
			// alert(user_code); 
	     $.ajax({
	         type: 'GET',
	         url:  'getFakeEmp',
	         contentType: "application/json",
	         dataType: 'json',
	         async: true,
	         success: function(result) {
	      		   //	alert("Result" + result.msg);
	        	 location.reload();
	         },
	         error: function(jqXHR, textStatus, errorThrown) {
	             alert("Status"+jqXHR.status + ' ' + jqXHR.responseText);
	         }
	    });   
	 }
		
