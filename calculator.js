let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
  button.addEventListener('click', (e) => {
	// console.log('clicked');
	// console.log(e);
	// console.log(e.target);
	// console.log(e.target.innerText);
	// console.log(e.target.innerHTML);
	
	switch(e.target.innertText){
		case 'C':
			display.innerHTML = '';
			break;
		default:
			display.innerText += e.target.innerText;

	}

  });
});