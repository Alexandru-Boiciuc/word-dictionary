let dictionary = [];

function addWord() {
    let newWord = document.getElementById('newWord').value.trim();
    let message = document.getElementById('message');
    if (newWord && !dictionary.includes(newWord)) {
        dictionary.push(newWord);
        message.classList.remove('alert-danger');
        message.classList.add('alert-success');
        message.innerText = `The word "${newWord}" has been added.`;
    } else if (dictionary.includes(newWord)) {
        message.classList.remove('alert-success');
        message.classList.add('alert-danger');
        message.innerText = `The word "${newWord}" already exists in the dictionary.`;
    } else {
        message.classList.remove('alert-success');
        message.classList.add('alert-danger');
        message.innerText = "Please enter a valid word.";
    }
    document.getElementById('newWord').value = '';
}

function searchWord() {
    let searchWord = document.getElementById('searchWord').value.trim();
    let message = document.getElementById('message');
    if (searchWord) {
        if (dictionary.includes(searchWord)) {
            message.classList.remove('alert-danger');
            message.classList.add('alert-success');
            message.innerText = `The word "${searchWord}" is in the dictionary.`;
        } else {
            message.classList.remove('alert-success');
            message.classList.add('alert-danger');
            message.innerText = `The word "${searchWord}" is not in the dictionary.`;
        }
    } else {
        message.classList.remove('alert-success');
        message.classList.add('alert-danger');
        message.innerText = "Please enter a valid word to search for.";
    }
    document.getElementById('searchWord').value = '';
}
