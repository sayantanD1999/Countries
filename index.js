fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => showData(data));

function showData(data) {
    console.log(data);

    var div = ' ';
    for (let i = 0; i < data.length; i++) {
        div += `<div class="card card1" id="card">
        <img src="${data[i].flag}" class="img" alt="">
        <div class="info">
            <h3 class="name" data-name=${data[i].name}>${data[i].name}</h3>
            <h5 class="capital" data-capital=${data[i].capital} > Capital : <span  class="highlight highlight1"  >${data[i].capital}</span> </h5>
            <h5 class="population"> Population : <span class="highlight highlight1"  >${data[i].population}</span> </h5>
            <h5 class="region2" data-sub_region=${data[i].region} >Region : <span class="highlight highlight1">${data[i].region}</span></h5>
        </div>
    </div> `
    }

    document.getElementsByClassName("container")[0].innerHTML = div;

}

function change_theme(e) {
    console.log(e.id);

    if (e.id == "to_dark") {
        var icons = document.getElementById(e.id);
        icons.classList.replace('fa-moon','fa-sun');


        var card = document.getElementsByClassName("card1");
        for (let i = 0; i < card.length; i++) {
            card[i].classList.replace('card', 'card_dark')
        }

        var highlight = document.getElementsByClassName("highlight1");
        for (let i = 0; i < highlight.length; i++) {
            highlight[i].classList.replace('highlight', 'highlight_dark')
        }

        var nav = document.getElementsByClassName("nav1");
        for (let i = 0; i < nav.length; i++) {
            nav[i].classList.replace('nav', 'nav_dark')
        }

        document.body.style.backgroundColor = "black";

        e.id = "to_light";
        console.log(e.id);


    }
    else {
        var icons = document.getElementById(e.id);
        icons.classList.replace('fa-sun','fa-moon');
        var card = document.getElementsByClassName("card1");
        for (let i = 0; i < card.length; i++) {
            card[i].classList.replace('card_dark', 'card')
        }

        var highlight = document.getElementsByClassName("highlight1");
        for (let i = 0; i < highlight.length; i++) {
            highlight[i].classList.replace('highlight_dark', 'highlight')
        }

        var nav = document.getElementsByClassName("nav1");
        for (let i = 0; i < nav.length; i++) {
            nav[i].classList.replace('nav_dark', 'nav')
        }

        document.body.style.backgroundColor = "rgb(231, 231, 231)";
        e.id = "to_dark";
    }



}

function filter_region(e) {
    console.log(e);
    var divs = document.querySelectorAll(".card1");
    if (e != "all") {
        for (let i = 0; i < divs.length; i++) {
            var region = divs[i].querySelector("div .region2").dataset.sub_region;
            if (e == region) {
                divs[i].style.display = "block";
            }
            else {
                divs[i].style.display = "none";
            }
        }
    }
    else {
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.display = "block";
        }
    }
}

function search(s) {
    console.log(s);
    var e = s.toLowerCase();
    var divs = document.querySelectorAll(".card1");
    for (let i = 0; i < divs.length; i++) {
        let name = divs[i].querySelector("div .name").dataset.name.toLowerCase();
        let capital = divs[i].querySelector("div .capital").dataset.capital.toLowerCase();
        console.log(name)
        if (name.includes(e) == true || capital.includes(e) == true) {
            divs[i].style.display = "block";
        }
        else {
            divs[i].style.display = "none";
        }

    }
}
