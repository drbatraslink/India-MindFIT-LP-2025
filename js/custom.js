// Screenshot carousel initialization
$('.icon_banner_foot_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 5,
  autoplay: true,
  autoplayTimeout: 6000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 },
  },
});

// Screenshot carousel initialization
$('.screenshot_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 5,
  autoplay: true,
  autoplayTimeout: 6000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 2 },
    1200: { items: 3 },
  },
});

// Testimonial carousel initialization
$('#testimonilas_slider').owlCarousel({
  loop: false,
  responsiveClass: true,
  nav: true,
  margin: 20,
  autoplay: false,
  autoplayTimeout: 4000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='002 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='002 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 },
  },
});

// Advance skin carousel initialization
$('#advance_skin_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 8000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='003 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='003 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
    1200: { items: 1 },
  },
});

// Google rating carousel initialization
$('#googlerating_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 8000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='004 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='004 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 },
  },
});


  // PCOS reviews carousel initialization
  $('#Our_pcosreviews_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    navText: [
      "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
      "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      768: { items: 2 },
      1024: { items: 2 },
      1200: { items: 3 },
    },
  });

$(".owl-nav .owl-prev").attr("role", "button"), $(".owl-nav .owl-next").attr("role", "button")

// Scroll to top button logic
const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
const rootElement = document.documentElement;

function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  scrollToTopBtn.classList.toggle('showBtn', rootElement.scrollTop / scrollTotal > 0.02);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

scrollToTopBtn.addEventListener('click', scrollToTop);
window.addEventListener('scroll', handleScroll);

// Open & Close Form
function openForm() {
  document.getElementById("myForm").style.display = "block";
  $("#myForm .myForm-top-form").append($(".form-top-new"));
  $(".contactFormHolder .contactForm").hide();
}

function closeForm() {
  $(".contactFormHolder .contactForm").show().append($(".form-top-new"));
  document.getElementById("myForm").style.display = "none";
}

// Popup Video Initialization
$(function() {
  $(".popup-youtube, .popup-vimeo").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true
  });
});


  // Accordion functionality
  const togglers = document.querySelectorAll('[data-bs-toggle]');
  togglers.forEach((btn) => {
    const targetBlock = document.querySelector(btn.dataset.bsToggle);
    if (btn.classList.contains('active')) {
      targetBlock.style.maxHeight = targetBlock.scrollHeight + 'px';
      btn.closest('.accordion__item').classList.add('active');
    }

    btn.addEventListener('click', (e) => {
      const block = document.querySelector(e.currentTarget.dataset.bsToggle);
      if (e.currentTarget.classList.contains('active')) {
        block.style.maxHeight = '';
        e.currentTarget.closest('.accordion__item').classList.remove('active');
      } else {
        block.style.maxHeight = block.scrollHeight + 'px';
        e.currentTarget.closest('.accordion__item').classList.add('active');
      }
      e.currentTarget.classList.toggle('active');
      document.querySelectorAll('.accordion__header').forEach((header) => {
        if (header !== e.currentTarget) {
          header.classList.remove('active');
          document.querySelector(header.dataset.bsToggle).style.maxHeight = '';
          header.closest('.accordion__item').classList.remove('active');
        }
      });
    });
  });

// Form functionality
  $(document).ready(function() {
    let counter = 1;
    $('#addmore').click(function() {
      const newFieldset = `
      <div class="row ptmd-1 testmonilas_form_custom reference-group" id="ref_${counter}">
        <div class="form_colum_custom">
           <div class="row">
              <div class="col-12">
              <h3 class="mb-0">Refrence Details</h3>
            </div>
           </div>
          <div class="form-group">
            <label class="custom_lable_cls">Full Name*</label>
            <input name="yourname[]" class="form-control" placeholder="Enter Your Full Name">
          </div>
        </div>
        <div class="form_colum_custom">
          <div class="form-group">
            <label class="custom_lable_cls">Mobile Number*</label>
            <input name="mobile[]" class="form-control" placeholder="Enter Your Mobile No">
          </div>
        </div>
        <div class="form_colum_custom">
          <div class="form-group">
            <label class="custom_lable_cls">Email ID</label>
            <input name="email[]" class="form-control" placeholder="Enter Your Email ID">
          </div>
        </div>
        <div class="form_colum_custom">
          <div class="form-group">
            <label class="custom_lable_cls">Location</label>
            <input name="location[]" class="form-control" placeholder="Enter Your Location">
          </div>
        </div>
        <div class="col-md-12 mt-2 mb-3">
          <button type="button" class="btn btn-danger inputRemove" data-id="ref_${counter}">Remove</button>
        </div>
      </div>`;
      $('#req_input').append(newFieldset);
      counter++;
    });
    $('body').on('click', '.inputRemove', function() {
      const refId = $(this).data('id');
      $('#' + refId).remove();
    });
    $('#consultForm').submit(function(e) {
      e.preventDefault();
      alert('Form submitted successfully!');
    });
  });

    // Journey carousel initialization
  $('#banner_slider').owlCarousel({
    loop: true, // Set to true if you want infinite looping
    responsiveClass: true,
    nav: true, // Shows navigation arrows
    dots: false, // Disables navigation dots
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 400, // Speed of animation
    animateIn: 'fadeIn', // Requires Animate.css
    navText: false, // Custom nav arrows, can be empty
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      768: {
        items: 1
      },
      1024: {
        items: 1
      },
      1200: {
        items: 1
      },
    }
  });