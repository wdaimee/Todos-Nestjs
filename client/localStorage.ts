const TOKEN_KEY = "stampToken";

export function saveToken(token) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export function getTokens() {
    return JSON.parse(localStorage.getItem(TOKEN_KEY));
};

export function deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
};