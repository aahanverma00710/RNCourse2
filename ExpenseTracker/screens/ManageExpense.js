import { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../UI/Button";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
    
function ManageExpense({route,navigation}) {
    const editedExpenseId = route.params?.expenseId;

    const isEditing = !!editedExpenseId;

    const expensesContext = useContext(ExpensesContext);

    function deleteExpenseHandler() {
        console.log("Deleting expense...");
        if(isEditing) {
            console.log("Expense ID:", editedExpenseId);
            expensesContext.deleteExpense(editedExpenseId);
        }
       
        navigation.goBack();
    }
    function canelHandler() {
        navigation.goBack();
    }
    function confirmHandler() {
        if(isEditing) {
            console.log("Updating expense...");
            expensesContext.updateExpense(editedExpenseId, {
                description: 'Test',
                amount: 19.99,
                date: new Date()
            });
        } else {
            console.log("Adding expense...");
            expensesContext.addExpense({
                description: 'Test',
                amount: 19.99,
                date: new Date()
            });
        }
        navigation.goBack();
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);
    return <View style={styles.container}>
        <View style={styles.buttons}>
            <Button style={styles.button} onPress={canelHandler} mode='flat'>
                Cancel
            </Button>
            <Button style={styles.button} onPress={confirmHandler}>
                {isEditing ? 'Update' : 'Add'}
            </Button>
        </View>
       
        { isEditing && 
         < View style={styles.deleteContainer}>
            <IconButton icon='trash'
            color={GlobalStyles.colors.error500}
            size={24}
            onPress={deleteExpenseHandler}/>
            
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
    } ,  
    buttons :{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button : {
        minWidth: 120,
        marginHorizontal: 8
    }   
})  