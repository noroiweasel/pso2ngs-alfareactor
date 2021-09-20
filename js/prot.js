//出力先
const output = document.querySelector('#output');


//マウス移動時
document.addEventListener('onmousemove', onmousemove);

onmousemove = function(e) {
  output.innerHTML = `x:` + e.pageX + ` y:` + e.pageY;
}


//マウス離脱時
document.addEventListener('onmouseout', onmouseout);

onmouseout = function(e) {
  output.innerHTML = ``;
}