# ZIZI

Digital products website. Open `index.html` in a browser, or host it on GitHub Pages / Netlify / Vercel.

## Add a new product

In `index.html`, find `const PRODUCTS = [` and copy one product block to the end of the list:

```js
{
  name: "Product name",
  tag: "eBook guide",
  description: "One or two sentences about what it is for.",
  includes: ["Point one","Point two","Point three"],
  image: "https://link-to-the-product-cover-image.png",
  url: "https://whop.com/your-new-product-link/"
}
```

Separate blocks with a comma, save and commit. The new card appears automatically.

The previous Gemini draft is kept as `zizi_storefront_showcase.html`.
