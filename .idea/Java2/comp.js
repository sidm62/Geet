export const restaurantRow = (restaurant) => {

    const { name, address, company } = restaurant;

    const target = document.createElement('tr');


    target.innerHTML = `
        <td>${name}</td>
        <td>${address}</td>
        <td>${company}</td>`;

    return target;
};

export const restaurantModal = (restaurant, menu) => {

    const { name, address, company } = restaurant;


    const { courses } = menu;

    let menuHTML = `<ul>`;
    if (courses && courses.length > 0) {
        courses.forEach(course => {
            menuHTML += `<li><strong>${course.name}</strong> - ${course.price || ''}</li>`;
        });
    } else {
        menuHTML += '<li>Ei menua saatavilla.</li>';
    }
    menuHTML += '</ul>';

    return `
        <h3>${name}</h3>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Company:</strong> ${company}</p>
        <hr>
        <h4>Päivän menu</h4>
        ${menuHTML}
        <button id="close-modal">Close</button>
    `;
};