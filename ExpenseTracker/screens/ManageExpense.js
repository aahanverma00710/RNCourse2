import { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../UI/Button";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";

function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;

    const isEditing = !!editedExpenseId;
    const expensesContext = useContext(ExpensesContext);
    const selectedExpense = expensesContext.expenses.find(expense => expense.id === editedExpenseId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);



    function deleteExpenseHandler() {
        console.log("Deleting expense...");
        if (isEditing) {
            console.log("Expense ID:", editedExpenseId);
            expensesContext.deleteExpense(editedExpenseId);
        }

        navigation.goBack();
    }
    function canelHandler() {
        navigation.goBack();
    }
    function confirmHandler(expenseData) {
        if (isEditing) {
            console.log("Updating expense...");
            expensesContext.updateExpense(editedExpenseId, {
                description: expenseData.description,
                amount: expenseData.amount,
                date: expenseData.date
            });
        } else {
            console.log("Adding expense...");
            expensesContext.addExpense({
                description: expenseData.description,
                amount: expenseData.amount,
                date: expenseData.date
            });
        }
        navigation.goBack();
    }

    return <View style={styles.container}>
        <ExpenseForm
            onCancel={canelHandler}
            onSubmit={confirmHandler}
            submitbuttonLabel={isEditing ? 'Update' : 'Add'}
            previousData={selectedExpense} />


        {isEditing &&
            < View style={styles.deleteContainer}>
                <IconButton icon='trash'
                    color={GlobalStyles.colors.error500}
                    size={24}
                    onPress={deleteExpenseHandler} />

            </View>}
    </View>
}
export default ManageExpense;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },

})  