
export const setItemStorage = (key: string, value: string): void => {
    localStorage.setItem(key, value);
}

export const getItemStorage = (key: string): string | null => {
    return localStorage.getItem(key);
}

export const removeItemStorage = (key: string): void => {
    localStorage.removeItem(key);
}