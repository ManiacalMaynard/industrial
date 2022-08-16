// The source content as an array of objects, removed "ID" for now to use index for randomizer
const sourceText = [
    { 
        text: "An artist who always brings a unique perspective to any band's image.", 
        author: "Harpo Mark Delguidice"
    },
    { 
        text: "I framed one of the gig posters Maynard designed. Not a little deal. Custom frames are expensive af. But that’s how much I like that poster.", 
        author: "Kinsee Morlan"
    },
    { 
        text: "Overall an exceptional individual. A teacher of sorts imparting knowledge in the workplace, as well as becoming a good friend through the years. Clever, a bit sarcastic, but leaves a good impression.", 
        author: "Rachael Anne Lawrence"
    },
    { 
        text: "Maynard does pirate, binary pirate.", 
        author: "Finn Blake Lohner"
    },
    { 
        text: "I’m thinking, I’m thinking. That’s not the quote. I’m thinking about the quote…stand by.", 
        author: "Ellen Goodwin"
    },
    { 
        text: "When we were in the Beatles he would let me play lead sometimes!", 
        author: "Bishop Johnson"
    },
    { 
        text: "Maynard is one of the most creative, cool, and intelligent people I have had the pleasure of knowing and I have known him a very long time. I highly recommend getting to know him in business or personally you won’t be sorry.", 
        author: "Heady Belue"
    },
    { 
        text: "Cool dude and glad my very nice camera went into the very creative hands of a great human!", 
        author: "CJ Jordan"
    },
    { 
        text: "Maynard knows a thing or two about catching flies. Wrangling 'em? That's a whole 'nother story...for a whole 'nother website!", 
        author: "Rob Bird"
    },
    { 
        text: "When The Visual Underground was running Maynard made some of the best and most creative images we ever used! They always looked great and embodied the theme and message we were going for.", 
        author: "David Mishoulam"
    },
    { 
        text: "He brews.", 
        author: "Chris Shadrick"
    },
    { 
        text: "If you're doing a thing and you want that thing to be cooler, talk to Maynard.", 
        author: "Drew Douglas"
    },
    { 
        text: "Maynard is one hot piece of &#$.", 
        author: "Cindy Hacker Kirby"
    },
    { 
        text: "Dude is SOLID as hell, man!", 
        author: "Ed Cronan"
    },
    { 
        text: "This one time, at band camp...", 
        author: "Paul Greshko"
    },
    { 
        text: "Someone actually married Maynard and seemed thrilled to do so!", 
        author: "Alison MacArthur"
    },
    { 
        text: "Maynard Chastain is a great artist, next to me of course.", 
        author: "Keith Messina"
    },
    { 
        text: "Talented artist!", 
        author: "Roseleigh Navarre"
    },
    { 
        text: "He knows beer. He likes beer. He is beer.", 
        author: "Mitch Michalski"
    },
    { 
        text: "Maynard Chastain made posters for our band that cement a special place in time for me, and his creativity helps preserve the hope that our shows mattered.", 
        author: "Lee Harding"
    },
    { 
        text: "Creative, talented artist. Wicked wit. Mostly personable. Avoids glitter. Would add to cart.", 
        author: "Bonnie Honeycutt"
    },
    { 
        text: "He said to me once “We’re gonna die [in this game].” And we did.", 
        author: "Christine Grabb"
    },
    { 
        text: "Artful and worthy.", 
        author: "Nicholas Flagler"
    },
    { 
        text: "Maynard is one of the kindest people I have been privileged to know. His keen mind and wicked sense of humor are a joy to behold.", 
        author: "Mark Jennings"
    },
    {
        text: "I just really, really like random quotes.",
        author: "Maynard"
    }
];

// Primary function, takes the random number as the id of the above object and swaps out the text on our index page.
const quoter = () => {
    let id = Math.floor(Math.random() * sourceText.length);
    document.getElementById('quoteWords').innerHTML = sourceText[id].text;
    document.getElementById('quoteName').innerHTML = sourceText[id].author;
};

// Timer function to change the quotes every so often

const turnover = () => {
        setInterval(quoter, 6000);
        console.log('turnover')
    };

turnover()

// Note: If you're reading this you are probably thinking it's overkill but the point of this script was in fact to get into good coding habits such as separation of concerns. So, bear with me on this one =)