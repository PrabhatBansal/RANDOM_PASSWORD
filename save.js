showpass();
function showpass() {
  let passlist = localStorage.getItem("passlist");
  if (passlist == null) {
    passObj = [];
  } else {
    passObj = JSON.parse(passlist);
  }
  let html = "";

  passObj.forEach(function (element, index) {
    html += `<div class=" noteCard card m-2 " style="width: 18rem;">
  <div class="card-body ">
    <h5 class="card-title">Title: <u>${element.title}</u></h5><div>
    <p class="card-text">Password: 
    <input style="color:red;
    outline:none;
    border:none;
    width:100px" 
    value="${element.pass}" 
    id="${index}" 
    readonly>
   
    <svg onclick="copy(document.getElementById('${index}'))" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2 " style="color:black" viewBox="0 0 16 16">
    <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z"/>
    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
  </svg>
    </div><button onclick="deletepass(${index})" class="btn btn-primary">Delete</button>
  </div>
</div>`;
  });
  let row = document.getElementById("table");
  if (passObj.length != 0) {
    row.innerHTML = html;
  } else {
    row.innerHTML = `<p class="pl">No passwords saved.
    Use "save" button to add password</p>.
    `;
  }
}

function deletepass(index) {
  let passObj;
  let passlist = localStorage.getItem("passlist");
  if (passlist == null) {
    passObj = [];
  } else {
    passObj = JSON.parse(passlist);
  }
  passObj.splice(index, 1);
  localStorage.setItem("passlist", JSON.stringify(passObj));
  showpass();
  // setInterval("showpass()", 1000);
}
function copy(e) {
  e.select();
  document.execCommand("copy");
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value;
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("u")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});
