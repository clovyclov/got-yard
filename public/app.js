/* ==========================================================================
   Got Yard? Landscape Construction - Interactive Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initQuoteForm();
  initClickToCallTracking();
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

/* Helper: Format Email according to Microsoft Ads Enhanced Conversions Standard */
function formatEnhancedEmail(email) {
  if (!email) return '';
  return email.trim().toLowerCase();
}

/* Helper: Format Phone Number to E.164 Standard (+14256961427) */
function formatEnhancedPhone(phone) {
  if (!phone) return '';
  let cleaned = phone.replace(/\D/g, ''); // strip all non-digits
  if (cleaned.length === 10) {
    return '+1' + cleaned;
  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return '+' + cleaned;
  }
  return cleaned ? '+' + cleaned : '';
}

/* 2. Free Quote Form Handling & Validation + Microsoft Ads Enhanced Conversions */
function initQuoteForm() {
  const forms = document.querySelectorAll('form');
  if (forms.length === 0) return;

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('input[name="name"], #quoteName, .js-name-input');
      const emailInput = form.querySelector('input[name="email"], #quoteEmail, .js-email-input');
      const phoneInput = form.querySelector('input[name="phone"], #quotePhone, .js-phone-input');
      const serviceInput = form.querySelector('select[name="service"], #quoteService, .js-service-select');

      const name = nameInput ? nameInput.value.trim() : '';
      const rawEmail = emailInput ? emailInput.value : '';
      const rawPhone = phoneInput ? phoneInput.value : '';
      const service = serviceInput ? serviceInput.value : 'General Landscape Request';

      if (!name || (!rawEmail && !rawPhone)) {
        showToast('⚠️ Please complete all required contact fields.', 'error');
        return;
      }

      const formattedEmail = formatEnhancedEmail(rawEmail);
      const formattedPhone = formatEnhancedPhone(rawPhone);

      // --- MICROSOFT ADVERTISING ENHANCED CONVERSIONS (PID SETTER) ---
      const pidData = {};
      if (formattedEmail) pidData['em'] = formattedEmail;
      if (formattedPhone) pidData['ph'] = formattedPhone;

      window.uetq = window.uetq || [];
      if (Object.keys(pidData).length > 0) {
        window.uetq.push('set', { 'pid': pidData });
        console.log('[Microsoft Ads Enhanced Conversions] Set PID:', pidData);
      }

      // --- DISPATCH CONVERSION EVENTS TO MICROSOFT ADS UET & GTM ---
      trackConversionEvent('generate_lead', {
        event_category: 'Quote Form Submission',
        event_label: service,
        service_requested: service,
        customer_name: name,
        user_data: {
          email: formattedEmail,
          phone_number: formattedPhone
        }
      });

      // Close modal if open
      const modal = document.getElementById('quoteModal');
      if (modal) modal.classList.remove('active');

      // Success feedback & redirect to Thank You page
      showToast(`✅ Thank you ${name}! Your quote request has been submitted. Redirecting...`);
      form.reset();

      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 600);
    });
  });
}

/* 3. Click-To-Call Phone Conversion Tracking */
function initClickToCallTracking() {
  document.querySelectorAll('a[href^="tel:"]').forEach(callBtn => {
    callBtn.addEventListener('click', () => {
      // Microsoft Advertising UET Direct Event Call (matches Action = 'contact')
      window.uetq = window.uetq || [];
      window.uetq.push('event', 'contact', {});

      trackConversionEvent('click_to_call', {
        event_category: 'Phone Lead',
        event_label: '(425) 696-1427',
        phone_number: '4256961427'
      });
    });
  });
}

/* Global Conversion Tracking Event Dispatcher */
function trackConversionEvent(eventName, eventParams) {
  console.log(`[Conversion Tracked] ${eventName}:`, eventParams);

  // 1. Microsoft Advertising (Bing Ads) UET Tag Dispatch
  window.uetq = window.uetq || [];
  window.uetq.push('event', eventName, eventParams);

  // 2. Google Tag Manager / GA4 DataLayer Dispatch
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': eventName,
    ...eventParams
  });
}

/* 4. Testimonial Reviews Carousel */
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

/* 5. Portfolio Gallery Filtering */
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

/* 6. Lightbox Modal Viewer */
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
