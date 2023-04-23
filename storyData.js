var storyLine = {
    "start":{
        "id": "start",
        "title": "The Abandoned Campsite",
        "endOfStoryLine": false,
        "text": "As I opened my eyes, I realized I was in an abandoned campsite. The tents were torn, the fire pit was cold, and the jungle was eerily silent. Suddenly, a throbbing pain on my left arm brought me back to reality. Looking at it, I saw a spider bite with a red mark around it. My eyes caught the movement of a black spider with a red hourglass mark on its back scuttling away into the undergrowth. Panic set in as I realized I had no idea how I got there or how long I had been unconscious. With only a Swiss army knife, a torch and no clue of my whereabouts, fear overtook me. How was I going to survive?",
        "image": "1030images/campsite.jpg",
        "choices": [
            {
                "text": "I'm going to die!",
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
        "text": "As I walked along a narrow jungle path, I heard a low rumbling sound in the distance. My heart raced as I wondered what could be making such a noise. Was it a hungry predator, lurking in the thick foliage? Or was it just the sound of a passing storm? Suddenly, the rumbling grew louder and I realized it was coming from a nearby waterfall. Relieved, I continued on my way, grateful for the beauty and serenity of the jungle despite its many dangers.",
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
        "text": "Suddenly, the rumbling grew louder. I realized it was coming from a nearby waterfall. Relieved, I viewed the waterfall from above, grateful for the beauty and serenity of the jungle despite its many dangers. The breath-taking view of the waterfall was partially obstructed by the surrounding leaves. While the cascading water could still be seen, the area above the waterfall was obscured. The vibrant green leaves seemed to form a natural barrier between me and what lay beyond the waterfall. Despite leaves obstructing the view of the waterfall, there was an opportunity to climb up nearby branches and peer beyond the waterfall. The branches would act as a natural ladder, granting access to the higher vantage point. However, they did look slippery from the mist of the waterfall.",
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
        "text": "As I stood on a slippery branch overlooking a magnificent waterfall, my eyes caught sight of a native village in the distance. There was a column of smoke rising from a campfire and I could just make out figures sat around it.",
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
        "text": "As I climbed down the slippery branch, I lost my footing and fell from the tree.",
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
        "text": "As I landed on the ground, I broke my neck and died.",
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
        "text": "I landed on my left arm, which was still sore from the spider bite. I was in agony as I tried to get up.",
        "image": "1030images/dazed.png",
        "choices": [
            {
                "text": "Get up and continue on my way.",
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
        "text": "The area beneath the waterfall is an oasis. The lush jungle surrounds the giant cliff where the waterfall is. There are several vines hanging off nearby trees, fish swimming nearby and a small path which looks to go behind the waterfall...",
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
        "text": "You tried to build a raft, but you didn't have any rope. You were confused and didn't know what to do next.",
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
        "text": "The area beneath the waterfall is an oasis. The lush jungle surrounds the giant cliff where the waterfall is. With a rope in hand, there are fish swimming nearby and a small path which looks to go behind the waterfall. With the rope it looks possible that the waterfall could be climbed...",
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
        "text": "You floated downstream. On the way, you were attacked by a crocodile and died.", //TODO : change text for this scene
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
            "You throw and the lasso grabs a big one. You eagerly pull it back, with such force that it comes hurtling towards you. The fish slaps your arm and the bite stings like crazy. Amidst the pain the fish runs away into the bushes, then remembers itself and gets back in the water."
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
        "text": "As I walked behind the cascading waterfall, I could hear rushing water all around me. The misty spray cooled my face and dripped from my {hairColor} hair as I made my way deeper along the path behind the falls. Suddenly I notice a cave entrance which had previously hidden by the waterfall.",
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
        "text": "As I walked behind the cascading waterfall, I could hear rushing water all around me. The misty spray cooled my face and dripped from my {hairColor} hair as I made my way deeper along the path behind the falls. Suddenly I notice a cave entrance which had previously hidden by the waterfall.",
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
        "causeOfDeath" : "Starvation In The Cave",
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
        "text": "As I walked into the cave, I was immediately blinded by the darkness. I stumbled around for a few minutes until I tripped over mr ropes and fell to the ground. I hit my head on a stalacmite and died.",
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
        "text": "As I peered inside, my heart raced with excitement. The sound of my own footsteps echoed off the walls as I explored the damp, rocky terrain. However, I couldn’t see much, maybe I could use my torch...",
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
        "text": "I think I can make out a symbol on the wall. I wonder what it means?",
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
        "text": "I gave up and died of starvation.", // TODO : add more interesting text
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
        "text": "On my return journey, I noticed some strange markings on the ground. I followed them and found a cave. I entered the cave and found a treasure chest. I opened the chest and found a golden ring. I put the ring on my finger and it turned into a snake. The snake turned to me and whispered \"{name}, you are a fool\". As I pondered this, the snake bit me and I died.",
        "image": "1030images/Game_over.png",
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
        "text": "I began to climb, grabbing onto the jagged rocks jutting out from the water. It was a slow and cautious ascent, but every step brought me closer to the top. The slick rocks made footing difficult meaning it never felt safe.",
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
        "text": "My heart was pounding with both the exertion of the climb and anticipation of what awaited me. When I finally reached the summit, I caught a glimpse of a wild orangutan standing mere feet away from me. My initial fear turned to amazement as I gazed upon its majestic form. It then noticed my presence and swung away into the jungle. As I watched it swing away, my attention was drawn to smoke rising in the distance. Some kind of fire? This could be my chance to find out what happened to the others.",
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
        "causeOfDeath" : "Captured by smart monkeys",
        "text": "As I followed the monkey into the jungle, I could feel I was being watched. It turns out I was! There were hundreds of monkeys above me in the jungle canopy looking down on me. These weren't any ordinary monkeys... they were far more intelligent than I could ever imagine. The last thing I remembered was hearing the monkeys chant after I was captured by monkey with a homemade net.",
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
        "text": "On my way towards the smoke I could see it was coming from a village. I also noticed some berries growing on a bush.",
        "image": "1030images/berry_bush.jpg",
        "choices": [
            {
                "text": "Pick the berries",
                "emoji": "&#127815;",
                "next": "berries"
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
        "text": "I carefully avoided the thorns and picked a few berries. The berries looked delicious and were a bright red. I didn't know whether to eat them now to ease my hunger or take them with me to the village ahead.",
        "image": "1030images/berry_bush.jpg", // the image "1030images/berries.jpg" wasn't working so just reused the image from the previous scene
        "choices": [
            {
                "text": "Eat the berries",
                "emoji": "&#127815;",
                "next": "berriesEatenDed"
            },
            {
                "text": "Continue towards the village",
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
        "text": "I ate the berries and they tasted delicious. I felt a sudden burst of energy from the sweet berries and decided to continue towards the village. As I began to continue on my jouney",
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
        "text": "I enter the village and the village leader is summoned to meet me. I am surrounded by the village inhabitants as the leader asks why I am here.",
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
                "text": "Coninue",
                "emoji": "&#128056;",
                "next": "stats"
            },
        ]
    },
    "villageWithBerries":{
        "id": "villageWithBerries",
        "title": "The Village",
        "endOfStoryLine": false,
        "text": "I enter the village and the village leader is summoned to meet me. I am surrounded by the village inhabitants as the leader asks why I am here.",
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
        "text": "The village took my gift of the berries as an insult and assasination attempt. I am quickly hacked down by the guards.",
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
        "text": "The leader looks at you and laughs. \"You are of very {height} height for a wizard\". He then notices your bite. \"We are a noble people\" he says, \"We will not endure instruction from anyone, but will freely aid those who need it. Come, let us heal you\". The village elder laid some leaves over my bitten hand. I was fed and rested for several days in the village until I had regained my strength. It was now time to discover the mystery of my campmates and escape this deadly jungle.",
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
        "causeOfDeath" : "Succumned to the venom",
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
