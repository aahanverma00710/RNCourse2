import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles  } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {id: 'e1', description: 'A pair of shoes', amount: 59.99, date: new Date('2022-12-19')},
    {id: 'e2', description: 'A pair of trousers', amount: 89.29, date: new Date('2022-12-19')},
    {id: 'e3', description: 'A t-shirt', amount: 29.99, date: new Date('2022-12-19')},
    {id: 'e4', description: 'A pair of socks', amount: 5.99, date: new Date('2022-12-19')},
    {id: 'e5', description: 'A pair of shoes', amount: 59.99, date: new Date('2022-12-19')},
    {id: 'e6', description: 'A pair of trousers', amount: 89.29, date: new Date('2022-12-19')},
    {id: 'e7', description: 'A t-shirt', amount: 29.99, date: new Date('2022-12-19')},
    {id: 'e8', description: 'A pair of socks', amount: 5.99, date: new Date('2022-12-19')},
    {id: 'e9', description: 'A pair of shoes', amount: 59.99, date: new Date('2022-12-19')},
]

function ExpensesOutput({expenses,expensesPeriod}) { 
    return <View style={styles.container}>
        <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
        <ExpensesList expenses={DUMMY_EXPENSES} />
       
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