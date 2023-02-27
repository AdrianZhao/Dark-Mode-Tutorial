## Dark Mode

Dark mode has become one of the most popular website design features. So, we've this implementation tutorial with examples. For example,  How to make a mode switch with JavaScript, and what else to consider.

There are many potential benefits of dark mode, like ```saving battery life``` and ```reducing eye-strain``` in low light environments. For some users, dark mode is an accessibility feature helping with light-triggered migraine problems. Others prefer it simply for aesthetic reasons.

On most devices/operating systems, users can enable dark mode at a system level. This usually works system-wide, including default and third-party apps. 

### Design Considertions

People always said implementing dark mode is easier than designing one. It is very important that you will take care of colors, shadows, dimmings of the iamge, balance of contrast and color palettes. But this is a small tutorial, we will make a simple one.

### Simple Dark Mode Example in HTML

```html
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
```

### Simple Dark Mode Example in CSS

```css
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

```javascript
const btn = document.querySelector('button');

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