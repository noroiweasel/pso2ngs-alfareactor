//�o�͐�
const output = document.querySelector('#output');


//�}�E�X�ړ���
document.addEventListener('onmousemove', onmousemove);

onmousemove = function(e) {
  output.innerHTML = `x:` + e.pageX + ` y:` + e.pageY;
}


//�}�E�X���E��
document.addEventListener('onmouseout', onmouseout);

onmouseout = function(e) {
  output.innerHTML = ``;
}