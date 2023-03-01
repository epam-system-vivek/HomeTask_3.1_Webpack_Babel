const lazyLoadBtn = document.getElementById('lazy-load-btn');
lazyLoadBtn.addEventListener('click', () => {
  import('./lazyLoad').then(module => {
    const lazyLoad = module.default;

    /* console statement to test whether it is displaying in console*/
    console.log("helo this is to test");
    
    lazyLoad();
  });
});
