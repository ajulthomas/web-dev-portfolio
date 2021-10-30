const cards = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        heading: 'The Ocean'
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        heading: 'The Mountain'
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1574610910467-275254da8d3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        heading: 'The Valley'
    },
    {
        id: '4',
        image: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
        heading: 'The Beach'
    },
    {
        id: '5',
        image: 'https://images.unsplash.com/photo-1531048468035-8305c2a7fe73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80',
        heading: 'The Desert'
    },
];



function insertCards() {
    const cardsContainer = document.querySelector('.cards-container');
    for (const item of cards) {
        let card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = `url(${item.image})`;
        let heading = document.createElement('h3');
        heading.innerHTML = item.heading;
        card.appendChild(heading);
        cardsContainer.appendChild(card);
    } 
}

insertCards();