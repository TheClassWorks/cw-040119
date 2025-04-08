// let a=+prompt("enter a number: ")
// switch (a) {
//     case 11:
//         //-----------
//         break;
//     case 2:
//         //-----------
//         break;
//     case 66:
//         //-----------
//         break;
//     default:
//         //- - -
//         break;
// }

//error handling
let num = 16;
// console.log(num);

let pElem = document.querySelector("p");
let inputElem = document.querySelector("input");
let buttonElem = document.querySelector("button");

// try {
//   console.log(x);
// } catch (err) {
//   pElem.innerHTML = err.message;
// }

buttonElem.addEventListener("click", checkValue);

function checkValue() {
  try {
    if (inputElem.value.length > 8) {
      throw "بیش از حد مجاز";
    } else throw "مجاز";
  } catch (error) {
    pElem.innerHTML = error;
  } finally {
    inputElem.value = "";
  }
}

//reference error
//syntax error
//logical error
//exception error adad/0