<?php
/**
 * CV Download Handler
 */
require_once __DIR__ . '/config.php';

$file = __DIR__ . '/Chaminda-Sampath-CV.pdf';

if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="Chaminda-Sampath-CV.pdf"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);
    exit;
} else {
    // If PDF file not generated yet, redirect with friendly notice
    header('Content-Type: text/html; charset=utf-8');
    echo "<!DOCTYPE html><html><head><title>Resume - Chaminda Sampath</title><style>body{font-family:sans-serif;text-align:center;padding:50px;line-height:1.6;color:#333;}</style></head><body>";
    echo "<h2>Chaminda Sampath – Curriculum Vitae</h2>";
    echo "<p>IT Support Specialist | Infrastructure | IT Operations | Asset Management</p>";
    echo "<p>Email: <a href='mailto:" . PROFILE_EMAIL . "'>" . PROFILE_EMAIL . "</a> | Phone: " . PROFILE_PHONE . " | WhatsApp: " . PROFILE_WHATSAPP . "</p>";
    echo "<p>Please contact Chaminda directly for the latest formal enterprise PDF copy.</p>";
    echo "<p><a href='index.php'>&larr; Back to Portfolio</a></p>";
    echo "</body></html>";
    exit;
}
?>
