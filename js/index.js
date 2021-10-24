
"use strict";

function updatePreview() {
 let previewElement = document.getElementById("preview");
 let editorValue = document.getElementById("editor").value;
 let markedUpHTML = marked(editorValue);
 previewElement.innerHTML = marked(markedUpHTML);
}

document.onload = setDefault();
function setDefault() {
let defaultText = `\
# This is h1
## this is h2
[This is link about Markdown](https://en.wikipedia.org/wiki/Markdown)

<dl>
<dt>Definition list</dt>
<dd>Is something people use sometimes.</dd>
<dt>Markdown in HTML</dt>
<dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`
function codeBlock() {
  return code;
}
 \`\`\`

- This
- is
- an 
- list


> This is an example of block quote

**This is an example of bolded text**

This is example of image.
![hamo](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)`;

  let editorField = document.getElementById("editor");
  let previewElement = document.getElementById("preview");
  editorField.value = defaultText;
  previewElement.innerHTML = marked(defaultText);

}

marked.setOptions({
  breaks: true
})