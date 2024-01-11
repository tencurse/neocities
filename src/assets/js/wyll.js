document.addEventListener("DOMContentLoaded", function () {
  const wyllism = document.getElementById("wyllism");
  const wyllismBox = document.getElementById("wyllismbox");

  wyllism.addEventListener("click", function () {
    const quote = getRandom(quotes);

    wyllismBox.innerHTML = quote.quote;
  });

  const wyllogue = document.getElementById("wyllogue");
  const wyllogueBox = document.getElementById("wylloguebox");

  wyllogue.addEventListener("click", function () {
    const dialogue = getRandom(dialogues);

    wyllogueBox.innerHTML = dialogue.dialogue;
  });
});

function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length + 1);
  return array[randomIndex % array.length];
}

const quotes = [
  {
    quote:
      "The Blade is my best self. On my best days, I’ve even lived up to the name.",
  },
  {
    quote: "So two halflings walk under a bar...",
  },
  {
    quote:
      "Pretty enough to paint. Too bad I don’t have a canvas. Or paints. Or the skills.",
  },
  {
    quote:
      "I’d been letting my mind wander. Wondering what it would be like to... well, to hold your hand. To dance with you. To smile coyly, and have you smile back.",
  },
  {
    quote: "I suppose I’ll grow to the new me, horns and all.",
  },
  {
    quote: "So much shadow around us. To think I almost missed the light.",
  },
  {
    quote:
      "Ah - Halsin is such a delight. Woe to the cultist who tangles with that thick hunk of an elf.",
  },
  {
    quote:
      "Oh, that smile - it could light up a room. Hells, it could light up the entire Bay of Balduran.",
  },
  {
    quote:
      "Welcome to the League of the Lone Eye, my friend. Not to minimise the pain of Volo’s poking and prodding, but I promise: you’ll be used to the prosthesis in no time. Besides, I find it gives one an air of mystique. No one’s more intriguing than an adventurer with one eye.",
  },
  {
    quote:
      "Oh goodness, my cheeks’ve gone warm. Am I blushing? I must be blushing.",
  },
  {
    quote:
      "I can recognize a troll’s silhouette on a far horizon, but I wouldn’t know a flirtation if you whacked me along side the head with it.",
  },
  {
    quote:
      "‘‘Taste me,’ Allura pleaded. Fabian smashed his lips against hers and their tongues twisted together like two eels in the Sword Sea.’",
  },
  {
    quote:
      "You must have stumbled out here by complete accident. Too much honey-wine can do that. You should watch yourself.",
  },
  {
    quote:
      "You must be Volo in disguise, out here to harangue me for some tales of the Frontiers. What a cruel disguise! My nerves started hammering the second I thought they were the one looking for me.",
  },
  {
    quote:
      "It’s a long shot, but - maybe you’ve grown fond of me. Gods know I’ve grown fond of you.",
  },
  {
    quote:
      "No one knows better than I do the deep shadows haunting Baldur’s Gate. But I also know you can find light if you know where to look. And this I promise: you can always look to me.",
  },
  {
    quote:
      "I appreciate a wandering hand now and again, but maybe control your urges for now.",
  },
  { quote: "In truth, I always enjoyed a bit of pomp." },
  { quote: "In that case, I’ve got just one thing to say - ‘Meow’." },
  { quote: "Oh hells, why not? All hail MAHKLOOMPAH!" },
  {
    quote:
      "You are the red of the sunrise, the yellow of high noon, and the orange of sundown. If you were a song, I’d never stop singing; if you were a psalm, I’d never stop praying. You make a damn fun dance partner, too.",
  },
  {
    quote:
      "‘Daddy’ just gave us the key to a living weapon that could melt that brain into goo. Go on, read the Legend of Ansur. Unless you’re too busy dreaming up new insults, in which case, let me save you some time: ‘Soldier’s Pet’, ‘Papa’s Prince’, ‘Duke’s Little Rich Boy’, ‘The Babe of Frontiers’. Hm. That should cover it.",
  },
  {
    quote:
      "Elegant bearing, saucy voice - I should’ve seen it, the signs were all there.",
  },
  {
    quote:
      "A few moonrises back I thought the answer was complicated, but it’s quite simple, really. You are my yesterday, my today, and my tomorrow. Fortune willing as the seasons of life pass into winter and my hair goes to gray, you’ll still be within my quivering arm’s reach.",
  },
  {
    quote:
      "The horns aren’t so bad, I guess. Maybe a bit of wax could spruce them up.",
  },
  {
    quote: "A man looks in, a devil looks back. I might never get used to it.",
  },
  {
    quote: "Hm. It’s still me, I guess. Sort of.",
  },
  {
    quote:
      "I see the hunger in your eyes, and I see how it worries you. It worries me too. But you are stronger than the hunger. You can resist, you <em>will</em> resist. I’m sure of it.",
  },
  {
    quote:
      "I know when I’m being led down a dark path. I can’t stop you from taking it. But I can’t join you - no matter how much you mean to me.",
  },
  { quote: "Provoke the Blade... and suffer its sting!" },
  {
    quote:
      "Jaheira would do anything to see her family safe. *sigh* They’re lucky to have her - and she’s lucky to have them.",
  },
  {
    quote:
      "You have conquered your urge. You have taken back your own soul. I’m so proud of you.",
  },
  {
    quote:
      "Now, now - I always save the best stories for my closest friends and my cruelest enemies. Get to be one of those, and I’ll spill the whole jug. You get that, right? Spill the whole jug? Ugh - guess I’ll toss that one on the heap.",
  },
  { quote: "Where there’s a ‘Wyll’, there’s a ‘y’." },
  { quote: "As my father once told me: ‘Can we get on with it?’" },
  { quote: "Quiet as a moonbeam." },
  { quote: "A big man does not fit in a small hole." },
  { quote: "I am way too big for a hole that tiny." },
  {
    quote:
      "Fool me once, shame on you. Fool me twice, and - wait, how’s it go, again?",
  },
  { quote: "Aaaaaand here I go!" },
  {
    quote:
      "Astarion has a certain swagger, don’t you find? An interesting fellow. Nice hair, to boot.",
  },
  {
    quote:
      "I love you. Will you be mine - today, and tomorrow, and reaching into eternity?",
  },
  {
    quote:
      "It’s like I always sometimes say - you can’t summon dead ogres, no matter how hard you blow.",
  },
  { quote: "Yoo-hoo! Hellooooooo? Guess he can’t hear me." },
  {
    quote:
      "Seven years. Seven years of hunting the monsters of the Sword Coast - and seven years of Mizora’s tight leash. And seven years of wondering if I’d ever rid myself of her - or if I even should.",
  },
  {
    quote:
      "Not sure what I expected to find, but organs and entrails were not in my top 20.",
  },
  { quote: "It’s time to make the undead, re-dead." },
  {
    quote:
      "Something’s dripping from above. I think the technical term is... “goo.”",
  },
  {
    quote:
      "Ah, well, that is a lot more of the illithid anatomy than I’d ever hoped to see.",
  },
  {
    quote:
      "I’d cling to life forever if it means I could keep Baldur’s Gate safe. But time marches me on to a different fate.",
  },
  {
    quote:
      "I wish I knew a good githyanki cheer to celebrate the occasion, but the only gith phrases I’ve picked up are the sweary kind.",
  },
  {
    quote:
      "There’s an old saying I just made up: “To fell a dragon, you must chop off its head.”",
  },
  { quote: "The proof is in the pumpkin, as I’m sure someone once said." },
  {
    quote:
      "I hope when the sun sets and the stars rise, your dreams always lead to me.",
  },
  {
    quote:
      "I still keep faith in the old tales of love, the once-upon-a-times and happily-ever-afters.",
  },
  {
    quote:
      "It feels good to hear it. Almost as good as the touch of your hand and the glow of your smile.",
  },
  {
    quote:
      "You shine brighter than diamond and strike harder than steel. A rare treasure. Don’t you ever forget it.",
  },
  {
    quote:
      "It was on a whim that I smelled an orchard’s sweetest flowers and plucked its sweetest fruit. If we can find such pleasures in each other, our time together is well spent. Thank you for seeing the best in me, and showing me the best in you.",
  },
  {
    quote:
      "You are my greatest adventure - And what is an adventure without monsters to slay, and toasts to be made after.",
  },
  { quote: "Everything I did, I did for Baldur’s Gate. I did for you." },
  {
    quote:
      "Courage and confidence. You would have been a fine child to my father. Me, well - I’ve never been able to escape my father’s name, try as I might.",
  },
  {
    quote:
      "Doubt is the greatest villain we face. Greater than all the Hell’s devils, greater than a murderous god. Most people don’t find it so easy to conquer. It’s a good thing for us that we aren’t “most people”.",
  },
  {
    quote:
      "Baldur’s Gate is where the Flaming Fist chased me after I’d stolen a peach from a cart in the Wide. I got a good chewing out over it too.",
  },
  {
    quote:
      "The night’s young - you shouldn’t go wasting it. Or wasting any of the wine, for that matter! I plan on downing half a bottle myself. Oops, did I say “half a bottle”? I meant “half a dozen”!",
  },
  {
    quote:
      "Would you count a light spritz from a vial of jasmine dust as a pheromone?",
  },
  {
    quote:
      "Fuck yeah, that’s my girl! Oh shit - I’m starting to pick up your bad habits. Well, fuck it. In for a coin, in for a coffer.",
  },
  {
    quote:
      "Ah - the memories. The Blushing Mermaid’s where fifteen-year-old Wyll snuck his first kiss.",
  },
  {
    quote:
      "I was exposed to all manner of riot and revelry. Hells, my father even urged me on once or twice. But I’ve always been a bit old-fashioned on these matters. I find more pleasure in a courtly dance than a loveless fling.",
  },
  {
    quote:
      "There’re tales galore of a great green dragon called Claugiyliamatar. Try saying <em>that</em> five times in a row! ‘Claugiyliamatar’. ‘Clog-ee-myalarfer’. ‘Cloff-a-mother-f...’ Whatever - let’s call it Old Gnawbone.",
  },
  {
    quote:
      "Gods, love - I must look a mess. I’d just rolled out from under a pesky ogre when Withers yanked me in. Oh, I didn’t mean - well, I didn’t mean <em>that</em>. I’d just gutted the ogre, not… How about I change the subject before I dig this hole any deeper?",
  },
  {
    quote:
      "Was a time I tussled with hill giants without breaking a sweat. Now, a mere werebear could swat me halfway to Amn.",
  },
  { quote: "Halsin, tell me about the man behind the hulking wall of muscle." },
  {
    quote:
      "When I was very young, father told me the dear ones we lose are quiet - but ever watchful. I think he meant to comfort me. But I shivered for weeks, thinking I was being hounded by wide-eyed spirits.",
  },
  {
    quote:
      "I was barely eight years of age when I heard the Counting House held mythical treasure. So curious little Wyll tried to slip in. The guard spotted me straight away and dragged me by the collar back to my father.",
  },
  {
    quote:
      "The monsters of my play-fights were strong, vicious. Trolls with hulking muscles, werewolves with sharpened fangs. But the greatest villains I’ve faced as the Blade? They look more like you and me than they do the beasts of my fantasies.",
  },
  { quote: "‘Smiting evil’ is my middle name." },
  { quote: "Stronger together." },
  { quote: "Let’s chew the fat." },
  { quote: "Unleash the legend!" },
  { quote: "The Blade will not bend!" },
  { quote: "Forever dauntless!" },
  { quote: "On the victor’s path." },
  { quote: "This is <em>my</em> time!" },
  { quote: "Battle favours the fearless." },
  { quote: "Can’t do it without you." },
  { quote: "Wear your scars proudly." },
  { quote: "I love surprises!" },
  { quote: "The Blade’s got you!" },
  { quote: "Hero on demand." },
  { quote: "I’ll get you fit as a fox." },
  { quote: "By Balduran’s bones, I’ve got you!" },
  { quote: "A hero at heart." },
  { quote: "Shush. No, really. <em>Shush.</em>" },
  { quote: "Could do for a brew." },
  { quote: "Do I detect <em>loot?<em>" },
  { quote: "Some pep for your step." },
  { quote: "Ever get the sense that someone’s watching?" },
  { quote: "It’s not stealing. It’s <em>acquiring</em>." },
  { quote: "No djinni inside? Guess I can save up my wishes." },
  {
    quote:
      "Oh, another githyanki disc? I should see Lae’zel - it’s story time.",
  },
  {
    quote:
      "A third disc with those strange markings. More githyanki tales, I hope.",
  },
  { quote: "Ooh, what did you do? The collar’s vibrating." },
  { quote: "Oh, it’s stopped. Good news for my delicate figure." },
  {
    quote:
      "Incredible, to think how many worlds exist beyond this tiny speck within a speck I call home.",
  },
  {
    quote:
      "I will give you as many kisses as you need, darling. But we don’t need luck, for we have something far greater: courage, nerve - and a reason to win.",
  },
  {
    quote:
      "Ah - the little voice in the back of our minds. ‘All is lost!’ it cries out, and it’s all too easy to believe it. There’s only one good response to it: ‘Shut the hell up.’",
  },
  { quote: "My, my - is it me, or do I see a bit of flush in those cheeks?" },
  { quote: "What is it they say? Ah yes - ‘Curiosity killed the kobold.’" },
  { quote: "Bad luck. Let's call this... a learning moment." },
];

