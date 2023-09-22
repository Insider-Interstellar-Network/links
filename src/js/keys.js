const keys = [
  {password: "Wm1neE16QXlNVFU0TVE9PQ==", num : "1", key : "aHR0cHM6Ly92cjJ4NGstODA4MC5jc2IuYXBwLw=="},
]
function setup() {
  keys.forEach((key) => {
    var br = document.createElement("by");
    body.appendChild(br);
    var div = document.createElement("div");
    div.id = key.num;
    var p = document.createElement("p");
    p.id = "num" + key.num;
    p.class = "whiteRight";
    p.innerHTML = key.num;
    var form = document.createElement("form");
    form.id = "passwordForm" + key.num;
    form.onclick = "password(" + key.num + ");return false;";
    var input = document.createElement("input");
    input.id = "passwordInput" + key.num;
    input.class = "whiteRight";
    input.type = "password";
    input.style = "background-color:rgb(22,27,34); border-radius:15px;";
    form.appendChild(input);
    div.appendChild(p);
    div.appendChild(form);
    body.appendChild(div);
  });
}
function password(num) {
  var input = document.getElementById("passwordInput" + num);
  keys.forEach((key) => {
    var step1 = atob(key.password);
    var step2 = atob(step1);
    if (step2 == input.value) {
      localStorage.setItem("showkey" + key.num,"true")
    }
  })
}
function decode(num) {
  keys.forEach((key) => {
    if (key.num == num) {
      var e = atob(key);
      window.location.href = e;
    }
  })
}
