# Shreeji Laser Website

This is a responsive company website for Shreeji Laser, a precision metal fabrication company in Vapi, Gujarat.

The project is made with three basic web technologies:

- **HTML** creates the content and structure.
- **CSS** controls the appearance, layout, colors, spacing, and responsive design.
- **JavaScript** adds behavior and interaction.

There is no framework, build system, database, or server-side code in this project. It is a **static website**, so a browser can open it directly.

> Important: this project uses **JavaScript**, not Java. Java is a different programming language. JavaScript is the language used here to control the web page in the browser.

## 1. Project Structure

```text
website-company/
|
|-- index.html       Main page content and all website views
|-- style.css        All visual styles and responsive rules
|-- script.js        Interactions and page behavior
|-- README.md        This explanation
|
|-- images/          Image files used by the website
|   |-- logo.png
|   |-- owner-photo.jpg
|   |-- ...other JPG, PNG, and WEBP files
|
|-- videos/          Video files used in the gallery
    |-- v1.mp4
    |-- v2.mp4
```

### What happens when the site opens?

1. The browser opens `index.html`.
2. The HTML loads `style.css` for the design.
3. The HTML loads `script.js` using `defer`.
4. Images and videos are loaded from the `images/` and `videos/` folders.
5. JavaScript waits for the page to finish loading, then starts the home view, animations, gallery, and form validation.

## 2. How To Run The Website

### Simple method

1. Open the project folder in VS Code.
2. Double-click `index.html`, or right-click it and choose **Open with Live Server** if that extension is installed.
3. The website opens in your browser.

Opening the file directly works because this project does not need a backend.

### Recommended VS Code method

The Live Server extension is useful during development because it automatically refreshes the browser after file changes.

1. Install the VS Code extension named **Live Server**.
2. Open `index.html`.
3. Click **Go Live** in the bottom-right corner of VS Code.

## 3. HTML Explained

HTML means **HyperText Markup Language**. HTML is not mainly a programming language. It is a markup language that describes what each piece of content is.

```html
<h1>Precision Engineering</h1>
<p>We provide industrial manufacturing solutions.</p>
```

- `<h1>` means the most important heading.
- `<p>` means a paragraph.
- The opening tag is `<h1>`.
- The closing tag is `</h1>`.
- The text between them is the content.

### The basic HTML document

The first lines of `index.html` are the document setup:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shreeji Laser</title>
</head>
<body>
  Website content goes here
</body>
</html>
```

#### `<!DOCTYPE html>`

Tells the browser to use modern HTML5 rules.

#### `<html lang="en">`

The outer container for the whole document. `lang="en"` tells browsers and screen readers that the page is in English.

#### `<head>`

Contains information about the page that is not normally shown as page content. This includes the title, SEO information, fonts, CSS, and JavaScript links.

#### `<meta charset="UTF-8">`

Allows the browser to correctly display common characters and languages.

#### The viewport meta tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This makes the page use the real width of a phone or tablet. Without it, mobile browsers may pretend the page is much wider than the device.

#### `<title>`

The text shown in the browser tab and often used by search engines.

### SEO tags in this project

The page contains useful metadata tags:

```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="Shreeji Laser">
```

- `description` gives search engines a short description.
- `keywords` lists related terms. Modern search engines give this tag less importance, but it explains the page topic.
- `author` identifies who created the content.

### Linking CSS and JavaScript

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

- `<link>` loads the CSS file.
- `<script>` loads the JavaScript file.
- `defer` downloads JavaScript while reading the HTML, but runs it after the HTML has been parsed.

### HTML page sections

The website uses semantic elements. Semantic HTML gives each area a meaningful name:

- `<header>` contains the logo and navigation.
- `<nav>` contains navigation links.
- `<section>` groups related content.
- `<footer>` contains the bottom contact and link area.
- `<h1>`, `<h2>`, `<h3>`, and `<h4>` create a heading hierarchy.
- `<p>` contains normal text.
- `<a>` creates a link.
- `<img>` displays an image.
- `<video>` displays a video.
- `<form>`, `<input>`, `<select>`, and `<textarea>` create the enquiry form.

### Classes and IDs

HTML uses `class` and `id` values so CSS and JavaScript can find elements.

```html
<section class="white-section">
  <h2 id="services-title">Our Services</h2>
