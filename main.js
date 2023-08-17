const elForm = document.querySelector(".form");
const elSearch = document.querySelector(".search");
const elsection = document.querySelector(".title-image");
const list = document.querySelector(".list");
const div = document.querySelector(".error-box");
const text = document.querySelector(".error");
const btn = document.querySelector(".btn");
const pokename = document.querySelector(".modal-title");
const modalyear = document.querySelector(".modal__year")
const modaimage = document.querySelector(".modal__img");
const pokemonsFunction = function (searchelemet) {
    list.innerHTML = " ";
    searchelemet.forEach(element => {
        /*  create item  */
        let item = document.createElement("li");
        item.classList.add("item")
        /*  craete img */
        let image = document.createElement("img");
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
        let listSec = document.createElement("ul");
        /*  add class in list-sec */
        listSec.classList.add("list-sec");
        /*  ul>4*li */
        let itemweight = document.createElement("li");
        let itemeggs = document.createElement("li");
        let itemheight = document.createElement("li");
        let itemspawntime = document.createElement("li");
        let itemname = document.createElement("li");
        /* ******************************************************* */
        itemweight.classList.add("item-sec");
        itemeggs.classList.add("item-sec");
        itemheight.classList.add("item-sec");
        itemspawntime.classList.add("item-sec");
        itemname.classList.add("item-sec", "item-sec-name");
        /* ******************************************************* */
        let descweight = document.createElement("p");
        let desceggs = document.createElement("p");
        let descheight = document.createElement("p");
        let descspawntime = document.createElement("time");
        let descname = document.createElement("p");
        let modalbtn = document.createElement("button");
        modalbtn.classList.add("btn");
        /* ******************************************************* */
        descweight.classList.add("desc");
        desceggs.classList.add("desc");
        descheight.classList.add("desc");
        descspawntime.classList.add("desc");
        descname.classList.add("name");
        modalbtn.classList.add("btn", "btn-primary");
        modalbtn.setAttribute("data-bs-toggle", "modal")
        modalbtn.setAttribute("data-bs-target", "#exampleModal");
        modalbtn.textContent = "more.."
        modalbtn.dataset.id = element.id;
        /****************************************************** */
        item.appendChild(listSec);
        listSec.appendChild(itemweight);
        listSec.appendChild(itemheight);
        listSec.appendChild(itemeggs);
        listSec.appendChild(itemspawntime);
        listSec.appendChild(itemname);
        item.appendChild(modalbtn);
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
    })
}
pokemonsFunction(pokemons);
elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const searchvalue = elSearch.value.trim().toLowerCase();
    let newsearch = pokemons.filter(function (element) {
        return element.name.toLowerCase().includes(searchvalue);
    })
    pokemonsFunction(newsearch);

})

list.addEventListener("click", (evt) => {
    if (evt.target.matches(".btn")) {
        const btnId = evt.target.dataset.id;
        console.log(btnId);
        const finded = pokemons.find(element => {
            return element.id== btnId;
        });
        pokename.textContent = finded.name;
        modalyear.textContent = finded.weaknesses;
        modaimage.setAttribute("src", `${finded.img}`)
    }

})

// if (evt.target.matches(".btn-remove")) {
//     const deletId = evt.target.dataset.id;
//     const findobj = array.findIndex(item => {
//         return item.id = deletId;
//     });





