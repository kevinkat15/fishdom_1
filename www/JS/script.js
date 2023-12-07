window.onload = function () {
	// navbar collapse
	document.addEventListener('click', function(event) {
		var isClickInsideNavbar = document.querySelector('.navbar').contains(event.target);
		var navbarCollapse = document.querySelector('.navbar-collapse');

		if (!isClickInsideNavbar && navbarCollapse && navbarCollapse.classList.contains('show')) {
			// console.log('Collapsing navbar');
			navbarCollapse.classList.remove('show');
		}
	});

	// form validation
	if (document.getElementById('signupForm') !== null) {
		document.getElementById('signupForm').addEventListener('submit', function (event) {
			// Prevent the form from submitting normally
			event.preventDefault();

			// Get the input values
			var name = document.querySelector('#name').value;
			var email = document.querySelector('#email').value;
			var phone = document.querySelector('#phone').value;

			// Check if the phone number is numeric
			if (isNaN(phone)) {
				alert('Phone number must be numeric');
				return;
			}
			
			// make sure the phone number is 10 digits
			if (phone.length != 10) {
				alert('Phone number must be 10 digits');
				return;
			}

			var age = document.querySelector('#age').value;

			if (age < 18) {
				alert('You must be 18 or older to sign up');
				return;
			}
			var gender = document.querySelector('#gender').value;

			// Do something with the values
			let greeting = "Hello " + name + "!\n" + "Your email is: " + email + "\n" + "Your phone number is: " + phone + "\n" + "Your age is: " + age + "\n" + "Your gender is: " + gender;
			console.log(greeting);

			// Show the signup success message
			document.getElementById('signupSuccess').style.display = 'block';
			document.getElementById('signupForm').style.display = 'none';
			document.getElementById('formIntro').style.display = 'none';
		});
	}

	// button rollover
	if (document.getElementById('rollover') !== null) {
		var button = document.getElementById('rollover');

		button.addEventListener('mouseover', function() {
			button.style.backgroundColor = '#ffc52c';
		});

		button.addEventListener('mouseout', function() {
			button.style.backgroundColor = '#006fd6';
		});
	}

	// auto scroll for download button for phones
	document.querySelector('a[href="#downloadSection"]').addEventListener('click', function (e) {
		e.preventDefault();
		document.getElementById('downloadSection').scrollIntoView();
	});
	
}