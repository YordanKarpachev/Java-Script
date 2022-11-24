import { del, get, post } from "./api.js";

export async function getAll() {
    return get("data/pets?sortBy=_createdOn%20desc&distinct=name");

}

export function getById(id) {
    return get("data/pets" + id);

}

export function createPet(petData) {
    return post("data/pets", petData);
}


export function deleteById(id) {
    return del("data/pets" + id);

}

export function editPet(id, petData) {
    return put("data/pets" + id, petData);

}