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

    let qr = document.getElementById("qrHolder");
    qr.onclick = () => toggle(qr);
}

function toggle(qr) {
    qr.classList.toggle("zoomed", !qr.classList.contains("zoomed"));
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
