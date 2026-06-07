import { Text } from "react-native";

import ExpensesOutput from "../components/ExpensesPutPut/ExpensesOutPut";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../UI/LodingOverlay";
import ErrorOverlay from "../UI/ErrorOverlays";

function RecentExpenses() {
    const expensesContext = useContext(ExpensesContext);
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState()
    useEffect(() => {
        async function getExpenses() {
            setIsFetching(true)
            try {
                const expenses = await fetchExpenses();
                expensesContext.setExpenses(expenses);
            } catch (error) {
                setError("could not fetch expenses")
            }
            setIsFetching(false)

        }
        getExpenses();
    }, []);
    const recentExpenses = expensesContext.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return expense.date >= date7DaysAgo && expense.date <= today;
    });
    function errorHandler() {
        setError(null)
    }
    if (isFetching) {
        return <LoadingOverlay />
    }
    if (error && !isFetching) {
        return <ErrorOverlay message={error} onConfirm={errorHandler}></ErrorOverlay>
    }
    return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days"
        fallbackText="No expenses registered for the last 7 days." />
}

export default RecentExpenses;