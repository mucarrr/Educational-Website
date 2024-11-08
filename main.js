const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        const icon = faq.querySelector(".faq-icon i");
        if(icon.className === "bx bx-plus"){
            icon.className = "bx bx-minus";
        }else{
            icon.className = "bx bx-plus";
        }
        
})
});

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closedBtn = document.querySelector("#closed-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closedBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

closedBtn.addEventListener("click", () => {
    menu.style.display = "none";
    closedBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
});

