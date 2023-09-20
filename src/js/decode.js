function decode(key, key2) {
  var step1 = atob(key);
  var step2 = atob(step1);
  var step3 = atob(key2);
  var step4 = btoa(step2 + step3);
  var step5 = atob(step4);
  window.location.href = step5;
};
