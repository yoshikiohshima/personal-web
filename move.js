function addHandlers() {

    let elems = document.querySelectorAll(".toc-button");
    elems.forEach((c) => {
        let id = c.id;
        let elem = document.getElementById(id);
        if (!elem) {return;}
        elem.addEventListener("click", () => {
            let hyphen = id.lastIndexOf("-");
            moveTo(id.slice(0, hyphen));
        });
    });

    elems = document.querySelectorAll(".project");
    elems.forEach((c) => {
        let id = c.id;
        let elem = document.getElementById(id);
        if (!elem) {return;}
        elem.addEventListener("click", () => {
            let hyphen = id.indexOf("-");
            moveTo(id);
        });
    });
}

function moveTo(id) {
    let elem = document.getElementById(id);
    if (!elem) {return;}
    let content = document.body;
    let offsetTop = elem.offsetTop;
    content.scrollTop = offsetTop;
    window.location.hash = id;
}

window.onload = addHandlers;
