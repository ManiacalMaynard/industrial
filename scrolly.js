// Just your basic, everyday, scroll back to top floating button deal

btn = document.getElementById('backUpBtn');

// Display the button on scroll from the top of the page
window.onscroll = function() { scrolly() };

const scrolly = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Define the onclick behavior
const backUpTop = () => {
    document.body.scrollTop = 0; //safari
    document.documentElement.scrollTop = 0; //everyoneelse
}