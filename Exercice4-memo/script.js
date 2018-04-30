var card = document.querySelectorAll('.card');
var memo;
var memovalue;
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click', function() {
    if (this.classList.contains('flipped')) {return;}

    if (!memo) {
      this.classList.add('flipped');
      memo = this.dataset.value;
      memovalue = this;

    } else if (this.dataset.value === memo) {
      memo = undefined;
      this.classList.add('flipped');

    } else if (this.dataset.value !== memo) {
      memo = undefined;
      this.classList.add('flipped');
      this.addEventListener('transitionend', function() {
        this.classList.remove('flipped');
        memovalue.classList.remove('flipped');
      });
    }
  })
}
