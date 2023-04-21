var storyLine = {
    "start":{
        "id": "start",
        "title": "The Beginning",
        "endOfStoryLine": false,
        "text": "As I opened my eyes, I realized I was in an abandoned campsite. The tents were torn, the fire pit was cold, and the jungle was eerily silent. Suddenly, a throbbing pain on my left arm brought me back to reality. Looking at it, I saw a spider bite with a red mark around it. My eyes caught the movement of a black spider with a red hourglass mark on its back scuttling away into the undergrowth. Panic set in as I realized I had no idea how I got there or how long I had been unconscious. With only a Swiss army knife, a torch and no clue of my whereabouts, fear overtook me. How was I going to survive?",
        "image": "https://source.unsplash.com/featured/",
        "choices": [
            {
                "text": "I'm going to die!",
                "emoji": "&#128561;",
                "next": "ded"
            },
            {
                "text": "I'm going to survive! I'm going to find help!",
                "emoji": "&#128526;",
                "next": "junglePath"
            }
        ]

    },
    "junglePath":{
        "id": "junglePath",
        "title": "The Jungle Path",
        "endOfStoryLine": false,
        "text": "As I walked along the narrow jungle path, I heard a low rumbling sound in the distance. My heart raced as I wondered what could be making such a noise. Was it a hungry predator, lurking in the thick foliage? Or was it just the sound of a passing storm? Suddenly, the rumbling grew louder and I realized it was coming from a nearby waterfall. Relieved, I continued on my way, grateful for the beauty and serenity of the jungle despite its many dangers.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Continue down path",
                "emoji": "&#128561;",
                "next": "waterfallOverlook"
            },
            {
                "text": "Return to camp",
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
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Quickly but carefully traverse down the jungle slope to the waterfall",
                "emoji": "&#127939;",
                "next": "waterfallOasis"
            },
            {
                "text": "Climb up the branches to the higher vantage point",
                "emoji": "&#127966;",
                "next": "slipperyBranchOverlook"
            }
        ]
    },
    "slipperyBranchOverlook":{
        "id": "slipperyBranchOverlook",
        "title": "The Slippery Branch Overlook",
        "endOfStoryLine": false,
        "text": "As I stood on a slippery branch overlooking a magnificent waterfall, my eyes caught sight of a native village in the distance. There was a column of smoke rising from a campfire and I could just make out figures sat around it.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Climb back down to the base of the tree.",
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
        "image": "http://www.example.com/image.jpg",
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
        "title": "You fell from The Tree",
        "endOfStoryLine": true,
        // fell from the tree and died spectacularly
        "text": "As I landed on the ground, I broke my neck and died.",
        "image": "http://www.example.com/image.jpg",
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
        "title": "You fell from The Tree",
        "endOfStoryLine": false,
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
        "endOfStoryLine": false,
        // there are vines hanging from the waterfall and fish in the river below the waterfall. scene is lush and green. There is a small path leading behind the waterfall.
        "text": "The area beneath the waterfall is an oasis. The lush jungle surrounds the giant cliff where the waterfall is. There are several vines hanging off nearby trees, fish swimming nearby and a small path which looks to go behind the waterfall...",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Explore behind the waterfall",
                "emoji": "&#128166;",
                "next": "exploringBehindWaterfall"
            },
            {
                "text": "Create a raft and float down the river",
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
        "image": "http://www.example.com/image.jpg",
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
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Explore behind the waterfall",
                "emoji": "&#128166;",
                "next": "exploringBehindWaterfallWithRopes"
            },
            {
                "text": "Create a raft and float down the river",
                "emoji": "&#128758;",
                "next": "floatOffWaterfallAndDed"
            },
            {
                "text": "Attempt to catch fish with the ropes",
                "emoji": "&#127907;",
                "next": "fishing"
            },
            {
                "text": "Attempt to climb the waterfall with the ropes",
                "emoji": "&#129495;",
                "next": "climbingWaterfall"
            },
        ]
    },
    "floatOffWaterfallAndDed":{
        "id": "floatOffWaterfallAndDed",
        "title": "You floated off the waterfall",
        "endOfStoryLine": true,
        "text": "You floated downstream. On the way, you were attacked by a crocodile and died.",
        "image": "http://www.example.com/image.jpg",
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
        "text": "As I walked behind the cascading waterfall, I could hear rushing water all around me. The misty spray cooled my face as I made my way deeper along the path behind the falls. Suddenly I notice a cave entrance which had previously hidden by the waterfall.",
        "image": "http://www.example.com/image.jpg",
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
        "text": "As I walked behind the cascading waterfall, I could hear rushing water all around me. The misty spray cooled my face as I made my way deeper along the path behind the falls. Suddenly I notice a cave entrance which had previously hidden by the waterfall.",
        "image": "http://www.example.com/image.jpg",
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
        "text": "As I walked into the cave, I was immediately blinded by the darkness. I stumbled around for a few minutes until I tripped over a rock and fell to the ground. I was unable to get up and died of starvation.",
        "image": "http://www.example.com/image.jpg",
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
        "title": "The Cave",
        "endOfStoryLine": true,
        "text": "As I walked into the cave, I was immediately blinded by the darkness. I stumbled around for a few minutes until I tripped over mr ropes and fell to the ground. I hit my head on a stalacmite and died.",
        "image": "http://www.example.com/image.jpg",
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
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Use the torch",
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
        "image": "http://www.example.com/image.jpg",
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
        "title": "You gave up",
        "endOfStoryLine": true,
        "text": "I gave up and died of starvation.",
        "image": "http://www.example.com/image.jpg",
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
        "title": "You returned to camp",
        "endOfStoryLine": true,
        "text": "On my return journey, I noticed some strange markings on the ground. I followed them and found a cave. I entered the cave and found a treasure chest. I opened the chest and found a golden ring. I put the ring on my finger and it turned into a snake. The snake bit me and I died.",
        "image": "http://www.example.com/image.jpg",
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
        "image": "http://www.example.com/image.jpg",
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
        "title": "Top Of The Waterfall",
        "endOfStoryLine": false,
        "text": "My heart was pounding with both the exertion of the climb and anticipation of what awaited me. When I finally reached the summit, I caught a glimpse of a wild orangutan standing mere feet away from me. My initial fear turned to amazement as I gazed upon its majestic form. It then noticed my presence and swung away into the jungle. As I watched it swing away, my attention was drawn to smoke rising in the distance. Some kind of fire? This could be my chance to find out what happened to the others.",
        "image": "http://www.example.com/image.jpg",
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
        "title": "Dead to the Monkeys", //Planet of the Apes reference
        "endOfStoryLine": true,
        "text": "As I followed the monkey into the jungle, I could feel I was being watched. It turns out I was! There were hundreds of monkeys above me in the jungle canopy looking down on me. These weren't any ordinary monkeys... they were far more intelligent than I could ever imagine. The last thing I remembered was hearing the monkeys chant after I was captured by monkey with a homemade net.",
        "image": "http://www.example.com/image.jpg",
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
        "title": "Berrie bush",
        "endOfStoryLine": false,
        "text": "On my way towards the smoke I could see it was coming from a village. I also noticed some berries growing on a bush.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Eat the berries",
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
        "title": "Berries",
        "endOfStoryLine": false,
        "text": "I carefully avoided the thorns and picked a few berries. The berries looked delicious and were a bright red. I didn't know whether to eat them now to ease my hunger or take them with me to the village ahead.",
        "image": "http://www.example.com/image.jpg",
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
        "title": "Berries",
        "endOfStoryLine": true,
        "text": "I ate the berries and they tasted delicious. I felt a sudden burst of energy from the sweet berries and decided to continue towards the village. As I began to continue on my jouney",
        "image": "http://www.example.com/image.jpg",
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
        "title": "Village",
        "endOfStoryLine": false,
        "text": "I enter the village and the village leader is summoned to meet me. I am surrounded by the village inhabitants as the leader asks why I am here.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Ask for help with the venom",
                "emoji": "&#128591;",
                "next": "treatment"
            },
            {
                "text": "Insult the village leader for allowing venomous spiders to be venomous",
                "emoji": "&#129324;",
                "next": "banishedDed"
            }
        ]
    },
    "banishedDed":{
        "id": "banishedDed",
        "title": "Banished",
        "endOfStoryLine": true,
        "text": "I was banished from the village because I insulted them. I didn't even survive the next night as I touched a poisonous frog.",
        "image": "http://www.example.com/image.jpg",
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
        "title": "Village With Berries",
        "endOfStoryLine": false,
        "text": "I enter the village and the village leader is summoned to meet me. I am surrounded by the village inhabitants as the leader asks why I am here.",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Offer the berries as a gift and ask for help with the venom",
                "emoji": "&#127873;",
                "next": "itsTreasonThenDed"
            },
            {
                "text": "Hide the berries and ask for help with the venom",
                "emoji": "&#128591;",
                "next": "treatment"
            }
        ]
    },
    "itsTreasonThenDed":{
        "id": "itsTreasonThenDed",
        "title": "Its Treason Then",
        "endOfStoryLine": true,
        "text": "The village took my gift of the berries as an insult and assasination attempt. I am quickly hacked down by the guards.",
        "image": "http://www.example.com/image.jpg",
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
        "text": "The village elder laid some leaves over my bitten hand. I was fed and rested for several days in the village until I had regained my strength. It was now time to discover the mystery of my campmates and escape this deadly jungle.",
        "image": "http://www.example.com/image.jpg",
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
        "text": "The venom killed you",
        "image": "http://www.example.com/image.jpg",
        "choices": [
            {
                "text": "Continue",
                "emoji": "⏰",
                "next": "stats"
            }
        ]
    }






}
