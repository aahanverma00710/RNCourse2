import { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import LodingOverlay from "../UI/LodingOverlay";
import { useContext, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";

function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const [isFetching, setIsFetching] = useState(false)
    const isEditing = !!editedExpenseId;
    const expensesContext = useContext(ExpensesContext);
    const selectedExpense = expensesContext.expenses.find(expense => expense.id === editedExpenseId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);



    async function deleteExpenseHandler() {
        console.log("Deleting expense...");
        if (isEditing) {
            console.log("Expense ID:", editedExpenseId);
            setIsFetching(true)
            await deleteExpense(editedExpenseId)
            setIsFetching(false)
            expensesContext.deleteExpense(editedExpenseId);
        }

        navigation.goBack();
    }
    function canelHandler() {
        navigation.goBack();
    }
    async function confirmHandler(expenseData) {
        if (isEditing) {
            console.log("Updating expense...");
            expensesContext.updateExpense(editedExpenseId, expenseData);
            setIsFetching(true)
            await updateExpense(editedExpenseId, expenseData)
            setIsFetching(false)
        } else {
            setIsFetching(true)
            const id = await storeExpense(expenseData);
            expensesContext.addExpense({ ...expenseData, id: id });
            setIsFetching(false)

        }

        navigation.goBack();
    }
    if (isFetching) {
        return <LodingOverlay />
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