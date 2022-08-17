(() => {
    let flag = 1;

    document.addEventListener('DOMContentLoaded', function () {
      window.addEventListener('scroll', init);
      window.addEventListener('mousemove', init);
      window.addEventListener('touchstart', init);
      setTimeout(function () {
        init();
      }, 10000);
    });

    function init() {
    

      if (flag) {
        flag = 0;

        window.removeEventListener('scroll', init);
        window.removeEventListener('mousemove', init);
        window.removeEventListener('touchstart', init);

        typeof asyncVendorsLoad !== 'undefined' && asyncVendorsLoad();

        lazyLoadBgImage();
        // lazyLoadIframe();
        load_all_js();
      }
    }

    function lazyLoadBgImage() {
      document.querySelectorAll('[data-bgsrc]').forEach(function (elem) {
        elem.style.backgroundImage = `url(${elem.dataset.bgsrc})`;
      });
    }

    function lazyLoadIframe() {
      document.querySelectorAll('iframe').forEach(function (elem) {
        elem.src = elem.dataset.src || elem.src;
      });
    }

    function load_all_js() {
      setTimeout(function() {
        window.dispatchEvent(new Event('custom_load'));
      }, 100);

      const lazyScripts = document.getElementsByTagName('script');

      Array.from(lazyScripts).forEach(s => {
        if (s.type === 'lazyload.js') {
          const script = document.createElement('script');

          if (s.dataset.src) {
            script.src = s.dataset.src;
            script.async = s.async;
            script.defer = s.defer;
            document.head.appendChild(script);
          } else if (s.innerHTML) {
            script.innerHTML = s.innerHTML;
            document.body.appendChild(script);
          }

          s.remove();
        }
      })
    }
  })();

 document.addEventListener("DOMContentLoaded", function() {
  if ("IntersectionObserver" in window) {
   var iframesLazy = document.querySelectorAll(".iframe-video");
   var iframeObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
     if (entry.isIntersecting && entry.target.src.length == 0) {
      entry.target.src = entry.target.dataset.src;
      iframeObserver.unobserve(entry.target);
     }
    });
   });
   iframesLazy.forEach(function (iframe) {
    iframeObserver.observe(iframe);
   });
  } else {
   var iframesLazy = document.querySelector('.iframe-video');
   for (var i = 0; i < iframesLazy.length; i++) {
    if (lazyVids[i].getAttribute('data-src')) {
     lazyVids[i].setAttribute('src', lazyVids[i].getAttribute('data-src'));
    }
   }
  }
 });
