const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');
}

function toggleOpenActive(target){
  target.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => {
  panel.addEventListener('transitionend', evt => {
    if (evt.propertyName.includes('flex')){
      toggleOpenActive(evt.target);
    }
    console.log(evt);
  });
});