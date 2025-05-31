let step = 0;

const steps = [
  () => `
    <h1>Hey Beautiful 💌</h1>
    <p>This isn't just a website... it's a journey. Our journey.</p>
    <p>It's only the beginning of many adventures together.</p>
    <button onclick="nextStep()">Take my hand ➡️</button>
  `,
  () => `
    <h2>Who You Are To Me</h2>
    <p>You’re kind, funny, deeply spiritual, a bit of a bully 😅... and totally unforgettable.</p>
    <p>You make me feel like the most seen person in the room.</p>
    <p>You're the calm in my chaos, the light when I overthink, and the laughter when life gets too heavy.</p>
    <p>You pray with passion, love with gentleness, and carry yourself with strength, a strength so soft it humbles me.</p>
    <p>I didn’t just fall for your smile or your laugh, I fell for your heart, your mind, your spirit, and the way you walk through life like you were born to love and be loved.</p>
    <p>There’s a warmth in you that feels like home, a safety that settles my soul, and a fire that inspires me to grow closer to God and closer to you.</p>
    <button onclick="nextStep()">Tell me more...</button>
  `,
  () => `
    <h2>Our Moments</h2>
    <p>I still remember when we first started talking, how easy it felt, like our hearts had already known each other.</p>
    <p>I remember the first time you teased me, and I couldn’t stop smiling like an idiot. I didn’t know it then, but I was already falling.</p>
    <p>The way you speak about God with so much reverence... it lit something inside me.</p>
    <p>There were nights we laughed until our cheeks hurt. Days where you comforted me without even realizing it.</p>
    <p>There’s this memory of you, talking about something small, but I was just staring, thinking: “Yeah. I could do forever with this girl.”</p>
    <div class="quote">"Our moments aren’t always grand, but they’re real, and they’re mine, and that makes them everything."</div>
    <p>Even the silences with you feel full. Like nothing’s missing when you’re around.</p>
    <p>And somehow... here we are. Still talking, still laughing, and I'm still falling.</p>
    <button onclick="nextStep()">Next Memory 💭</button>
  `,
  () => `
    <h2>A Bit About You</h2>
     <p>You’re the kind of woman people write prayers about.</p>
    <p>You’re a women of God, not just in routine, but in how you walk, talk, and carry yourself with grace and reverence.</p>
    <p>You may not read a lot, but when it’s the Bible? You show up, and that speaks volumes about your heart.</p>
    <p>The way you talk about God, it’s not performative. It’s real. Gentle. Rooted. It draws me in closer, to Him, and to you.</p>
    <p>Your words have this effect on me... sometimes you’re being deep and spiritual, other times you’re playfully roasting me, and both leave me smiling like an idiot.</p>
    <p>Your sarcasm? Unmatched. It’s a kind of love language at this point, the way you tease me like you’ve known me forever.</p>
    <p>But it’s how you *carry yourself* that really gets me, the quiet confidence, the deep compassion, the way you move through the world like your spirit was kissed by heaven.</p>
    <div class="quote">"You’re the kind of woman that makes a man want to be better, spiritually, emotionally, and forever."</div>
    <p>You are soft, strong, silly, and sacred, all at once. And I thank God every single day that I get to witness you.</p>
    <button onclick="nextStep()">Next ➡️</button>
  `,
  () => `
    <h2>What God Put Together</h2>
    <div class="verse">
      “Love is patient, love is kind... it always protects, always trusts, always hopes, always perseveres.”<br>
      <strong>– 1 Corinthians 13:4–7</strong>
    </div>
    <div class="verse">
      “I have found the one whom my soul loves.”<br>
      <strong>– Song of Songs 3:4</strong>
    </div>
    <div class="verse">
      “Two are better than one... If either falls, the other can lift them up.”<br>
      <strong>– Ecclesiastes 4:9–10</strong>
    </div>
    <button onclick="nextStep()">Next ➡️</button>
  `,
  () => `
    <h2>Poem for You 💖</h2>
    <div class="poem">
      You smile like springtime on a winter day,<br>
      And tease me just enough to make me stay.<br>
      You're soft, yet strong—your faith runs deep,<br>
      And in your voice, my worries sleep.
    </div>
    <div class="poem">
      I folded hands when skies were grey,<br>
      I asked for light to guide my way.<br>
      And God, in kindness, chose to send,<br>
      A soul like you—my love, my friend.
    </div>
    <div class="poem">
      I don’t need a thousand yesterdays,<br>
      Or answers from the skies above.<br>
      Just your sweet “yes,” in your softest voice,<br>
      To build a life of faith and love.
    </div>
    <button onclick="nextStep()">From my heart 💌</button>
  `,
  () => `
    <h2>Why I Want to Be Yours</h2>
    <p>I want to be yours because when I talk to you, everything heavy feels lighter, like God is whispering, “This is what peace feels like.”</p>
    <p>Because your heart reminds me that softness and strength can exist in the same soul, and it makes me want to protect yours with everything in me.</p>
    <p>Because I’ve never met someone who could make me laugh, think, pray, and blush, all in the same conversation.</p>
    <p>Because when you speak, whether it’s scripture, sarcasm, or just nonsense, I listen like it’s gospel. And maybe it is... because everything from you sounds like truth to me.</p>
    <p>Because I see God in you, not just in your words, but in your patience, your joy, your little acts of love.</p>
    <p>I want to be yours because love isn’t supposed to be confusing. And with you? It just makes sense.</p>
    <div class="quote">"You don’t complete me, you complement me. But loving you? That completes something sacred in my soul."</div>
    <p>I want to be yours because I already am. My heart chose you long before I asked.</p>
    <button onclick="nextStep()">Final step ❤️</button>
  `,
  () => `
    <h2>The Big Question</h2>
    <h3>Would you love to do me the honor of becoming my girlfriend,</h3>
    <h3>and do this life thing with me, in this life and the next?</h3>
    <button onclick="yesAnswer()">Yes 💖</button>
    <button id="noBtn" onmouseover="runAway(this)">No 👀</button>
  `,
];

function nextStep() {
  if (step < steps.length) {
    document.getElementById("app").innerHTML = steps[step]();
    step++;
  }
}

function yesAnswer() {
  document.getElementById("app").innerHTML = `
    <h2>💍 You just made me the happiest person alive! 💍</h2>
    <p>Now let’s write the rest of our story, together.</p>
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2V2bTd1bzA5NjVxMmthZ2J5N2dlb2hzMHlqN3Nja2ZhYjd1MWRzbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/g9582DNuQppxC/giphy.gif" alt="Celebration">
  `;
}

function runAway(btn) {
  btn.style.position = 'absolute';
  btn.style.top = Math.random() * window.innerHeight + 'px';
  btn.style.left = Math.random() * window.innerWidth + 'px';
}

// Load the first step immediately
nextStep();
