<?php
/**
 * @file
 * theme-settings.php
 *
 * Provides theme settings for Bootstrap Barrio based themes when admin theme is not.
 *
 * @see ./includes/settings.inc
 */

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;

/**
 * Implements hook_form_FORM_ID_alter().
 */
function tribute_form_system_theme_settings_alter(&$form, FormStateInterface $form_state, $form_id = NULL) {

  // General "alters" use a form id. Settings should not be set here. The only
  // thing useful about this is if you need to alter the form for the running
  // theme and *not* the theme setting.
  // @see http://drupal.org/node/943212
  if (isset($form_id)) {
    return;
  }

  //Change collapsible fieldsets (now details) to default #open => FALSE.
  $form['theme_settings']['#open'] = FALSE;
  $form['logo']['#open'] = FALSE;
  $form['favicon']['#open'] = FALSE;

  // Library settings
  if (\Drupal::moduleHandler()->moduleExists('bootstrap_library')) {
    $form['tribute_library'] = array(
      '#type' => 'select',
      '#title' => t('Load library'),
      '#description' => t('Select how to load the Bootstrap Library.'),
      '#default_value' => theme_get_setting('tribute_library'),
      '#options' => array(
        'cdn' => t('CDN'),
        'development' => t('Local non minimized (development)'),
        'production' => t('Local minimized (production)'),
      ),
      '#empty_option' => t('None'),
      '#description' => t('If none is selected you should load the library via Bootstrap Library or manually. If CDN is selected, the library version must be configured on @boostrap_library_link',  array('@bootstrap_library_link' => Drupal::l('Bootstrap Library Settings' , Url::fromRoute('bootstrap_library.admin')))),
    );
  }




}
