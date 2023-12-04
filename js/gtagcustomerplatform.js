//This code sits in the <head> before GA code for tracking
getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0 ) value = val.substring(name);
    })
    return value;
}

enableGtag = () => {
    setTimeout(
        gtag('consent', 'update', {
            'analytics_storage': 'granted',
        }), 300);
};

disableGtag = () => {
    setTimeout(
        gtag('consent', 'update', {
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
};

// Define dataLayer and the gtag function.
window.dataLayer = window.dataLayer || [];

function gtag(){ dataLayer.push(arguments); console.log('gtag data layer call');}

// Default gtag values
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'wait_for-update': 2000,
});

setTracking();

//GA code for tracking should go here below gtag code



// This code was moved to the 'cookies-modal' template
window.addEventListener("load",
    function () {
        const cookieModal = document.getElementById('cookies');
        const acceptAllCookiesOverview = document.getElementById('accept-all-cookies-overview');
        const editCookies = document.getElementById('edit-cookie-settings');
        const acceptAllCookies = document.getElementById('accept-all-cookies');
        const saveCookiePreferences = document.getElementById('save-cookie-preferences');
        const cookiesOverview = document.getElementById('cookies-overview');
        const cookiesAdvancedSettings = document.getElementById('cookies-advanced-settings');

        const performanceCookies = document.getElementById('performance-cookies');
        const performanceCookiesLabel = document.getElementById('performance-cookies-label');


    setCookie = (cName, cValue, expDays) => {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    };

    deleteCookie = (cName) => {
        setCookie(cName, '', -1);
    };

    editCookies.addEventListener('click', () => {
        cookiesOverview.classList.add('hide');
        cookiesAdvancedSettings.classList.remove('hide');         
    });

    // Accept all cookies (overview)
    acceptAllCookiesOverview.addEventListener("click", () => {
        agreeToAllCookies();
    });

    //Accept all cookies (edit)
    acceptAllCookies.addEventListener("click", () => {
        agreeToAllCookies();
    });

    //Add/remove performance cookies
    performanceCookies.addEventListener('click', () => {
        if (performanceCookies.checked == true) {
            performanceCookiesLabel.innerText = 'On';
        } else {
            performanceCookiesLabel.innerText = 'Off';

        }
    });

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
    });
    
    agreeToAllCookies = () => {
        setCookie("SE_Necessary_Cookies", true, 365);
        setCookie("SE_Performance_Cookies", true, 365);
        enableGtag();
        cookieModal.classList.add("hide");
    };

    toggleCookieBanner = () => {
        if(getCookie("SE_Necessary_Cookies")) {
            cookieModal.classList.add("hide");
        } else {
            cookieModal.classList.remove("hide");
        }
    }

    toggleCookieBanner();
});