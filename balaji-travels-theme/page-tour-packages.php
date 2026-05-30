<?php
/**
 * Template Name: Tour Packages Template
 * Description: Custom page layout displaying all 13 customized tour packages with categories filters.
 */
get_header(); ?>

  <!-- Subpage Hero / Breadcrumbs -->
  <section class="sub-hero">
    <div class="container">
      <h1>Custom Tour Packages</h1>
      <div class="breadcrumbs">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
        <i class="fas fa-chevron-right" style="font-size: 0.75rem; align-self: center;"></i>
        <span>Tour Packages</span>
      </div>
    </div>
  </section>

  <!-- Filter & Packages Grid Section -->
  <section class="section-bg" style="padding-top: 60px;">
    <div class="container">
      <div class="section-header" style="margin-bottom: 30px;">
        <span class="section-subtitle">Aspirational Itineraries</span>
        <h2 class="section-title">Explore Our 13 Hot Holidays</h2>
        <p class="section-desc">We offer customized layouts with premium hotels, private cars, flights, and meals included. Filter by categories below to find your perfect holiday.</p>
      </div>

      <!-- Advanced Filter Tabs -->
      <div class="filter-tabs-container" id="packages-filter-tabs">
        <span class="filter-tab active" onclick="setPackageCategory(this, 'all')">All Holiday Deals</span>
        <span class="filter-tab" onclick="setPackageCategory(this, 'domestic')">Domestic Getaways</span>
        <span class="filter-tab" onclick="setPackageCategory(this, 'international')">International Escapes</span>
        <span class="filter-tab" onclick="setPackageCategory(this, 'religious')">Spiritual Pilgrimages</span>
        <span class="filter-tab" onclick="setPackageCategory(this, 'honeymoon')">Honeymoon Specials</span>
        <span class="filter-tab" onclick="setPackageCategory(this, 'group')">Escorted Group Tours</span>
      </div>

      <!-- Packages Grid Target -->
      <div class="packages-grid" id="packages-target-grid">
        <!-- Rendered Dynamically via JS data -->
      </div>
      
      <!-- No Packages Found -->
      <div id="no-packages-msg" style="display: none; text-align: center; padding: 50px 0; color: var(--text-muted); font-size: 1.1rem;">
        <i class="fas fa-search-location" style="font-size: 3.5rem; color: var(--border-color); display: block; margin-bottom: 15px;"></i>
        No matching holiday packages found. Please check back later or try another filter!
      </div>
    </div>
  </section>

  <script>
    // Image Map for Unsplash high-res visuals matching travelData package IDs


    let activePkgCategory = "all";

    document.addEventListener("DOMContentLoaded", () => {
      const params = new URLSearchParams(window.location.search);
      const categoryParam = params.get("filter");
      
      if (categoryParam) {
        activePkgCategory = categoryParam;
        
        const tabs = document.querySelectorAll(".filter-tab");
        tabs.forEach(tab => {
          const onclickAttr = tab.getAttribute("onclick");
          if (onclickAttr && onclickAttr.includes(`'${categoryParam}'`)) {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
          }
        });
      }

      renderPackages();
    });

    function renderPackages() {
      const grid = document.getElementById("packages-target-grid");
      const noResults = document.getElementById("no-packages-msg");
      
      if (!grid || !window.travelData) return;

      const packages = window.travelData.packages;

      const filtered = packages.filter(p => {
        if (activePkgCategory === "all") return true;
        if (activePkgCategory === "domestic") return p.category === "domestic" || p.category === "religious";
        if (activePkgCategory === "international") return p.category === "international";
        if (activePkgCategory === "religious") return p.category === "religious";
        if (activePkgCategory === "honeymoon") return p.type.toLowerCase().includes("honeymoon");
        if (activePkgCategory === "group") return p.type.toLowerCase().includes("group");
        return false;
      });

      if (filtered.length === 0) {
        grid.style.display = "none";
        noResults.style.display = "block";
      } else {
        grid.style.display = "grid";
        noResults.style.display = "none";

        grid.innerHTML = filtered.map(p => `
          <div class="package-card">
            <div class="package-img-wrapper">
              <span class="package-tag">${p.type}</span>
              <img src="${p.image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800'}" alt="${p.title}">
              <span class="package-duration">${p.duration}</span>
            </div>
            <div class="package-body">
              <h3>${p.title}</h3>
              <p class="package-desc">${p.description}</p>
              <div style="font-size: 0.82rem; font-weight: 700; color: var(--primary-light); margin-bottom: 12px;">
                <i class="fas fa-star" style="color: var(--accent-color);"></i> Highlights: ${p.highlights}
              </div>
              <div class="package-inclusions" style="margin-top: auto;">
                ${p.inclusions.map(inc => `<span class="inclusion-tag">${inc}</span>`).join('')}
              </div>
              <div class="package-footer" style="padding-top: 15px; border-top: 1px solid var(--border-color);">
                <div class="package-price">
                  Starting Price <span>₹${p.price.toLocaleString('en-IN')}</span>
                  <small style="font-size: 0.7rem; color: #999;">per person on twin sharing</small>
                </div>
                <button class="btn btn-accent btn-sm" onclick="openBookingModal('${p.title}')">Enquire Now</button>
              </div>
            </div>
          </div>
        `).join('');
      }
    }

    function setPackageCategory(element, category) {
      document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
      element.classList.add("active");
      
      activePkgCategory = category;
      renderPackages();
    }
  </script>

<?php get_footer(); ?>
