var quotes = [
  'Barry B. Benson: Thanks for the coffee. Sorry I couldn\'t finish it. If I did, I\'d be up the rest of my life',
  'Barry B. Benson: You know I\'m not attracted to the spiders! I know, with everyone else, it\'s the hottest think, with eight legs and all... I can\'t get by that face.',
  'Barry B. Benson: Do you know what a Cinnabon is? It\'s bread! And frosting! And cinnamon! They heat it up! Really hot!',
  'Barry B. Benson: [scoffs] "Tournament of Roses." Roses can\'t do sports.',
  'Barry B. Benson: We\'re the only ones who make honey, pollinate flowers, and dress like this!',
  'Barry B. Benson: My sweater is Ralph Lauren, and I have no pants.',
  'Barry B. Benson; Help Me!',
  'Janet Benson: Barry why don\'t you use the stairs? Your father paid good money for those.',
  'Janet Benson: Barry I told you, stop flying in the house!',
  'Martin Benson: Wave to us! We\'ll be in row 118,000',
  'Ken: Why is Yougurt Night so DIFFICULT?',
  'Ken: POO WATER!',
  'Barry B. Benson: "Ya like jazz?"',
  'Barry B. Benson: I don\'t remember the sun having a big 75 on it.',
  'Barry B. Benson: Moose blood guy!!!',
  'Ken: And for your information, I prefer sugar-free Artificial-Sweetners, made by man!',
  'Ken: Ive got issues!',
  'Ken: Ugh, fine!!! That bee is living my life!',
  'Ken: When will this nightmare end?!',
  'Barry B. Benson: Three days of grade school, three days of high school--',
]

function newQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
