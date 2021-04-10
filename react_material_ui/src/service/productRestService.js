import Axios from "axios";

export const getCategory = () => ([
    { id: 1, title: 'Food' },
    { id: 2, title: 'Electric' },
    { id: 3, title: 'Other' },
]);
export function updateEmployee(data) {
    try {
        Axios.put(`/products/${data.id}`, data);
    } catch (err) {
        throw new Error(err);
    }
}
export function deleteEmployee(id) {
    try {
        Axios.delete(`/products/${id}`);
    } catch (err) {
        throw new Error(err);
    }
}
export function addEmployee(data) {
    try {
        Axios.post(`/products`, data);
    } catch (err) {
        throw new Error(err);
    }
}
export function getAllEmployee() {
    Axios.get(`/products`).then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);
        throw new Error(err);
    });
}