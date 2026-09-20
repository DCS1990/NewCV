<?php
/**
 * Configuration File
 * Chaminda Sampath - Professional IT Support & Infrastructure Portfolio
 */

// Environment settings
define('APP_NAME', 'Chaminda Sampath – IT Support & Infrastructure Portfolio');
define('APP_VERSION', '1.0.0');
define('APP_URL', 'http://localhost/php-project'); // Change to your production domain

// Contact & Profile Details
define('PROFILE_NAME', 'Chaminda Sampath');
define('PROFILE_TITLE', 'IT Support Specialist | Infrastructure | IT Operations | Asset Management');
define('PROFILE_TAGLINE', '13+ Years Delivering Resilient Enterprise ICT Operations, ITAM Governance & Workflow Automation');
define('PROFILE_EMAIL', 'chaminda.d.sampath@gmail.com');
define('PROFILE_PHONE', '+94 75 560 6269');
define('PROFILE_WHATSAPP', '+94 77 649 6163');
define('PROFILE_WHATSAPP_URL', 'https://wa.me/94776496163');
define('PROFILE_LOCATION', 'Balangoda, Sri Lanka');
define('PROFILE_LINKEDIN', 'https://www.linkedin.com/in/chaminda-sampath-7aab40104/');
define('PROFILE_GITHUB', 'https://github.com/DCS1990');
define('PROFILE_YEARS_EXP', 13);
define('PROFILE_ENDPOINTS', '1,200+');
define('PROFILE_SLA', '99.8%');

// Security settings
session_start();
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Helper to escape output for XSS protection
function e($string) {
    return htmlspecialchars($string ?? '', ENT_QUOTES, 'UTF-8');
}
?>
