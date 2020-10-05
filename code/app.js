/* mudança de cor no slider */
const slider = document.querySelector(".slider")
const aux =  document.getElementsByClassName("slider")

var ativo = 0
slider.addEventListener("click", () => {
    /* mudar pro dark mode */
    if(ativo == 0){
        slider.style.backgroundImage = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
        darkMode();
        ativo++;
    }
    else{
        slider.style.backgroundImage = "none";
        removeDarkMode()
        ativo--;
    }
})

/* REFERENCIAS */
/* header elements */
const header = document.querySelector("header")
const headerTitle = document.querySelector("#header-title")
const round = document.styleSheets[1].rules[12]

/* main elements */
const main =  document.querySelector("main")

/* primeiros cards */
const socialCard = document.getElementsByClassName("social-media")
const numSeguidores = document.querySelectorAll(".numero-seguidores")

/* 8 cards */
const overviewH1 = document.querySelector("#overview h1")
const overviewCard = document.getElementsByClassName("overview-card")
const topicValue = document.getElementsByClassName("topic-value")

/* QUANDO OS SOCIAL CARDS TROCAM DE COR, O :HOVER NÃO FUNCIONA MAIS */

function darkMode(){
    /* ATRIBUIÇÕES */
    header.setAttribute("class", "dark")
    headerTitle.setAttribute("class", "white-text")
    main.setAttribute("class", "dark-main")
    for(let i = 0; i < socialCard.length; i++){
        socialCard[i].classList.add("dark-card");
        numSeguidores[i].style.color = "hsl(0, 0%, 100%)";
    }
    overviewH1.style.color = "hsl(0, 0%, 100%)";
    for(let i = 0; i < overviewCard.length; i++){
        overviewCard[i].classList.add("dark-card");
        topicValue[i].style.color = "hsl(0, 0%, 100%)";
    }
    round.style.backgroundColor = "black"
}
function removeDarkMode(){
    /* ATRIBUIÇÕES */
    header.removeAttribute("class")
    headerTitle.removeAttribute("class")
    main.removeAttribute("class")
    for(let i = 0; i < socialCard.length; i++){
        socialCard[i].classList.remove("dark-card");
        numSeguidores[i].style.color = "hsl(230, 17%, 14%)";
    }
    for(let i = 0; i < overviewCard.length; i++){
        overviewCard[i].classList.remove("dark-card");
        topicValue[i].style.color = "hsl(230, 17%, 14%)";
    }
    overviewH1.style.color = "hsl(228, 12%, 44%)";
    round.style.backgroundColor = "hsl(225, 100%, 98%)"
}