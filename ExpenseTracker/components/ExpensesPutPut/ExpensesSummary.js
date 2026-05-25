import { View, Text } from "react-native";
function ExpensesSummary({periodName, expenses}) { 
    return <View>
            <Text>{periodName}</Text>
            <Text>$177.95</Text>
            </View>
}

export default ExpensesSummary;