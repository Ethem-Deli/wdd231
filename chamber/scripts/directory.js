
// Toggle between Grid and List views
document.getElementById('grid-view').addEventListener('click', () => {
    document.body.classList.remove('list-view');
    document.body.classList.add('grid-view');
    loadBusinessCards('grid');
});

document.getElementById('list-view').addEventListener('click', () => {
    document.body.classList.remove('grid-view');
    document.body.classList.add('list-view');
    loadBusinessCards('list');
});

// Load grid view by default
loadBusinessCards('grid');