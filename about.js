console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let rubberDuck = document.querySelector('#rubberDuck')

const duckCompliment = () => {
	alert("You're an amazing person!")
}

rubberDuck.addEventListener('mouseover', duckCompliment)