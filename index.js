let Password2 = document.getElementById("password");
let disPass = document.getElementById("dis");
function pg() {
  let passNum = 9;
  let Password = " ";
  let str;
  str =
    "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM~`!@#$%^&*()_-+={[}]|:;'<,>.?/";

  for (let i = 0; i < passNum; i++) {
    let rand = Math.floor(Math.random() * str.length);
    Password += str.substring(rand, rand + 1);
    Password2.value = Password;
  }
  disPass.style.visibility = "visible";
  ult = `Your Password is:<br> <b>${Password}</b>`;
  disPass.innerHtml = ult;
}
function copy() {
  Password2.select();
  document.execCommand("copy");
}

function save() {
  let disForm = document.getElementById("form");
  disForm.style.display = "block";
  let addpass = document.getElementById("spass");
  let Password2 = document.getElementById("password").value;
  addpass.value = Password2;
  document.getElementById('bood').style.filter="blur(10px)"
}
function cancel() {
  let disForm = document.getElementById("form");
  disForm.style.display = "none";
  document.getElementById('bood').style.filter="none"
}

document.getElementById("form").addEventListener('submit', () => {
  let addTxt = document.getElementById("stext");
  let addpass = document.getElementById("spass");
  // addpass.value = Password2;
  let disText = addTxt.value;
  let disPassw = addpass.value;
  let passlist = localStorage.getItem("passlist");
  if (passlist == null) {
    passObj = [];
  } else {
    passObj = JSON.parse(passlist);
  }
  let passJ = {
    title: disText,
    pass: disPassw,
  };
  passObj.push(passJ);
  localStorage.setItem("passlist", JSON.stringify(passObj));
  console.log(disText);

  // let passObj;
});
