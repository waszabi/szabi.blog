class WriteHere extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const response = await fetch("index.html");
      const html = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const sourceContent = doc.querySelector(".write-here");

      if (sourceContent) {
        sourceContent.innerHTML = this.innerHTML;

        document.open("text/html", "replace");
        document.write(doc.documentElement.outerHTML);
        document.close();
      } else {
        console.error("No .write-here found in index.html");
      }
    } catch (error) {
      console.error("Failed to load index.html:", error);
    }
  }
}

customElements.define("write-here", WriteHere);
