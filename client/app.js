// $(document).ready(function() {
//     exerciseGet();
// });
//
// function exerciseGet() {
//     const EXERCISE_URL = 'https://galvanize-eats-api.herokuapp.com/menu';
//     exerciseAJAX(MENU_URL);
// }
//
// function exerciseAJAX(url) {
//     $.ajax({
//         url: url,
//         type: "GET",
//         dataType: 'json',
//         success: showMenu,
//     });
// }

let russianTwist = {
    name: "Russian Twists",
    description: "Hold a weight with both arms for resistance. Twist your torso to the right side until your arms are parallel with the floor.Move back to the starting position and then move to the opposite side.",
    repetitions: 10,
    sets: 2,
    id: "one"
};

function showMenu(russianTwist) {
    let menuArray = data.menu;
    let $menu = $('.menu');
    for (var i = 0; i < menuArray.length; i++) {
        let item =
            `<a href="#!" class="collection-item id="${menuArray[i].name}"><span class="badge">${menuArray[i].price}</span>${menuArray[i].name}</a>`;
        $menu.append(item);
    }
    firstItemSelect();
    selectItem();
    addItem();
}




console.log(russianTwist);
