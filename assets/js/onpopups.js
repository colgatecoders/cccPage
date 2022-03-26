

const collapse = (btn) => {
    btn.classList.toggle("active");
    var content = btn.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

window.onload = () => {
    const btns = document.getElementsByClassName("collapse");
    console.log(btns)
    for (const btn of btns){
        btn.addEventListener("click", () => collapse(btn));
    }
};


