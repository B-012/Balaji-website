<?php
/**
 * Template Name: Blog Template
 * Description: Custom page layout containing travel guide cards and reading overlays.
 */
get_header(); ?>

  <!-- Subpage Hero / Breadcrumbs -->
  <section class="sub-hero">
    <div class="container">
      <h1>Travel Tips & Articles</h1>
      <div class="breadcrumbs">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
        <i class="fas fa-chevron-right" style="font-size: 0.75rem; align-self: center;"></i>
        <span>Blog</span>
      </div>
    </div>
  </section>

  <!-- Blog Cards Grid Section -->
  <section class="section-bg" style="padding-top: 60px;">
    <div class="container">
      <div class="section-header" style="margin-bottom: 40px;">
        <span class="section-subtitle">Read Our Guides</span>
        <h2 class="section-title">Kolkata Traveler's Resource Hub</h2>
        <p class="section-desc">Expert articles and destination recommendations compiled by our senior flight desk operators and tour directors.</p>
      </div>

      <!-- Blog Target Grid -->
      <div class="blog-grid" id="blog-target-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
        <!-- Rendered Dynamically -->
      </div>
    </div>
  </section>

  <!-- Interactive Blog Reading Modal -->
  <div id="blog-modal" class="lightbox" onclick="closeBlogModal()">
    <div class="lightbox-close" onclick="closeBlogModal()">&times;</div>
    <div class="enquiry-form-card" style="width: 100%; max-width: 800px; max-height: 85vh; overflow-y: auto; text-align: left;" onclick="event.stopPropagation()">
      <div id="blog-modal-header" style="margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 15px;">
        <!-- Dynamic header details populated here -->
      </div>
      <div id="blog-modal-body" style="font-size: 1rem; line-height: 1.8; color: var(--text-dark);">
        <!-- Dynamic body content populated here -->
      </div>
      <div style="margin-top: 30px; border-top: 1px solid var(--border-color); padding-top: 20px; text-align: right;">
        <button class="btn btn-outline btn-sm" onclick="closeBlogModal()">Close Article</button>
        <button class="btn btn-accent btn-sm" onclick="closeBlogModal(); openBookingModal('Consultation from Blog')">Enquire Trip plans <i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
  </div>

  <script>
    const blogImages = {
      "kolkata-travel-guide": "https://images.unsplash.com/photo-1565967511849-75a6fd7f9a27?q=80&w=600",
      "chardham-yatra-tips": "https://images.unsplash.com/photo-1626621341515-bbf8a9649479?q=80&w=600",
      "budget-travel-hacks": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600"
    };

    document.addEventListener("DOMContentLoaded", () => {
      renderBlogPosts();
    });

    function renderBlogPosts() {
      const grid = document.getElementById("blog-target-grid");
      if (!grid || !window.travelData) return;

      const posts = window.travelData.blog;

      grid.innerHTML = posts.map(post => `
        <div class="blog-card" style="background: var(--white); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); transition: var(--transition-normal); display: flex; flex-direction: column;">
          <div class="blog-img-wrapper" style="position: relative; height: 200px;">
            <img src="${blogImages[post.id] || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800'}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="blog-card-body" style="padding: 25px; flex-grow: 1; display: flex; flex-direction: column;">
            <div class="blog-meta" style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 10px; display: flex; gap: 15px;">
              <span><i class="fas fa-calendar-alt" style="color: var(--accent-hover);"></i> ${post.date}</span>
              <span><i class="fas fa-tag" style="color: var(--accent-hover);"></i> ${post.category.toUpperCase()}</span>
              <span><i class="fas fa-clock" style="color: var(--accent-hover);"></i> ${post.readTime}</span>
            </div>
            <h3 style="font-size: 1.25rem; color: var(--primary-color); margin-bottom: 12px; line-height: 1.4;">${post.title}</h3>
            <p class="blog-excerpt" style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 20px; flex-grow: 1; line-height: 1.6;">${post.summary}</p>
            <div style="margin-top: auto;">
              <button class="btn btn-outline btn-sm" onclick="openBlogArticle('${post.id}')" style="width: 100%;">Read Full Article <i class="fas fa-arrow-right" style="font-size: 0.75rem;"></i></button>
            </div>
          </div>
        </div>
      `).join('');
    }

    function openBlogArticle(postId) {
      const post = window.travelData.blog.find(p => p.id === postId);
      const modal = document.getElementById("blog-modal");
      const modalHeader = document.getElementById("blog-modal-header");
      const modalBody = document.getElementById("blog-modal-body");

      if (!post || !modal || !modalHeader || !modalBody) return;

      modalHeader.innerHTML = `
        <span class="inclusion-tag" style="background-color: var(--accent-color); color: var(--text-dark); margin-bottom: 10px; display: inline-block;">${post.category.toUpperCase()} GUIDE</span>
        <h2 style="font-size: 1.8rem; color: var(--primary-color); line-height: 1.3; margin-bottom: 8px;">${post.title}</h2>
        <div style="font-size: 0.85rem; color: var(--text-muted);">
          <span>By <strong>${post.author}</strong></span> | <span>Date: ${post.date}</span> | <span>Read-time: ${post.readTime}</span>
        </div>
      `;

      modalBody.innerHTML = `
        <img src="${blogImages[post.id]}" style="width:100%; max-height: 350px; object-fit: cover; border-radius: 8px; margin-bottom: 25px; box-shadow: var(--shadow-sm);">
        <p>${post.content}</p>
        <p style="margin-top: 15px; font-weight: 700; color: var(--primary-light);">
          Have more questions? Consult with Balaji Travels to design optimized custom plans from Kolkata today. "Apna Sapna, Hamari Zimmedari!"
        </p>
      `;

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeBlogModal() {
      const modal = document.getElementById("blog-modal");
      if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    }
  </script>

<?php get_footer(); ?>
