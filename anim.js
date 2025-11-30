const words = ["Lorem","Ipsum"]
const colors = ["red", "green", "orange"];

function addText(id, text) {
    let pos = 0;
    const elem = document.getElementById(id);
    function addLetter() { // функція для друку літер
    
     elem.innerHTML += `<span style="color:red;">${text[pos]} </span>`; // в elem.innerHTML друкуємо підрядок text  довжиною від 0 
      pos++;
     // до pos символів 
    //  if (...) { // слово надруковано повністю
    //     // завершити анімацію 
    //  }
   }
   let timer = setInterval(addLetter, 1000)
}
// text = ...
// addText(id, text)