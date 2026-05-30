<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-contact">
        <a href="tel:+919339288770"><i class="fas fa-phone"></i> +91 93392 88770</a>
        <a href="mailto:vkshjoshi@gmail.com"><i class="fas fa-envelope"></i> vkshjoshi@gmail.com</a>
        <a href="https://wa.me/919339288770" target="_blank"><i class="fab fa-whatsapp"></i> Chat on WhatsApp</a>
      </div>
      <div class="top-bar-right">
        <span class="top-bar-badge"><i class="fas fa-headset"></i> 24x7 Emergency Support</span>
      </div>
    </div>
  </div>

  <!-- Main Sticky Header -->
  <header id="main-header">
    <div class="container">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo" style="display: flex; align-items: center; gap: 10px;">
        <img src="<?php echo esc_url( get_template_directory_uri() . '/logo.png' ); ?>" alt="Balaji Travels Logo" style="height: 70px; width: auto; max-width: 100%; object-fit: contain;">
      </a>
      
      <nav>
        <ul class="nav-menu" id="nav-menu">
          <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="nav-link">Home</a></li>
          <li><a href="<?php echo esc_url( home_url( '/about-us/' ) ); ?>" class="nav-link">About Us</a></li>
          
          <li class="nav-item-dropdown">
            <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="nav-link">Services <i class="fas fa-chevron-down" style="font-size: 0.75rem; margin-left: 2px;"></i></a>
            <div class="dropdown-menu">
              <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="dropdown-item">All Services Grid</a>
              <a href="<?php echo esc_url( home_url( '/flights/' ) ); ?>" class="dropdown-item">Flights Booking</a>
              <a href="<?php echo esc_url( home_url( '/hotels/' ) ); ?>" class="dropdown-item">Hotel Reservations</a>
              <a href="<?php echo esc_url( home_url( '/trains/' ) ); ?>" class="dropdown-item">IRCTC Rail Bookings</a>
              <a href="<?php echo esc_url( home_url( '/visa-services/' ) ); ?>" class="dropdown-item">Visa Assistance</a>
              <a href="<?php echo esc_url( home_url( '/travel-insurance/' ) ); ?>" class="dropdown-item">Travel Insurance</a>
            </div>
          </li>
          
          <li class="nav-item-dropdown">
            <a href="<?php echo esc_url( home_url( '/tour-packages/' ) ); ?>" class="nav-link">Tour Packages <i class="fas fa-chevron-down" style="font-size: 0.75rem; margin-left: 2px;"></i></a>
            <div class="dropdown-menu">
              <a href="<?php echo esc_url( home_url( '/tour-packages/' ) ); ?>" class="dropdown-item">All Holiday Deals</a>
              <a href="<?php echo esc_url( home_url( '/tour-packages/?filter=domestic' ) ); ?>" class="dropdown-item">Domestic Packages</a>
              <a href="<?php echo esc_url( home_url( '/tour-packages/?filter=international' ) ); ?>" class="dropdown-item">International Tours</a>
              <a href="<?php echo esc_url( home_url( '/tour-packages/?filter=religious' ) ); ?>" class="dropdown-item">Religious / Pilgrimages</a>
            </div>
          </li>
          
          <li><a href="<?php echo esc_url( home_url( '/gallery/' ) ); ?>" class="nav-link">Gallery</a></li>
          <li><a href="<?php echo esc_url( home_url( '/testimonials/' ) ); ?>" class="nav-link">Reviews</a></li>
          <li><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>" class="nav-link">Blog</a></li>
          <li><a href="<?php echo esc_url( home_url( '/contact-us/' ) ); ?>" class="nav-link">Contact</a></li>
          <li><button class="btn btn-accent btn-sm" onclick="openBookingModal()" style="margin-left: 10px; font-weight: 700; border-radius: 50px; box-shadow: var(--shadow-sm);"><i class="fas fa-plane-departure"></i> Book Now</button></li>
        </ul>
      </nav>
      
      <button class="hamburger" id="menu-toggle" aria-label="Toggle Menu">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </header>
