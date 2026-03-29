export const restaurantRow = (restaurant) => {
    const { name, aderess } = restaurant;
    const target = document.createElement('tr');
    tr.innerHTML = `<td>${name}</td>
    <td>${company}</td>`;
    return target;
};

export const restaurantModal = (restaurant, menu) => {
    const {naem, adress, company} = restaurant;
    const {course} = menu;

    let menuHTML = `<ul>`;
    if (course && course.length > 0) {
        course.forEach(course => {
            menuHTML += `<li><strong>${course.name}</strong> - ${course.price || ''}</li>`;
        });
    } else {
        menuHTML += '<li>Ei menua saatavilla.</li>';
    }
    menuHTML += '</ul>';

    return `
        <h3>${name}</h3>
        <p><strong>Address:</strong> ${adress}</p>
        <p><strong>Company:</strong> ${company}</p>
        <hr>
        <h4>Päivän menu</h4>
        ${menuHTML}
        <button id="close-modal">Close</button>
    `;
};