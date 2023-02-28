## Dark Mode

Dark mode has become one of the most popular website design features. So, we've this implementation tutorial with examples. For example,  How to make a mode switch with JavaScript, and what else to consider.

There are many potential benefits of dark mode, like ```saving battery life``` and ```reducing eye-strain``` in low light environments. For some users, dark mode is an accessibility feature helping with light-triggered migraine problems. Others prefer it simply for aesthetic reasons.

On most devices/operating systems, users can enable dark mode at a system level. This usually works system-wide, including default and third-party apps. 

### Demo

Click [here](https://adrianzhao.github.io/Dark-Mode-Tutorial/) to test the application.

### Design Considertions

People always said implementing dark mode is easier than designing one. It is very important that you will take care of colors, shadows, dimmings of the iamge, balance of contrast and color palettes. But this is a small tutorial, we will make a simple one. 

### Simple Dark Mode Example in HTML

What you have to do is creating a simple page with a simple button. Don't forget to put the button and any paragraph in the container. Let's put the button in to a section, to organize our code. We add a H2 to have more content to show the dark mode.

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewpoint" content="width=device-width, initinal-scale=1">
    <meta name="author" content="Yuhan Zhao">
    <meta name="discription" content="My Web Page">
    <meta name="keywords" content="html, css, web, web development, seo">
    <title>Simple Darkmode</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@300;600&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet" href="./assets/style/index.css" media="all">
    <script src="./assets/scripts/index.js" defer></script>
  </head>
  <body class="body">
    <main>
      <div class="container">
        <h2>Try This</h2>
        <section>
          <button>Try Daymode</button>
        </section>
      </div>
    </main>
  </body>
</html>
```

### Simple Dark Mode Example in CSS

In css you have to address the button and the backgroud color of the page. If you can, address the button color and the letters on the button, as well as any paragraph in the webpage. We will set the body background color to some light color as a day mode, and we'll use some darker color as night mode. Then we will make the button looks like a button. And set the color for both day mode and night mode of the button.

```css
html {
  font-family: Sofia Sans, sans-serif;
  transition: color 0.25s, ease-in-out;
}
.body {
  width: 100%;
  height: 100vh;
  background-color: #262223;
}
.container {
  width: min(100% - 30px, 1080px);
  margin-inline: auto;
}
.body.daymode {
  background-color: #ddc6b6;
}
h2 {
  margin-top: 50px;
  color: #ddc6b6;
  transition: color 0.5s ease-in-out;
}
.body.daymode h2 {
  color: #262223;
}
button {
  margin-top: 40px;
  background-color: #ddc6b6;
  width: 150px;
  height: 48px;
  text-align: center;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
  color: #262223;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: color 0.5s ease-in-out;
} 
.body.daymode button {
  background-color: #262223;
  color: #ddc6b6;
}
```

### Simple Dark Mode Example in JavaScript

It is very simple in JS. The only thing you need to do is add a ```addEventListener``` and a ```document.querySelector``` to make sure the JS could run the code. The ```addEventListener('click', () => {})``` is basicly used to track you mouse click, after you click, will run the arrow function after the click. In the function, there is a ```.classList.toggle```, which is used as a toggle. Whenever you click it, it will run and determaine which mode are you in at the moment, and choose the right color theme to perform. The ```.classList.contains``` is to check if it is already in 'daymode' , if is, then gose into 'nightmode', if not, gose 'daymode'. The ```.innerText``` is used to change the text in the button.

```javascript
const btn = document.querySelector('button');
const body = document.querySelector('body')

btn.addEventListener('click', () => {
  body.classList.toggle('daymode');
  if(body.classList.contains('daymode')){
    btn.innerText = 'Try Nightmode';
  } else {
    btn.innerText = 'Try Daymode';
  }
});
```

### References

- [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
- [How TO - Toggle Dark Mode](https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp)
- [A beginner's guide to making a dark theme for a website](https://opensource.com/article/22/9/dark-theme-website)
- [Dark Mode - The prefers-color-scheme Website Tutorial](https://www.ditdot.hr/en/dark-mode-website-tutorial)