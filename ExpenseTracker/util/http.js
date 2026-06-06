import axios from "axios";

function storeExpense(expenseData) {
    return axios.post('https://al-coding-projects-default-rtdb.firebaseio.com/expenses.json', expenseData);
}
export { storeExpense };