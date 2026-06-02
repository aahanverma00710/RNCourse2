import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles  } from "../../constants/styles";


function ExpensesOutput({expenses,expensesPeriod}) { 
    return <View style={styles.container}>
        <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
        <ExpensesList expenses={expenses} />
       
    </View>
}

export default ExpensesOutput;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        borderRadius: 6,
    },
    period: {       
        fontSize: 12,
        color: GlobalStyles.colors.primary400
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    }
})  