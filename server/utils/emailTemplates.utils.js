const generateWelcomeEmail = ({ name, year }) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Welcome to Talkasauras</title>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #ffffff;
    color: #000000;
    line-height: 1.4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .container {
    max-width: 500px;
    width: 100%;
    border: 1.5px solid #000000;
    border-radius: 6px;
    overflow: hidden;
  }
  header {
    background: #000000;
    padding: 1.5rem;
    text-align: center;
    border-bottom: 1.5px solid #000000;
  }
  header h1 {
    color: #ffffff;
    font-size: 1.6rem;
    letter-spacing: 0.15em;
    font-weight: 700;
  }
  .content {
    padding: 2rem 1.5rem;
    text-align: center;
  }
  h2 {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    font-weight: 600;
  }
  p {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .button {
    display: inline-block;
    padding: 0.8rem 2rem;
    background: #000000;
    color: #ffffff;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
  }
  .social-links a {
    color: #000000;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
  }
  footer {
    background: #000000;
    color: #ffffff;
    padding: 1rem;
    text-align: center;
    font-size: 0.8rem;
  }
</style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Talkasauras</h1>
    </header>
    <div class="content">
      <h2>Welcome, ${name}</h2>
      <p>We're thrilled to have you join our community. Your account is ready to use. Explore all features and start your journey with us.</p>
      <a href="https://talkasauras.vercel.app" class="button">Get Started</a>
    </div>
    <footer>
      &copy; ${year} Talkasauras. All rights reserved.
    </footer>
  </div>
</body>
</html>
`;

const generateOtpEmail = ({ otp, validity, year }) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Verify Your Email</title>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #ffffff;
    color: #000000;
    line-height: 1.4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .container {
    max-width: 500px;
    width: 100%;
    border: 1.5px solid #000000;
    border-radius: 6px;
    overflow: hidden;
  }
  header {
    background: #000000;
    padding: 1.2rem;
    text-align: center;
  }
  .content {
    padding: 2rem 1.5rem;
    text-align: center;
  }
  .otp-code {
    font-size: 2rem;
    letter-spacing: 0.8rem;
    margin: 1.5rem 0;
    font-weight: 700;
    padding: 1rem;
    border: 1.5px dashed #000000;
    display: inline-block;
    border-radius: 4px;
  }
  .validity {
    display: inline-block;
    padding: 0.4rem 1.2rem;
    background: #000000;
    color: #ffffff;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }
  .notice {
    font-size: 0.85rem;
    max-width: 90%;
    margin: 0 auto;
    padding: 1rem;
  }
  footer {
    background: #000000;
    color: #ffffff;
    padding: 1rem;
    text-align: center;
    font-size: 0.8rem;
  }
</style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Talkasauras</h1>
    </header>
    <div class="content">
      <div class="otp-code">${otp}</div>
      <div class="validity">Valid for ${validity} minutes</div>
      <p class="notice">Never share this code. Talkasauras will never ask for it.</p>
    </div>
    <footer>
      &copy; ${year} Talkasauras. All rights reserved.
    </footer>
  </div>
</body>
</html>
`;

const generateResetOtpEmail = ({ otp, validity, year }) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Password Reset</title>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #ffffff;
    color: #000000;
    line-height: 1.4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .container {
    max-width: 500px;
    width: 100%;
    border: 1.5px solid #000000;
    border-radius: 6px;
    overflow: hidden;
  }
  .alert {
    background: #000000;
    color: #ffffff;
    padding: 0.8rem;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
  }
  .content {
    padding: 2rem 1.5rem;
    text-align: center;
  }
  .otp-code {
    font-size: 2rem;
    letter-spacing: 0.8rem;
    margin: 1.5rem 0;
    font-weight: 700;
    padding: 1rem;
    border: 1.5px dashed #000000;
    display: inline-block;
    border-radius: 4px;
  }
  .validity {
    display: inline-block;
    padding: 0.4rem 1.2rem;
    background: #000000;
    color: #ffffff;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }
  .warning {
    border: 1.5px solid #000000;
    border-radius: 4px;
    padding: 1rem;
    margin: 1.5rem auto;
    max-width: 90%;
    font-size: 0.85rem;
  }
  footer {
    background: #000000;
    color: #ffffff;
    padding: 1rem;
    text-align: center;
    font-size: 0.8rem;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="alert">Password Reset Request</div>
    <div class="content">
      <div class="otp-code">${otp}</div>
      <div class="validity">Valid for ${validity} minutes</div>
      <div class="warning">
        <p>⚠️ If you didn't request this:</p>
        <p>1. Ignore this email</p>
        <p>2. Secure your account</p>
        <p>3. Contact support immediately</p>
      </div>
    </div>
    <footer>
      &copy; ${year} Talkasauras. All rights reserved.
    </footer>
  </div>
</body>
</html>
`;

const generateLoginAlertEmail = ({ device, location, ip, time, year }) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>New Login Detected</title>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #ffffff;
    color: #000000;
    line-height: 1.4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .container {
    max-width: 500px;
    width: 100%;
    border: 1.5px solid #000000;
    border-radius: 6px;
    overflow: hidden;
  }
  .alert {
    background: #000000;
    color: #ffffff;
    padding: 0.8rem;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
  }
  .content {
    padding: 2rem 1.5rem;
    text-align: center;
  }
  h2 {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    font-weight: 600;
  }
  .login-details {
    border: 1.5px solid #000000;
    border-radius: 4px;
    padding: 1rem;
    margin: 1.5rem 0;
    text-align: left;
  }
  .detail-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
  }
  .detail-label {
    font-weight: 500;
    color: #666;
  }
  .detail-value {
    font-weight: 600;
  }
  .security-notice {
    font-size: 0.85rem;
    margin-top: 1.5rem;
    padding: 1rem;
    border-top: 1.5px solid #000000;
  }
  footer {
    background: #000000;
    color: #ffffff;
    padding: 1rem;
    text-align: center;
    font-size: 0.8rem;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="alert">New Login Detected</div>
    <div class="content">
      <h2>Recent Account Activity</h2>
      <div class="login-details">
        <div class="detail-row">
          <span class="detail-label">Device:</span>
          <span class="detail-value">${device}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Location:</span>
          <span class="detail-value">${location}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">IP Address:</span>
          <span class="detail-value">${ip}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Time:</span>
          <span class="detail-value">${time}</span>
        </div>
      </div>
    </div>
    <footer>
      &copy; ${year} Talkasauras. All rights reserved.
    </footer>
  </div>
</body>
</html>
`;

export {
  generateLoginAlertEmail,
  generateWelcomeEmail,
  generateOtpEmail,
  generateResetOtpEmail,
};
