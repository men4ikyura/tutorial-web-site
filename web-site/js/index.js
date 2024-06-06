let texts_aria = document.querySelectorAll(".short-govno")

for (let text_aria of texts_aria){
    let button = text_aria.querySelector(".next")
    button.onclick = function() {
        let sents = text_aria.querySelectorAll(".short")
        for (let sent of sents){
            console.log(sent)
            sent.classList.remove("short")
            button.style.display = 'none';
        }
    }
}

let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.card a');


for (let activeImage of previews) {
    activeImage.onclick = function (evt) {
    evt.preventDefault();
    mainImage.src = activeImage.href;
    let currentActive = document.querySelector('.card .active');
    currentActive.classList.remove('active');
    activeImage.classList.add('active');
};
}