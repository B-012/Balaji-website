<?php
/**
 * Balaji Travels Theme - index.php fallback template
 */
get_header(); ?>

<section class="sub-hero">
  <div class="container">
    <h1><?php single_post_title(); ?></h1>
    <div class="breadcrumbs">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
      <i class="fas fa-chevron-right" style="font-size: 0.75rem; align-self: center;"></i>
      <span>Blog & Updates</span>
    </div>
  </div>
</section>

<section class="section-bg">
  <div class="container">
    <div class="packages-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <div class="package-card" style="padding: 25px;">
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 10px;">
            <span><i class="fas fa-calendar-alt"></i> <?php echo get_the_date(); ?></span> | 
            <span><i class="fas fa-user"></i> <?php the_author(); ?></span>
          </div>
          <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 15px;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 20px; line-height: 1.6;"><?php the_excerpt(); ?></p>
          <a href="<?php the_permalink(); ?>" class="btn btn-outline btn-sm">Read Article</a>
        </div>
      <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
      <?php endif; ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
