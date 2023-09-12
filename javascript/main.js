/*================ Mixup Filter ================*/
const mixerProjects = mixitup('.projects__container', {
  selectors: {
      target: '.project__item',
  },
  animation: {
      duration: 300
  },
});

/* Active Work */
const linkWork = document.querySelectorAll('.category__btn');

function setActiveWork() {
  linkWork.forEach((a) => a.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', setActiveWork));

/*================ Testimonial Swiper ================*/
// Initialize Swiper carousel
const testiSwiper = new Swiper('.testimonial__container', {
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/*================ Contact Form ================*/
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const message = document.getElementById('message');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  if (contactName.value === '' || contactEmail.value === '' || message.value === '') {
      contactMessage.classList.remove('color-light');
      contactMessage.classList.add('color-dark');

      contactMessage.textContent = 'Please fill in all input fields.';
  } else {
      emailjs.sendForm('service_iannqf9', 'template_l7gl5qv', '#contact-form', 'g5yS7kFZ6s_wl4Y6b')
          .then(() => {
              contactMessage.classList.add('color-light');
              contactMessage.textContent = 'Message sent ✅👌🏾';

              const successMessage = document.getElementById('success-message');

              if (successMessage) {
                  successMessage.style.display = 'block';
              }

              contactForm.style.display = 'none';

              setTimeout(() => {
                  contactMessage.textContent = '';

                  if (successMessage) {
                      successMessage.style.display = 'none';
                  }

                  contactForm.style.display = 'block';
              }, 5000);
          })
          .catch(function (error) {
              contactMessage.classList.remove('color-light');
              contactMessage.classList.add('color-dark');
              contactMessage.textContent = 'Error sending message. Please try again later.';
              console.error('Error sending email:', error);
          });
  }
};

contactForm.addEventListener('submit', sendEmail);
