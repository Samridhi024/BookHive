var btn= getElementById("icon");

function likebtn(btn) {
    if (btn.classList.contains("fa-heart-o")) {
        btn.classList.remove("fa-heart-o");
        btn.classList.add("fa-heart");
    } 
    else {
        btn.classList.remove("fa-heart");
        btn.classList.add("fa-heart-o");
    }
}