</section>
```

- A **class** can be used on many elements. `.white-section` is reused throughout the website.
- An **id** should identify one particular element. `#services-title` identifies one heading.
- In CSS, classes begin with `.` and IDs begin with `#`.
- In JavaScript, `document.getElementById('services-title')` finds an element by ID.

### The website views

All major views are inside `index.html` rather than separate HTML files:

```html
<div class="page active" id="page-home">...</div>
<div class="page" id="page-about">...</div>
<div class="page" id="page-services">...</div>
<div class="page" id="page-gallery">...</div>
<div class="page" id="page-global">...</div>
<div class="page" id="page-downloads">...</div>
<div class="page" id="page-contact">...</div>
```

These are sections in the same document. JavaScript shows one section and hides the others. This is a simple single-page application pattern.

### Links and `onclick`

Many navigation links look like this:

```html
<a href="#" onclick="showPage('about'); return false;">ABOUT</a>
```

- `href="#"` provides a link-like element.
- `onclick` calls JavaScript when the user clicks.
- `showPage('about')` asks JavaScript to show the About view.
- `return false` prevents the browser from jumping to the top because of `#`.

### Images

```html
<img src="images/logo.png" alt="Shreeji Laser logo">
```

- `src` is the path to the image.
- `alt` describes the image for screen readers and appears if the image cannot load.
- Local paths are relative to `index.html`, so `images/logo.png` means the file is inside the `images` folder.

### Videos

```html
<video autoplay muted loop playsinline controls>
  <source src="videos/v1.mp4" type="video/mp4">
</video>
```

- `autoplay` starts the video automatically.
- `muted` is needed by many browsers before autoplay is allowed.
- `loop` repeats the video.
- `playsinline` keeps the video inside the page on mobile devices.
- `controls` shows browser video controls.

### The contact form

The contact form uses IDs so JavaScript can read entered values:

```html
<input type="text" id="name" required>
<input type="tel" id="phone" required>
<input type="email" id="email" required>
<textarea id="requirements" required></textarea>
```

- `type="email"` tells the browser this is an email field.
- `required` says the field must be filled.
- `id` gives JavaScript a reliable way to find the field.
- `novalidate` lets the custom JavaScript validation control the messages.

## 4. CSS Explained

CSS means **Cascading Style Sheets**. CSS describes how HTML should look.

```css
.service-card {
  background: white;
  padding: 24px;
  border-radius: 8px;
}
```

This selects every element with `class="service-card"` and gives it a white background, inner spacing, and rounded corners.

### CSS selectors used in this project

```css
body { ... }                 /* Selects the body element */
.container { ... }           /* Selects a class */
#main-header { ... }         /* Selects an ID */
.btn:hover { ... }           /* Selects a button while hovered */
.page.active { ... }         /* Selects an element with both classes */
input:focus { ... }          /* Selects an input while selected */
```

### CSS variables

At the top of `style.css`, `:root` defines reusable values:

```css
:root {
  --cyan: #1F1F1F;
  --white: #FFFFFF;
  --smoke: #F7F7F7;
  --radius: 8px;
  --font: 'Poppins', sans-serif;
}
```

Use a variable with `var()`:

```css
button {
  color: var(--white);
  border-radius: var(--radius);
}
```

This makes global design changes easy. Changing `--radius`, for example, changes many rounded corners at once.

### Reset styles

The reset removes inconsistent browser defaults:

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

- `*` means every element.
- `box-sizing: border-box` makes width calculations easier.
- `margin: 0` and `padding: 0` remove automatic spacing.

### The box model

Every HTML element can be understood as four layers:

1. Content: text or an image.
2. Padding: space inside the element around its content.
3. Border: the visible edge.
4. Margin: space outside the element.

The `.container` keeps content centered and away from screen edges:

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

- `max-width` stops content from becoming too wide.
- `margin: 0 auto` centers it.
- `padding` gives it side space.

### Flexbox

Flexbox arranges items in a row or column. The navigation uses it:

