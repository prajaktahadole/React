

let Save = document.getElementById("Save");
let New = document.getElementById("New");


New.addEventListener("click", () => {
    let more = document.getElementById("more");

    more.style.visibility = "hidden";

    let input = document.getElementById("input");

    input.style.visibility = "visible";
})

Save.addEventListener("click", () => {

    let input = document.getElementById("input").value;
    let more = document.getElementById("more");
    let div1 = document.createElement('div');

    if(input.length > 0){
        div1.setAttribute("id", "div1");
        div1.innerHTML = input;
        
        more.append(div1);

        let alert = document.getElementById("alert");

        alert.style.visibility = "visible";
        alert.style.width = "180px";
        alert.innerHTML = "Your Note is Saved...";

        setTimeout(() => {
            alert.style.visibility = "hidden";
            alert.style.width = "auto";
            alert.innerHTML = null;
        }, 2000)
       
    }  
})


 