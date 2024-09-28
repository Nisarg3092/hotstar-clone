// caraousel

let movies = [
    {
      name: "falcon and winter soldier",
      des: "lorem",
      image: "images/slider 2.PNG"
    },
    {
      name: "falcon and winter soldier",
      des: "lorem",
      image: "images/slider 1.PNG"
    },
    {
      name: "falcon and winter soldier",
      des: "loremj",
      image: "images/slider 3.PNG"
    },
    {
      name: "falcon and winter soldier",
      des: "lorem",
      image: "images/slider 4.PNG"
    },
    {
      name: "falcon and winter soldier",
      des: "lorem",
      image: "images/slider 5.PNG"
    }
  ];
  
  const caraousel = document.querySelector(".caraousel");
  let sliders = [];
  
  let slideIndex = 0;
  
  const createslide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    caraousel.appendChild(slide);
  
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createslide();
  }
  
  setInterval(() => {
    createslide();
  }, 3000);
  

// video card animetion

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach(item => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

// card slider

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtn = [...document.querySelectorAll('.pre-btn')];
let nxtBtn = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth - 200;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
        });

});