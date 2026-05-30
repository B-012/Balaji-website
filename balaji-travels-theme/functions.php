<?php
/**
 * Balaji Travels Theme - Core functions and definitions
 */

if ( ! function_exists( 'balaji_travels_setup' ) ) {
    function balaji_travels_setup() {
        // Add default posts and comments RSS feed links to head.
        add_theme_support( 'automatic-feed-links' );

        // Let WordPress manage the document title.
        add_theme_support( 'title-tag' );

        // Enable support for Post Thumbnails on posts and pages.
        add_theme_support( 'post-thumbnails' );

        // Register Primary Navigation Menu
        register_nav_menus( array(
            'primary' => esc_html__( 'Primary Navigation Menu', 'balaji-travels' ),
        ) );

        // Switch to HTML5 markup features
        add_theme_support( 'html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        ) );
    }
}
add_action( 'after_setup_theme', 'balaji_travels_setup' );

/**
 * Enqueue scripts and styles.
 */
function balaji_travels_scripts() {
    // Enqueue FontAwesome Icons CDN
    wp_enqueue_style( 'fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0' );

    // Enqueue Theme Stylesheet (style.css)
    wp_enqueue_style( 'balaji-style', get_stylesheet_uri(), array(), '1.0.0' );

    // Enqueue JS Data Sheet (contains static datasets as fallbacks)
    wp_enqueue_script( 'balaji-data-script', get_template_directory_uri() . '/js/data.js', array(), '1.0.0', true );

    // Enqueue Central Application JS Logic
    wp_enqueue_script( 'balaji-app-script', get_template_directory_uri() . '/js/app.js', array('balaji-data-script'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'balaji_travels_scripts' );

/**
 * Register Custom Post Type: Tour Packages
 */
function balaji_register_tour_packages_cpt() {
    $labels = array(
        'name'                  => _x( 'Tour Packages', 'Post Type General Name', 'balaji-travels' ),
        'singular_name'         => _x( 'Tour Package', 'Post Type Singular Name', 'balaji-travels' ),
        'menu_name'             => __( 'Tour Packages', 'balaji-travels' ),
        'name_admin_bar'        => __( 'Tour Package', 'balaji-travels' ),
        'archives'              => __( 'Package Archives', 'balaji-travels' ),
        'attributes'            => __( 'Package Attributes', 'balaji-travels' ),
        'parent_item_colon'     => __( 'Parent Package:', 'balaji-travels' ),
        'all_items'             => __( 'All Packages', 'balaji-travels' ),
        'add_new_item'          => __( 'Add New Tour Package', 'balaji-travels' ),
        'add_new'               => __( 'Add New', 'balaji-travels' ),
        'new_item'              => __( 'New Package', 'balaji-travels' ),
        'edit_item'             => __( 'Edit Tour Package', 'balaji-travels' ),
        'update_item'           => __( 'Update Tour Package', 'balaji-travels' ),
        'view_item'             => __( 'View Package', 'balaji-travels' ),
        'view_items'            => __( 'View Packages', 'balaji-travels' ),
        'search_items'          => __( 'Search Tour Packages', 'balaji-travels' ),
        'not_found'             => __( 'No packages found', 'balaji-travels' ),
        'not_found_in_trash'    => __( 'No packages found in Trash', 'balaji-travels' ),
        'featured_image'        => __( 'Package Cover Image', 'balaji-travels' ),
        'set_featured_image'    => __( 'Set cover image', 'balaji-travels' ),
        'remove_featured_image' => __( 'Remove cover image', 'balaji-travels' ),
        'use_featured_image'    => __( 'Use as cover image', 'balaji-travels' ),
        'insert_into_item'      => __( 'Insert into package', 'balaji-travels' ),
        'uploaded_to_this_item' => __( 'Uploaded to this package', 'balaji-travels' ),
        'items_list'            => __( 'Packages list', 'balaji-travels' ),
        'items_list_navigation' => __( 'Packages list navigation', 'balaji-travels' ),
        'filter_items_list'     => __( 'Filter packages list', 'balaji-travels' ),
    );
    
    $args = array(
        'label'                 => __( 'Tour Package', 'balaji-travels' ),
        'description'           => __( 'Custom tour itineraries managed by Balaji Travels', 'balaji-travels' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
        'taxonomies'            => array( 'category' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-palmtree',
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true, // Enables Gutenberg Blocks Editor
    );
    register_post_type( 'tour_package', $args );
}
add_action( 'init', 'balaji_register_tour_packages_cpt', 0 );
