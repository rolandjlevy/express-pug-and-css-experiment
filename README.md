# Swirly thing with Pug + CSS 🌀

This started off as an exersize to learn Pug and ended up being a lot of fun creating this interactive swirly thing.

### Links 🔗
- [Try it out](https://express-pug-css-swirly-thing.rolandjlevy.repl.co/)
- [View the source code](https://repl.it/@RolandJLevy/express-pug-css-swirly-thing)
- [Explore the Github repo](https://github.com/rolandjlevy/express-pug-and-css-experiment)

### Features 
- Built using a minimal amount of code in Express, [Pug](https://pugjs.org), JavaScript and CSS.
- How does it work? The CSS variables determine the movement of the lines using the width, height and transform properties in the `.line` class in style.css. JavaScript is used to update the CSS variables. For example, this updates the `--size` variable for each line:

```js
$('.size').addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--size', e.target.value);
}, false);
```