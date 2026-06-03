import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesPutPut/ExpensesOutPut";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpense() {
    const expensesContext = useContext(ExpensesContext);
    return <ExpensesOutput expenses={expensesContext.expenses} expensesPeriod="Total" />
}

export default AllExpense;