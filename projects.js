const projectList = [ 
  {
    image : './images/AppleWatchAudioUI.jpg',
    tech : 'Figma, UX Design',
    title : 'Apple Watch Audio App',
    text : 'The day started... roughly but I was able to carve out a little time to try out a design prompt challenge from Sharpen and have to admit, really brightened my mood. The challenge of fitting essential controls and user feedback into such a small space got my creative brain firing. Quite pleased with the simple, clean UI and clear functionality. Learned a lot and can\'t wait for the next challenge!',
    linkName : 'Figma Prototype',
    link : 'https://www.figma.com/proto/qiPg3Je8q9cR9eTrJbLdHT/Apple-Watch-Audio-App?node-id=2%3A4&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A4',
  },
  {
    image : './images/BierGartenHiFiProto.jpg',
    tech : 'Figma, UX Design',
    title : 'BierGarten Ordering App',
    text : 'A rough draft hi-fi prototype for the Google UX Design Certification. I have learned so much from this program! At times it\'s very comfortable using much the same thinking as visual design and art direction with which I am familiar. Then there are moments of "ohhhh!" when I learn something new. Seriously love challenging myself to keep learning and have found UX Design utterly fascinating!',
    linkName : 'Figma Prototype',
    link : 'https://www.figma.com/proto/GI1cG233IaFLzMJwzekFLI/BierGarten-Ordering-App?scaling=scale-down&page-id=106%3A32&node-id=106%3A33&starting-point-node-id=106%3A33'
  },
  {
    image : './images/bpi-website.jpg',
    tech : 'WordPress, WooCommerce',
    title : 'BPI eCommerce Web Site',
    text : 'Being in charge of an entire eCommerce site was a challenge to be honest. I had a lot to learn when we started this project but have been very successful and I\'m rather proud of the results. Gross sales increases every year, SEO rankings are great, and our customer conversion rates are well over average. Really happy with it!',
    linkName : 'www.BPIcustomprinting.com',
    link : 'https://www.bpicustomprinting.com/',
  },
  {
    image : './images/baseballCountdown.jpg',
    tech : 'HTML 5,  CSS 3, JavaScript ES6',
    title : 'Baseball Opening Day Countdown',
    text : 'Got a bit of free time? Are you a nutty baseball fan? Know how to code? Whelp, this is what you get! Just "for fun" type project in large part as a practice exercise. When you are learning a new skill set the best thing you can do is use those skills. Much like building muscles or learning how to play a musical instrument we need to practice, evaluate, and practice some more in order to achieve mastery. See you all in March and April. Play ball!',
    linkName : 'GitHub Repo',
    link : 'https://github.com/ManiacalMaynard/baseballCountdown',
  },
  {
    image : './images/SciFiCalc.jpg',
    tech : 'HTML 5,  CSS 3, JavaScript ES6',
    title : 'Mobile Calculator App',
    text : 'My final project for the Foundations Course of The Odin Project. I wanted to challenge myself to built this from scratch without tutorial or reference aside from the code docs (MDN). A little daunting at first but ended up with fairly clean code that works as intended, so I\'m chalking it up as a win. Great fun honestly.',
    linkName : 'GitHub Repo',
    link : 'https://github.com/ManiacalMaynard/SciFiCalc',
  },
  {
    image : './images/flimflam210605-insta.jpg',
    tech : 'Illustrator, Photoshop, Digital Lithography',
    title : 'Flim Flam Poster',
    text : 'Bright, festive, alluring is what I would call this illustrious band of musicians. What an absolute pleasure to be invited to create a poster for this intrepid band of troubadors. Made up of roughly a dozen musicians, the Flim Flam is more of a olde tyme traveling show than a band in the modern sense. Musicians enter and mix between songs and you never know who will be playing when and with whom.',
    linkName : 'FaceBook',
    link : 'https://www.facebook.com/grampadrewsFlimFlamRevue/',
  },
  {
    image : './images/HistorySnippetsBookCover.jpg',
    tech : 'InDesign, Photoshop, Digital Lithography',
    title : 'History Snippets Book',
    text : 'An amazing and fun project! Asked to design and layout a collection of small history stories about my neighborhood by the wonderful local historian Katherine Hon. I was excited to not only get to work but to read every entry and learn about some offbeat and unforseen local history. Now in it\'s second printing!',
    linkName : 'North Park Historical Society',
    link : 'https://northparkhistory.org/',
  },
  {
    image : './images/NPBF-1901-insta.jpg',
    tech : 'Illustrator, Digital Lithography',
    title : 'North Park Festival of Beers',
    text : 'What a fun project that was a major fund raiser for a great local charity project, the San Diego Music Foundation which helps grade school kids get instruments and study music. Really had fun with scale and hierachy here, pretty happy with the final result. Cheers!',
    linkName : 'Festival of Beers',
    link : 'https://www.northparkbeerfest.com/',
  },  
  {
    image : './images/Studio-2912-Logo-Final-Brief.jpg',
    tech : 'Illustrator',
    title : 'Studio 2912 Logo Brief',
    text : 'When a friend asks you to help, you help \'em! A great friend of mine needed a logo for her new business venture and after a few meetings and some fascinating conversations, we landed on this. Simple, clear, and elegant. Shown here is the basic brief outlining color variations, layouts, etc.',
    linkName : 'Studio 2912',
    link : 'http://www.southparksd.com/project/jen-spencer-landscape-architect/',
  },
  // {
  //   image : '',
  //   tech : '',
  //   title : '',
  //   text : '',
  //   linkName : '',
  //   link : '',
  // },
];

/* 
The mighty BUILDER function: Iterates through the above array of objects to build each card and add it to the cardDeck div container
*/

function deckBuilder() {
  const projects = document.getElementById('cardDeck')
  projects.innerHTML = '' // Clears out the div before re-drawing it

  projectList.forEach(item => {

    const card = document.createElement('div')

    const img = document.createElement('img')
    img.src = item.image
    img.alt = item.title

    const tech = document.createElement('div')
    tech.innerText = item.tech

    const title = document.createElement('h2')
    title.innerText = item.title

    const text = document.createElement('p')
    text.innerText = item.text

    const link = document.createElement('p')
    link.innerHTML = '<a href="' + item.link + '" target="_blank">' + item.linkName + '</a>'

    // const buttons = document.createElement('div')
    // buttons.className = 'btnRow'

    // const deleteBtn = document.createElement('button')
    // deleteBtn.innerText = '✖'
    // deleteBtn.addEventListener('click', function() { removeBook(bookList.indexOf(item)) })
    // buttons.appendChild(deleteBtn)

    // const toggle = document.createElement('button')
    // toggle.innerText = item.inLibrary === true ? '🗹' : '□' ;
    // toggle.addEventListener('click', function() { libraryToggle(item) })
    // buttons.appendChild(toggle)

    // card.innerHTML = cardContent(item); just a reminder ducky

    card.classList.add('card')
    // card.setAttribute('id', item.id)
    card.appendChild(img)
    card.appendChild(tech)
    card.appendChild(title)
    card.appendChild(text)
    card.appendChild(link)
    projects.appendChild(card)
  })
};

deckBuilder();
console.log('Number Five is Alive!')