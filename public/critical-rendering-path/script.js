const hidden = document.querySelector('.hidden');
hidden.style.display = 'block';
const gopher = document.createElement('p');
gopher.textContent = 'I am a gopher';
hidden.appendChild(gopher);