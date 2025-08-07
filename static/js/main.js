
document.addEventListener('DOMContentLoaded', function () {
    fetch('/gallery.json')
        .then(response => response.json())
        .then(data => {
            const gallery = document.querySelector('.gallery');
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                if (item.type === 'image') {
                    card.innerHTML = `<img src="${item.url}" alt="${item.title}">`;
                } else if (item.type === 'video') {
                    card.innerHTML = `<iframe src="${item.url}" frameborder="0" allowfullscreen></iframe>`;
                }
                gallery.appendChild(card);
            });
        });
});
