let Password2 = document.getElementById("password");
let disPass = document.getElementById("dis");
function pg() {
  let passNum = 9;
  let Password = " ";
  let str;
  str =
    "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM ~`!@#$%^&*()_-+={[}]|:;'<,>.?/";

  for (let i = 0; i < passNum; i++) {
    let rand = Math.floor(Math.random() * str.length);
    Password += str.substring(rand, rand + 1);
    Password2.value = Password;
  }
  disPass.style.visibility = "visible";
  ult = `Your Password is : ${Password}`;
  disPass.innerText = ult;
}
function copy() {
  Password2.select();
  document.execCommand("copy");
}
