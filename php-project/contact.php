<?php
require_once __DIR__ . '/config.php';

$response = [
    'success' => false,
    'message' => 'Invalid request method.'
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_POST['csrf_token'] ?? '';
    if (!hash_equals($_SESSION['csrf_token'] ?? '', $token)) {
        $response['message'] = 'Security validation failed (CSRF). Please refresh and try again.';
        header('Content-Type: application/json');
        echo json_encode($response);
        exit;
    }

    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? 'Website Inquiry');
    $message = trim($_POST['message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
        $response['message'] = 'Please fill out all required fields.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Please enter a valid email address.';
    } else {
        // Here you can configure PHP mail() or send to external mailer
        // $to = PROFILE_EMAIL;
        // $headers = "From: " . $email . "\r\nReply-To: " . $email;
        // mail($to, $subject, $message, $headers);
        
        $response['success'] = true;
        $response['message'] = 'Thank you, ' . htmlspecialchars($name) . '! Your message has been received. Chaminda will respond promptly.';
    }

    // Check if AJAX request
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-Type: application/json');
        echo json_encode($response);
        exit;
    } else {
        // Standard form post fallback
        $statusMsg = urlencode($response['message']);
        $statusType = $response['success'] ? 'success' : 'error';
        header("Location: index.php?status={$statusType}&msg={$statusMsg}#contact");
        exit;
    }
}

header('Location: index.php');
exit;
