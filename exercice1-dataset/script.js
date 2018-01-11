var button =document.querySelectorAll('button');
window.addEventListener("keydown",function(e)
{
  var button = document.querySelectorAll('button');
  var value= e.which;
  for(var i=0;i<button.length;i++)
    {
      if(button[i].dataset.code == value){
        button[i].classList.add('is-active');
      }
      }
    });
window.addEventListener("keyup",function(e)
{
  var button = document.querySelectorAll('button');
  var value= e.which;
  for(var i=0;i<button.length;i++)
    {
      if(button[i].dataset.code == value){
        button[i].classList.remove('is-active');
      }
      }
    });
