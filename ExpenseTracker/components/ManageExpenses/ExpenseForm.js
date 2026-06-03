import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";
import Button from "../../UI/Button";

function ExpenseForm({ onCancel, onSubmit, submitbuttonLabel, previousData }) {
    const [inputValues, setInputValues] = useState({
        amount: previousData ? previousData.amount.toString() : '',
        date: previousData ? previousData.date.toISOString().slice(0, 10) : '',
        description: previousData ? previousData.description : ''
    });

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        }
        console.log(expenseData);
        onSubmit(expenseData);
    }
    function inputChangeHandler(inputIdentifier, newValues) {
        setInputValues(prevValues => ({
            ...prevValues,
            [inputIdentifier]: newValues
        }));
        console.log(inputIdentifier + " changed" + newValues);
    }
    return <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow} >
            <Input
                style={styles.rowInput}
                label="Amount"
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputValues.amount
                }} />
            <Input
                style={styles.rowInput}
                label="Date" textInputConfig={{
                    placeholder: 'YYYY-MM-DD', maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputValues.date
                }} />
        </View>
        <Input label="Description" textInputConfig={{
            multiline: true,
            autoCorrect: false,
            onChangeText: inputChangeHandler.bind(this, 'description'),
            value: inputValues.description
        }} />
        <View style={styles.buttons}>
            <Button style={styles.button} onPress={onCancel} mode='flat'>
                Cancel
            </Button>
            <Button style={styles.button} onPress={submitHandler}>
                {submitbuttonLabel}
            </Button>
        </View>
    </View>

}

export default ExpenseForm;


const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginVertical: 24
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
})               