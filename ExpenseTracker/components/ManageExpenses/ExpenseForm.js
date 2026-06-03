import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
    function amountChangeHandler() {
        console.log("Amount changed");
    }
    return <View>
        <Input label="Amount" textInputConfig={{ keyboardType: 'decimal-pad', onChangeText: amountChangeHandler }} />
        <Input label="Date" textInputConfig={{
            placeholder: 'YYYY-MM-DD', maxLength: 10,
            onChangeText: () => console.log("Date changed")
        }} />
        <Input label="Description" textInputConfig={{
            multiline: true,
            autoCorrect: false,
            onChangeText: () => console.log("Description changed")
        }} />
    </View>

}

export default ExpenseForm;