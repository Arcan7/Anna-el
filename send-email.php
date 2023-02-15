<?php
require_once('vendor/autoload.php'); // chargement de la librairie Mailgun
use Mailgun\Mailgun;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    # Envoi d'un email avec Mailgun
    $mg = Mailgun::create('32f0ac8eee9d01c7fa996048a0968a73-d1a07e51-3fc80731'); // Remplacer YOUR_API_KEY par votre clé API Mailgun
    $domain = "sandbox974bb6321b1c400591d18911c2665ff0.mailgun.org"; // Remplacer YOUR_DOMAIN par votre domaine Mailgun
    $mg->messages()->send($domain, [
        'from'    => "{$name} <{$email}>",
        'to'      => 'aerabenandrasana@gmail.com',
        'subject' => $subject,
        'text'    => $message
    ]);

    # Réponse à l'utilisateur
    http_response_code(200);
    echo "<script type="text/javascript" charset="utf-8">alert('Merci, votre message a bien été envoyé.'):</script>";
} else {
    http_response_code(400);
    echo "<script type="text/javascript" charset="utf-8">alert('Une erreur s\'est produite, veuillez réessayer.'):</script>";
}
?>
