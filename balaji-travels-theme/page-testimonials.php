<?php
/**
 * Template Name: Testimonials Template
 * Description: Custom page layout containing Google Reviews star ratings, reviews list, and review submission.
 */
get_header(); ?>

  <!-- Subpage Hero / Breadcrumbs -->
  <section class="sub-hero">
    <div class="container">
      <h1>Traveler Testimonials</h1>
      <div class="breadcrumbs">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
        <i class="fas fa-chevron-right" style="font-size: 0.75rem; align-self: center;"></i>
        <span>Reviews</span>
      </div>
    </div>
  </section>

  <!-- Google-Style Reviews Grid & Write Review Section -->
  <section class="section-bg" style="padding-top: 60px;">
    <div class="container">
      <div class="grid-split-1.6-1">
        <div>
          <h3 style="color: var(--primary-color); margin-bottom: 25px;"><i class="fas fa-comments"></i> What Our Travelers Say</h3>
          
          <!-- Testimonials Grid Target -->
          <div class="packages-grid" id="reviews-grid" style="grid-template-columns: 1fr; gap: 20px;">
            <!-- JS inserts reviews here from window.travelData.testimonials -->
          </div>
        </div>

        <div>
          <!-- Submit Review Form Card -->
          <div class="enquiry-form-card" style="border-top-color: var(--accent-color);">
            <h3>Share Your Experience</h3>
            <p>We would love to hear about your recent trip with us! Your feedback helps us improve our services.</p>
            
            <form id="submit-review-form" onsubmit="submitClientReview(event)">
              <div class="form-group" style="margin-bottom: 12px;">
                <label><i class="fas fa-user"></i> Your Name</label>
                <input type="text" id="review-name" class="form-control" placeholder="Enter your name" required>
              </div>

              <div class="form-group-row" style="margin-bottom: 12px;">
                <div class="form-group">
                  <label><i class="fas fa-plane-arrival"></i> Trip Taken</label>
                  <input type="text" id="review-trip" class="form-control" placeholder="e.g., Kashmir Tour" required>
                </div>
                <div class="form-group">
                  <label><i class="fas fa-calendar-alt"></i> Trip Date</label>
                  <input type="text" id="review-date" class="form-control" placeholder="e.g., May 2026" required>
                </div>
              </div>

              <div class="form-group" style="margin-bottom: 15px;">
                <label><i class="fas fa-star" style="color: var(--accent-color);"></i> Overall Rating</label>
                <div class="star-selector" id="star-selector" style="display: flex; gap: 8px; font-size: 1.5rem; color: var(--border-color); cursor: pointer; margin-top: 5px;">
                  <i class="fas fa-star active" style="color: var(--accent-color);" data-rating="1" onclick="rateReview(1)"></i>
                  <i class="fas fa-star active" style="color: var(--accent-color);" data-rating="2" onclick="rateReview(2)"></i>
                  <i class="fas fa-star active" style="color: var(--accent-color);" data-rating="3" onclick="rateReview(3)"></i>
                  <i class="fas fa-star active" style="color: var(--accent-color);" data-rating="4" onclick="rateReview(4)"></i>
                  <i class="fas fa-star active" style="color: var(--accent-color);" data-rating="5" onclick="rateReview(5)"></i>
                </div>
              </div>

              <div class="form-group" style="margin-bottom: 15px;">
                <label><i class="fas fa-comment-dots"></i> Review Details</label>
                <textarea id="review-text" class="form-control" rows="4" placeholder="Write about your flight, hotels, food, and tour manager..." required></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-form-submit" style="width: 100%;"><i class="fas fa-share-square"></i> Submit Review</button>
              <div class="form-success-message" id="submit-review-form-success"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script>
    let selectedRatingVal = 5;

    document.addEventListener("DOMContentLoaded", () => {
      renderReviewsGrid();
    });

    function renderReviewsGrid() {
      const grid = document.getElementById("reviews-grid");
      if (!grid || !window.travelData) return;

      const testimonials = window.travelData.testimonials;

      grid.innerHTML = testimonials.map(t => `
        <div class="why-card" style="padding: 25px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); animation: fadeIn 0.4s ease-in-out;">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
            <div style="display: flex; gap: 15px; align-items: center;">
              <div class="test-avatar" style="display: flex; align-items: center; justify-content: center; background-color: var(--primary-color); color: white; font-weight: bold; font-size: 1.2rem; width: 50px; height: 50px; border-radius: 50%;">
                ${t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div style="text-align: left;">
                <h4 style="margin: 0; color: var(--primary-color); font-size: 1.05rem;">${t.name}</h4>
                <small style="color: var(--text-muted); font-size: 0.78rem;">${t.location || 'Kolkata, WB'} • verified traveler</small>
              </div>
            </div>
            <div style="color: var(--accent-color);">
              ${Array(Math.floor(t.rating)).fill('<i class="fas fa-star"></i>').join('')}
              ${t.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
              ${Array(5 - Math.ceil(t.rating)).fill('<i class="far fa-star"></i>').join('')}
            </div>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-dark); margin-bottom: 10px; font-style: italic;">"${t.text}"</p>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary-light);">
            <i class="fas fa-check-circle" style="color: #2ecc71;"></i> Trip: ${t.trip} (${t.date})
          </div>
        </div>
      `).join('');
    }

    function rateReview(rating) {
      selectedRatingVal = rating;
      const stars = document.querySelectorAll("#star-selector i");
      stars.forEach((star, idx) => {
        if (idx < rating) {
          star.classList.add("active");
          star.style.color = "var(--accent-color)";
        } else {
          star.classList.remove("active");
          star.style.color = "var(--border-color)";
        }
      });
    }

    function submitClientReview(event) {
      event.preventDefault();
      const name = document.getElementById("review-name").value;
      const trip = document.getElementById("review-trip").value;
      const date = document.getElementById("review-date").value;
      const text = document.getElementById("review-text").value;
      
      const successEl = document.getElementById("submit-review-form-success");
      const form = document.getElementById("submit-review-form");
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Submitting Review...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        // Push new review directly to global array
        window.travelData.testimonials.unshift({
          name: name,
          location: "Kolkata, WB",
          trip: trip,
          rating: selectedRatingVal,
          date: date,
          text: text
        });

        // Re-render
        renderReviewsGrid();

        // Show Success banner
        successEl.style.display = "block";
        successEl.innerHTML = `
          <div style="text-align: center;">
            <i class="fas fa-heart" style="font-size: 2rem; color: #e74c3c; margin-bottom: 10px; display: block;"></i>
            <h4 style="color: #155724; margin-bottom: 5px;">Review Posted successfully!</h4>
            <p style="font-size: 0.8rem; margin: 0; color: #155724;">Thank you for writing. Your testimonial is live on our ratings board!</p>
          </div>
        `;

        form.reset();
        rateReview(5); // Reset to 5 stars

        setTimeout(() => {
          successEl.style.opacity = 0;
          setTimeout(() => {
            successEl.style.display = "none";
            successEl.style.opacity = 1;
          }, 400);
        }, 5000);
      }, 1500);
    }
  </script>

<?php get_footer(); ?>
