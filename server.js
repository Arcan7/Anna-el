const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');

const app = express();

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mailgun configuration
const DOMAIN = 'sandbox974bb6321b1c400591d18911c2665ff0.mailgun.org';
const mg = mailgun({ apiKey: '32f0ac8eee9d01c7fa996048a0968a73-d1a07e51-3fc80731', domain: DOMAIN });

// Route to handle the contact form submission
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const data = {
    from: `${name} <${email}>`,
    to: '<votre_email>',
    subject: subject,
    text: message
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ message: 'Email sent successfully!' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
