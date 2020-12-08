document.addEventListener('DOMContentLoaded', function(){
  const ta = new TextAnimation('.animate-title');
  ta.animate();
});


class TextAnimation{
  constructor(el){
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split('');
    this.el.innerHTML = this._splitText();
  }
  _splitText(){
    return this.chars.reduce((acc, curr) =>{
      curr = curr.replace(' ', '&nbsp;')
      return `${acc}<span class="char">${curr}</span>`
    }, "");
  }
  animate(){
    this.el.classList.toggle('inview');
  }
}

class TweenTextAnimation extends TextAnimation{
  constructor(el){
    super(el);
    
  }
}