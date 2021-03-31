document.addEventListener('DOMContentLoaded', () => {
  const menuToggleButton = document.getElementById('toggle__menu');
  const menuList = document.querySelector('.menu');
  const overlay = document.querySelector('.menu-overlay');
  const anchors = document.querySelectorAll('.navigation__link');

  const selectedLanguage = document.querySelectorAll('.selected_language');
  const selectedCurrency = document.querySelectorAll('.selected_currency');
  const languageOptions = document.querySelectorAll('.options-container_language');
  const currencyOptions = document.querySelectorAll('.options-container_Currency');
  const menuLinks = document.querySelectorAll('.navigation__link');

  menuToggleButton.addEventListener('click', () => {
    menuList.classList.toggle('menu__open');
    menuToggleButton.classList.toggle('open');
    overlay.classList.toggle('menu-overlay_show');
  });

  document.addEventListener('click', (e) => {

    if (
      e.target === menuToggleButton
      || menuToggleButton.contains(e.target)
      || menuList.contains(e.target)
    ) return;

    const isMenuOpen = menuList.classList.contains('menu__open');

    if (isMenuOpen) {
      menuList.classList.remove('menu__open');
      menuToggleButton.classList.remove('open');
      overlay.classList.remove('menu-overlay_show');
    }

  });

  selectedLanguage.forEach((selected) => {
    selected.addEventListener('click', () => {
      languageOptions.forEach((option) => {
        option.classList.toggle('active');
      });
    });
  });

  selectedCurrency.forEach((selected) => {
    selected.addEventListener('click', () => {
      currencyOptions.forEach((option) => {
        option.classList.toggle('active');
      })
    });
  });

  languageOptions.forEach((option) => {
    const options = option.querySelectorAll('.option');

    options.forEach((opt) => {
      opt.addEventListener('click', () => {
        selectedLanguage.forEach((selected) => {
          const text = opt.querySelector('label').innerHTML
          selected.innerHTML = text;
          option.classList.remove('active');
        })
      });
    })
  })

  currencyOptions.forEach((option) => {
    const options = option.querySelectorAll('.option');

    options.forEach((opt) => {
      opt.addEventListener('click', () => {
        selectedCurrency.forEach((selected) => {
          const text = opt.querySelector('label').innerHTML
          selected.innerHTML = text;
          option.classList.remove('active');
        })
      });
    })
  });

  anchors.forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href');

      const target = document.querySelector(id);

      menuList.classList.remove('menu__open');
      menuToggleButton.classList.toggle('open');
      overlay.classList.remove('menu-overlay_show');

      target.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });


  function formScript(formName, formMain, formSended, resendForm) {
    formName.addEventListener('submit', (e) => {
      e.preventDefault();
      formMain.classList.add('hidden');
      formSended.classList.remove('hidden');
      formName.reset();
      alert('Ваша заявка отправлена!');
      resendForm.addEventListener('click', () => {
        formMain.classList.remove('hidden');
        formSended.classList.add('hidden');
      });
    });
  };

  const formOffer = document.querySelector('.offer__form');
  const offerMain = document.querySelector('.offer__main');
  const offerSended = document.querySelector('.offer__sended');
  const resendOffer = document.querySelector('.resend__offer');

  formScript(formOffer, offerMain, offerSended, resendOffer);

  const formFooter = document.querySelector('.footer__form');
  const footerMain = document.querySelector('.footer__form-outer');
  const footerSended = document.querySelector('.footer__sended');
  const resendFooter = document.querySelector('.resend__footer');

  formScript(formFooter, footerMain, footerSended, resendFooter);
  
});