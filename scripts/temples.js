const last_modification = document.querySelector('#last_modification');
last_modification.innerHTML = new Date(document.lastModified).toLocaleString();