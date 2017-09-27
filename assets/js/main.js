(function () {
  document.body.addEventListener('click', (e) => {
    let url = (e.target.href || '').split('#');
    let target = document.getElementById(url[1]);
    url = url[0];
    
    if (target && target.scrollIntoView && location.href.split('#')[0] === url) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth'});
    }
  })
}());