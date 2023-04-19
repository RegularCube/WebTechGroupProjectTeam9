var storyline = {
    "start":{
        "id": "start",
        "title": "The Beginning",
        "text": "As I opened my eyes, I realized I was in an abandoned campsite. The tents were torn, the fire pit was cold, and the jungle was eerily silent. Suddenly, a throbbing pain on my left arm brought me back to reality. Looking at it, I saw a spider bite with a red mark around it. My eyes caught the movement of a black spider with a red hourglass mark on its back scuttling away into the undergrowth. Panic set in as I realized I had no idea how I got there or how long I had been unconscious. With only a Swiss army knife, a torch and no clue of my whereabouts, fear overtook me. How was I going to survive?",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "I'm going to die!",
                "emoji": "😱",
                "next": "ded"
            },
            {
                "text": "I'm going to survive! I'm going to find help!",
                "emoji": "😎",
                "next": "junglePath"
            }
        ]

    },
    "junglePath":{
        "id": "junglePath",
        "title": "The Jungle Path",
        "text": "As I walked along the narrow jungle path, I heard a low rumbling sound in the distance. My heart raced as I wondered what could be making such a noise. Was it a hungry predator, lurking in the thick foliage? Or was it just the sound of a passing storm? Suddenly, the rumbling grew louder and I realized it was coming from a nearby waterfall. Relieved, I continued on my way, grateful for the beauty and serenity of the jungle despite its many dangers.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Continue down path",
                "emoji": "😱",
                "next": "waterfallOverlook"
            },
            {
                "text": "Return to camp",
                "emoji": "🏕️",
                "next": "returnToCampDed"
            }

        ]
    },
    "waterfallOverlook":{
        "id": "waterfallOverlook",
        "title": "The Waterfall Overlook",
        "text": "Suddenly, the rumbling grew louder. I realized it was coming from a nearby waterfall. Relieved, I viewed the waterfall from above, grateful for the beauty and serenity of the jungle despite its many dangers. The breath-taking view of the waterfall was partially obstructed by the surrounding leaves. While the cascading water could still be seen, the area above the waterfall was obscured. The vibrant green leaves seemed to form a natural barrier between me and what lay beyond the waterfall. Despite leaves obstructing the view of the waterfall, there was an opportunity to climb up nearby branches and peer beyond the waterfall. The branches would act as a natural ladder, granting access to the higher vantage point. However, they did look slippery from the mist of the waterfall.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Quickly but carefully traverse down the jungle slope to the waterfall",
                "emoji": "🏃",
                "next": "waterfallOasis"
            },
            {
                "text": "Climb up the branches to the higher vantage point",
                "emoji": "🏞️",
                "next": "slipperyBranchOverlook"
            }
        ]
    },
    "slipperyBranchOverlook":{
        "id": "slipperyBranchOverlook",
        "title": "The Slippery Branch Overlook",
        "text": "As I stood on a slippery branch overlooking a magnificent waterfall, my eyes caught sight of a native village in the distance. There was a column of smoke rising from a campfire and I could just make out figures sat around it.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Climb back down to the base of the tree.",
                "emoji": "🌳",
                "next": ["waterfallOverlook", "fallingFromTree"]
            }
        ]
    },
    "fallingFromTree":{
        "id": "fallingFromTree",
        "title": "Falling From The Tree",
        "text": "As I climbed down the slippery branch, I lost my footing and fell from the tree.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Continue falling.",
                "emoji": "🌳",
                "next": ["fellFromTree", "fellFromTreeAndDed"]
            }
        ]
    },
    "fellFromTreeAndDed":{
        "id": "fellFromTreeAndDed",
        "title": "You fell from The Tree",
        // fell from the tree and died spectacularly
        "text": "As I landed on the ground, I broke my neck and died.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Continue",
                "emoji": "💀",
                "next": "stats"
            }
        ]
    },
    "fellFromTree":{
        "id": "fellFromTree",
        "title": "You fell from The Tree",
        "text": "I landed on my left arm, which was still sore from the spider bite. I was in agony as I tried to get up.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Get up and continue on my way.",
                "emoji": "⬆️",
                "next": "waterfallOasis"
            }
        ]
    },
    "waterfallOasis":{
        "id": "waterfallOasis",
        "title": "The Waterfall Oasis",
        // there are vines hanging from the waterfall and fish in the river below the waterfall. scene is lush and green. There is a small path leading behind the waterfall.
        "text": "placeholder",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Explore behind the waterfall",
                "emoji": "💦",
                "next": "exploringBehindWaterfall"
            },
            {
                "text": "Create a raft and float down the river",
                "emoji": "🛶",
                "next": "confusedRaftBuilder"
            },
            {
                "text": "Create ropes from the vines",
                "emoji": "🪢",
                "next": "waterfallOasisWithRopes"
            }
        ]
    },
    "confusedRaftBuilder":{
        "id": "confusedRaftBuilder",
        "title": "The Confused Raft Builder",
        "text": "You tried to build a raft, but you didn't have any rope. You were confused and didn't know what to do next.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Continue",
                "emoji": "🛶",
                "next": "waterfallOasis"
            }
        ]
    },
    "waterfallOasisWithRopes":{
        "id": "waterfallOasisWithRopes",
        "title": "The Waterfall Oasis",
        "text": "placeholder",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Explore behind the waterfall",
                "emoji": "💦",
                "next": "exploringBehindWaterfallWithRopes"
            },
            {
                "text": "Create a raft and float down the river",
                "emoji": "🛶",
                "next": "floatOffWaterfallAndDed"
            },
            {
                "text": "Attempt to catch fish with the ropes",
                "emoji": "🎣",
                "next": "fishing"
            }
        ]
    },
    "floatOffWaterfallAndDed":{
        "id": "floatOffWaterfallAndDed",
        "title": "You floated off the waterfall",
        "text": "You floated downstream. On the way, you were attacked by a crocodile and died.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Continue",
                "emoji": "🐊",
                "next": "stats"
            }
        ]
    },
    "fishing":{
        "id": "fishing",
        "title": "Fishing",
        "text": [
            "I tried to lasso the fish but threw it way too far. I must try it again.",
            "I threw the loop near the fish, but the fish were too big to get caught, I will tighten the loop.",
            "I threw the loop at the fish, but the fish were too slippery to stay in the loop, I will loosen the loop.",
            "I threw but missed, I know fishing is purely practice and persistence",
            "I arc the rope near the fish but to no avail, I won’t let another failed attempt discourage me.",
            "It was a tired throw so it had no chance of catching the fish. If I get tired then that must mean the fish get tired!",
            "My fishing skills are improving; I’ll get lucky soon!",
            "I missed. When I catch a fish, I’ll make a delicious meal out of it.",
            "I missed. My hunger will only make the victory even sweeter; I must try again.",
            "I miss, the water splashes at my hand with the bite and makes it sting heavily, is catching the fish even worth it?"
        ],
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Try Again",
                "emoji": "🎣",
                "next": "fishing"
            },
            {
                "text": "Give up",
                "emoji": "😔",
                "next": "waterfallOasisWithRopes"
            }
        ]
    },
    "exploringBehindWaterfall":{
        "id": "exploringBehindWaterfall",
        "title": "Exploring Behind The Waterfall",
        "text": "As I walked behind the cascading waterfall, I could hear rushing water all around me. The misty spray cooled my face as I made my way deeper along the path behind the falls. Suddenly I notice a cave entrance which had previously hidden by the waterfall.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Explore the cave",
                "emoji": "🕳️",
                "next": ["caveFallDed","cave"]
            },
            {
                "text": "Return to the oasis",
                "emoji": "🏞️",
                "next": "waterfallOasis"
            }
        ]
    },
    "exploringBehindWaterfallWithRopes":{
        "id": "exploringBehindWaterfallWithRopes",
        "title": "Exploring Behind The Waterfall",
        "text": "As I walked behind the cascading waterfall, I could hear rushing water all around me. The misty spray cooled my face as I made my way deeper along the path behind the falls. Suddenly I notice a cave entrance which had previously hidden by the waterfall.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Explore the cave",
                "emoji": "🕳️",
                "next": "caveRopesDed"
            },
            {
                "text": "Return to the oasis",
                "emoji": "🏞️",
                "next": "waterfallOasisWithRopes"
            }
        ]
    },
    "caveFallDed":{
        "id": "caveFallDed",
        "title": "The Cave",
        "text": "As I walked into the cave, I was immediately blinded by the darkness. I stumbled around for a few minutes until I tripped over a rock and fell to the ground. I was unable to get up and died of starvation.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Continue",
                "emoji": "🍽️",
                "next": "stats"
            }
        ]
    },
    "caveRopesDed":{
        "id": "caveRopesDed",
        "title": "The Cave",
        "text": "As I walked into the cave, I was immediately blinded by the darkness. I stumbled around for a few minutes until I tripped over mr ropes and fell to the ground. I hit my head on a stalacmite and died.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Continue",
                "emoji": "💀",
                "next": "stats"
            }
        ]
    },
    "cave":{
        "id": "cave",
        "title": "The Cave",
        "text": "As I peered inside, my heart raced with excitement. The sound of my own footsteps echoed off the walls as I explored the damp, rocky terrain. However, I couldn’t see much, maybe I could use my torch...",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Use the torch",
                "emoji": "🔦",
                "next": "caveWithTorch"
            },
            {
                "text": "Leave the cave",
                "emoji": "🏞️",
                "next": "exploringBehindWaterfall"
            }
        ]
    },
    "caveWithTorch":{
        "id": "caveWithTorch",
        "title": "The Cave",
        "text": "I think I can make out a symbol on the wall. I wonder what it means?",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Leave the cave",
                "emoji": "🏞️",
                "next": "exploringBehindWaterfall"
            }
        ]
    }
    






}