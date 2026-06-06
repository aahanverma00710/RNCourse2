import { View, StyleSheet, Text, Alert } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";
import Button from "../../UI/Button";

function ExpenseForm({ onCancel, onSubmit, submitbuttonLabel, previousData }) {
    const [inputs, setInputs] = useState({
        amount: {
            value: previousData ? previousData.amount.toString() : '',
            isValid: true
        },
        date: {
            value: previousData ? previousData.date.toISOString().slice(0, 10) : '',
            isValid: true
        },
        description: {
            value: previousData ? previousData.description : '',
            isValid: true
        }
    });

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }
        console.log(expenseData);
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Show an error message or handle invalid input
            console.log("Invalid input. Please check your entries.");
            // Alert.alert("Invalid input", "Please check your entries and try again.");
            setInputs(prevValues => ({
                amount: { value: prevValues.amount.value, isValid: amountIsValid },
                date: { value: prevValues.date.value, isValid: dateIsValid },
                description: { value: prevValues.description.value, isValid: descriptionIsValid }
            }))
            return;
        }
        onSubmit(expenseData);
    }
    function inputChangeHandler(inputIdentifier, newValues) {
        setInputs(prevValues => ({
            ...prevValues,
            [inputIdentifier]: { value: newValues, isValid: true }
        }));
        console.log(inputIdentifier + " changed" + newValues);
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;
    return <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow} >
            <Input
                style={styles.rowInput}
                label="Amount"
                invalid={!inputs.amount.isValid}
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputs.amount.value
                }} />
            <Input
                style={styles.rowInput}
                label="Date"
                invalid={!inputs.date.isValid}
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD', maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputs.date.value
                }} />
        </View>
        <Input label="Description"
            invalid={!inputs.description.isValid}
            textInputConfig={{
                multiline: true,
                autoCorrect: false,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputs.description.value
            }} />
        {formIsInvalid &&
            <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>
        }
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
    },
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8
    }
})               