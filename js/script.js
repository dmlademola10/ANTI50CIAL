function $(sel) {
    return document.querySelector(sel);
}

function $A(sels) {
    return document.querySelectorAll(sels);
}
$(".title-box span").addEventListener("click", function () {
    $($(".title-box span").getAttribute("data-for")).scrollIntoView();
})
$(".link_btn").addEventListener("click", () => {
    if ($(".drop-links").style.height == "0px" || $(".drop-links").style.height == "") {
        $(".drop-links").style.height = "155px";
    } else {
        $(".drop-links").style.height = "0px";
    }
})
$A(".links .link, .drop-links .link").forEach((elem) => {
    elem.addEventListener("click", function () {
        $(elem.getAttribute("data-for")).scrollIntoView();
    })
})
