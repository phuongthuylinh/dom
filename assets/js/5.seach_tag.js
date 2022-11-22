var content = document.querySelector(".content");
var input = document.querySelector(".content input");
var tag = ["Nodejs", "Reactjs"];

function createtag() {
  content.innerHTML = "";
  let vitsualTagDom = "";
  for (let i = 0; i < tag.length; i++) {
    const tag = tags[i];
    content.innerHTML += `
                          <li>
                          ${tag}
                          <i class="fa-solid fa-x"></i>
                          </li>
                            `;
  }
  content.appendChild(input)
  input.focus()
}

createtag()

