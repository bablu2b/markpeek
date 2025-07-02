function applyMarkdown(type) {
    const textarea = document.getElementById("markdown-input");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end);
    let replacement = selected;
  
    switch (type) {
      case 'bold':
        replacement = `**${selected}**`;
        break;
      case 'italic':
        replacement = `*${selected}*`;
        break;
      case 'strike':
        replacement = `~~${selected}~~`;
        break;
      case 'quote':
        replacement = selected.split('\n').map(line => `> ${line}`).join('\n');
        break;
      case 'code':
        replacement = `\`${selected}\``;
        break;
    }
  
    // Replace the selected text
    textarea.setRangeText(replacement, start, end, 'end');
  
    // Trigger the input event so the preview updates
    textarea.dispatchEvent(new Event('input'));
  }
  