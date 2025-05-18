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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #f9f9f9;
    color: #333333;
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
  }
  
  .container {
    max-width: 550px;
    width: 100%;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background: #ffffff;
    transition: transform 0.3s ease;
  }
  
  .container:hover {
    transform: translateY(-5px);
  }
  
  header {
    background: #000000;
    padding: 2.5rem 1.5rem;
    text-align: center;
    position: relative;
  }
  
  header h1 {
    color: #ffffff;
    font-size: 2rem;
    letter-spacing: 0.15em;
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
  }
  
  header h1::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: #ffffff;
    border-radius: 2px;
  }
  
  .content {
    padding: 2.5rem 2rem;
    text-align: center;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    color: #111111;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 2rem;
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;
    color: #555555;
    line-height: 1.7;
  }
  
  .button {
    display: inline-block;
    padding: 0.9rem 2.5rem;
    background: #000000;
    color: #ffffff;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    letter-spacing: 0.5px;
  }
  
  .button:hover {
    background: #333333;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .social-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
  }
  
  .social-links a {
    color: #555555;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s ease;
    padding: 0.5rem;
  }
  
  .social-links a:hover {
    color: #000000;
  }
  
  footer {
    background: #000000;
    color: #ffffff;
    padding: 1.5rem;
    text-align: center;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
  
  /* Responsive adjustments */
  @media screen and (max-width: 600px) {
    .container {
      width: 95%;
      border-radius: 10px;
    }
    
    header {
      padding: 2rem 1rem;
    }
    
    header h1 {
      font-size: 1.7rem;
    }
    
    .content {
      padding: 2rem 1.2rem;
    }
    
    h2 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.95rem;
      max-width: 100%;
    }
    
    .button {
      padding: 0.8rem 2rem;
      width: 100%;
      max-width: 250px;
    }
  }
  
  @media screen and (max-width: 400px) {
    body {
      padding: 1rem 0.5rem;
    }
    
    header h1 {
      font-size: 1.5rem;
    }
    
    .content {
      padding: 1.5rem 1rem;
    }
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

const generateOtpEmail = ({ OTP, validity, year }) => `
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #f9f9f9;
    color: #333333;
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
  }
  
  .container {
    max-width: 550px;
    width: 100%;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background: #ffffff;
    transition: transform 0.3s ease;
  }
  
  .container:hover {
    transform: translateY(-5px);
  }
  
  header {
    background: #000000;
    padding: 2rem 1.5rem;
    text-align: center;
    position: relative;
  }
  
  header h1 {
    color: #ffffff;
    font-size: 1.8rem;
    letter-spacing: 0.15em;
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
  }
  
  header h1::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: #ffffff;
    border-radius: 2px;
  }
  
  .content {
    padding: 2.5rem 2rem;
    text-align: center;
    background: linear-gradient(to bottom, #ffffff, #f9f9f9);
  }
  
  .otp-title {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    color: #333333;
  }
  
  .otp-code {
    font-size: 2.5rem;
    letter-spacing: 0.8rem;
    margin: 1.5rem 0;
    font-weight: 700;
    padding: 1.2rem 1.5rem;
    border: 2px dashed #000000;
    display: inline-block;
    border-radius: 8px;
    background-color: #fafafa;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.05);
    color: #111111;
    max-width: 100%;
    overflow-x: auto;
  }
  
  .validity {
    display: inline-block;
    padding: 0.6rem 1.5rem;
    background: #000000;
    color: #ffffff;
    border-radius: 50px;
    margin: 0.5rem 0 2rem;
    font-size: 0.95rem;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    letter-spacing: 0.5px;
  }
  
  .notice {
    font-size: 0.9rem;
    max-width: 90%;
    margin: 0 auto;
    padding: 1.2rem;
    background-color: #fff4e5;
    border-left: 4px solid #ff9800;
    text-align: left;
    border-radius: 4px;
    color: #5d4037;
  }
  
  .notice strong {
    display: block;
    margin-bottom: 0.3rem;
    color: #e65100;
  }
  
  footer {
    background: #000000;
    color: #ffffff;
    padding: 1.5rem;
    text-align: center;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
  
  /* Responsive adjustments */
  @media screen and (max-width: 600px) {
    .container {
      width: 95%;
      border-radius: 10px;
    }
    
    header {
      padding: 1.8rem 1rem;
    }
    
    header h1 {
      font-size: 1.6rem;
    }
    
    .content {
      padding: 2rem 1.2rem;
    }
    
    .otp-code {
      font-size: 2rem;
      letter-spacing: 0.6rem;
      padding: 1rem 1.2rem;
      max-width: 90%;
    }
    
    .validity {
      padding: 0.5rem 1.2rem;
      font-size: 0.9rem;
      width: auto;
      max-width: 80%;
    }
    
    .notice {
      font-size: 0.85rem;
      max-width: 100%;
      padding: 1rem;
    }
  }
  
  @media screen and (max-width: 400px) {
    body {
      padding: 1rem 0.5rem;
    }
    
    header h1 {
      font-size: 1.4rem;
    }
    
    .content {
      padding: 1.5rem 1rem;
    }
    
    .otp-code {
      font-size: 1.8rem;
      letter-spacing: 0.5rem;
      padding: 0.8rem 1rem;
    }
  }
</style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Talkasauras</h1>
    </header>
    <div class="content">
      <div class="otp-title">Your verification code</div>
      <div class="otp-code">${OTP}</div>
      <div class="validity">Valid for ${validity} minutes</div>
      <p class="notice"><strong>Security Notice:</strong> Never share this code with anyone. Talkasauras representatives will never ask for this code.</p>
    </div>
    <footer>
      &copy; ${year} Talkasauras. All rights reserved.
    </footer>
  </div>
</body>
</html>
`;

const generateResetOtpEmail = ({ OTP, validity, year }) => `
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #f9f9f9;
    color: #333333;
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
  }
  
  .container {
    max-width: 550px;
    width: 100%;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background: #ffffff;
    transition: transform 0.3s ease;
  }
  
  .container:hover {
    transform: translateY(-5px);
  }
  
  .alert {
    background: #f44336;
    color: #ffffff;
    padding: 1rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    position: relative;
    overflow: hidden;
  }
  
  .alert::before {
    content: '⚠️';
    position: absolute;
    left: 15px;
    font-size: 1.2rem;
  }
  
  .header {
    background: #000000;
    padding: 1.8rem 1.5rem;
    text-align: center;
  }
  
  .header h1 {
    color: #ffffff;
    font-size: 1.8rem;
    letter-spacing: 0.15em;
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
  }
  
  .header h1::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: #ffffff;
    border-radius: 2px;
  }
  
  .content {
    padding: 2.5rem 2rem;
    text-align: center;
    background: linear-gradient(to bottom, #ffffff, #f9f9f9);
  }
  
  .reset-message {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    color: #333333;
    line-height: 1.4;
  }
  
  .otp-code {
    font-size: 2.5rem;
    letter-spacing: 0.8rem;
    margin: 1.5rem 0;
    font-weight: 700;
    padding: 1.2rem 1.5rem;
    border: 2px dashed #f44336;
    display: inline-block;
    border-radius: 8px;
    background-color: #fff5f5;
    box-shadow: inset 0 0 8px rgba(244, 67, 54, 0.1);
    color: #d32f2f;
    max-width: 100%;
    overflow-x: auto;
  }
  
  .validity {
    display: inline-block;
    padding: 0.6rem 1.5rem;
    background: #000000;
    color: #ffffff;
    border-radius: 50px;
    margin: 0.5rem 0 2rem;
    font-size: 0.95rem;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    letter-spacing: 0.5px;
  }
  
  .warning {
    border-left: 4px solid #f44336;
    border-radius: 4px;
    padding: 1.2rem;
    margin: 1.5rem auto;
    max-width: 90%;
    font-size: 0.9rem;
    background-color: #fff5f5;
    color: #5d4037;
    text-align: left;
  }
  
  .warning strong {
    display: block;
    margin-bottom: 0.3rem;
    color: #d32f2f;
  }
  
  footer {
    background: #000000;
    color: #ffffff;
    padding: 1.5rem;
    text-align: center;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
  
  /* Responsive adjustments */
  @media screen and (max-width: 600px) {
    .container {
      width: 95%;
      border-radius: 10px;
    }
    
    .alert {
      padding: 0.9rem 1rem 0.9rem 2.5rem;
      font-size: 0.9rem;
    }
    
    .header {
      padding: 1.6rem 1rem;
    }
    
    .header h1 {
      font-size: 1.6rem;
    }
    
    .content {
      padding: 2rem 1.2rem;
    }
    
    .reset-message {
      font-size: 1.1rem;
    }
    
    .otp-code {
      font-size: 2rem;
      letter-spacing: 0.6rem;
      padding: 1rem 1.2rem;
      max-width: 90%;
    }
    
    .validity {
      padding: 0.5rem 1.2rem;
      font-size: 0.9rem;
      width: auto;
      max-width: 80%;
    }
    
    .warning {
      font-size: 0.85rem;
      max-width: 100%;
      padding: 1rem;
    }
  }
  
  @media screen and (max-width: 400px) {
    body {
      padding: 1rem 0.5rem;
    }
    
    .header h1 {
      font-size: 1.4rem;
    }
    
    .content {
      padding: 1.5rem 1rem;
    }
    
    .otp-code {
      font-size: 1.8rem;
      letter-spacing: 0.5rem;
      padding: 0.8rem 1rem;
    }
  }
</style>
</head>
<body>
  <div class="container">
    <div class="alert">Password Reset Request</div>
    <div class="header">
      <h1>Talkasauras</h1>
    </div>
    <div class="content">
      <p class="reset-message">We received a request to reset your password</p>
      <div class="otp-code">${OTP}</div>
      <div class="validity">Valid for ${validity} minutes</div>
      <div class="warning">
        <strong>Important:</strong>
        If you didn't request this password reset, please ignore this email or contact support immediately if you believe your account security has been compromised.
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #f9f9f9;
    color: #333333;
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
  }
  
  .container {
    max-width: 550px;
    width: 100%;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background: #ffffff;
    transition: transform 0.3s ease;
  }
  
  .container:hover {
    transform: translateY(-5px);
  }
  
  .alert {
    background: #ff9800;
    color: #ffffff;
    padding: 1rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    position: relative;
    overflow: hidden;
  }
  
  .alert::before {
    content: '🔔';
    position: absolute;
    left: 15px;
    font-size: 1.2rem;
  }
  
  .header {
    background: #000000;
    padding: 1.8rem 1.5rem;
    text-align: center;
  }
  
  .header h1 {
    color: #ffffff;
    font-size: 1.8rem;
    letter-spacing: 0.15em;
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
  }
  
  .header h1::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: #ffffff;
    border-radius: 2px;
  }
  
  .content {
    padding: 2.5rem 2rem;
    text-align: center;
    background: linear-gradient(to bottom, #ffffff, #f9f9f9);
  }
  
  h2 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    color: #333333;
    position: relative;
    display: inline-block;
  }
  
  h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #ff9800;
    border-radius: 2px;
  }
  
  .login-details {
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 2rem 0 1.5rem;
    text-align: left;
    background-color: #fafafa;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  }
  
  .detail-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eeeeee;
    font-size: 0.95rem;
    align-items: center;
  }
  
  .detail-row:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
  
  .detail-label {
    font-weight: 500;
    color: #666666;
    display: flex;
    align-items: center;
  }
  
  .detail-label::before {
    display: inline-block;
    margin-right: 8px;
    font-size: 1.1rem;
  }
  
  .device-label::before {
    content: '📱';
  }
  
  .location-label::before {
    content: '📍';
  }
  
  .ip-label::before {
    content: '🔒';
  }
  
  .time-label::before {
    content: '🕒';
  }
  
  .detail-value {
    font-weight: 600;
    color: #111111;
    text-align: right;
    max-width: 60%;
    word-break: break-word;
  }
  
  .security-notice {
    font-size: 0.9rem;
    margin-top: 1.5rem;
    padding: 1.2rem;
    border-radius: 6px;
    background-color: #fff8e1;
    border-left: 4px solid #ffc107;
    text-align: left;
    color: #5d4037;
  }
  
  .security-notice strong {
    display: block;
    margin-bottom: 0.3rem;
    color: #e65100;
  }
  
  .action-button {
    display: inline-block;
    padding: 0.8rem 2rem;
    background: #ff9800;
    color: #ffffff;
    text-decoration: none;
    border-radius: 50px;
    margin: 1.5rem 0 0.5rem;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(255, 152, 0, 0.2);
  }
  
  .action-button:hover {
    background: #f57c00;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(255, 152, 0, 0.3);
  }
  
  footer {
    background: #000000;
    color: #ffffff;
    padding: 1.5rem;
    text-align: center;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
  
  /* Responsive adjustments */
  @media screen and (max-width: 600px) {
    .container {
      width: 95%;
      border-radius: 10px;
    }
    
    .alert {
      padding: 0.9rem 1rem 0.9rem 2.5rem;
      font-size: 0.9rem;
    }
    
    .header {
      padding: 1.6rem 1rem;
    }
    
    .header h1 {
      font-size: 1.6rem;
    }
    
    .content {
      padding: 2rem 1.2rem;
    }
    
    h2 {
      font-size: 1.3rem;
    }
    
    .login-details {
      padding: 1.2rem;
    }
    
    .detail-row {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 1.2rem;
      margin-bottom: 1.2rem;
    }
    
    .detail-label {
      margin-bottom: 0.5rem;
    }
    
    .detail-value {
      max-width: 100%;
      word-break: break-word;
    }
    
    .security-notice {
      font-size: 0.85rem;
      padding: 1rem;
    }
    
    .action-button {
      width: 100%;
      text-align: center;
      padding: 0.8rem 1rem;
    }
  }
  
  @media screen and (max-width: 400px) {
    body {
      padding: 1rem 0.5rem;
    }
    
    .header h1 {
      font-size: 1.4rem;
    }
    
    .content {
      padding: 1.5rem 1rem;
    }
  }
</style>
</head>
<body>
  <div class="container">
    <div class="alert">New Login Detected</div>
    <div class="header">
      <h1>Talkasauras</h1>
    </div>
    <div class="content">
      <h2>Recent Account Activity</h2>
      <div class="login-details">
        <div class="detail-row">
          <span class="detail-label device-label">Device</span>
          <span class="detail-value">${device}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label location-label">Location</span>
          <span class="detail-value">${location}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label ip-label">IP Address</span>
          <span class="detail-value">${ip}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label time-label">Time</span>
          <span class="detail-value">${time}</span>
        </div>
      </div>
      <div class="security-notice">
        <strong>Security Notice:</strong>
        If you don't recognize this login activity, please secure your account immediately by changing your password.
      </div>
      <a href="https://talkasauras.vercel.app/account/security" class="action-button">Secure Account</a>
    </div>
    <footer>
      &copy; ${year} Talkasauras. All rights reserved.
    </footer>
  </div>
</body>
</html>
`;

export { generateLoginAlertEmail, generateWelcomeEmail, generateOtpEmail, generateResetOtpEmail };
