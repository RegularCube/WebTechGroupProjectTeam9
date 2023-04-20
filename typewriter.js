function typeWriter(txt, element_id, speed=10) {
	var i = 0;

	(function(){
		try { // Hack-y fix for multiple typewriter's going at once
			document.getElementById(element_id).innerHTML += txt.charAt(i++);
			if(txt.length > i){
				setTimeout(arguments.callee, speed);
			}
		}
		catch {
			console.log("Scene fast-forwarded.")
		}
			})();	
}