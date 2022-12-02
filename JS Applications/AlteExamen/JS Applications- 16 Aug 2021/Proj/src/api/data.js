import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get("data/games?sortBy=_createdOn%20desc");

}
export async function getAllLastGame(){
    return get("data/games?sortBy=_createdOn%20desc&distinct=category")
}

export function getById(id) {
    return get("data/games/" + id);

}

export function createPet(petData) {
    return post("data/games/", petData);
}


export function deleteById(id) {
    return del("data/games/" + id);

}

export function editPet(id, petData) {
    return put("data/games/" + id, petData);

}