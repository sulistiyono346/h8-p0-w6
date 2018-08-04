const list = document.querySelector('#wedding-list ul');
const forms = document.forms;

// delete weddings
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add weddings
const addForm = forms['add-wedding'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const weddingName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  weddingName.textContent = value;
  deleteBtn.textContent = 'delete';

  // add classes
  weddingName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(weddingName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

// hide weddings
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// filter weddings
const searchBar = forms['search-weddings'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const weddings = list.getElementsByTagName('li');
  Array.from(weddings).forEach((wedding) => {
    const title = wedding.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      wedding.style.display = 'block';
    } else {
      wedding.style.display = 'none';
    }
  });
});

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});
