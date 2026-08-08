const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show");

});

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

sections.forEach(section=>{

section.classList.add("fade");

observer.observe(section);

});

const filterButtons = document.querySelectorAll(".filter-buttons button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

/*==========================
LIGHTBOX
==========================*/

const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

if(images.length){

    images.forEach(image=>{

        image.addEventListener("click",()=>{

            lightbox.style.display="flex";

            lightboxImg.src=image.src;

        });

    });

}

if(closeBtn){

    closeBtn.addEventListener("click",()=>{

        lightbox.style.display="none";

    });

}

if(lightbox){

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    });

}