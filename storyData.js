var storyLine = {
    "start":{
        "id": "start",
        "title": "The Abandoned Campsite",
        "endOfStoryLine": false,
        "text": "Your eyes flitter open to birdsong and a headache like no other. You're in an abandoned campsite. Around you are torn tents, a cold fire pit, and a jungle wrapped in ominous silence. You try to remember what brought you here, but memories are scattered and tangled up. A throbbing pain on your arm interrupts your thinking. Spider bite. Your eyes catch the movement of a black spider with a red hourglass mark on its back scuttling away into the undergrowth. Just how long have you been unconscious? You have a Swiss army knife, a torch and no knowledge of where you are or why. You wonder if you have any hope of surviving at all.",
        "image": "1030images/campsite.jpg",
        "choices": [
            {
                "text": "I'm going to die",
                "emoji": "&#128561;",
                "next": "gaveUp"
            },
            {
                "text": "I'm going to survive!",
                "emoji": "&#128526;",
                "next": "junglePath"
            }
        ]

    },
    "junglePath":{
        "id": "junglePath",
        "title": "The Jungle Path",
        "endOfStoryLine": false,
        "text": "As you walk along the narrow jungle path, you hear a low rumbling sound in the distance. You immediately wonder what could make such a noise. A pack of predators in frenzy from a fresh kill? Or a passing storm?",
        "image": "1030images/path.jpg",
        "choices": [
            {
                "text": "Investigate the sound",
                "emoji": "&#128373;",
                "next": "waterfallOverlook"
            },
            {
                "text": "Return to the camp",
                "emoji": "&#127957;",
                "next": "returnToCampDed"
            }

        ]
    },
    "waterfallOverlook":{
        "id": "waterfallOverlook",
        "title": "The Waterfall Overlook",
        "endOfStoryLine": false,
        "text": "You keep on track, and the rumbling grows louder. You round the corner to reveal a glorious vista of lush greenery, and at its centre a cliff with a huge waterfall. Relieved, you view the waterfall your position on the neighboring hill. The breath-taking view is partially obstructed by the surrounding leaves, the area above the waterfall hidden. A huge tree beside the waterfalls pool has branches that reach up high enough to see what lies beyond it. They gleam from the noonday sun and the cascading waters.",
        "image": "1030images/top_of_waterfall.jpg",
        "choices": [
            {
                "text": "Check out the waterfall.",
                "emoji": "&#127754;",
                "next": "waterfallOasis"
            },
            {
                "text": "Climb the tree.",
                "emoji": "&#127966;",
                "next": "slipperyBranchOverlook"
            }
        ]
    },
    "slipperyBranchOverlook":{
        "id": "slipperyBranchOverlook",
        "title": "The Branch Overlook",
        "endOfStoryLine": false,
        "text": "You climb the tree - it takes a while, and you nearly slip several times. At the top branch, you look out and catch sight of a native village in the distance, half a mile back from the cliff's edge. A column of smoke rises from a campfire, and you can just make out figures sat around it.",
        "image": "1030images/smoke.jpeg",
        "choices": [
            {
                "text": "Climb back down",
                "emoji": "&#127795;",
                "next": ["waterfallOverlook", "fallingFromTree"]
            }
        ]
    },
    "fallingFromTree":{
        "id": "fallingFromTree",
        "title": "Falling From The Tree",
        "endOfStoryLine": false,
        "text": "As you start to climb back down, distracted by the magnificent scenery, you lose your footing on a slippery branch and begin to plummet towards the ground. Despite knowing these moments will likely be your last, as the ground rises to meet you, you admire the waterfall more and think \"Hey, at least I didn't die from the poison after all\"",
        "image": "1030images/look_up_trees.jpg",
        "choices": [
            {
                "text": "Continue falling.",
                "emoji": "&#127795;",
                "next": ["fellFromTree", "fellFromTreeAndDed"]
            }
        ]
    },
    "fellFromTreeAndDed":{
        "id": "fellFromTreeAndDed",
        "title": "Fell From The Tree",
        "endOfStoryLine": true,
        "causeOfDeath" : "Fell from tree",
        "text": "The pool at the tree's base is actually deep enough for someone falling from the tree's full height to survive. In its centre is a single jagged rock, less than half a metre in diameter. Against all odds, you manage to hit it, and are skewered where you land. Native parents for centuries after use your horrific death as a reminder to their children to not climb the tree, and also to eat their vegetables.",
        "image": "1030images/Game_over.png",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#128128;",
                "next": "stats"
            }
        ]
    },
    "fellFromTree":{
        "id": "fellFromTree",
        "title": "Fell From The Tree",
        "endOfStoryLine": false,
        "text": "The pool at the tree's base is deeper than you thought, although impact with its surface still makes your arm hurt like crazy.",
        "image": "1030images/dazed.png",
        "choices": [
            {
                "text": "Swim out and continue on your way.",
                "emoji": "&#11014;",
                "next": "waterfallOasis"
            }
        ]
    },
    "waterfallOasis":{
        "id": "waterfallOasis",
        "title": "The Waterfall Oasis",
        "endOfStoryLine": false,
        // there are vines hanging from the waterfall and fish in the river below the waterfall. scene is lush and green. There is a small path leading behind the waterfall.
        "text": "The area beneath the waterfall is an oasis. The lush jungle surrounds the giant cliff where the waterfall is. Thick vines hang limply from nearby trees, fish swim in the waterfall-fed pool, and a small path seems to go behind the waterfall...",
        "image": "1030images/waterfall.jpg",
        "choices": [
            {
                "text": "Follow the mysterious path",
                "emoji": "&#128167;",
                "next": "exploringBehindWaterfall"
            },
            {
                "text": "Create a raft",
                "emoji": "&#128758;",
                "next": "confusedRaftBuilder"
            },
            {
                "text": "Create ropes from the vines",
                "emoji": "&#129698;",
                "next": "waterfallOasisWithRopes"
            }
        ]
    },
    "confusedRaftBuilder":{
        "id": "confusedRaftBuilder",
        "title": "The Confused Raft Builder",
        "endOfStoryLine": false,
        "text": "You used to be quite the raft-builder back in Scouts, and you find loose wood in no time. But you have nothing to tie it together with, and just stand there confused. A passing fish laughs at you.",
        "image": "1030images/logs.jpg",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#128758;",
                "next": "waterfallOasis"
            }
        ]
    },
    "waterfallOasisWithRopes":{
        "id": "waterfallOasisWithRopes",
        "title": "The Waterfall Oasis",
        "endOfStoryLine": false,
        "text": "The area beneath the waterfall is an oasis. The lush jungle surrounds the giant cliff where the waterfall is. You hold your ropes close to your chest next to the now naked, sad trees, as fish swim in the waterfall-fed pool, and a small path seems to go behind the waterfall...",
        "image": "1030images/waterfall_pool.jpg",
        "choices": [
            {
                "text": "Explore behind the waterfall",
                "emoji": "&#128167;",
                "next": "exploringBehindWaterfallWithRopes"
            },
            {
                "text": "Create a raft and float down the river",
                "emoji": "&#128758;",
                "next": "floatOffWaterfallAndDed"
            },
            {
                "text": "Catch fish with the ropes",
                "emoji": "&#127907;",
                "next": "fishing"
            },
            {
                "text": "Climb the waterfall with the ropes",
                "emoji": "&#129495;",
                "next": "climbingWaterfall"
            },
        ]
    },
    "floatOffWaterfallAndDed":{
        "id": "floatOffWaterfallAndDed",
        "title": "Rafts and Crocodiles",
        "endOfStoryLine": true,
        "causeOfDeath" : "Mauled by crocodile",
        "text": "You floated downstream. On the way, you were attacked by a crocodile and died.",
        "image": "1030images/Game_over.png",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#128010;",
                "next": "stats"
            }
        ]
    },
    "fishing":{
        "id": "fishing",
        "title": "Fishing",
        "endOfStoryLine": false,
        "text": [
            "You try to lasso the fish but throw it way too far. The fish smiles at you.",
            "You throw the lasso near the fish, but the fish is bigger that the loop. You loosen it up a bit.",
            "You throw the lasso at the fish, but it's too slippery to stay in the loop. You reflect that lassoing is not a fishing technique you've heard of anyone using.",
            "You throw and miss. \"Fishing is purely practice and persistence\" you say aloud.",
            "The rope arcs beautifully through the air right towards a fish. It fastens neatly around it, and as you pull the loop tightens sharply and the fish is torn in two. Another fish promptly eats it. Oh well.",
            "You throw it, but it was a tired throw from a tired man. Surely the fish will get tired too. You start wondering if fish sleep.",
            "Your fishing skills are improving, you're sure to get lucky soon! And no, you didn't catch one.",
            "You missed, you were two busy thinking of what garnish would go best with raw fish.",
            "You missed. Your stomach growls. You growl back.",
            "You throw and the lasso grabs a big one. You eagerly pull it back, but the fish slaps your arm and the bite stings like crazy. Amidst the pain the fish runs away into the bushes, then remembers itself and gets back in the water."
        ],
        "image": "1030images/fish_pool.png",
        "choices": [
            {
                "text": "Try Again",
                "emoji": "&#127907;",
                "next": "fishing"
            },
            {
                "text": "Give up",
                "emoji": "&#128532;",
                "next": "waterfallOasisWithRopes"
            }
        ]
    },
    "exploringBehindWaterfall":{
        "id": "exploringBehindWaterfall",
        "title": "Exploring Behind The Waterfall",
        "endOfStoryLine": false,
        "text": "As you walk behind the cascading waterfall, you hear the deafening drone of rushing water all around you. The misty spray cools my face and drips from your {hairColor} hair. As you follow the path further, you notice a cave entrance which had previously been hidden by the waterfall.",
        "image": "1030images/waterfall_cave.jpg",
        "choices": [
            {
                "text": "Explore the cave",
                "emoji": "&#128371;",
                "next": ["caveFallDed","cave"]
            },
            {
                "text": "Return to the oasis",
                "emoji": "&#127966;",
                "next": "waterfallOasis"
            }
        ]
    },
    "exploringBehindWaterfallWithRopes":{
        "id": "exploringBehindWaterfallWithRopes",
        "title": "Exploring Behind The Waterfall",
        "endOfStoryLine": false,
        "text": "As you walk behind the cascading waterfall, you hear the deafening drone of rushing water all around you. The misty spray cools my face and drips from your {hairColor} hair. As you follow the path further, you notice a cave entrance which had previously been hidden by the waterfall.",
        "image": "1030images/waterfall_cave.jpg",
        "choices": [
            {
                "text": "Explore the cave",
                "emoji": "&#128371;",
                "next": "caveRopesDed"
            },
            {
                "text": "Return to the oasis",
                "emoji": "&#127966;",
                "next": "waterfallOasisWithRopes"
            }
        ]
    },
    "caveFallDed":{
        "id": "caveFallDed",
        "title": "The Cave",
        "endOfStoryLine": true,
        "causeOfDeath" : "Starvation in cave",
        "text": "As I walked into the cave, I was immediately blinded by the darkness. I stumbled around for a few minutes until I tripped over a rock and fell to the ground. I was unable to get up and died of starvation.",
        "image": "1030images/Game_over.png",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#127869;",
                "next": "stats"
            }
        ]
    },
    "caveRopesDed":{
        "id": "caveRopesDed",
        "title": "Deadly Stalacmites",
        "endOfStoryLine": true,
        "causeOfDeath" : "Tripped over rope",
        "text": "Deep, cold, black darkness greats you as you enter the cave. Through touch and sound, you quickly discover this cave is a whole vast network of tunnels that go on for miles. Eventually you find a deep pit with a strange light at the bottom. You grin - good thing you have your trusty ropes. You begin absailing down. Soon you notice a crumpled, blood spattered envelope wedged in a crack. It has {name} written on the front. You read: \"It's time you knew the truth about me and the others, before its too late, the terrible truth we've hidden from you all this time. The truth is-\" And at that moment the rope snaps, because it's just some vines you twisted together. You fall and die.",
        "image": "1030images/Game_over.png",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#128128;",
                "next": "stats"
            }
        ]
    },
    "cave":{
        "id": "cave",
        "title": "The Cave",
        "endOfStoryLine": false,
        "text": "Deep, cold, black darkness greats you as you enter the cave. You consider feeling your way around, but isn't there an easier way...?",
        "image": "1030images/in_cave.jpg",
        "choices": [
            {
                "text": "Use your torch",
                "emoji": "&#128294;",
                "next": "caveWithTorch"
            },
            {
                "text": "Leave the cave",
                "emoji": "&#127966;",
                "next": "exploringBehindWaterfall"
            }
        ]
    },
    "caveWithTorch":{
        "id": "caveWithTorch",
        "title": "The Cave",
        "endOfStoryLine": false,
        "text": "You can make out some kind of symbol on the wall. It's a heart shaped, jagged and crooked, with 'Ben + Molly 4-Evah' written in the middle. You have no idea what this ancient, perhaps sacred symbolism means, but it fills you with determination.",
        "image": "1030images/in_cave.jpg",
        "choices": [
            {
                "text": "Leave the cave",
                "emoji": "&#127966;",
                "next": "exploringBehindWaterfall"
            }
        ]
    },
    "gaveUp":{
        "id": "gaveUp",
        "title": "You Gave Up",
        "endOfStoryLine": true,
        "causeOfDeath" : "Gave up",
        "text": "I gave up and died of starvation.",
        "image": "1030images/Game_over.png",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#127869;",
                "next": "stats"
            }
        ]
    },
    "returnToCampDed":{
        "id": "returnToCampDed",
        "title": "A Deadly Return To Camp",
        "endOfStoryLine": true,
        "causeOfDeath" : "Snake bite",
        "text": "On your return journey, you notice some strange markings on the ground. The markings lead to a strange grove with a snake sitting on a sundial in the centre. \You're such a fool, {name}\", it says, \"did you forget snake and spider venom cancel each-other out?\" You feel like a right idiot - how'd you forget something like that? \"Don't worry, we all make mistakes. Where would you like it?\" Tearful with gratitude, you present your neck. After a very, very short amount of time you come to find that snakes can lie.",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#128013;",
                "next": "stats"
            }
        ]
    },
    "climbingWaterfall":{
        "id": "climbingWaterfall",
        "title": "Climbing The Waterfall",
        "endOfStoryLine": false,
        "text": "You begin your ascent, grabbing onto the jagged rocks jutting out from the water. The slick rocks makes footing difficult, but with every pang of pain from your arm you climb ever faster to the top.",
        "image": "1030images/look_up_cliff.jpg",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#129495;",
                "next": "topOfWaterfall"
            }
        ]
    },
    "topOfWaterfall":{
        "id": "topOfWaterfall",
        "title": "Orangutan Encounter",
        "endOfStoryLine": false,
        "text": "Your heart pounds with the exertion of the climb, the anticipation of what awaited me. Or maybe it's spider poison spreading through your system. You catch a glimpse of a wild orangutan standing mere feet away from you. Initial fear turns to amazement as you gaze upon its majestic form. It notices you and begins raising a hand. Cross-species connection? It flips the bird and swings into the jungle. As you watch it swing away, your attention's drawn to smoke rising not far off. Some kind of fire?",
        "image": "1030images/orangutan.jpg",
        "choices": [
            {
                "text": "Continue towards the smoke",
                "emoji": "&#128293;",
                "next": "berrieBush"
            },
            {
                "text": "Follow the monkey into the jungle",
                "emoji": "&#128018;",
                "next": "monkeyDed"
            }
        ]
    },
    "monkeyDed":{
        "id": "monkeyDed",
        "title": "Smart Monkeys", //Planet of the Apes reference
        "endOfStoryLine": true,
        "causeOfDeath" : "Out-matched by superior beings",
        "text": "You run after the monkey as it swings speedily into the rainforest. The trees grow thicker, the foliage denser, and soon its dark and you've lost sight of it. Faint \"Oook\" noises make you look up. Hundreds of them sit there, staring at you - no, through you. One drops down. It has what looks to be a make-shift gun. You laugh at such an adorable attempt to mimick mankind. It rolls its eyes and shoots you right through the heart.",
        "image": "1030images/Game_over.png",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#128128;",
                "next": "stats"
            }
        ]
    },
    "berrieBush":{
        "id": "berrieBush",
        "title": "The Berrie Bush",
        "endOfStoryLine": false,
        "text": "You make for the smoke's origin, and a village starts coming into view. You also notice some good-looking berries growing from a nearby bush.",
        "image": "1030images/berry_bush.jpg",
        "choices": [
            {
                "text": "Take the berries",
                "emoji": "&#127815;",
                "next": "berriesEaten"
            },
            {
                "text": "Continue towards the village",
                "emoji": "&#128726;",
                "next": "village"
            }
        ]
    },
    "berries":{
        "id": "berries",
        "title": "The Berrie Bush",
        "endOfStoryLine": false,
        "text": "You carefully avoid the thorns and pick a few. The berries look delicious, more delicious than any berries you've ever seen, bright red and glossy. You feel a strong compulsion to eat them now.",
        "image": "1030images/berries.jpg",
        "choices": [
            {
                "text": "Eat the berries",
                "emoji": "&#127815;",
                "next": "berriesEatenDed"
            },
            {
                "text": "No way, this is classic storybook stuff",
                "emoji": "&#128726;",
                "next": "villageWithBerries"
            }
        ]
    },
    "berriesEatenDed":{
        "id": "berriesEaten",
        "title": "Poisonous Berries",
        "endOfStoryLine": true,
        "causeOfDeath" : "Delicious berries",
        "text": "You eat the berries. They're divine. You have some more. Soon the bush is completely bare. You wait a while, and are honestly surprized they didn't poison you after all. Revitalized by such a healthy snack, you continue on.",
        "image": "1030images/Game_over.png",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#128565;",
                "next": "stats"
            }
        ]
    },
    "village":{
        "id": "village",
        "title": "The Village",
        "endOfStoryLine": false,
        "text": "Faces peer round the doorways of squat huts and you enter the village. A man dressed impressively in furs and bright feathers approaches you. \"What is your business here?\"",
        "image": "1030images/tribe_huts.jpg",
        "choices": [
            {
                "text": "Ask for help with the venom",
                "emoji": "&#128591;",
                "next": "treatment"
            },
            {
                "text": "Insult the Village Leader",
                "emoji": "&#129324;",
                "next": "banishedDed"
            }
        ]
    },
    "banishedDed":{
        "id": "banishedDed",
        "title": "Banished",
        "endOfStoryLine": true,
        "causeOfDeath" : "The village kills you",
        "text": "The village leader turns beetroot. \"You DARE ask demand this of me in my own realm?!\" You are swiftly beaten, burned and scattered across the fields, and not necessarily in that order.",
        "image": "1030images/Game_over.png",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#128056;",
                "next": "stats"
            },
        ]
    },
    "villageWithBerries":{
        "id": "villageWithBerries",
        "title": "The Village",
        "endOfStoryLine": false,
        "text": "Faces peer round the doorways of squat huts and you enter the village. A man dressed impressively in furs and bright feathers approaches you. \"What is your business here?\"",
        "image": "1030images/tribe.jpg",
        "choices": [
            {
                "text": "Offer the berries as a gift",
                "emoji": "&#127873;",
                "next": "itsTreasonThenDed"
            },
            {
                "text": "Hide the berries and ask for help",
                "emoji": "&#128591;",
                "next": "treatment"
            }
        ]
    },
    "itsTreasonThenDed":{
        "id": "itsTreasonThenDed",
        "title": "It\'s Treason Then",
        "endOfStoryLine": true,
        "causeOfDeath" : "Treason",
        "text": "The village takes your gift of the berries as an insult and assassination attempt. They say any berries that good looking are obviously poisonous, and you really can't disagree. They're tired of killing outsiders all the time, so they form a committee for new execution methods. After three days, you're killed with a genius combination of a bath of gravy, 3 double-A batteries and a spoon.",
        "image": "1030images/Game_over.png",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#128128;",
                "next": "stats"
            }
        ]
    },
    "treatment":{
        "id": "treatment",
        "title": "Treatment",
        "endOfStoryLine": true,
        "text": "The leader looks at you and laughs. \"You are of very {height} height for a wizard\". He then notices your bite. \"We are a noble people\" he says, \"We will not endure instruction from anyone, but will freely aid those who need it. Come, let us heal you\". The village elder lays some leaves over your bitten hand. You're fed and rested for several days in the village, until you regain your strength and give a tearful goodbye. You leave and journey on to your next adventure.",
        "image": "1030images/you_win.png",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#128170;",
                "next": "stats"
            }
        ]
    },
    "ranOutOfTime":{
        "id": "ranOutOfTime",
        "title": "Venom Killed You",
        "endOfStoryLine": true,
        "causeOfDeath" : "Succumbed to the venom",
        "text": "The venom killed you",
        "image": "1030images/Game_over.png",
        "choices": [
            {
                "text": "Continue",
                "emoji": "&#9200;",
                "next": "stats"
            }
        ]
    }
}

function personalize(storyTree, name, hairColor, height) {
    for (storyNodeKey in storyTree) {
        storyNode = storyTree[storyNodeKey];
        storyNode["text"] = String(storyNode["text"]).replace("{name}", name);
        storyNode["text"] = String(storyNode["text"]).replace("{hairColor}", hairColor);
        storyNode["text"] = String(storyNode["text"]).replace("{height}", height);
    }
    return storyTree;
}