```css
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

- `display: flex` activates Flexbox.
- `align-items` controls alignment across the row.
- `justify-content` controls spacing along the row.

### CSS Grid

Grid is useful for columns and cards. The services use:

```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}
```

This means:

- Create as many columns as can fit.
- Each card should be at least `250px` wide.
- `1fr` shares remaining space evenly.
- `gap` adds space between cards.

### Responsive design

Responsive design makes the same website work on desktop, tablet, and mobile.

```css
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
```

When the screen is `768px` wide or smaller, desktop navigation is hidden and the hamburger button is shown.

The main breakpoints are:

- `1024px`: important layouts become one column.
- `768px`: mobile navigation and smaller layouts are enabled.

### CSS animations and transitions

Transitions make changes smooth:

```css
.btn {
  transition: var(--transition);
}

.btn:hover {
  transform: translateY(-1px);
}
```

Animations use `@keyframes`. For example, `pulse-dot` changes the size and opacity of the hero status dot. The `reveal` classes start transparent and become visible when JavaScript adds the `visible` class.

### Important CSS classes

- `.page`: hides a website view before it is selected.
- `.page.active`: displays the selected view.
- `.container`: centers content and limits its width.
- `.btn`: common button styling.
- `.btn-primary`, `.btn-outline`, `.btn-white`: button variations.
- `.reveal`, `.reveal-left`, `.reveal-right`: starting styles for scroll animations.
- `.stagger`: gives grid children delayed animation timing.
- `.gallery-lightbox`: full-screen image viewer created by JavaScript.
- `.nav-links.open`: mobile navigation drawer state.
- `.field-invalid`: invalid phone or email field state.

## 5. JavaScript Explained

JavaScript is the behavior layer. It reads HTML elements, changes classes and text, responds to clicks, validates forms, and creates new elements.

### Starting after the page loads

```javascript
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
  setupHeaderScroll();
  setupObserverReveal();
  setupGalleryLightbox();
  setupContactValidation();
  setTimeout(animateCounters, 400);
});
```

`DOMContentLoaded` waits until the HTML has been read. Then it calls the setup functions. This prevents JavaScript from trying to find elements before they exist.

### `const` and `let`

```javascript
const phone = document.getElementById('phone');
let revealObserver;
```

- `const` is used when the variable reference should not be reassigned.
- `let` is used when the value may change later.

### Finding and changing HTML

```javascript
const target = document.getElementById('page-' + id);
target.classList.add('active');
```

- `document` represents the page.
- `getElementById` finds one element.
- `classList.add` adds a CSS class.
- `classList.remove` removes a CSS class.
- `classList.toggle` adds a class if missing and removes it if present.

### The `showPage(id)` function

This is the main navigation function:

1. It finds all `.page` elements.
2. It removes `active` and `show` from every page.
3. It finds the requested element, such as `page-about`.
4. It adds `active` and `show` to that element.
5. It updates the active navigation link.
6. It scrolls to the top.
7. It closes the mobile menu.
8. It starts the reveal animation for the selected view.
9. It starts the counters again when the home page is selected.

The ID is built like this:

```javascript
const target = document.getElementById('page-' + id);
```

If a link calls `showPage('about')`, JavaScript looks for `page-about`.

### `showServiceDetail(serviceId)`

Service cards call this function. It first opens the Services view, then scrolls to the matching service section:

```javascript
showServiceDetail('laser-cutting');
```

The function searches for `service-laser-cutting`, briefly changes its background, and then removes the highlight.

### Mobile navigation

`toggleNav()` adds or removes the `open` class from `#navLinks`. CSS uses `.nav-links.open` to turn normal navigation into a full-screen mobile drawer.

`closeNavMenu()` removes the open state. It is called after navigation so the drawer closes when a link is selected.

### Header scroll effect

`setupHeaderScroll()` listens for the browser's `scroll` event. When the user scrolls more than 20 pixels, it adds the `scrolled` class to the header. CSS then adds a stronger shadow and slightly different background.

### Scroll reveal animation

`IntersectionObserver` watches elements as they enter the visible part of the browser window.

```javascript
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
```

