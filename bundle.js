(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
async function backgroundImage(event){
    try {
        const accessKey = '2el08X40L0qYFrU5D9W30PUZKGVkwJ2_uL0cBrAUDOQ'
        const url = `https://api.unsplash.com/search/photos?page=1?query=${event}`
        const url1 = "https://api.unsplash.com/photos/?client_id=" +
        accessKey +
        "&query=" +
        event;
        //const response = await fetch(url, {method: 'get', headers: new Headers({'Authorization': '2el08X40L0qYFrU5D9W30PUZKGVkwJ2_uL0cBrAUDOQ'}),})
        const response = await fetch(url1)
        const imagesArray = await response.json()
        const picture = imagesArray[0].urls.full
        console.log(picture)
        document.body.style.backgroundImage = `url(${picture})`;
    } catch (err) {
        console.log(err)
    }
   
};

module.exports = {backgroundImage}
},{}],2:[function(require,module,exports){
function appendCard(userData){
    const card = createCard(userData)
    const cardParent = document.querySelector('#card')
    cardParent.appendChild(card)
};

function createCard(userData){
    let greeting = document.createElement('h1');
    greeting.textContent = userData.greeting

    let eventType = document.createElement('p');
    eventType.textContent = userData.eventType

    let message = document.createElement('p');
    message.textContent = userData.message

    const card = document.createElement('div');
    card.appendChild(greeting)
    card.appendChild(eventType)
    card.appendChild(message)

    return card
}

function destroyForm() {
    let form = document.querySelector('form')
    form.remove()
}

module.exports = {
    appendCard, createCard, destroyForm
}
},{}],3:[function(require,module,exports){
helperFuncs = require("./helpers.js");
apiFuncs = require("./api.js")

let myForm = document.getElementById('my-form');
myForm.addEventListener("submit", e => {
    e.preventDefault();
    let cardInfo = {'greeting' : e.target.greeting.value, 'eventType': e.target.event.value, 'message': e.target.message.value};
    helperFuncs.appendCard(cardInfo);
    helperFuncs.destroyForm();
    apiFuncs.backgroundImage(e.target.event.value);
})
},{"./api.js":1,"./helpers.js":2}]},{},[3]);
