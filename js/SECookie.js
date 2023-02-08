const cookieBanner = document.querySelector("#cookies");

setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    // document.cookie = cName + "=" + cValue + "; " + expires;
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split(';');
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0 ) value = val.substring(name.length);
    })
    return value;
}

document.querySelector("#cookies-btn").addEventListener("click", () => {
    cookieBanner.classList.add("hide");
    // Set cookies name, value & exp date 
    setCookie("DS_Necessary_AllowedCookies", true, 365);
})

//checks if cookies exists and show/hide cookie banner
cookieMessage = () => {
    if(getCookie("DS_Necessary_AllowedCookies")) {
        cookieBanner.classList.add("hide");
    } else {
        cookieBanner.classList.remove("hide");
    }
}

window.addEventListener("load", cookieMessage);