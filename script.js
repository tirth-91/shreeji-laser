document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
  setupHeaderScroll();
  setupObserverReveal();
  setupGalleryLightbox();
  setupContactValidation();
  setupContactForm();
  setTimeout(animateCounters, 400);
});


// Contact validation

function setupContactValidation() {
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');

  if (!phone || !email) return;

  phone.addEventListener('input', () => {
    phone.value = phone.value.replace(/\D/g, '').slice(0, 10);

    updateFieldWarning(
      phone,
      /^\d{10}$/,
      'Enter exactly 10 digits.'
    );
  });

  email.addEventListener('input', () => {
    updateFieldWarning(
      email,
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Enter a valid email, for example name@company.com.'
    );
  });
}


function updateFieldWarning(field, pattern, message) {
  if (!field) return false;

  const warning = document.getElementById(
    `${field.id}-warning`
  );

  const value = field.value.trim();

  const isInvalid =
    value.length > 0 && !pattern.test(value);

  field.classList.toggle(
    'field-invalid',
    isInvalid
  );

  field.setAttribute(
    'aria-invalid',
    isInvalid ? 'true' : 'false'
  );

  if (warning) {
    warning.textContent =
      isInvalid ? message : '';
  }

  return !isInvalid;
}


// Gallery lightbox

function setupGalleryLightbox() {
  const galleryItems =
    document.querySelectorAll('.gallery-item');

  if (!galleryItems.length) return;

  const lightbox =
    document.createElement('div');

  lightbox.className =
    'gallery-lightbox';

  lightbox.setAttribute(
    'aria-hidden',
    'true'
  );

  const lightboxContent =
    document.createElement('div');

  lightboxContent.className =
    'gallery-lightbox-content';

  const closeBtn =
    document.createElement('button');

  closeBtn.className =
    'gallery-lightbox-close';

  closeBtn.type = 'button';

  closeBtn.setAttribute(
    'aria-label',
    'Close image'
  );

  closeBtn.textContent = '✕';

  const img =
    document.createElement('img');

  img.className =
    'gallery-lightbox-image';

  img.alt =
    'Expanded gallery image';

  lightboxContent.appendChild(closeBtn);
  lightboxContent.appendChild(img);

  lightbox.appendChild(lightboxContent);

  document.body.appendChild(lightbox);


  const openLightbox = (sourceImg) => {
    const src = sourceImg.src;

    if (!src) return;

    img.src = src;

    img.alt =
      sourceImg.alt ||
      'Expanded gallery image';

    lightbox.classList.add('active');

    lightbox.setAttribute(
      'aria-hidden',
      'false'
    );

    document.body.style.overflow = 'hidden';
  };


  const closeLightbox = () => {
    lightbox.classList.remove('active');

    lightbox.setAttribute(
      'aria-hidden',
      'true'
    );

    document.body.style.overflow = '';
  };


  galleryItems.forEach(item => {
    const sourceImg =
      item.querySelector('img');

    if (!sourceImg) return;

    item.style.cursor = 'pointer';

    item.addEventListener(
      'click',
      () => openLightbox(sourceImg)
    );
  });


  closeBtn.addEventListener(
    'click',
    closeLightbox
  );


  lightbox.addEventListener(
    'click',
    event => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    }
  );


  document.addEventListener(
    'keydown',
    event => {
      if (
        event.key === 'Escape' &&
        lightbox.classList.contains('active')
      ) {
        closeLightbox();
      }
    }
  );
}


// Page navigation

