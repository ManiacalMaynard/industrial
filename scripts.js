// I do this for most of my scripts while testing
console.log(`Where's Waldo?!`)

// Settting the array index of the project object to display, start with zero!
let current = 1
const changeCurrent = () => {
    current < projectInfo.length - 1 ? 
    current++ : current = 0
}

// This will likely need to be moved to a DB or JSON document separate from the scripts
// Let there be an object!
const projectInfo = [
    {
        project: 'Simple Timer',
        image: './images/simpletimer.jpg',
        title: 'Simple JavaScript Timer',
        copy: 'A genuinely fun little one page app (SPA) to build over two lunch breaks as part of an online challenge. Asked a bunch of friends to beta test it and actually found a fault! The play button, if activated again, causes the timer function to run multiple instances. Since the "time" is just a counter of how often the timer function repeats, this causes all sorts of havoc! Check the Code',
        tools: 'JavaScript, HTML 5, CSS 3'
    },
    {
        project: 'FlimFlam Poster',
        image: './images/flimflam210605-insta.jpg',
        title: 'Flim Flam Poster',
        copy: 'Bright, festive, alluring is what I would call this illustrious band of musicians. What an absolute pleasure to be invited to create a poster for this intrepid band of troubadors. Made up of roughly a dozen musicians, the Flim Flam is more of a olde tyme traveling show than a band in the modern sense. Musicians enter and mix between songs and you never know who will be playing when and with whom.',
        tools: 'Illustrator, Photoshop, Lithography'
    },
    {
        project: 'Uncarved Stone',
        image: './images/UncarvedStone.jpg',
        title: 'Uncarved Stone',
        copy: 'Make a random quote generater they said. It will be fun they said! Well I did, and it was. Decided to go with slightly different content than the usual and with subject matter that I find inspiring at least. Created with vanilla JavaScript very early in my push to learn development and while it may not be the prettiest code I\'ve ever written, I am still quite proud of it\'s simplicity.',
        tools: 'JavaScript, HTML 5, CSS 3'
    }

]

// Need to add an onLoad for the first project in the array, or `current = 0`

// Main function - Should call the object property for img, title, copy, tools
const nextProject = () => {
    document.getElementById('mainImage').src = projectInfo[current].image
    document.getElementById('mainTitle').innerText = projectInfo[current].title
    document.getElementById('mainCopy').innerText = projectInfo[current].copy
    document.getElementById('mainTools').innerText = projectInfo[current].tools

    changeCurrent()

    console.log(current) // well that was fun to track down
}