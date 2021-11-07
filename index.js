let countDownDate = new Date('Nov 06, 2021 19:02:00');

var x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((distance % (1000 * 60)) / 1000);
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = 'The service has started';
  } else {
    document.getElementById('countdown').innerHTML = `
    <span>${min}</span> <span>${sec}</span>
   `;
  }
}, 1000);

// setInterval();

let verses = [
  'Whatever you ask in my name, this I will do, that the Father may be glorified in the Son. John 14:13',
  'And I tell you, ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. Luke 11:9',
  'Trust in the Lord with all your heart, and do not lean on your own understanding. Proverbs 3:5',
  'An intelligent heart acquires knowledge, and the ear of the wise seeks knowledge. Proverbs 18:15',
  'Worry is a heavy burden, but a kind word always brings cheer. Proverbs 12:25',
  'Delight yourself in the Lord, and he will give you the desires of your heart. Psalm 37:4',
  'The fear of the Lord is the beginning of knowledge; fools despise wisdom and instruction. Proverbs 1:7',
  'Laziness leads to poverty; hard work makes you rich. Proverbs 10:4',
  'Death and life are in the power of the tongue, and those who love it will eat its fruits. Proverbs 18:21',
  'Your word is a lamp to my feet and a light to my path. Psalm 119:105',
  'Oh how I love your law! It is my meditation all the day. Psalm 119:97',
  'Too much pride can put you to shame. It’s wiser to be humble. Proverbs 11:2',
  'But his delight is in the law of the Lord, and on his law he meditates day and night. Psalm 1:2',
  'I will meditate on your precepts and fix my eyes on your ways. Psalm 119:15',
  'When I remember you upon my bed, and meditate on you in the watches of the night; Psalm 63:6',
  'Whoever keeps his mouth and his tongue keeps himself out of trouble. Proverbs 21:23',
  'I have stored up your word in my heart, that I might not sin against you. Psalm 119:11',
  'We trap ourselves by telling lies, but we stay out of trouble by living right. Proverbs 12:13',
  'A soft answer turns away wrath, but a harsh word stirs up anger. Proverbs 15:1',
  'Set a guard, O Lord, over my mouth; keep watch over the door of my lips! Psalm 141:3',
  'So now faith, hope, and love abide, these three; but the greatest of these is love. 1 Corinthians 13:13',
  'Practice these things, immerse yourself in them, so that all may see your progress. 1 Timothy 4:15',
  'I will ponder all your work, and meditate on your mighty deeds. Psalm 77:12',
  'Whoever guards his mouth preserves his life; he who opens wide his lips comes to ruin. Proverbs 13:3',
  'Trust in your wealth, and you will be a failure, but God’s people will prosper like healthy plants. Proverbs 11:28',
  'Too much pride causes trouble. Be sensible and take advice. Proverbs 13:10',
  'Casting all your anxieties on him, because he cares for you. 1 Peter 5:7',
  'Wise friends make you wise, but you hurt yourself by going around with fools. Proverbs 13:20',
  'Don’t be stupid and believe all you hear; be smart and know where you are headed. Proverbs 14:15',
  'Kind words are good medicine, but deceitful words can really hurt. Proverbs 15:4',
  'It’s better to obey the Lord and have only a little, than to be very rich and terribly confused. Proverbs 15:16',
  'Proverbs will teach you wisdom and self-control and how to understand sayings with deep meanings. Proverbs 1:2',
  'I can do all things through him who strengthens me. Philippians 4:13',
  'Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved. Psalm 55:22',
  'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. Matthew 7:7',
  'Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours. Mark 11:24',
];

function randomVerse() {
  let rand = Math.floor(Math.random() * verses.length);
  document.getElementById('verse').innerHTML = verses[rand];
}

setInterval(randomVerse, 5000);
