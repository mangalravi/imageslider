const slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach((slide,index) => {
slide.getElementsByClassName.bottom = `${index*100}%`
})
// console.log(slides);


const gonext = () => {
counter++;
slideImage();
}
const goprev = () => {
    counter--;
slideImage();
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateY(${counter*100}%)`
    })
}

