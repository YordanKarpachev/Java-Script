import { del, get, post } from "./api.js";

export async function getAll() {
    return get("data/albums?sortBy=_createdOn%20desc&distinct=name");

}

export function getById(id) {
    return get("data/albums/" + id);

}

export function createCard(data) {
    return post("data/albums/", data);
}


export function deleteById(id) {
    return del("data/albums/" + id);

}

export function editPet(id, petData) {
    return put("data/albums/" + id, petData);

}