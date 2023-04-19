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
	constructor(button_text, next_scene, log_text="") {
		this.button_text = button_text;
		this.next_scene = next_scene;
		this.log_text = log_text;
		if (this.log_text == "") {
			this.log_text = this.button_text;
		}
	}
}

class Scene {
	constructor(prompt_text, choice_options, next_scenes) {
		this.prompt_text = prompt_text;
		this.choice_options = choice_options;
		this.next_scenes = next_scenes;
	}

	display() {	
		typeWriter(this.prompt_text, "prompt-text", 20);
		for (let i=0; i < this.choice_options.length; i++) {
			document.getElementById("input-text").innerHTML += "<button>" + this.choice_options[i].button_text + "</button>";
		}

	}

}

function run(){
	var choice1 = new ChoiceOption("Hide", 0);
	var choice2 = new ChoiceOption("Run", 0);
	var choice3 = new ChoiceOption("Pick up", 0);
	s = new Scene(text, [choice1, choice2, choice3], 3);
	s.display();
}
