import Cookies from "js-cookie";

export function setCookie(token, cookiesName, minutes = 0) {
  if (minutes !== 0) {
    const time = new Date(new Date().getTime() + minutes * 60 * 1000);
    return Cookies.set(cookiesName, token, { expires: time });
  }
  return Cookies.set(cookiesName, token);
}

export const getCookie = (cookieName, stringCookie = null) => {
  return Cookies.get(cookieName);
};

export const removeCookie = (cookieName, stringCookie = null) => {
  Cookies.remove(cookieName);
};

export const getCookieServer = (cookieName, stringCookie) => {
  const regExpString = new RegExp("" + cookieName + "[^;]+").exec(stringCookie);
  if (!regExpString) return "";
  const strCookie = regExpString[0];
  return unescape(strCookie ? strCookie.toString().replace(/^[^=]+./, "") : "");
};
