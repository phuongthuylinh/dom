var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var tag = ['NodejS', 'Reactjs']

 function createTags(){
  content.innerHTML = ''
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];

    content.innerHTML += `<li>
                            ${tag}
                            <i class="fa-solid fa-xmark"></i>
                          </li>`
  }

  content.appendChild(input)
  input.focus()
 }

 
 function addTag(event){
  console.log();
}

 createTags()

 input.addEventListener('keydown'. function (Event) {
  if(Event.key = 'Enter'){
    addTag()
  }
 })
