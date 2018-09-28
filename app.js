
var list = document.querySelector('#wedding-list ul');
var forms = document.forms;

/*delete weddings with Arrow 
list.addEventListener('click', (delete) => {
    if(e.target.className === 'delete') {
    var li = e.target.parentElement;
    li.parentNode.removeChild(li);
}
// });*/

list.addEventListener('click', function (del) {
    if (del.target.className === 'delete') {
        var li = del.target.parentElement;
        li.parentNode.removeChild(li);
    }
});



var addForm = forms['add-wedding'];
addForm.addEventListener('submit', function (add) {
    add.preventDefault();

    // create elements
    var value = addForm.querySelector('input[type="text"]').value;
    var li = document.createElement('li');
    var weddingName = document.createElement('span');
    var deleteBtn = document.createElement('span');

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

var searchBar = forms['search-data'].querySelector('input');
searchBar.addEventListener('keyup', function (find) {
    var weddings = list.getElementsByTagName('li');
    Array.from(weddings).forEach(function (wedding) {
        var title = wedding.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(find.target.value) != -1) {
            wedding.style.display = 'block';
        } else {
            wedding.style.display = 'none';
        }
    });
});