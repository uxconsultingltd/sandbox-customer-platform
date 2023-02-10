const cookieModal = document.getElementById('cookies');
const acceptAllCookiesOverview = document.getElementById('accept-all-cookies-overview');
const editCookies = document.getElementById('edit-cookie-settings');
const acceptAllCookies = document.getElementById('accept-all-cookies');
const saveCookiePreferences = document.getElementById('save-cookie-preferences');
const cookiesOverview = document.getElementById('cookies-overview');
const cookiesAdvancedSettings = document.getElementById('cookies-advanced-settings');

const performanceCookies = document.getElementById('performance-cookies');
const performanceCookiesLabel = document.getElementById('performance-cookies-label');



//Hide cookies overviews and display cookies edit state
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

// Accept all cookies (overview)
acceptAllCookiesOverview.addEventListener("click", () => {
    agreeToAllCookies();
})

//Accept all cookies (edit)
acceptAllCookies.addEventListener("click", () => {
    agreeToAllCookies();
})

agreeToAllCookies = () => {
    setCookie("SE_Necessary_Cookies", true, 365);
    setCookie("SE_Performance_Cookies", true, 365);
    // enableGtag();
    cookieModal.classList.add("hide");
}


//1st approach enable/disable gtag when toggle clicked
//Add/remove performance cookies
performanceCookies.addEventListener('click', () => {
    if (performanceCookies.checked == true) {
        performanceCookiesLabel.innerText = 'On';
        // setCookie("SE_Performance_Cookies", true, 365);
        // enableGtag();
    } else {
        performanceCookiesLabel.innerText = 'Off';
        // deleteCookie("SE_Performance_Cookies");
        // disableGtag();
    }
});

//2nd approach enable/disable gtag when 'save cookies' btn clicked
saveCookiePreferences.addEventListener("click", () => { 
    setCookie("SE_Necessary_Cookies", true, 365);

    if (performanceCookies.checked == true) {
        setCookie("SE_Performance_Cookies", true, 365);
        enableGtag();
    } else {
        deleteCookie("SE_Performance_Cookies");
        disableGtag();
    }

    cookieModal.classList.add("hide"); 
})

toggleCookieBanner = () => {
    if(getCookie("SE_Necessary_Cookies")) {
        cookieModal.classList.add("hide");
    } else {
        cookieModal.classList.remove("hide");
    }
}


// TODO: add gtag
// Define dataLayer and the gtag function.
window.dataLayer = window.dataLayer || [];

function gtag(){dataLayer.push(arguments);}

// Default gtag values
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'wait_for-update': 2000,
});


enableGtag = () => {
    // window['ga-disable-G-R0VW66LFWP'] = false;
    setTimeout(
        gtag('consent', 'update', {
            'ad_stoarage': 'granted',
            'analytics_storage': 'granted',
        }), 300);
};


disableGtag = () => {
    // window['ga-disable-G-R0VW66LFWP'] = true;
    setTimeout(
        gtag('consent', 'update', {
            'ad_stoarage': 'denied',
            'analytics_storage': 'denied',
        }), 300);
};


//enable/disable GA on page load
setTracking = () => {
    if(getCookie("SE_Performance_Cookies")) {
        enableGtag();
    } else {
        disableGtag();
    }
}

window.addEventListener("load", toggleCookieBanner);
window.addEventListener("load", setTracking);