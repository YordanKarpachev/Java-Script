

export const getUserData = () => {
    const data = JSON.parse(sessionStorage.getItem("userData"));
    return data;

}

export const setUserData = (data) => {
    sessionStorage.setItem("userData", JSON.stringify(data));
}


export const clearUserData = () => {
    sessionStorage.removeItem("userData");

}
 
export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        callback(data);
    } 
}