function showPage(id) {
  const pages =
    document.querySelectorAll('.page');

  pages.forEach(page => {
    page.classList.remove('show');
    page.classList.remove('active');
  });


  const target =
    document.getElementById('page-' + id);

  if (target) {
    target.classList.add('active');

    void target.offsetHeight;

    target.classList.add('show');
  }


  document
    .querySelectorAll('.nav-links a')
    .forEach(link => {
      link.classList.remove('active');
    });


  const pageMenuMap = {
    home: 'HOME',
    about: 'ABOUT',
    services: 'SERVICES',
    gallery: 'GALLERY',
    global: 'CLIENTS',
    contact: 'CONTACT'
  };


  document
    .querySelectorAll('.nav-links a')
    .forEach(link => {
      if (
        link.textContent.trim() ===
        pageMenuMap[id]
      ) {
        link.classList.add('active');
      }
    });


  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });


  closeNavMenu();

  setTimeout(triggerReveal, 100);


  if (id === 'home') {
    setTimeout(
      animateCounters,
      300
    );
  }
}


// Service detail

function showServiceDetail(serviceId) {
  showPage('services');

  setTimeout(() => {
    const serviceSection =
      document.getElementById(
        'service-' + serviceId
      );

    if (serviceSection) {
      serviceSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      serviceSection.style.background =
        'rgba(14, 101, 198, 0.05)';

      setTimeout(() => {
        serviceSection.style.transition =
          'background 0.6s ease';

        serviceSection.style.background = '';
      }, 100);
    }
  }, 300);
}


// Mobile navigation

function toggleNav() {
  const nav =
    document.getElementById('navLinks');

  const closeBtn =
    document.getElementById('closeNav');

  if (nav && closeBtn) {
    nav.classList.toggle('open');

    closeBtn.classList.toggle(
      'visible'
    );
  }
}


function closeNavMenu() {
  const nav =
    document.getElementById('navLinks');

  const closeBtn =
    document.getElementById('closeNav');

  if (nav && closeBtn) {
    nav.classList.remove('open');

    closeBtn.classList.remove(
      'visible'
    );
  }
}


// Header scroll

function setupHeaderScroll() {
  const header =
    document.querySelector('header');

  if (!header) return;

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove(
          'scrolled'
        );
      }
    }
  );
}


// Scroll animation

let revealObserver;


function setupObserverReveal() {
  if (!('IntersectionObserver' in window)) {
    return;
  }

  revealObserver =
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              'visible'
            );

            revealObserver.unobserve(
              entry.target
            );
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin:
          '0px 0px -50px 0px'
      }
    );

  triggerReveal();
}


function triggerReveal() {
  if (!revealObserver) return;

  const targets =
    document.querySelectorAll(
      '.page.active .reveal, ' +
      '.page.active .reveal-left, ' +
      '.page.active .reveal-right, ' +
      '.page.active .stagger'
    );

  targets.forEach(element => {
    if (
      !element.classList.contains(
        'visible'
      )
    ) {
      revealObserver.observe(element);
    }
  });
}


// Counter animation

function animateCounters() {
  const counters =
    document.querySelectorAll(
      '.page.active .count-up'
    );

  counters.forEach(element => {
    const target =
      parseInt(
        element.getAttribute(
          'data-target'
        ),
        10
      );

    if (isNaN(target)) return;

    element.textContent = '0';

    const duration = 1500;

    const frameRate =
      1000 / 60;

    const totalFrames =
      Math.round(
        duration / frameRate
      );

    let frame = 0;

    const counterInterval =
      setInterval(() => {
        frame++;

        const progress =
          frame / totalFrames;

        const easeValue =
          progress *
          (2 - progress);

        const currentValue =
          Math.floor(
            easeValue * target
          );

        element.textContent =
          currentValue;

        if (
          frame >= totalFrames
        ) {
          element.textContent =
            target;

          clearInterval(
            counterInterval
          );
        }
      }, frameRate);
  });
}


// Formspree contact form

function setupContactForm() {
  const form =
    document.getElementById(
      'contact-form'
    );

  if (!form) return;

  form.addEventListener(
    'submit',
    handleSubmit
  );
}


