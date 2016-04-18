// application

// video
(function(){

  var link = document.querySelector('.video__link--youtube');
  var image = document.querySelector('.video__image');

  link.addEventListener('click', function(e) {
    e.preventDefault();

    this.innerHTML = '<iframe width="'+ image.offsetWidth +'" height="'+ image.offsetHeight +'" src="' + this.href + '?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
  });

})();
