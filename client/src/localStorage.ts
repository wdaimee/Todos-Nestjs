const TOKEN_KEY: string = "stampToken";

export function saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export function getToken() {
    let token = JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}');
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem(TOKEN_KEY);
        }
    }
    return token;
};

export function getUserFromToken() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
};