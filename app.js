/* ==========================================================================
   Got Yard? Landscape Construction - Interactive Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initQuoteForm();
  initReviewsCarousel();
  initGalleryFilter();
  initLightbox();
});

/* 1. Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      toggleBtn.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggleBtn.innerHTML = '☰';
      });
    });
  }
}

/* 2. Free Quote Form Handling & Validation */
function initQuoteForm() {
  const form = document.getElementById('quoteForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('quoteName').value.trim();
    const email = document.getElementById('quoteEmail').value.trim();
    const phone = document.getElementById('quotePhone').value.trim();
    const service = document.getElementById('quoteService').value;

    if (!name || !email || !phone) {
      showToast('⚠️ Please complete all required fields.', 'error');
      return;
    }

    // Success feedback
    showToast(`✅ Thank you ${name}! Your quote request has been submitted. We will contact you shortly!`);
    form.reset();
  });
}

/* 3. Testimonial Reviews Carousel */
function initReviewsCarousel() {
  const track = document.getElementById('reviewsTrack');
  const slides = document.querySelectorAll('.review-slide');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  }

  // Auto-play carousel every 6 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 6000);
}

/* 4. Portfolio Gallery Filtering */
function initGalleryFilter() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (tabBtns.length === 0 || galleryItems.length === 0) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* 5. Lightbox Modal Viewer */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  const items = document.querySelectorAll('.gallery-item');

  if (!modal || !modalImg) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        modalImg.src = img.src;
        modal.classList.add('active');
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

/* Toast Notice Helper */
function showToast(message, type = 'success') {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = message;
  toast.style.backgroundColor = type === 'error' ? '#e53935' : '#4caf50';
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
