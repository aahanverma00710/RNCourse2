import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesPutPut/ExpensesOutPut";
import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";

function AllExpense() {
    const expensesContext = useContext(ExpensesContext);
    useEffect(() => {
        async function getExpenses() {
            const expenses = await fetchExpenses();
            expensesContext.setExpenses(expenses);
        }
        getExpenses();
    }, []);
    return <ExpensesOutput expenses={expensesContext.expenses} expensesPeriod="Total" />
}

export default AllExpense;