<?php
/**
 * Template Name: Travel Insurance Template
 * Description: Custom page layout containing travel insurance details, benefits, and calculator form.
 */
get_header(); ?>

  <!-- Subpage Hero / Breadcrumbs -->
  <section class="sub-hero">
    <div class="container">
      <h1>Travel Insurance Plans</h1>
      <div class="breadcrumbs">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
        <i class="fas fa-chevron-right" style="font-size: 0.75rem; align-self: center;"></i>
        <span>Insurance</span>
      </div>
    </div>
  </section>

  <!-- Key Benefits Grid Section -->
  <section class="benefits-section" style="padding-bottom: 40px;">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Secure Your Journey</span>
        <h2 class="section-title">Why Buy Travel Insurance?</h2>
        <p class="section-desc">Don't let unforeseen flight delays, lost suitcases, or medical emergencies ruin your high-value holiday plans.</p>
      </div>

      <div class="insurance-benefit-grid grid-3" style="margin-bottom: 50px;">
        <div class="benefit-item" style="background: var(--white); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); border-top: 4px solid var(--primary-color);">
          <i class="fas fa-briefcase-medical" style="font-size: 2rem; color: var(--accent-color); margin-bottom: 15px;"></i>
          <h4 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 10px;">Global Medical Coverage</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted);">Cashless hospitalization, emergency outpatient treatments, and medical evacuation across top-tier international medical hubs.</p>
        </div>

        <div class="benefit-item" style="background: var(--white); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); border-top: 4px solid var(--primary-color);">
          <i class="fas fa-plane-slash" style="font-size: 2rem; color: var(--accent-color); margin-bottom: 15px;"></i>
          <h4 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 10px;">Flight Delay / Cancellation</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted);">Reimbursement of expenses incurred due to long flight delays, missed connection flights, or sudden carrier cancellations.</p>
        </div>

        <div class="benefit-item" style="background: var(--white); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); border-top: 4px solid var(--primary-color);">
          <i class="fas fa-suitcase-rolling" style="font-size: 2rem; color: var(--accent-color); margin-bottom: 15px;"></i>
          <h4 style="font-size: 1.15rem; color: var(--primary-color); margin-bottom: 10px;">Baggage & Passport Loss</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted);">Financial coverages for permanent baggage losses, baggage delays, or expenses related to emergency duplicate passport creations.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Insurance Types & Quote Calculator Section -->
  <section class="section-bg" style="padding-top: 60px;">
    <div class="container">
      <div class="grid-split-1.6-1">
        <div>
          <h3 style="color: var(--primary-color); margin-bottom: 25px;"><i class="fas fa-shield"></i> Customized Insurance Products</h3>
          
          <div style="display: grid; grid-template-columns: 1fr; gap: 20px;">
            <div class="detail-feature-box" style="margin-bottom: 0;">
              <div class="detail-feature-icon"><i class="fas fa-users"></i></div>
              <div class="detail-feature-content">
                <h4>Family Floater Cover</h4>
                <p>Covers self, spouse, and dependent kids in a single premium card, ensuring perfect vacation peace of mind.</p>
              </div>
            </div>

            <div class="detail-feature-box" style="margin-bottom: 0;">
              <div class="detail-feature-icon"><i class="fas fa-graduation-cap"></i></div>
              <div class="detail-feature-content">
                <h4>Student Travel Guard</h4>
                <p>Tailored long-term insurance policies satisfying Schengen and US university guidelines, including sponsor coverages.</p>
              </div>
            </div>

            <div class="detail-feature-box" style="margin-bottom: 0;">
              <div class="detail-feature-icon"><i class="fas fa-blind"></i></div>
              <div class="detail-feature-content">
                <h4>Senior Citizen Care</h4>
                <p>Specially mapped medical covers for travelers aged 60 to 85, safeguarding them from pre-existing medical flares.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <!-- Insurance form card -->
          <div class="enquiry-form-card" style="border-top-color: var(--accent-color);">
            <h3>Get Insurance Quote</h3>
            <p>Select your dates and get custom insurance premium comparisons in 15 minutes.</p>
            
            <form id="insurance-form" onsubmit="handleFormSubmit(event, 'insurance-form')">
              <div class="form-group" style="margin-bottom: 12px;">
                <label><i class="fas fa-globe"></i> Travel Destination</label>
                <select class="form-control" required>
                  <option value="asia">Asia (excluding Japan/Korea)</option>
                  <option value="worldwide-ex">Worldwide (excluding US/Canada)</option>
                  <option value="worldwide-inc">Worldwide (including US/Canada)</option>
                  <option value="schengen">Schengen Europe Countries</option>
                  <option value="domestic">Domestic Travel India</option>
                </select>
              </div>

              <div class="form-group-row" style="margin-bottom: 12px;">
                <div class="form-group">
                  <label><i class="fas fa-calendar-alt"></i> Start Date</label>
                  <input type="date" class="form-control" required>
                </div>
                <div class="form-group">
                  <label><i class="fas fa-calendar-alt"></i> End Date</label>
                  <input type="date" class="form-control" required>
                </div>
              </div>

              <div class="form-group" style="margin-bottom: 12px;">
                <label><i class="fas fa-user-circle"></i> Eldest Traveler Age</label>
                <input type="number" class="form-control" placeholder="Age of eldest member" min="1" max="95" required>
              </div>

              <div class="form-group-row" style="margin-bottom: 15px;">
                <input type="tel" class="form-control" placeholder="Mobile number" required pattern="[0-9]{10}">
                <input type="email" class="form-control" placeholder="Email address" required>
              </div>

              <button type="submit" class="btn btn-accent btn-form-submit"><i class="fas fa-calculator"></i> Calculate Premium</button>
              <div class="form-success-message" id="insurance-form-success"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

<?php get_footer(); ?>
