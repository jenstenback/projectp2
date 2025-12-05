const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    // Optioneel: sluit andere open items
    faqItems.forEach(i => {
      if(i !== item) {
        i.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  });
});
