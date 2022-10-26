let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    // console.log('clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.innerText);
    // console.log(e.target.innerHTML);

    switch (e.target.innerHTML) {
      case 'C':
        display.innerHTML = '';
        break;
	  case '=':
		try{
			display.innerHTML = eval(display.innerHTML);
		} catch{
			display.innerHTML = 'Error';
		}
		break;
      default:
        console.log("prueba");
        display.innerHTML += e.target.innerHTML;
    }
  });
});
