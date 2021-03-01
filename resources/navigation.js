document.addEventListener("DOMContentLoaded", function(event) {
    const menuItems = document.getElementsByClassName("menu-item");
    console.log('menuItems', menuItems)

    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];

        menuItem.addEventListener('click', function() {
            for (let j = 0; j < menuItems.length; j++) {
                if (menuItems[j].classList.contains('selected')) {
                    menuItems[j].classList.remove("selected");
                } else {
                    continue;
                }
            }
            menuItem.classList.add("selected");
            const dataSection = menuItem.dataset.content;
            console.log('dataSection', dataSection)
            const contentElement = document.getElementsByClassName("content");
            for (let k = 0; k < contentElement.length; k++) {
                if (contentElement[k].classList.contains('hidden')) {
                    continue;
                } else {
                    contentElement[k].classList.add("hidden");
                }
            }
            document.getElementsByClassName(dataSection)[0].classList.remove("hidden");

            menuItem.classList.add("selected");
            const logo = menuItem.dataset.logo;
            console.log('logo', logo)
            const logoElement = document.getElementsByClassName("logo");
            for (let l = 0; l < logoElement.length; l++) {
                if (logoElement[l].classList.contains('hidden')) {
                    continue;
                } else {
                    logoElement[l].classList.add("hidden");
                }
            }
            document.getElementsByClassName(logo)[0].classList.remove("hidden");
        });
    }
});