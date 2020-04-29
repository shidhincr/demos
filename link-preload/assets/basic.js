(function iife(params) {
  let $ = dollarDom.$;
  $('body').on('click', '.read-more', function handle(event) {
    let elem = event.target;
    let readMoreContainer = $('.read-more-container', elem.parentNode).get(0);

    if(!readMoreContainer) return;

    if(elem.innerText === 'Read more')  {
      elem.innerText = 'Read less';
      readMoreContainer.classList.add('is-visible');
    } else {
      elem.innerText = 'Read more';
      readMoreContainer.classList.remove('is-visible');
    }
  });
})()