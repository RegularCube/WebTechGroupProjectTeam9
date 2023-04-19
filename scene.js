var text = `Thoughts and visions swirl like shadows through your mind. A backpack, a tent, torches, a deer, or is it a man... shouting and sound of a bag being emptied... pain, terrible pain...

Your mind claws at these images but they don\'t come into focus, don\'t resolve, why are you here who are you who are you who-

Birdsong flits through the trees. You see evergreen branches swaying in a morning breeze high above you. You are awake.`;

function typeWriter(txt, element_id, speed) {
	var i = 0;

	(function(){
		document.getElementById(element_id).innerHTML += txt.charAt(i++);
		if(txt.length > i){
			setTimeout(arguments.callee, speed);
		}
    	})();
}

class ChoiceOption {
	constructor(button_text, next_scene){
		this.button_text = button_text;
		this.next_scene = next_scene;
	}
}

class Scene {
	constructor(prompt_text, choice_options) {
		this.prompt_text = prompt_text;
		this.choice_options = choice_options;
	}

	display() {	
		typeWriter(this.prompt_text, "sceneText", 20);
		console.log(this.choice_options.length);
		for(let i=0; i < this.choice_options.length; i++) {
			console.log(":)");
			document.getElementById("promptBox").innerHTML += "<button>" + this.choice_options[i].button_text + "</button>";	
		}
	}
}

function run(){
	choice1 = new ChoiceOption("I'm gonna die", 0)
	choice2 = new ChoiceOption("I got this", 0)
	s = new Scene(text,[choice1, choice2]);
	s.display();
}
