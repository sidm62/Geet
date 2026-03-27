const taulu = document.querySelector('#target');
const modal = document.querySelector('#modal');

const url = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

async function getRestaurants() {
    try {

        const response = await fetch(`${url}/restaurants`);
        if (!response.ok) throw new Error('Haku epäonnistui');

        const restaurants = await response.json();


        restaurants.sort((a, b) => a.name.localeCompare(b.name));

        taulu.innerHTML = '';

        for (const restaurant of restaurants) {
            const tr = document.createElement('tr');

            tr.addEventListener('click', async () => {

                document.querySelectorAll('.highlight').forEach(elem => {
                    elem.classList.remove('highlight');
                });
                tr.classList.add('highlight');

                modal.innerHTML = '<p>Ladataan menua...</p>';
                modal.showModal();

                try {

                    const menuRes = await fetch(`${url}/restaurants/daily/${restaurant._id}/fi`);
                    const menuData = await menuRes.json();


                    let menuHtml = '<ul>';
                    if (menuData.courses && menuData.courses.length > 0) {
                        menuData.courses.forEach(course => {
                            menuHtml += `<li><strong>${course.name}</strong> - ${course.price || ''}</li>`;
                        });
                    } else {
                        menuHtml += '<li>Ei menua saatavilla.</li>';
                    }
                    menuHtml += '</ul>';


                    modal.innerHTML = `
            <h3>${restaurant.name}</h3>
            <p><strong>Address:</strong> ${restaurant.address}</p>
            <p><strong>Company:</strong> ${restaurant.company}</p>
            <hr>
            <h4>Päivän menu</h4>
            ${menuHtml}
            <button id="close-modal">Close</button>
          `;

                    document.querySelector('#close-modal').addEventListener('click', () => {
                        modal.close();
                    });

                } catch (error) {
                    modal.innerHTML = `<p>Virhe valikon latauksessa: ${error.message}</p>
                             <button onclick="modal.close()">Sulje</button>`;
                }
            });


            const td1 = document.createElement('td');
            td1.innerText = restaurant.name;

            const td2 = document.createElement('td');
            td2.innerText = restaurant.address;

            const td3 = document.createElement('td');
            td3.innerText = restaurant.city;

            tr.append(td1, td2, td3);
            taulu.append(tr);
        }
    } catch (error) {
        console.error('Virhe:', error);
        taulu.innerHTML = `<tr><td colspan="3">Virhe ladattaessa ravintoloita.</td></tr>`;
    }
}


getRestaurants();