
const change = document.querySelector("#change");
const body = document.querySelector("body");

//화면의 배경화면을 전체 바꿔야하니 body 태그를 불러왔다.

function changeHandle () {
    if(change.value === "night") {
        body.classList.add("night");
        body.classList.remove("day");
        change.value = "day";
    } else {
        body.classList.remove("night");
        body.classList.add("day");
        change.value = "night";
    }
}


change.addEventListener("click", changeHandle);