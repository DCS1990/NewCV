# Chaminda Sampath – Standalone PHP Portfolio Project

A lightweight, high-performance, responsive PHP 8+ personal portfolio website for **Chaminda Sampath**, IT Support Specialist (13+ years experience in Infrastructure Support, IT Operations, Asset Management, and Automation).

## 📁 File Structure
- `index.php`: Main landing page assembling all sections.
- `config.php`: Central configuration, constants, session, and CSRF token generation.
- `data.php`: Structured PHP arrays containing experience, skills, projects, certifications, and ITAM pillars.
- `header.php`: Global navigation, SEO meta tags, dark/light theme switcher.
- `footer.php`: Global footer, social links, and script initialization.
- `contact.php`: Secure contact form processor with CSRF validation.
- `download-cv.php`: CV download handler.
- `.htaccess`: Security headers, compression, and directory protection.

## 🚀 Deployment Instructions

### 1. Running with Built-in PHP Development Server (Fastest)
Ensure you have PHP 7.4 or 8.x installed:
```bash
cd php-project
php -S localhost:8000
```
Open `http://localhost:8000` in your web browser.

### 2. Running on XAMPP / WAMP / MAMP
1. Copy the entire `php-project` folder to your server document root:
   - **XAMPP Windows**: `C:\xampp\htdocs\portfolio`
   - **WAMP**: `C:\wamp64\www\portfolio`
   - **MAMP Mac**: `/Applications/MAMP/htdocs/portfolio`
2. Start Apache from the XAMPP/WAMP control panel.
3. Open `http://localhost/portfolio` in your browser.

### 3. Deploying to cPanel / Shared Hosting
1. Compress all files inside `php-project/` into a `.zip` archive.
2. Log in to your cPanel -> **File Manager** -> navigate to `public_html`.
3. Upload and extract the archive into `public_html`.
4. Update `APP_URL` in `config.php` to your live domain name.
5. Done! Your portfolio is live with zero database configuration needed.

### 4. Running with Docker
Run with standard PHP Apache image:
```bash
docker run -d -p 8080:80 -v "$PWD":/var/www/html php:8.2-apache
```
Access at `http://localhost:8080`.
