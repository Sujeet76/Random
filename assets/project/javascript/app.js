//===================================time========================
const time = document.getElementById('time');

const formate = (h, m, sec) => {
    if (h > 12) { h = h - 12; }
    if (h < 10) { h = '0' + h; }
    if (m < 10) { m = '0' + m; }
    if (sec < 10) { sec = '0' + sec; }
    if (((h + 1) > 12)) {
        return `${h}:${m}:${sec} PM`
    } else {
        return `${h}:${m}:${sec} AM`
    }
}

const todyTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let sec = today.getSeconds();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    if (date < 10)
        time.innerText = `${formate(h, m, sec)} / 0${date}.${month}.${year}`;
    if (month < 10)
        time.innerText = `${formate(h, m, sec)} / 0${date}.0${month}.${year}`;

    setTimeout(todyTime, 1000);
}

todyTime();



//=======================slider===========
const slides = document.querySelectorAll('.slide');

//setting the images aside to each other
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 44}rem)`;
});


//selection next slide button
const nextBtn = document.querySelector('.btn-next')

//current slide counter
let count = 0;

//maximum no. of slides
let maxSlide = slides.length - 1;

//add event listener for next bth
nextBtn.addEventListener('click', () => {
    if (count === maxSlide)
        count = 0;
    else
        count++;

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${44 * (index - count)}rem)`;
    });
});

// select prev slide button
const prevBtn = document.querySelector(".btn-prev");

prevBtn.addEventListener('click', () => {
    if (count === 0)
        count = maxSlide;
    else
        count--;

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${44 * (index - count)}rem)`;
    });
});


//making the autoplay side show

setInterval(() => {
    if (count === maxSlide) {
        count = 0;
    } else {
        count++
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${44 * (index - count)}rem)`;
        // console.log(index- count);
    });
}, 3000);



const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// -----------------------info div-------------------------
const divInfoArr = [
    { image: "education", name: "Faculty Zone", colorName: "#faafd0" },
    { image: "Research", name: "Research", colorName: "#eed2d0" },
    { image: "wreath", name: "Awards & Recognitions", colorName: "#d6f1da" },
    { image: "form", name: "Download Forms", colorName: "#eed2d0" },
    { image: "people", name: "Roster", colorName: "#d6f1da" },
    { image: "job-seeker", name: "Job Opportunities", colorName: "#e9dbf7" },
    { image: "icons8-flag-24", name: "Azadi Ka Amrit Mahotsav", colorName: "#e9dbf7" },
    { image: "icons8-library-50", name: "Societies", colorName: "#c7f0ea" },
    { image: "open-book", name: "Library", colorName: "#faafd0" },
    { image: "report", name: "Annual Reports", colorName: "#eed2d0" },
    { image: "magazine", name: "College Magazine", colorName: "#c7f0ea" },
    { image: "icons8-news-48", name: "DSC In News", colorName: "#c7f0ea" },
    { image: "icons8-committee-64", name: "Committees", colorName: "#eed2d0" },
    { image: "icons8-welder-50", name: "Tenders & Quotations", colorName: "#f8e1c5" },
    { image: "40410810-removebg-preview", name: "Placement Cell", colorName: "#d6f1da" },
    { image: "icons8-online-60", name: "Surveys", colorName: "#d6f1da" },
    { image: "icons8-students-64", name: "Alumni Association", colorName: "#faafd0" },
    { image: "icons8-trophy-50", name: "Spots Facilities", colorName: "#f8e1c5" },
    { image: "nss", name: "NSS", colorName: "#eed2d0" },
    { image: "clipart3290065", name: "NCC", colorName: "#d6f1da" },
]

const section = document.querySelector('.addition-info');

window.addEventListener("DOMContentLoaded", () => {
    displayBox(divInfoArr);
});

const displayBox = (box) => {
    let display = divInfoArr.map((box) => {
        return `<div style="background-color:${box.colorName}">
        <img src="./img/${box.image}.png" alt="${box.image}">
        <p><a href="#">${box.name}</a></p>
    </div>`;
    });
    display = display.join('');

    section.innerHTML = display;
}


// ===============counter==============

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = 0;
    incrementCounter();
    function incrementCounter() {
        let currentNum = +counter.innerText;
        const dataCeil = counter.getAttribute('data-ceil');

        const increment = (dataCeil / 19);
        currentNum += Math.ceil(increment);

        if (currentNum <= dataCeil) {
            counter.innerText = currentNum;
            setTimeout(incrementCounter, 50);
        } else {
            counter.innerText = currentNum;
        }

    }

})
