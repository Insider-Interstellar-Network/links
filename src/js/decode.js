const keys = [
  {"num" : "1", "key" : "aHR0cHM6Ly92cjJ4NGstODA4MC5jc2IuYXBwLw=="},
]
function decode(num) {
  keys.forEach((key) => {
    if (key.num == num) {
      var e = atob(key);
      window.location.href = e;
    }
  })
}