const dialogues = [
  {
    dialogue: `WYLL — Astarion, how is the rat diet going?
  <p>ASTARION — It may soon come to an end if you don’t shut your mouth.</p>`,
  },
  {
    dialogue: `ASTARION — I used to be agog at everything when I first walked in the sun. Perhaps I’m adjusting to this new life.
  <p>WYLL — It’s when you use words like ‘agog’ that I remember you’re actually two centuries old.</p>
  <p>ASTARION — And it’s when you think ‘agog’ is an impressive word that I remember you’re just a child.</p>`,
  },
  {
    dialogue: `ASTARION — You should get out of this pact.
  <p>WYLL — A possibility that’s kept me awake countless nights. But I don’t have half a clue where to start, other than play her games, and play by the rules. That’s the only language devils listen to.</p>
  <p>ASTARION — I did the bidding of my abuser for so long, and it only made me weaker.</p>
  <p>WYLL — You were exploited, you were bound. I was not. This was a path I chose, thinking I knew all the terms. I thought wrong.</p>`,
  },
  {
    dialogue: `WYLL — Even if you and our friend ended up having werewolf cubs, they’d be <em>so</em> adorable.
  <p>SHADOWHEART — *clears throat* I’ve shown <em>no</em> signs of lycanthropy, thank you very much. But, should that change, I’ll take it you’re volunteering to be child-minder.</p>
  <p>WYLL — *chuckles* Buy me some protective gloves, and I’m all for it!</p>`,
  },
  {
    dialogue: `GALE — Have you noticed any attachments of the more, erm, <em>romantic</em> variety flourishing in our camp, Wyll?
  <p>WYLL — I think I’m... not the right person to be asking. I can recognise a troll’s silhouette on a far horizon, but I wouldn’t know a flirtation if you whacked me along side the head with it.</p>`,
  },
  {
    dialogue: `WYLL — I’m reminded of a book father kept hidden in a drawer. ‘The Salty Mermaid’. Do you know of it, Shadowheart?
  <p>SHADOWHEART — ‘Fabian ran his calloused fingers along Allura’s scales. Her tail quivered in response...’</p>
  <p>WYLL — ‘‘Taste me,’ Allura pleaded. Fabian smashed his lips against hers and their tongues twisted together like two eels in the Sword Sea.’</p>
  <p>SHADOWHEART — The pinnacle of good trash - even I can’t forget that one too easily. Your father is man of fine taste.</p>`,
  },
  {
    dialogue: `LAE’ZEL — Baldur’s Gate’s sewer system could use a few... improvements.
    <p>WYLL — The smell getting to you, Lae’zel?</p>
    <p>LAE’ZEL — It isn’t the smell that bothers me - it’s the inefficiency. An entire underground wasted on waste that could simply be teleported to Wildspace.</p>
    <p>WYLL — Hm. Once the Absolute’s finished, I’ll be sure to propose your idea to the Council.</p>`,
  },
  {
    dialogue: `LAE’ZEL — I’ll waste no time chasing devils while a tadpole feasts on our skulls.
    <p>WYLL — I’ve seen your people in battle. I reckon you are no mere warrior, but a godsdamned army. I’d be a fool to let you turn back. Pledge me your talents, and I’ll pledge you mine.</p>
    <p>LAE’ZEL — <em>Chk.</em></p>
    <p>WYLL — I’ll presume that’s githyanki for ‘yes’.</p>`,
  },
  {
    dialogue: `WYLL — What’s wrong - is the plant getting to you? You look sicker than a drunk derro.
    <p>TAV — It’s the flower - my magic is gone.</p>
    <p>WYLL — From what I’ve seen, your talents extend well beyond magic. Trust me - you’ll be fine.</p>
    <p>TAV — True. My powers will return if they’re meant to - like a pet cat. Or maybe a feral one.</p>
    <p>WYLL — In that case, I’ve got just one thing to say - ‘Meow’.</p>`,
  },
  {
    dialogue: `WYLL — Ever heard of the Blade of Frontiers, kid? If you like monster-smashing, you might be a fan of his work?
    <p>MATTIS — Who’s that?</p>
    <p>KARLACH — A lovely chap. Didn’t kick arse in the Blood War, but that’s neither here nor there.</p>
    <p>WYLL — That’s true - but he never got kidnapped by a devil either.</p>
    <p>MATTIS — Uhhh. Huh?</p>`,
  },
  {
    dialogue: `WYLL — I’d forgotten what it was like to feel safe. I’m used to being the hero. Not so used to needing one.
    <p>TAV — You’re still my hero, I promise.</p>
    <p>WYLL — It means so much to hear those words from you.</p>`,
  },
  {
    dialogue: `KARLACH — I didn’t even have a pact, and I was captured by a devil for ten years.
    <p>WYLL — But you <em>got out,</em> you did the unimaginable! You brilliant, impossible woman.</p>`,
  },
  {
    dialogue: `TAV — Hmm, a pixie. Curious little thing.
  <p>WYLL — She’s cute as a bug - and not much bigger.</p>`,
  },
  {
    dialogue: `TAV — That sign above. This must be a brewery - or distillery.
  <p>WYLL — We should drop in for a quick sip. For research, of course.</p>`,
  },
  {
    dialogue: `TAV — Ravengard’s already got you wrapped around his little finger. What a daddy’s boy.
    <p>WYLL — ‘Daddy’ just gave us the key to a living weapon that could melt that brain into goo. Go on, read the Legend of Ansur. Unless you’re too busy dreaming up new insults, in which case, let me save you some time: ‘Soldier’s Pet’, ‘Papa’s Prince’, ‘Duke’s Little Rich Boy’, ‘The Babe of Frontiers’. Hm. That should cover it.</p>`,
  },
  {
    dialogue: `MINTHARA — You confound me, Wyll. You have all the illustrious iniquities of a warlock, and you choose to impress your partner with dancing?
  <p>WYLL — Well, I’m hardly going to say ‘Oh, come here. Have a hug in the arms of Hadar.’</p>`,
  },
  {
    dialogue: `WYLL — I love the Coast, I love its people. The Blade of Avernus will toil for them... But he’d rather not toil alone. Faerûn doesn’t need just one hero. It needs two. Say you’ll fight with me.
  <p>TAV — Nothing would make me happier.</p>
  <p>WYLL — Then let it be so! Could any man have wanted a partner more ravishing? You make me so proud. And when the Elder Brain falls, the people of the Sword Coast will see what I see. A shining star, beckoning them to a brilliant future.</p>`,
  },
  {
    dialogue: `GALE — I knew you were a graceful man, Wyll, but I hear you’re quite the dancer, too. I’ve been known to trip the light fantastic myself. Mine was a popular hand at the annual Blackstaff’s Ball.
  <p>WYLL — I’d have loved to witness it, Gale. I wager you are as elegant on the dance floor as you are on the battlefield.</p>`,
  },
  {
    dialogue: `WYLL — I’m probably going to regret this, but Gale - if I’m to be wed, would you like to make a speech?
  <p>GALE — You’ve asked the right wizard. My oratory skills have left many a wedding guest weeping in their seat.</p>
  <p>WYLL — Promise it will last less than half an hour?</p>
  <p>GALE — I can promise it will <em>feel</em> like less than half an hour...</p>`,
  },
  {
    dialogue: `WYLL — I used to believe the beauty of first love was unable to be surpassed. But Gale - you are so much more tolerable now you’ve found your second.
    <p>GALE — I’ll take that comment with the sincerity and good will I assume it was intended.</p>`,
  },
  {
    dialogue: `MIZORA — Back so soon?
  <p>WYLL — You absolute shit-stain!</p>`,
  },
  {
    dialogue: `WYLL — I’ve never met anyone like you, Lae’zel.
  <p>LAE’ZEL — Yes, I’ve been told I’m quite scintillating.</p>
  <p>WYLL — Have you really?</p>
  <p>LAE’ZEL — No.</p>`,
  },
  {
    dialogue: `WYLL — Mm - Lae’zel, do you believe in love at first sight?
    <p>LAE’ZEL — I hardly believe in love at all.</p>
    <p>WYLL — Oh.</p>
    <p>LAE’ZEL — But I do believe in carnal pleasure.</p>
    <p>WYLL — Oh!</p>`,
  },
  {
    dialogue: `WYLL — Astarion, I just want to say - I judged you wrongly. I’m sorry.
  <p>ASTARION — Really? And how - specifically - have you misjudged my fine character?</p>
  <p>WYLL — You aren’t actually insufferably randy. You’re just insufferable.</p>`,
  },
  {
    dialogue: `MINSC — AAAAAAAAAAAAARGH!
  <p>MINSC — Beg pardon. But there is naught so bracing as a good battle-roar, do you not agree?</p>
  <p>WYLL — Let me give it a try. RRaaaghRGRGGRGH!</p>`,
  },
  {
    dialogue: `WYLL — I’m feeling a bit parched and peckish.
  <p>ASTARION — Me too. Keep an eye out for any passing vagrants.</p>
  <p>WYLL — I’m afraid you’ll have to content yourself to vagrant chickens.</p>`,
  },
  {
    dialogue: `WYLL — You’re an impressive fighter, Gale. You should consider a new name.
  <p>GALE — I take it you have some suggestions?</p>
  <p>WYLL — ‘The Wizard Wonder’! Or how about, ‘The Mater of the Weave’?</p>
  <p>GALE — Tempting. But I think we might already have the maximum number of theatrical titles.</p>`,
  },
  {
    dialogue: `GALE — Whatever the outcome of what’s just ahead, it will be the stuff of legends.
    <p>WYLL — In that case, someone needs to survive to tell the story.</p>
    <p>GALE — My money’s on you, Wyll.</p>
    <p>WYLL — I’m betting on all of us.</p>`,
  },
  {
    dialogue: `WYLL — I’d cling to life forever if it means I could keep Baldur’s Gate safe. But time marches me on to a different fate.
    <p>JAHEIRA — And if it does? That does not mean you cannot dig your heels in a little.</p>`,
  },
  {
    dialogue: `UMI — I left my sword in the cave. Don’t tell, but I don’t want to touch it again.
  <p>WYLL — It’s all right. Don’t tell anyone - but I was afraid too.</p>`,
  },
  {
    dialogue: `SHADOWHEART — You know, I’m starting to remember that Wyrm’s crossing has a bit of reputation, doesn’t it? A tad mercenary, a tad sordid. Anything and anyone for a price...
  <p>WYLL — Ah, but to little harm. Shouldn’t we all be allowed to stoke a few fires from time to time?</p>
  <p>SHADOWHEART — You sound like you’re speaking from experience, Wyll. Perhaps you’ll have to give me a tour - refresh my memory.</p>
  <p>WYLL — Heh - I’m afraid you’d find my own stories rather tight-laced, Shadowheart. I was never one to sow my wild oats.</p>`,
  },
  {
    dialogue: `WYLL — Everything I did, I did for Baldur’s Gate. I did for you.
  <p>ULDER RAVENGARD — My son, you sold your soul to save Baldur’s Gate - and I cast you out for it. You gave yourself to the Hells’ eternal fires so I might walk free. By the gods, can you ever forgive me?</p>
  <p>WYLL — There’s nothing to forgive. You wanted to protect the city. I only ever wanted the same.</p>
  <p>ULDER RAVENGARD — You are a better man than most, and a better son than I deserve.</p>`,
  },
  {
    dialogue: `TAV — Do you miss your father?
  <p>WYLL — More than you know. The better question is: Did he ever miss me?</p>`,
  },
  {
    dialogue: `WYLL — Ahem. It’s been a badger’s age since I’ve twinkled my toes. A drunk ogre could put on a better show.
  <p>TAV — You dance like a drunk ogre? That sounds hilarious. Count me in!</p>
  <p>YLL — Heh. Well, give it some time, develop a bond, and maybe I’l show you a move or two. I promise, ‘clumsy oaf’ is well within my repertoire.</p>`,
  },
  {
    dialogue: `LAE’ZEL — Wyll, you are a man of great vigour. Why have you not sought a mate any of these nights we have camped?
  <p>WYLL — Ah, well, I admit I’ve had thoughts about it. In my own way.</p>
  <p>LAE’ZEL — Do not think, Wyll. <em>Act.</em></p>`,
  },
  {
    dialogue: `KARLACH — Next stop, Zariel’s forge. Final stop, Faerûn.
  <p>WYLL — Fuck yeah, that’s my girl! Oh shit - I’m starting to pick up your bad habits. Well, fuck it. In for a coin, in for a coffer.</p>`,
  },
  {
    dialogue: `SHADOWHEART — Fiend worship... I’m not trying to pick a fight, Wyll. But it really seems like a blatantly ill-advised idea.
  <p>WYLL — It’s the furthest thing from my mind. Besides, Shadowheart - not all fiends are cut from the same scorched cloth.</p>
  <p>SHADOWHEART — How do they differ, then? The number of horns? The exact timbre of their evil laugh?</p>
  <p>WYLL — Could be almost anything. Their willingness to torment their travel partners with wisecracks, for example.</p>`,
  },
  {
    dialogue: `ASTARION — You know, I’ve never seen this place in the daylight before.
    <p>WYLL — I always love this park. Spent a lot of time here as a boy battling imaginary monsters.</p>
    <p>ASTARION — Oh, I was going to say it looks wretched. The dark hid all the kitschy details.</p>`,
  },
  {
    dialogue: `ASTARION — I hardly saw you at the party. Did the honest and true Blade sneak off for a little fun?
  <p>WYLL — No! Nothing like that at all.</p>
  <p>ASTARION — Oh, but you protest too much. Now I know you were practicing your swordplay.</p>`,
  },
  {
    dialogue: `ASTARION — A question for our master monster hunter: how would you approach killing a vampire?
  <p>WYLL — A full-on vamp, you mean? Lure it into the sun, drive a stake through its heart. And that’s not the end of it. The suckers are wily. No offence.</p>
  <p>ASTARION — None taken. Wiliness keeps me alive. More or less.</p>`,
  },
  {
    dialogue: `HALSIN — The scent of hops and barley is most persistent here, even after all this time.
   <p>WYLL — Enough to make me thirsty, even. I’ve always  preferred wine to whiskey and ale, but I certainly wouldn’t turn away a  full flagon right about now.</p>
   <p>HALSIN — After the shadow curse, I became overly fond of  honey mead and melancholy evenings by myself. Now I rarely imbibe - only on the most special of occasions.</p>   
   <p>WYLL — I say we put an end to your dry spell. Once Ketheric falls, the first round’s on me.</p>`,
  },
  {
    dialogue: `JAHEIRA — So, Wyll - you have your mind set on marriage.
  <p>WYLL — Why not? If this adventure has taught me anything,  it’s that life is fragile, and we should seize joy when we can. You  think I’m being rash?</p>
  <p>JAHEIRA — Not at all. The world does not wait around for us, so take your moment while you may. Damn what anyone else thinks. So long as you serve a proper meal at the wedding. None of this finger-picking nonsense, yes?</p>`,
  },
  {
    dialogue: `KARLACH — Think the bar is open?
  <p>WYLL — I intend to find out. But we should scout around first, see who’s in need of help.</p>
  <p>KARLACH — You’re good at staying in character, I’ll give you that.</p>`,
  },
  {
    dialogue: `KARLACH — Care for a dip, Wyll?
  <p>WYLL — It would be my pleasure, Karlach - once the Absolute’s been crushed for good.</p>
  <p>KARLACH — Heroics don’t leave half enough time for messing.</p>`,
  },
  {
    dialogue: `KARLACH — Couldn’t find you for a while at the party. Was hoping we could regale our friends with a nice three-horned duet.
  <p>WYLL — Ah, I just needed a moment of quiet, to think, that’s all.</p>
  <p>KARLACH — What about?</p>
  <p>WYLL — Wouldn't you like to know?</p>
  <p>KARLACH — Well yeah! One thing I’ll say for the Hells, the gossip is excellent. Faerûn’s a funeral parlour by comparison.<p>`,
  },
  {
    dialogue: `KARLACH — Used to your new look yet, Wyll? I for one think you look smashing.
  <p>WYLL — You know, I think I am. It certainly didn’t put off my - er - dance partner.</p>
  <p>KARLACH — Ah, dance, the true language of love.</p>`,
  },
  {
    dialogue: `KARLACH — Seeing you happy is pretty wonderful, Wyll. Two of my real friends, finding real happiness? Together? Beautiful.
  <p>WYLL — Thank you, Karlach.</p>
  <p>KARLACH — If you get married, I’m your celebrant. Got it?</p>
  <p>WYLL — As if I could ever refuse you.</p>`,
  },
  {
    dialogue: `KARLACH — You know, even devils like a good joke. Why are Sharrans so... dour?
    <p>WYLL — Their belief is grounded in loss. Hardly a laughing matter.</p>
    <p>KARLACH — The loss of all joy. Sad business.</p>`,
  },
  {
    dialogue: `LAE’ZEL — Every moment a new danger. I may have underestimated this Faerûn.
  <p>WYLL — You don’t know the half of it. With a bit of luck, we’ll meet a beholder.</p>`,
  },
  {
    dialogue: `LAE’ZEL — I smell danger on the wind. Keep your weapons ready.
  <p>WYLL — The only thing the wind’s carrying is the smell of trout, Lae’zel. We’re near the fish market.</p>
  <p>LAE’ZEL — Discount my warning at your peril.</p>
  <p>WYLL — I get it, Lae’zel - peril, danger, and so forth. All I can think of now is a nice fish dinner.</p>`,
  },
  {
    dialogue: `LAE’ZEL — If you wish to be rid of your devil, Wyll, we should just kill her and be done with it.
  <p>WYLL — And incur the wrath of the Hells? I might as well just leap straight into the fires.</p>`,
  },
  {
    dialogue: `LAE’ZEL — Does your species release airborne pheremones upon beginning the courtship dance, Wyll? I’ve heard thus is the way with certain birds of paradise and prey. The chemical induces lowered inhibitions between the pair.
  <p>WYLL — No. I mean, I don’t think so. Would you count a light spritz from a vial of jasmine dust as a pheromone?</p>
  <p>LAE’ZEL — Indubitably.</p>`,
  },
  {
    dialogue: `LAE’ZEL — To bind oneself to another forever seems a fool’s vow.
  <p>WYLL — Then by all means, call me a fool. In the Gate especially, it’s uncommon to marry your first love nowadays. But losing that early love is still the regret foremost of forgotten sorrows.</p>`,
  },
  {
    dialogue: `SHADOWHEART — So. A vampire spawn and a monster hunter in the same group. We’re not going to have trouble, are we?
  <p>ASTARION — Excuse me? Since this tadpole, I’m barely a monster at all. I just want to survive, same as you.</p>
  <p>WYLL — I don’t see a problem, as long as mister fang there keeps his appetite in check.</p>`,
  },
  {
    dialogue: `SHADOWHEART — So Wyll, what was the Blade of Frontiers’ toughest kill?
  <p>WYLL — Ah - it was a great scrap. A hungry minotaur with a hankering for human flesh. An axe-bearing mountain of fur, she was. Gave me a nasty scar.</p>
  <p>SHADOWHEART — I hope you don't mind if I don’t ask to see it.</p>`,
  },
  {
    dialogue: `SHADOWHEART — Have you wondered what people will say, Wyll? When they find out the monster hunter is becoming a monster.
  <p>WYLL — I’ve faced countless perils and conquered them all. This will be no different.</p>
  <p>SHADOWHEART — I’ve always had a soft spot for the confident ones... They always disappoint though.</p>`,
  },
  {
    dialogue: `SHADOWHEART — All this stonework has me thinking - would you ever want a statue of yourself, Wyll?
  <p>WYLL — It seems a rather... vain notion to me. But I can’t say I haven't thought about it. How about you?</p>
  <p>SHADOWHEART — I suppose it might be nice to be remembered - though I’d be less keen on having birds perching on my head for evermore.</p>
  <p>WYLL — Think of the... er... mess they’d make. Well - better your statue’s head than your own.</p>`,
  },
  {
    dialogue: `SHADOWHEART — Someone of your... social stature, Wyll. Are they typically allowed to pursue their heart’s whims as they like?
  <p>WYLL — I don’t have to ask for permission, if that’s what you mean.</p>
  <p>SHADOWHEART — Really? I’m surprised. I thought dowries, alliances and old blueblood feuds might have to be balanced against your desires.</p>
  <p>WYLL — I’m my own man, Shadowheart... in this sense, at least.</p>`,
  },
  {
    dialogue: `SHADOWHEART — So. Wyll with a ‘y’ - why?
  <p>WYLL — ‘Y’, that’s right.</p>
  <p>SHADOWHEART — But why?</p>
  <p>WYLL — Why ‘y’? A great-uncle’s name, my father said. But I just figured he couldn’t spell.</p>`,
  },
  {
    dialogue: `SHADOWHEART — A gallows? Nooses are for amateurs - that’s what I was taught in the Grotto. Do you know how badly those things can go wrong?
  <p>WYLL — I’d rather not think of it, Shadowheart...</p>
  <p>SHADOWHEART — You could strangle them by accident, use too much rope and break their legs... and if it goes really badly, you could wrench their heads right off.</p>  
  <p>WYLL — What a picture you pain. Quite detailed, quite colourful. Quite <em>unnecessary</em>.</p>`,
  },
  {
    dialogue: `SHADOWHEART — I saw you training those children. You were so gentle! That’s... not how I was taught.
  <p>WYLL — Cruel words strengthen neither heads nor hearts, Shadowheart.</p>
  <p>SHADOWHEART — I wouldn’t quite say that - I learned the lesson, after all.</p>
  <p>WYLL — And came to resent your tutor, I bet. I taught them to fight - not to hate.</p>`,
  },
  {
    dialogue: `SHADOWHEART — Umberlee - a brutal goddess, from what I understand. Without even the slightest touch of subtlety to her.
  <p>WYLL — Subtlety isn’t exactly your forte, given how you’ve strolled about wearing a circlet inset with Shar’s symbol.</p>
  <p>SHADOWHEART — You’d be surprised how people can miss what’s in  plain sight. I missed the fact that Shar was deceiving me. Besides, I  have a new look now. Suits me, I think.</p>
  <p>WYLL — On that matter, you’ll hear no argument from me.</p>`,
  },
  {
    dialogue: `WYLL — Ah - the memories. The Blushing Mermaid’s where fifteen-year-old Wyll snuck his first kiss.
  <p>ASTARION — You didn’t kiss anyone until you were <em>fifteen</em>? Gods, what a tragic, sheltered life...</p>
  <p>WYLL — Sheltered? Not at all. I was exposed to all manner of riot and revelry. Hells, my father even urged me on once or twice. But I’ve always been a bit old-fashioned on these matters. I find more pleasure in a courtly dance than a loveless fling.</p>`,
  },
  {
    dialogue: `WYLL — Astarion, I was wrong about you. Truly wrong about you.
  <p>ASTARION — Let me guess - you thought I’d suck blood, but actually I just suck? Was that your witty jab?</p>
  <p>WYLL — No, I mean it. There’s little between us we share.  But you’ve fallen in love and stood by your lover. That is something  this dreamer’s heart can appreciate.</p>`,
  },
  {
    dialogue: `WYLL — The city fell under Gortash’s charms without him casting nary a spell.
  <p>ASTARION — Well, most people are idiots, Wyll. You can lure them into a dragon’s maw if you promise a bag of sweets.</p>
  <p>WYLL — The people aren’t stupid, Astarion - they’re scared. Gortash provoked a damned war, and then promised them safety.</p>
  <p>ASTARION — Safety, sweets - it’s the same principle.</p>`,
  },
  {
    dialogue: `WYLL — I admire your courage, Gale.
  <p>GALE — Thank you. Any particular reason?</p>
  <p>WYLL — Between the orb and the worm, you’ve got more than your fair share of unwelcome passengers.</p>
  <p>GALE — What can I say? Mother always taught me to be a gracious host.</p>`,
  },
  {
    dialogue: `WYLL — It might seem a bit ramshackle, but this place has a boastworthy bar.
  <p>GALE — A bar is only as good as its cellars. Which vintages can we expect to find on their racks?</p>
  <p>WYLL — Here, a bottle is judged more by its ability to crack heads than the quality of its contents.</p>
  <p>GALE — Ah. If that’s the main criteria then I shall reset my expectations accordingly. Water it is.</p>`,
  },
  {
    dialogue: `WYLL — Was a time I tussled with hill giants without breaking a sweat. Now, a mere werebear could swat me halfway to Amn.
  <p>GALE — Strange things are happening to us. What festers in our minds may well impel our bodies.</p>`,
  },
  {
    dialogue: `WYLL — Father always shooed me away from this place. ‘More rats than a Waterdeep dungeon.’
  <p>HALSIN — It is most unfair to pour such scorn on rats - they have their place in nature, same as you or I.</p>
  <p>WYLL — And I don’t get the sense that my father was being literal.</p>`,
  },
  {
    dialogue: `WYLL — Halsin, tell me about the man behind the hulking wall of muscle. Do you actually do anything besides meditate, counsel, fight, train, and make love?
  <p>HALSIN — Is such an existence lacking?</p>
  <p>WYLL — Hm. Good question.</p>`,
  },
  {
    dialogue: `WYLL — The statuary in here is so triumphal. Even the worst of us can see ourselves as heroes.
  <p>HALSIN — That is a truth that can evade minds far older than yours, Wyll. You are wise beyond your years.</p>
  <p>WYLL — Not wise enough to avoid Sharran sanctums, apparently.</p>`,
  },
  {
    dialogue: `WYLL — No signs of life - but the spirits of the past still linger here.
  <p>HALSIN — Do I note some trepidation? Spirits are but echoes of nature’s cycle. Most give no cause to elicit fear... most, but not all.</p>
  <p>WYLL — When I was very young, father told me the dear ones we lose are quiet - but ever watchful. I think he meant to comfort me. But I shivered for weeks, thinking I was being hounded by wide-eyed spirits.</p>`,
  },
  {
    dialogue: `WYLL — I was barely eight years of age when I heard the Counting House held mythical treasure. So curious little Wyll tried to slip in. The guard spotted me straight away and dragged me by the collar back to my father.
  <p>JAHEIRA — A talking-to from the Grand Marshal himself. Quite the introduction to a life of crime - what did he say?</p>
  <p>WYLL — Oh, he pretended to be cross. But there was no hiding the sly grin that crept on his face.</p>`,
  },
  {
    dialogue: `WYLL — Did Zariel know you’d be unable to touch anyone when she crammed that awful thing into your chest?
  <p>KARLACH — Thing is, I <em>can</em> touch devils and the like, back in Avernus. I never <em>did</em>, cause I'm not a masochist. But I could have.</p>
  <p>WYLL — Gods. I’m glad you got out of there.</p>
  <p>KARLACH — With my new best friend on my tail the whole time. Who knew.</p>`,
  },
  {
    dialogue: `WYLL — Karlach... I know I say this every day, but I’m so glad you're here.
  <p>KARLACH — Me too!</p>
  <p>WYLL — And seeing you’ve got someone to care about now, after ten bloody years, what would you say? ‘Good for you, mate.’?</p>
  <p>KARLACH — Exactly so, your majesty.</p>`,
  },
  {
    dialogue: `WYLL — Smell that, Karlach?
  <p>KARLACH — Uh... fish?</p>
  <p>WYLL — Well, yes. But also trouble.</p>
  <p>KARLACH — Your nose is better than mine, pal.</p>`,
  },
  {
    dialogue: `WYLL — Lae’zel, you’ve the most <em>exquisite</em> eyes - golden as the sands of the Calim.
  <p>LAE’ZEL — And you’ve a soft skull. A <em>ghaik</em> tentacle will have no issues pushing through it.</p>
  <p>WYLL — Is that... a compliment?</p>
  <p>LAE’ZEL — No, it is a fact. Life in this Faerûn is laughably weak.</p>`,
  },
  {
    dialogue: `WYLL — I really didn’t expect the affair to last between the two of you, Lae’zel. Is it getting to be something more?
  <p>LAE’ZEL — We have spilled one another’s blood. We have spent blows until utter exhaustion.</p>
  <p>WYLL — Congratulations - I think.</p>`,
  },
  {
    dialogue: `WYLL — I hope my home can be yours, if you don’t go back to the skies.
  <p>LAE’ZEL — <em>Chk</em>. I have no intention of allowing myself to grow a third stomach and a withered arm in a ducal seat.</p>
  <p>WYLL — I meant the Gate! But you’re always welcome for tea.</p>`,
  },
  {
    dialogue: `WYLL — When I was a child, father sent me to Sharess’ Caress to deliver messages. How was I to know what went on behind its closed doors?
  <p>LAE’ZEL — Eating, sleeping, and sex acts of all manner, of course.</p>
  <p>WYLL — Hm. What’s plain to you wasn’t so plain to mini-Wyll.</p>
  <p>LAE’ZEL — ‘Mini-Lae’zel’ wasn’t so sheltered. On Crèche K’liir, very little is hidden behind doors.</p>`,
  },
  {
    dialogue: `WYLL — Our great adventure nears its climax. If I should fall, I want you all to know it’s been an honour to fight beside you.
  <p>MINSC — You will not fall, warlock. And if you do, Minsc shall simply pick you up again. What - do you doubt us in this final hour?</p>
  <p>WYLL — Yeah, but you... you’re Minsc.</p>
  <p>MINSC — And you are Wyll of the Pale Eye. Now hush, and turn your mind towards our many, many, many enemies.</p>`,
  },
  {
    dialogue: `WYLL — Amorous passions usually make people more <em>considerate,</em> Minthara. Kinder. Sympathetic. Better at cooperating.
  <p>MINTHARA — They can also make people more protective, guarded, paranoid, and jealous.</p>
  <p>WYLL — Never mind.</p>`,
  },
  {
    dialogue: `WYLL — Spent a lot of time in this park as a boy battling imaginary monsters.
    <p>SHADOWHEART — So before you were Blade of the Frontiers, you were Pointy Stick of the Park? How did the imaginary monsters compare with  the real thing?</p>
    <p>WYLL — The monsters of my play-fights were strong, vicious. Trolls with hulking muscles, werewolves with sharpened fangs. But the greatest villains I’ve faced as the Blade? They look more like you and me than they do the beasts of my fantasies.</p>`,
  },
  {
    dialogue: `WYLL — Ah, Shadowheart - how blessed I am to be so near.
  <p>SHADOWHEART — I heard you with Lae’zel - don’t think I’ll play second fiddle to the likes of her. Go try your charms on someone who's out of earshot.</p>`,
  },
  {
    dialogue: `WYLL — Tombstones. I’d half-expect to get a glimpse of Withers here.
  <p>SHADOWHEART — Don’t even joke about it. Bad enough that he’s haunting our camp, with his cryptic asides and his... overall mustiness...</p>
  <p>WYLL — He’s useful, as the not-so-alive, not-quite-dead go.</p>
  <p>SHADOWHEART —  ‘Death is the Blade’s companion’ - isn’t that what they say? I think I preferred it as a metaphor.</p>`,
  },
  {
    dialogue: `WYLL — ‘The Mysteries of the Monastery’. ‘The Secret of the Crags’.
  <p>SHADOWHEART — What was that? I really can’t abide mumbling, Wyll.</p>
  <p>WYLL — I’m trying to decide on a title for this chapter of the Blade’s adventures.</p>
  <p>SHADOWHEART —  Haven’t you ever heard ‘don’t catch your chickens before they hatch’? Or perhaps ‘Don’t count your adventurers before they survive an arduous, danger-filled journey’?</p>`,
  },
  {
    dialogue: `WYLL — Shadowheart - the way you paint around your eyes, they look permanently cloaked in shadow.
  <p>SHADOWHEART — No harm in a little mystery... Besides, I think it suits my bone structure.</p>
  <p>WYLL — And yet your bed-pillow bears barely a smudge. You are a woman of many talents.</p>`,
  },
  {
    dialogue: `WYLL — The Beloved Ranger. I - I can’t believe it. I grew up hearing all about your brave deeds. And Boo’s, of course.
  <p>MINSC — The bravery was mostly Boo’s. Minsc simply followed with the shouting and waving of swords.</p>
  <p>WYLL — My father told me all about how... how you struck down the mad cleric Bassilus, how - goodness, my palms are all sweaty. It’s just that - you were always my hero.</p>`},
  { dialogue: `TAV — Wyll here is quite the hero in his own right, Minsc.
  <p>WYLL —  I’m no hero. But I’ve dedicated my life to keeping the Sword Coast safe from the monsters that roam it.</p>
  <p>MINSC — If that is not a hero, then Minsc and Boo are no heroes. You’re not saying my hamster is not a hero, Wyll...? The saying matters not. Let it be a thing of doing - you will be blinded by Boo’s obvious heroism when you smite evil by his side.</p>`,
  },
  {
    dialogue: `MINSC — Being swayed by evil does not count, so long as you are swift with the smitin afterwards.
  <p>WYLL —  ‘Smiting evil’ is my middle name.</p>
  <p>MINSC — Blade of Smiting Evil Frontiers...? Eh. If it is all the same,  Minsc and Boo will just call you Wyll.</p>
  <p>WYLL — Oh ye gods. Never change, Minsc. Never change.</p>`,
  },
  {
    dialogue: `SHADOWHEART — Hmph - the famous Blade of Frontiers, in the flesh. Clever, this hero act you’ve got going.
  <p>WYLL —  ‘Hero’, ‘Blade’ - names strangers gave me. My friends call me ‘Wyll’.</p>
  <p>SHADOWHEART — Excellent. If we ever become friends, I’ll know what to call you.</p>
  <p>ASTARION — Oh my. This is going to be a fun journey.</p>`,
  },
  {
    dialogue: `ALFIRA — I don’t mean this in a bad way but - are you the <em>real</em> ‘Blade of Frontiers’?
  <p>WYLL —  That’s what they called me - at least, ‘til I grew these pesky horns.</p>
  <p>ALFIRA — I’ve heard so many songs about you. ‘Endless Blade’ might be my favourite.</p>
  <p>WYLL — Ah - is that the one with the, er, bawdy lyrics?</p>
  <p>ALFIRA — There’s a <em>bawdy</em> one?</p>
  <p>WYLL — There is. Though I’m not about to sing it for you.</p>`,
  },
];
