var elsection = document.querySelector(".title-image");
var list = document.querySelector(".list");
var titleImage = document.createElement("img");
titleImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pok%C3%A9mon_GO_logo.svg/1200px-Pok%C3%A9mon_GO_logo.svg.png");
titleImage.setAttribute("width", "60%");
titleImage.setAttribute("height", "300px");
elsection.appendChild(titleImage);
titleImage.classList.add("title-img");
var pokemonsFunction = function () {
    pokemons.forEach(element => {
        /*  create item  */
        var item = document.createElement("li");
        item.classList.add("item")
        /*  craete img */
        var image = document.createElement("img");
        /*  craete image as class */
        image.classList.add("image");
        /*  add images as atribut */
        image.setAttribute("src", `${element.img}`);
        image.setAttribute("width", "120");
        image.setAttribute("height", "120");
        /*  craete bottom for div */
        list.appendChild(item);
        item.appendChild(image);
        /* ******************************** */
        var listSec = document.createElement("ul");
        /*  add class in list-sec */
        listSec.classList.add("list-sec");
        /*  ul>4*li */
        var itemweight = document.createElement("li");
        var itemweight = document.createElement("li");
        var itemeggs = document.createElement("li");
        var itemheight = document.createElement("li");
        var itemspawntime = document.createElement("li");
        var itemname = document.createElement("li");
        /* ******************************************************* */
        itemweight.classList.add("item-sec");
        itemeggs.classList.add("item-sec");
        itemheight.classList.add("item-sec");
        itemspawntime.classList.add("item-sec");
        itemname.classList.add("item-sec", "item-sec-name");
        /* ******************************************************* */
        var descweight = document.createElement("p");
        var desceggs = document.createElement("p");
        var descheight = document.createElement("p");
        var descspawntime = document.createElement("time");
        var descname = document.createElement("p");
        /* ******************************************************* */
        descweight.classList.add("desc");
        desceggs.classList.add("desc");
        descheight.classList.add("desc");
        descspawntime.classList.add("desc");
        descname.classList.add("name");
        /****************************************************** */
        item.appendChild(listSec);
        listSec.appendChild(itemweight);
        listSec.appendChild(itemheight);
        listSec.appendChild(itemeggs);
        listSec.appendChild(itemspawntime);
        listSec.appendChild(itemname);
        /* *********************************************** */
        itemweight.appendChild(descweight);
        itemeggs.appendChild(desceggs);
        itemheight.appendChild(descheight);
        itemspawntime.appendChild(descspawntime);
        itemname.appendChild(descname);
        /* ******************************************************* */
        descweight.textContent = `weight: ${element.weight}`
        desceggs.textContent = `egg: ${element.egg}`
        descheight.textContent = `height: ${element.height}`
        descspawntime.textContent = `
         spawn_time: ${element.spawn_time}`
        descname.textContent = `name: ${element.name}`
    });
}
pokemonsFunction();





