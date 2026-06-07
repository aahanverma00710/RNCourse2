import { Text } from "react-native";

import ExpensesOutput from "../components/ExpensesPutPut/ExpensesOutPut";
import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
    const expensesContext = useContext(ExpensesContext);
    useEffect(() => {
        async function getExpenses() {
            const expenses = await fetchExpenses();
            expensesContext.setExpenses(expenses);
        }
        getExpenses();
    }, []);
    const recentExpenses = expensesContext.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return expense.date >= date7DaysAgo && expense.date <= today;
    });
    return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
}

export default RecentExpenses;