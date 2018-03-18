$(document).ready(() => {
	function validateForm(data) {
		console.log('Validating form data:', data);
		data.forEach((field) => {
			// console.log(`Field ${field.name} value:`, field.value);
			if (!field.value) {
				$(`#${field.name}`).addClass('invalid');
			}
		});
	}
    // Initialization of Material components
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 1, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: true // Close upon selecting a date,
    });
	$('.dob-datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 100, // Creates a dropdown of 15 years to control year,
		today: 'Today',
		clear: 'Clear',
		close: 'Ok',
		closeOnSelect: true // Close upon selecting a date,
	});
    $('#submit-button').click((e) => {
        const formData = $('form').serializeArray();
        validateForm(formData);
        console.log('Form data:', formData);
        function onSuccess (e) {
            console.log('Success response:', e);
        }
        function onError (e) {
            console.log('Error response:', e);
        }
        $.ajax({
            url: '/form',
            method: 'POST',
            data: formData,
            success: onSuccess,
            error: onError,
        });
        e.preventDefault();
    });
});