async function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  const nameField =
    document.getElementById('name');

  const companyField =
    document.getElementById('company');

  const phoneField =
    document.getElementById('phone');

  const emailField =
    document.getElementById('email');

  const serviceField =
    document.getElementById('service');

  const requirementsField =
    document.getElementById(
      'requirements'
    );


  if (
    !nameField ||
    !phoneField ||
    !emailField ||
    !requirementsField
  ) {
    return;
  }


  const inputs =
    form.querySelectorAll(
      'input[required], textarea[required]'
    );


  inputs.forEach(input => {
    input.style.borderColor =
      input.value.trim()
        ? ''
        : 'red';
  });


  const firstEmptyInput =
    [...inputs].find(
      input => !input.value.trim()
    );


  if (firstEmptyInput) {
    alert(
      'Please fill all required fields.'
    );

    firstEmptyInput.focus();

    return;
  }


  const name =
    nameField.value.trim();

  const company =
    companyField
      ? companyField.value.trim()
      : '';

  const phone =
    phoneField.value.trim();

  const email =
    emailField.value.trim();

  const service =
    serviceField
      ? serviceField.value.trim()
      : '';

  const requirements =
    requirementsField.value.trim();


  /* Phone validation */

  if (
    !updateFieldWarning(
      phoneField,
      /^\d{10}$/,
      'Enter exactly 10 digits.'
    )
  ) {
    alert(
      'Please enter a valid 10-digit phone number.'
    );

    phoneField.focus();

    return;
  }


  /* Email validation */

  if (
    !updateFieldWarning(
      emailField,
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Enter a valid email, for example name@company.com.'
    )
  ) {
    alert(
      'Please enter a valid email address.'
    );

    emailField.focus();

    return;
  }


  /*
     EXACT MESSAGE FORMAT
  */

  const message =
`New Contact Enquiry

Name: ${name}

Company: ${company}

Phone: ${phone}

Email: ${email}

Service Required: ${service || 'Not specified'}

Requirements:

${requirements}

--------------------------------
Sent from Shreeji Laser Website
`;


  /*
     Put formatted message into
     hidden Formspree field.
  */

  const messageField =
    document.getElementById(
      'formspree-message'
    );

  if (messageField) {
    messageField.value =
      message;
  }


  const submitButton =
    form.querySelector(
      'button[type="submit"]'
    );


  const originalButtonText =
    submitButton
      ? submitButton.textContent
      : 'Send Message →';


  if (submitButton) {
    submitButton.disabled = true;

    submitButton.textContent =
      'Sending...';
  }


  try {
    const formData =
      new FormData(form);


    const response =
      await fetch(
        form.action,
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept:
              'application/json'
          }
        }
      );


    if (response.ok) {

      form.reset();

      if (messageField) {
        messageField.value = '';
      }

      inputs.forEach(input => {
        input.style.borderColor = '';
      });

      if (phoneField) {
        phoneField.classList.remove(
          'field-invalid'
        );
      }

      if (emailField) {
        emailField.classList.remove(
          'field-invalid'
        );
      }

      const phoneWarning =
        document.getElementById(
          'phone-warning'
        );

      const emailWarning =
        document.getElementById(
          'email-warning'
        );

      if (phoneWarning) {
        phoneWarning.textContent = '';
      }

      if (emailWarning) {
        emailWarning.textContent = '';
      }


      alert(
        'Thank you! Your enquiry has been sent successfully.'
      );

    } else {

      let errorMessage =
        'Unable to send your enquiry. Please try again.';

      try {
        const data =
          await response.json();

        if (
          data &&
          data.errors &&
          data.errors.length
        ) {
          errorMessage =
            data.errors
              .map(error => error.message)
              .join('\n');
        }
      } catch (error) {
        /* Ignore JSON parsing error */
      }

      alert(errorMessage);
    }

  } catch (error) {

    console.error(
      'Formspree Error:',
      error
    );

    alert(
      'Something went wrong while sending your enquiry. Please try again.'
    );

  } finally {

    if (submitButton) {
      submitButton.disabled = false;

      submitButton.textContent =
        originalButtonText;
    }
  }
}