window.onload = function () {
  const input = document.getElementById("markdown-input");
  const output = document.getElementById("preview");

  const defaultText = `# Welcome to MarkPeek! 👋

## Features:
- **Bold text**
- *Italic text*
- ~~Strikethrough~~
- \`Inline code\`

> Blockquotes are supported!

## Code block:
\`\`\`
function hello() {
  console.log("Hello, Markdown!");
}
\`\`\`

[Visit GitHub](https://github.com)

Happy writing! 🎉`;

  input.value = defaultText;
  output.innerHTML = marked.parse(defaultText);

  // Word + Line count
  updateCounts(input.value);

  // Live preview and count
  input.addEventListener("input", function () {
    const rawText = this.value;
    output.innerHTML = marked.parse(rawText);
    updateCounts(rawText);
  });
};

function updateCounts(text) {
  const lineCount = document.getElementById("line-count");
  const wordCount = document.getElementById("word-count");

  const lines = text.split('\n').filter(line => line.trim() !== '');
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);

  lineCount.textContent = lines.length;
  wordCount.textContent = words.length;
}
