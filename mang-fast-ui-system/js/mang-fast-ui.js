export const insertHTML = (option = 0, quantity = 1, id = "No insert id", html = "No insert html") =>  {
	
	let opt = new String();
	
	switch (option) {
		case 0:
			opt = 'beforeend';
			break;
		case 1:
			opt = 'afterbegin';
			break;
		case 2:
			opt = 'beforebegin';
			break;
		case 3:
			opt = 'afterend';
			break;
		default:
			console.log('Algo salió mal!');
			break;
	}
	
	for (let i = 0; i < quantity; i++) {
		document.getElementById(id).insertAdjacentHTML(opt, html);
	} 
}