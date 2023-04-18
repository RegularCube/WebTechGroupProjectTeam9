var text = `Thoughts and visions swirl like shadows through your mind. A backpack, a tent, torches, a deer, or is it a man... shouting and sound of a bag being emptied... pain, terrible pain...

Your mind claws at these images but they don\'t come into focus, don\'t resolve, why are you here who are you who are you who-

Birdsong flits through the trees. You see evergreen branches swaying in a morning breeze high above you. You are awake.`;

var choices = ["Look around", "Get up"]

function typeWriter(txt, element_id, speed) {
	var i = 0;

	(function(){
		document.getElementById(element_id).innerHTML += txt.charAt(i++);
		if(txt.length > i){
			setTimeout(arguments.callee, speed);
		}
    	})();
}



class Scene {
	constructor(prompt_text, choices, next_scenes) {
		this.prompt_text = prompt_text;
		this.choices = choices;
		this.next_scenes = next_scenes;
	}

	display() {	
		typeWriter(this.prompt_text, "prompt-text", 20);
		document.getElementById("input-text").innerHTML = choices;	
	}

}

function run(){
	s = new Scene(text,2,3);
	s.display();
}
