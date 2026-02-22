# Creating an Article

This project uses the `<write-here>` web component to manage article content. Here's an example of how to create an article:

## Basic Structure

Create an HTML file with the following structure:

```html
<script src="write-here.js"></script>
<write-here>
    <article>
        <header>
            <h2>Sample Article</h2>
            <p>Published on <time datetime="2026-02-22">February 22, 2026</time></p>
        </header>

        <section>
            <h3>Introduction</h3>
            <p>This is the main content of the article with paragraphs of text.</p>
            <figure>
                <img src="example.jpg" alt="Example image">
                <figcaption>Image caption goes here.</figcaption>
            </figure>
        </section>

        <section>
            <h3>Key Points</h3>
            <ul>
                <li>First key point with details.</li>
                <li>Second key point with more info.</li>
                <li>Third point in the list.</li>
            </ul>
        </section>

        <footer>
            <address>Written by Szabi</address>
            <a href="/related1">Related Article 1</a>
            <a href="/related2">Related Article 2</a>
        </footer>
    </article>
</write-here>
```

## How It Works

1. Include the `write-here.js` script at the top
2. Wrap your article content inside the `<write-here>` custom element
3. Use semantic HTML elements: `<article>`, `<header>`, `<section>`, `<footer>`, `<address>`
4. The component automatically injects your content into `index.html` when the page loads

## Best Practices

- Use `<h2>` for the main article title
- Use `<h3>` for section headings
- Include publication date in `<time>` element
- Add author information in `<footer><address>`
- Use `<figure>` and `<figcaption>` for images
- Keep related links in the footer
