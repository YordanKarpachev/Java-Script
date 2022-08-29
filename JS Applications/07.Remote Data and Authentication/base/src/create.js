document.querySelector('form').addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();

    const formDate = new formDate(event.target);

    const name = formDate.get('name').trim();
    const img = formDate.get('img').trim();
    const ingredients = formDate.get('ingredients').trim().split('\n');
    const steps = formDate.get('steps').trim().split('\n');

    const recipe = {
        name,
        img,
        ingredients,
        steps
    };

    const token = sessionStorage.getItem('accessToken');

    if(token == null){
        alert('Please login!');
        window.location = '/login.html';
        return;
    }

    try {
        const response = await fetch('http://localhost:3030/data/recipes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(recipe)
        });
    
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);

        }
        window.location = '/';

    } catch (err) {
        alert(err.message);
    }

}