const elForm = document.querySelector(".form");
const elSearch = document.querySelector(".search");
const elsection = document.querySelector(".title-image");
const list = document.querySelector(".list");
const div = document.querySelector(".error-box");
const text=document.querySelector(".error");
const pokemonsFunction = function (searchelemet) {
    list.innerHTML = " ";
    console.log(searchelemet);
    searchelemet == [] ? alert("bosh") : searchelemet.forEach(element => {
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
    })
}
pokemonsFunction(pokemons);

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const searchvalue = elSearch.value.trim().toLowerCase();
    let newsearch = pokemons.filter(function (element) {
       
        return  element.name.toLowerCase().includes(searchvalue);
    })
    pokemonsFunction(newsearch); 
 
})





