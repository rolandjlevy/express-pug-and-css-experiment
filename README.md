# 🌀 Swirly thing with Node, Pug + CSS 🌀

This started off as an exercise to learn **Pug** and ended up being a lot of fun creating this interactive swirly thing.

### Links 🔗
- [PLAY THE DEMO](https://express-pug-css-swirly-thing.rolandjlevy.repl.co/)
- [VIEW THE SOURCE CODE](https://repl.it/@RolandJLevy/express-pug-css-swirly-thing)
- [EXPLORE THE GITHUB REPO](https://github.com/rolandjlevy/express-pug-and-css-experiment)

### Features 💡
- **Built using** a minimal amount of code in Express, [Pug](https://pugjs.org), JavaScript and CSS.
- **Why Pug? and what is it?** Just like EJS it's a template engine for Node which compiles to HTML. I like it because of the simplified syntax. For example to generate 25 divs with the class 'line' you just have to do this:
```html
- let count = 25;
while count--
    .line
```
- **How does the movement work?** The CSS variables determine the movement of the lines using the width, height and transform properties in the `.line` class in style.css. JavaScript is used to update the CSS variables. For example, this updates the `--size` variable for each line:

```js
$('.size').addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--size', e.target.value);
}, false);
```