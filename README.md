# Swirly thing with Pug + CSS 🌀

This started off as an exersize to learn Pug and ended up being a lot of fun creating this interactive swirly thing.

### Links 🔗
- [Try it out](https://express-pug-css-swirly-thing.rolandjlevy.repl.co/)
- [View the source code](https://repl.it/@RolandJLevy/express-pug-css-swirly-thing)
- [Explore the Github repo](https://github.com/rolandjlevy/express-pug-and-css-experiment)

### Features 
- Built using a minimal amount of code in Express, [Pug](https://pugjs.org), JavaScript and CSS.
- How does it work? The CSS variable are updated from the sliders using the following JavaScript:

```js
// update the size
$('.size').addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--size', e.target.value);
}, false);
```