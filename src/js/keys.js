const keys = [
  {password: "Wm1neE16QXlNVFU0TVE9PQ==", num : "1", key : "aHR0cHM6Ly92cjJ4NGstODA4MC5jc2IuYXBwLw=="},
]
function setup() {
  var div = document.getElementById("0");
  keys.forEach((key) => {
    
  })
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
