const TOKEN_KEY: string = "stampToken";

export function saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export function getToken() {
    return JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}');
};

export function deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
};