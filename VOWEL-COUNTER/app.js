let heading4 = document.getElementById("heading4");
let btn = document.getElementById("btn")

btn.addEventListener('click', () => {
    let content = document.getElementById("content");
    if (content.innerText === "") {
        heading4.innerHTML = "Please Enter Some Text"
    }
    else {
        const value = content.innerText;
        let count = 0;
        for (let i = 0; i < value.length; i++) {
            if(value[i] === "a" || value[i] === "e" || value[i] === "i" || value[i] === "o" || value[i] === "u"){
                count++;
            }
        }
        heading4.innerHTML = `The Number Of Vowels Are ${count}`;

    }
});


