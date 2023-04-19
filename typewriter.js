function typeWriter(txt, element_id, speed=10) {
	var i = 0;

	(function(){
		document.getElementById(element_id).innerHTML += txt.charAt(i++);
		if(txt.length > i){
			setTimeout(arguments.callee, speed);
		}
    	})();
}