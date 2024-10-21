const input = document.querySelector("input");
const buttonSend = document.querySelector("#send");
const buttonClear = document.querySelector("#clear");
const resultDiv = document.querySelector("#result");
const buttonUp = document.querySelector("#up");
const buttonClearAll = document.querySelector("#clearAll");


buttonSend.addEventListener("click", () =>{
    const value = input.value;
    const name = input.name;

    if(value) {
        localStorage.setItem(name, value);

        const email = localStorage.getItem("email");
        resultDiv.innerHTML = email; // in kết quả ra màn hình
      
    }    
});


buttonClear.addEventListener("click", () =>{
    localStorage.removeItem("email"); 
    resultDiv.innerHTML = ""; 
});

let count = 0;

buttonUp.addEventListener("click", () =>{
    localStorage.setItem(`key${count}`, `value${count}`); 
    
    count++;

});


buttonClearAll.addEventListener("click", () =>{
    localStorage.clear();
    
});

for(let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, value);
}


//sessionStorage: lưu theo phiên
sessionStorage.setItem("token", "ạhusdvuaasjdn");

