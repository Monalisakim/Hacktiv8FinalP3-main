const logo = document.querySelector("#logo-icon")
const logo_con = document.querySelector(".logo-con")
const logo_btm = document.querySelector(".logo-bottom")
 window.addEventListener("scroll",(e)=>{
    lastKnownScrollPosition = window.scrollY;
    if(lastKnownScrollPosition == 0){
        logo_con.classList.remove("logo-con-scroll")
        logo.classList.remove("logo-scroll")
        logo_btm.classList.remove("d-none")
    } else {
        logo_con.classList.add("logo-con-scroll")
        logo.classList.add("logo-scroll")
        logo_btm.classList.add("d-none")
    }
})