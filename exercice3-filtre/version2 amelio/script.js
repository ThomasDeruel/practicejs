var btns = document.querySelectorAll('.btn-filter');
var btn_all = document.querySelector('.btn-all');
var boxes = document.querySelectorAll('.box');

btn_all.addEventListener('click', function() {
    for (var a = 0; a < boxes.length; a++) {
        boxes[a].style.display = '';
    }
});

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        for (let a = 0; a < boxes.length; a++) {
              if (this.dataset.category === boxes[a].dataset.category) {
                  boxes[a].style.display = 'block';

              } else {
                  boxes[a].style.display = 'none';

              }
        }
    });
}
