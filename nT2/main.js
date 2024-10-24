// select landing 
let landing = document.querySelector(".landing")

// get array of imgs 
let imgs = ["1", "2", "3", "4"]



setInterval(() => {

    // make random number 
    let randomNumber = Math.floor(Math.random() * imgs.length)

    // change landing backgroundImage 
    landing.style.backgroundImage = `url(../img/${imgs[randomNumber]}.jpg)`;


}, 3500);