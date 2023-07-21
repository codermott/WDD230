const imageWrappers = document.querySelectorAll('.image-wrapper');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target.querySelector('img');
          const src = img.getAttribute('src');
          img.setAttribute('src', src.replace('placeholder.jpg', entry.target.dataset.src));
          img.addEventListener('load', () => {
            entry.target.classList.add('loaded');
          });
          observer.unobserve(entry.target);
        }
      });
    });

    imageWrappers.forEach(wrapper => {
      observer.observe(wrapper);
    });