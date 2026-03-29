import {url} from './url.js';
import {fetchData} from './fetchData.js';
import {restaurantRow} from './comp.js';



const taulu = document.querySelector('#target');
const modal = document.querySelector('#modal');

let allRestaurants = [];

const Table = (restaurants) => {
    taulu.innerHTML = '';


    restaurants.forEach(restaurant => {
        const tr = restaurantRow(restaurant);

        tr.addEventListener('click', async (e) => {
            document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
            tr.classList.add('highlight');

            modal.innerHTML = '<p>Loading</p>';
            modal.showModal();

            try {
                const menuData = await fetchData(`${url}/restaurants/daily/${restaurant._id}`);
                modal.innerHTML = restaurantModal(restaurant, menuData);
                const close = modal.querySelector('#close-modal');
                close.addEventListener('click', (e) => modal.close());
            } catch (error) {
                modal.innerHTML = error.message;
            }
        });
        taulu.append(tr);
    });
}








async function getRestaurants() {
    try {

        allRestaurants = await fetchData(`${url}/restaurants`);
        allRestaurants.sort((a, b) => a.name.localeCompare(b.name));
        Table(allRestaurants);


    } catch (error) {
        taulu.innerHTML = error.message;
    }
}

const fbtn = document.querySelector('#fbtn');
const copassBtn = document.querySelector('#copass');
const allbtn = document.querySelector('#allbtn');

fbtn.addEventListener('click', (e) => {
    const filtered = allRestaurants.filter(r => r.company === 'Sodexo');
    Table(filtered);
});

copassBtn.addEventListener('click', (e) => {
    const filtered = allRestaurants.filter(r => r.company === 'Compass');
    Table(filtered);
});

allbtn.addEventListener('click', (e) => {
    Table(allRestaurants);
})


getRestaurants();