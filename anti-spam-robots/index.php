<?php
$contacts = [
    "us-num-la" => "0012133206888",
    "eu-num-uk" => "00447719774854",
    "cn-num-work" => "008619985408818",
    "gmail" => "winmemzqwq@gmail.com",
    "icloud" => "mengxinqwq@icloud.com",
    "outlook" => "winmemzqwq@outlook.com",
    "foxmail" => "mengxin233@foxmail.com" 
];

if (!isset($_GET['are-you-robot']) || $_GET['are-you-robot'] !== "im-not-a-robot") {
    http_response_code(404);
    exit;
}

if (!isset($_GET['contact']) || !array_key_exists($_GET['contact'], $contacts)) {
    http_response_code(404);
    echo "Invalid contact parameter.";
    exit;
}

$contact = $contacts[$_GET['contact']];
$method = $_GET['method'];

$url = "{$method}:{$contact}";

header("Location: $url");
exit;