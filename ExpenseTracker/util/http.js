import axios from "axios";

const BACKEND_URL = 'https://al-coding-projects-default-rtdb.firebaseio.com';

export function storeExpense(expenseData) {
    return axios.post(`${BACKEND_URL}/expenses.json`, expenseData);
}


export function fetchExpenses() {
    return axios.get(`${BACKEND_URL}/expenses.json`);
}

export function updateExpense(id, expenseData) {
    return axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
    return axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}



