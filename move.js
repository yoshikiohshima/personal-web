function addHandlers() {

    let elems = document.querySelectorAll(".toc-button");
    elems.forEach((c) => {
        let id = c.id;
        let elem = document.getElementById(id);
        if (!elem) {return;}
        elem.addEventListener("click", () => {
            let hyphen = id.indexOf("-");
            moveTo(id.slice(0, hyphen));
        });
    });
}

function moveTo(id) {
    let elem = document.getElementById(id);
    if (!elem) {return;}

    let content = document.body;

    let offsetTop = elem.offsetTop;

    content.scrollTop = offsetTop;
}

window.onload = addHandlers;
