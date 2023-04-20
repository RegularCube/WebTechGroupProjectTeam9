function typeWriter(element_id, speed=10) {
	var text_element = document.getElementById(element_id);
	var original_text_contents = text_element.innerHTML;
	var i = 0;

	(function(){
		try {
			let colored_portion = original_text_contents.slice(0,i+1);
			let uncolored_portion = original_text_contents.substring(i+1)
			text_element.innerHTML = "<span class=\"text\">" + colored_portion + "</span>" + uncolored_portion;
			i += 1;
			if(i < original_text_contents.length){
				setTimeout(arguments.callee, speed);
			}
		}
		catch {
			console.log("Scene fast-forwarded");
		}
		})();	
}