CSS controls the starting and ending positions. JavaScript only adds `visible` when the element is on screen.

### Counter animation

The home page has elements such as:

```html
<span class="count-up" data-target="500">0</span>
```

`animateCounters()` reads `data-target`, starts at zero, and updates the text repeatedly until it reaches the target. `setInterval` runs the update around 60 times per second. The easing calculation makes the number accelerate and slow down naturally.

### Gallery lightbox

`setupGalleryLightbox()` creates the lightbox with JavaScript:

1. Find every `.gallery-item`.
2. Create a dark overlay.
3. Create an image and close button.
4. Add the overlay to `document.body`.
5. When an item is clicked, copy its image source into the large image.
6. Add `active` to show the overlay.
7. Stop page scrolling while it is open.
8. Close on the close button, dark background, or Escape key.

### Form validation

`setupContactValidation()` listens while the user types. For the phone number:

```javascript
phone.value = phone.value.replace(/\D/g, '').slice(0, 10);
```

- `\D` means any character that is not a digit.
- `replace` removes non-digits.
- `slice(0, 10)` limits the value to 10 characters.

The phone pattern is:

```javascript
/^\d{10}$/
```

It means exactly 10 digits from beginning to end. The email pattern checks for text, an `@`, a domain name, a dot, and a domain ending.

`updateFieldWarning()` adds `.field-invalid`, sets `aria-invalid`, and writes a message below the field when the value is invalid.

### Submitting the contact form

`handleSubmit(event)`:

1. Stops normal form submission with `preventDefault()`.
2. Checks required fields.
3. Validates the phone number.
4. Validates the email address.
5. Reads the name, company, service, and requirements.
6. Builds an email subject and message.
7. Calls `openEmailComposer()`.

This form does **not** send data to a server. On a phone it opens the device email application with a `mailto:` link. On desktop it opens a Gmail compose URL in a new tab. The visitor still has to press Send in their email application.

### Email composer

`openEmailComposer()` checks whether the visitor is on a mobile device.

- Mobile: opens a `mailto:` URL.
- Desktop: opens Gmail compose in a new browser tab.
- `encodeURIComponent()` safely encodes spaces and special characters in the subject and body.

## 6. How The Three Files Work Together

Think of the website as a house:

- **HTML is the structure**: rooms, doors, text, images, and forms.
- **CSS is the interior design**: colors, sizes, positions, spacing, and animations.
- **JavaScript is the controls**: navigation, validation, counters, and the image viewer.

Example: clicking a service card follows this chain:

1. HTML has `onclick="showServiceDetail('laser-cutting')"`.
2. JavaScript runs `showServiceDetail`.
3. JavaScript opens Services and finds `#service-laser-cutting`.
4. JavaScript scrolls to that section and adds a temporary highlight.
5. CSS displays the layout and transition.

## 7. How To Make Common Changes

### Change the company name

Search in `index.html` for `SHREEJI LASER` and update the visible brand text. Also update the `<title>`, description, and author if needed.

### Change a phone number

Search for `7574851959` in `index.html`. Update every `tel:` link and visible phone number so the website stays consistent.

### Change an email address

Search for `lasershreeji@gmail.com` in both `index.html` and `script.js`. Update the visible links and the `toEmail` value used by the form.

### Change colors

Edit the variables inside `:root` in `style.css`. Start with `--cyan`, `--cyan-dark`, `--white`, `--smoke`, and `--steel`.

### Change section text

Find the relevant heading or paragraph in `index.html` and edit only the text between the tags. Keep the tags and classes unless you understand why they are being changed.

### Add a new image

1. Put the image in `images/`.
2. Add an image element in `index.html`.
3. Use a relative path such as `images/new-machine.jpg`.
4. Always add useful `alt` text.

### Add a new gallery item

Copy one existing `.gallery-item` block, change the image path, and change the `alt` text. Existing JavaScript automatically finds all gallery items when the page loads.

### Add a new service

Update three areas:

1. Add a service card with `onclick="showServiceDetail('new-service')"`.
2. Add a detailed section with `id="service-new-service"`.
3. Add a footer link that calls `showServiceDetail('new-service')`.

