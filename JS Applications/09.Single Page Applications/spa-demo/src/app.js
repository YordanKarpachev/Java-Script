document.getElementById('homeBtn').addEventListener('click', () => {
    document.querySelector('main').innerHTML = '<h2>Home Pate</h2><p>Welcome to our side!</p>';
});

document.getElementById('catalogBtn').addEventListener('click', () => {
    document.querySelector('main').innerHTML = 
    '<h2>Catalog</h2> <ul><li>Product1</li><li>Product2</li><li>Product3</li></ul > ';
});

document.getElementById('aboutBtn').addEventListener('click', () => {
    document.querySelector('main').innerHTML = '<h2>About us</h2><p>Phone: 0176...</p>';
});
