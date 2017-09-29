(function () {
  document.body.addEventListener('click', (e) => {
    // get target element according to hash in url
    let url = (e.target.href || '').split('#');
    let target = document.getElementById(url[1]);
    url = url[0];
    
    // if target exisits on website and auto scrolling is supported
    if (target && target.scrollIntoView && location.href.split('#')[0] === url) {
      // prevent browser from jumping to hash
      e.preventDefault();
      // smoothly scroll to target element
      target.scrollIntoView({behavior: 'smooth'});
      // just clicked link should lose focus
      e.target.blur();
      // add hash to history, so that "deep links" continue to work
      history.pushState(null, null, e.target.href);
    }
  })
}());