The two IDs must match. A mismatch is a common reason for a service link not scrolling correctly.

### Change counter numbers

Edit the `data-target` value:

```html
<span class="count-up" data-target="750">0</span>
```

The starting `0` is replaced by JavaScript when the animation runs.

### Add a downloadable document

The current Downloads cards are visual cards. To make one actually download a document:

1. Create a folder such as `documents/`.
2. Put the PDF inside it.
3. Replace the card `<div>` with a link or add an `<a>` around the card.
4. Use `href="documents/company-brochure.pdf"`.
5. Add `download` if the browser should download instead of opening the file.

## 8. Important Current Notes

- The website contains two external Unsplash image URLs. Those images require an internet connection. Local images work without internet.
- The form uses email composition, not a real backend form processor.
- The Downloads cards currently look like download cards but do not contain document links yet.
- The footer email link displays `lasershreeji@gmail.com`, but its JavaScript composer currently uses `kumar.shaurya1307@gmail.com`. Update this if the footer should send to the company email.
- The favicon path in the HTML should be checked because the file name shown there is not inside the `images/` folder path.
- Keep file names and paths exact. Spaces and capital letters can matter when the website is uploaded to a case-sensitive server.

## 9. Beginner Debugging Checklist

### An image is missing

Check:

- Is the file inside `images/`?
- Does `src` exactly match the file name?
- Are spaces, brackets, and capital letters correct?
- Is the path relative to `index.html`?

### A navigation link does nothing

Check:

- Is `script.js` loaded in `index.html`?
- Is the function name spelled correctly?
- Does the requested page ID exist, such as `page-about`?
- Open browser Developer Tools with `F12` and check the Console tab for errors.

### A service link does not scroll

Check that these values match:

```html
showServiceDetail('laser-cutting')
id="service-laser-cutting"
```

### The mobile menu is stuck open

Check that the HTML uses `id="navLinks"` and `id="closeNav"`. Check that JavaScript adds `open` and CSS contains `.nav-links.open`.

### The form does not open email

Check:

- Is an email application configured on the device?
- Is Gmail accessible in the browser on desktop?
- Did the browser block the new tab or popup?
- Are all required fields filled?
- Is the phone exactly 10 digits?
- Is the email written in a valid format?

## 10. Useful Browser Developer Tools

Press `F12` in most browsers.

- **Elements**: inspect HTML and temporarily change CSS.
- **Console**: see JavaScript errors and test commands.
- **Network**: find missing images, videos, CSS, or JavaScript files.
- **Application**: inspect browser storage and site data.
- **Device toolbar**: preview phone and tablet sizes.

You can test JavaScript in the Console:

```javascript
showPage('contact');
```

This should open the Contact view.

## 11. Recommended Learning Order

1. Learn HTML headings, paragraphs, links, images, forms, classes, and IDs.
2. Learn CSS selectors, colors, fonts, the box model, Flexbox, Grid, and media queries.
3. Learn JavaScript variables, functions, conditions, events, arrays, and DOM manipulation.
4. Learn browser Developer Tools and how to read console errors.
5. Practice by changing one small thing at a time and refreshing the page.

## 12. Quick Reference

| Goal | File | What to edit |
|---|---|---|
| Change text | `index.html` | Text between HTML tags |
| Add a section | `index.html` | Add HTML with matching classes and IDs |
| Change colors | `style.css` | Variables in `:root` |
| Change layout | `style.css` | Grid, Flexbox, width, padding, and media queries |
| Add a click behavior | `index.html` and `script.js` | Add an event and its function |
| Change navigation | `index.html` and `script.js` | Page IDs and `showPage()` mapping |
| Validate a form field | `script.js` | Pattern and warning message |
| Add an image | `images/` and `index.html` | File plus `<img src="...">` |
| Add a video | `videos/` and `index.html` | File plus `<source src="...">` |

## Summary

Start with `index.html` when you want to change **what the user sees**. Start with `style.css` when you want to change **how it looks**. Start with `script.js` when you want to change **what happens after a click, scroll, input, or form submission**.

The safest learning method is to make one small change, refresh the page, and observe the result in the browser and Developer Tools.
