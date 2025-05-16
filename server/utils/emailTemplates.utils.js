const generateWelcomeEmail = ({ name, year }) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Welcome to Talkasauras</title>
<style>
  body {
    margin: 0; padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #fff;
    color: #000;
  }
  .container {
    max-width: 600px;
    margin: 40px auto;
    padding: 40px 30px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
  }
  header {
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #eaeaea;
  }
  header h1 {
    margin: 0;
    font-weight: 900;
    font-size: 28px;
    letter-spacing: 2px;
    color: #000;
  }
  main {
    padding: 30px 0;
    text-align: center;
  }
  main h2 {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 20px;
  }
  main p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 30px;
    color: #333;
  }
  .button {
    display: inline-block;
    padding: 14px 32px;
    background: #000;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    border-radius: 6px;
    letter-spacing: 1px;
    transition: background-color 0.3s ease;
  }
  .button:hover {
    background: #444;
  }
  footer {
    text-align: center;
    border-top: 1px solid #eaeaea;
    padding: 25px 0 0;
    font-size: 14px;
    color: #666;
  }
</style>
</head>
<body>
  <div class="container">
    <header>
      <h1>TALKASAURAS</h1>
    </header>
    <main>
      <h2>Hello, ${name}!</h2>
      <p>Welcome to Talkasauras! Your account is all set. We're excited to have you on board to explore our platform and enjoy all its features.</p>
      <a href="https://talkasauras.vercel.app" class="button" target="_blank" rel="noopener">Get Started</a>
    </main>
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
<title>Verify Your Email - Talkasauras</title>
<style>
  body {
    margin: 0; padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #fff;
    color: #000;
  }
  .container {
    max-width: 600px;
    margin: 40px auto;
    padding: 40px 30px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
  }
  header {
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #eaeaea;
  }
  header h1 {
    margin: 0;
    font-weight: 900;
    font-size: 28px;
    letter-spacing: 2px;
    color: #000;
  }
  main {
    padding: 30px 0;
    text-align: center;
  }
  main p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #333;
  }
  .otp-code {
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 8px;
    color: #000;
    border: 2px solid #000;
    padding: 14px 28px;
    display: inline-block;
    margin: 30px 0;
    user-select: all;
  }
  footer {
    text-align: center;
    border-top: 1px solid #eaeaea;
    padding: 25px 0 0;
    font-size: 14px;
    color: #666;
  }
</style>
</head>
<body>
  <div class="container">
    <header>
      <h1>TALKASAURAS</h1>
    </header>
    <main>
      <p>Please use the following verification code to complete your email verification process.</p>
      <div class="otp-code">${otp}</div>
      <p>This code is valid for <strong>${validity} minutes</strong>. Do not share it with anyone.</p>
    </main>
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
<title>Password Reset OTP - Talkasauras</title>
<style>
  body {
    margin: 0; padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #fff;
    color: #000;
  }
  .container {
    max-width: 600px;
    margin: 40px auto;
    padding: 40px 30px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
  }
  header {
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #eaeaea;
  }
  header h1 {
    margin: 0;
    font-weight: 900;
    font-size: 28px;
    letter-spacing: 2px;
    color: #000;
  }
  main {
    padding: 30px 0;
    text-align: center;
  }
  main p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #333;
  }
  .otp-code {
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 8px;
    color: #000;
    border: 2px solid #000;
    padding: 14px 28px;
    display: inline-block;
    margin: 30px 0;
    user-select: all;
  }
  footer {
    text-align: center;
    border-top: 1px solid #eaeaea;
    padding: 25px 0 0;
    font-size: 14px;
    color: #666;
  }
</style>
</head>
<body>
  <div class="container">
    <header>
      <h1>TALKASAURAS</h1>
    </header>
    <main>
      <p>You requested a password reset. Use the verification code below to proceed.</p>
      <div class="otp-code">${otp}</div>
      <p>If you didn't request this, please ignore this email or contact support immediately.</p>
    </main>
    <footer>
      &copy; ${year} Talkasauras. All rights reserved.
    </footer>
  </div>
</body>
</html>
`;

export {
  generateWelcomeEmail,
  generateOtpEmail,
  generateResetOtpEmail,
};