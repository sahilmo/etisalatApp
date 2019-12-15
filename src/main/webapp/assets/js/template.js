/*
 * Bootstrap Forms validation
 *  Example starter JavaScript for disabling form submissions if there are invalid fields
 **/

(function() {
	'use strict';
	window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation
		// styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();

/*
 * Menu Toggle function
 * 
 */
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});

/*
 * DataTable
 * 
 */
$('.myDataTable').DataTable({
	pagingType : 'full_numbers',
	lengthMenu : [ [ 10, 25, 50, -1 ], [ 10, 25, 50, "All" ] ]
});
