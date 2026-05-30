<?php
/**
 * Template Name: Gallery Template
 * Description: Custom page layout containing visual photo cards, filters, and lightboxes.
 */
get_header(); ?>

  <!-- Subpage Hero / Breadcrumbs -->
  <section class="sub-hero">
    <div class="container">
      <h1>Travel Photo Gallery</h1>
      <div class="breadcrumbs">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
        <i class="fas fa-chevron-right" style="font-size: 0.75rem; align-self: center;"></i>
        <span>Gallery</span>
      </div>
    </div>
  </section>

  <!-- Gallery Grid Section -->
  <section class="section-bg" style="padding-top: 60px;">
    <div class="container">
      <div class="section-header" style="margin-bottom: 30px;">
        <span class="section-subtitle">Visual Inspirations</span>
        <h2 class="section-title">Memories of Our Happy Travelers</h2>
        <p class="section-desc">Witness our actual on-trip snapshots, beautiful international landscapes, and smiling family groups that toured with us.</p>
      </div>

      <!-- Gallery Filter Tabs -->
      <div class="filter-tabs-container" id="gallery-tabs">
        <span class="filter-tab active" onclick="setGalleryCategory(this, 'all')">All Photos</span>
        <span class="filter-tab" onclick="setGalleryCategory(this, 'destinations')">Scenic Destinations</span>
        <span class="filter-tab" onclick="setGalleryCategory(this, 'travelers')">Happy Travelers</span>
        <span class="filter-tab" onclick="setGalleryCategory(this, 'events')">Group Events</span>
        <span class="filter-tab" onclick="setGalleryCategory(this, 'templates')">Balaji Templates</span>
      </div>

      <!-- Masonry Grid -->
      <div class="gallery-masonry" id="gallery-masonry-grid" style="columns: 4 280px; column-gap: 20px; margin-top: 30px;">
        <!-- Rendered Dynamically -->
      </div>
    </div>
  </section>

  <!-- Lightbox Popup System -->
  <div id="gallery-lightbox" class="lightbox" onclick="closeLightbox()">
    <div class="lightbox-close" onclick="closeLightbox()">&times;</div>
    <img src="" id="lightbox-image" class="lightbox-content" onclick="event.stopPropagation()">
  </div>

  <script>
    const galleryItems = [
      {
        title: "Heavenly Kashmir Snow",
        category: "destinations",
        img: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?q=80&w=600"
      },
      {
        title: "Alleppey Houseboat Cruise",
        category: "destinations",
        img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600"
      },
      {
        title: "Rajasthan Camel Ride",
        category: "events",
        img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600"
      },
      {
        title: "Happy Family in Goa",
        category: "travelers",
        img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600"
      },
      {
        title: "Europe Scenic Tour Group",
        category: "travelers",
        img: "https://images.unsplash.com/photo-1533240332313-0db49b439ad3?q=80&w=600"
      },
      {
        title: "Marina Bay Singapore",
        category: "destinations",
        img: "https://images.unsplash.com/photo-1565967511849-75a6fd7f9a27?q=80&w=600"
      },
      {
        title: "Chardham Pilgrim Group",
        category: "travelers",
        img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600"
      },
      {
        title: "London Bridge Heritage",
        category: "destinations",
        img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600"
      },
      {
        title: "Dubai Desert Safari Excursion",
        category: "events",
        img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600"
      },
      {
        title: "IATA Agency Ticket Template",
        category: "templates",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600"
      },
      {
        title: "Kashmir Gold Tour Brochure",
        category: "templates",
        img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600"
      },
      {
        title: "Luxury Hotel Stay Voucher",
        category: "templates",
        img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=600"
      },
      {
        title: "Tatkal Rail Confirmation Voucher",
        category: "templates",
        img: "https://images.unsplash.com/photo-1532103054090-334e6e60ab29?q=80&w=600"
      },
      {
        title: "International Tour Flyer Layout",
        category: "templates",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600"
      }
    ];

    let activeGalleryCat = "all";

    document.addEventListener("DOMContentLoaded", () => {
      renderGallery();
    });

    function renderGallery() {
      const grid = document.getElementById("gallery-masonry-grid");
      if (!grid) return;

      const filtered = galleryItems.filter(item => {
        return activeGalleryCat === "all" || item.category === activeGalleryCat;
      });

      grid.innerHTML = filtered.map(item => `
        <div class="gallery-card" onclick="openLightbox('${item.img}')" style="display: inline-block; width: 100%; margin-bottom: 20px; background: var(--white); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); transition: var(--transition-normal); cursor: pointer; position: relative;">
          <img src="${item.img}" alt="${item.title}" style="width: 100%; height: auto; object-fit: cover; display: block; transition: var(--transition-slow);">
          <div class="gallery-card-hover" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 53, 128, 0.75); display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--white); opacity: 0; transition: var(--transition-normal);">
            <i class="fas fa-search-plus" style="font-size: 2rem; color: var(--accent-color); margin-bottom: 10px;"></i>
            <h4 style="font-size: 1.1rem; margin-bottom: 5px;">${item.title}</h4>
            <span style="font-size: 0.8rem; opacity: 0.9;">Click to Enlarge</span>
          </div>
        </div>
      `).join('');
    }

    function setGalleryCategory(element, category) {
      document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
      element.classList.add("active");
      
      activeGalleryCat = category;
      renderGallery();
    }

    function openLightbox(imgSrc) {
      const lightbox = document.getElementById("gallery-lightbox");
      const lightboxImg = document.getElementById("lightbox-image");
      if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    }

    function closeLightbox() {
      const lightbox = document.getElementById("gallery-lightbox");
      if (lightbox) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    }
  </script>

<?php get_footer(); ?>
