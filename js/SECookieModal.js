const cookieModal = document.getElementById('cookies');
const acceptAllCookiesOverview = document.getElementById('accept-all-cookies-overview');
const editCookies = document.getElementById('edit-cookie-settings');
const acceptAllCookies = document.getElementById('accept-all-cookies');
const saveCookiePreferences = document.getElementById('save-cookie-preferences');
const cookiesOverview = document.getElementById('cookies-overview');
const cookiesAdvancedSettings = document.getElementById('cookies-advanced-settings');

const performanceCookies = document.getElementById('performance-cookies');
const performanceCookiesLabel = document.getElementById('performance-cookies-label');

const functionalCookies = document.getElementById('functional-cookies');
const functionalCookiesLabel = document.getElementById('functional-cookies-label');

const marketingCookies = document.getElementById('marketing-cookies');
const marketingCookiesLabel = document.getElementById('marketing-cookies-label');


//Hide cookies overviews and display coookies managment state
editCookies.addEventListener('click', () => {
    cookiesOverview.classList.add('hide');
    cookiesAdvancedSettings.classList.remove('hide');
});

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
        // if(val.indexOf(name) === 0 ) value = val.substring(name.length);
        if(val.indexOf(name) === 0 ) value = val.substring(name);
    })
    return value;
}

deleteCookie = (cName) => {
    setCookie(cName, '', -1);
}

// Accept all cookies (overview state)
acceptAllCookiesOverview.addEventListener("click", () => {
    agreeToAllCookies();
})

acceptAllCookies.addEventListener("click", () => {
    agreeToAllCookies();
})

//Add/remove performance cookies
performanceCookies.addEventListener('click', () => {
    if (performanceCookies.checked == true) {
        setCookie("SE_Performance_Cookies", true, 365);
        performanceCookiesLabel.innerText = 'On';
    } else {
        deleteCookie("SE_Performance_Cookies");
        performanceCookiesLabel.innerText = 'Off';
    }
});

//Add/remove functional cookies
functionalCookies.addEventListener('click', () => {
    if (functionalCookies.checked == true) {
        setCookie("SE_Functional_Cookies", true, 365);
        functionalCookiesLabel.innerText = 'On';
    } else {
        deleteCookie("SE_Functional_Cookies");
        functionalCookiesLabel.innerText = 'Off';
    }
});

//Add/remove marketing cookies 
marketingCookies.addEventListener('click', () => {
    if (marketingCookies.checked == true) {
        setCookie("SE_Marketing_Cookies", true, 365);
        marketingCookiesLabel.innerText = 'On';
    } else {
        deleteCookie("SE_Marketing_Cookies");
        marketingCookiesLabel.innerText = 'Off';
    }
});

saveCookiePreferences.addEventListener("click", () => {
    setCookie("SE_Necessary_Cookies", true, 365);
    cookieModal.classList.add("hide"); 
})

cookieMessage = () => {
    if(getCookie("SE_Necessary_Cookies")) {
        cookieModal.classList.add("hide");
    } else {
        cookieModal.classList.remove("hide");
    }
}

agreeToAllCookies = () => {
    setCookie("SE_Necessary_Cookies", true, 365);
    setCookie("SE_Performance_Cookies", true, 365);
    setCookie("SE_Functional_Cookies", true, 365);
    setCookie("SE_Marketing_Cookies", true, 365);
    cookieModal.classList.add("hide");
}

window.addEventListener("load", cookieMessage);


//Checks if cookies exists and show/hide cookie banner
// !! This functionality is not required !! 
//TODO: check if performance cookies exists and show/hide modal
//TODO: check if functional cookies exists and show/hide modal
//TODO: check if marketing cookies exists and show/hide modal
