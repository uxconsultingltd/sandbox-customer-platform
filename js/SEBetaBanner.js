// const betaBanner = document.querySelector("#beta-banner");

// document.querySelector("#close-beta-banner").addEventListener("click", () => {
//     betaBanner.classList.add("hide");
// })

const betaBanner = document.querySelector("#beta-banner");
const iconCloseBetaBanner = document.querySelector("#close-beta-banner");

setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0 ) value = val.substring(name.length);
    })
    return value;
}

iconCloseBetaBanner.addEventListener("click", () => {
    betaBanner.classList.add("hide");
    setCookie("SE-Beta-banner", true, 1);
})

displayBetaBanner = () => {
    if(getCookie("SE-Beta-banner")) {
        betaBanner.classList.add("hide");
    } else {
        betaBanner.classList.remove("hide");
    }
}

window.addEventListener("load", displayBetaBanner);


// Add help text after trading address
var tradingAddressElement = document.querySelector('[aria-label="Trading address"]');
var legend = tradingAddressElement.getElementsByTagName('legend')[0];

var p = document.createElement("p");
p.setAttribute("id", "trading-address-help-text");
p.innerText = "Your trading address is the address where you do business – it’s the address customers, suppliers and your bank will use.";

legend.after(p);



// var termsTable = tcEl.getElementsByTagName('table')[0];
var tcEl = document.querySelector('[aria-label="Terms_Conditions"]');
var div = document.createElement("div");
div.setAttribute("class", "contact-us-terms");
div.innerHTML = "<p>You must review and accept the terms of the privacy policy to continue</p> <p>The personal details and information provided will be used to answer your enquiry and keep you updated on its progress.</p> <p>They will be stored on our system which is shared with other public sector bodies.</p> <p>By ticking the box and clicking submit you confirm that you have read and agreed to the terms of our <a href='https://www.scottish-enterprise.com/help/privacy-notice' >privacy notice</>.</p>";

tcEl.appendChild(div);