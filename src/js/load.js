
//네비게이션
fetch(URLs.compUrl + "head.php")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("#main_header").innerHTML = data;
});