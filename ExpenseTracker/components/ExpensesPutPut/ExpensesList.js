import { FlatList, Text } from "react-native";

function ExpensesList({expenses}) {
    return (
        <FlatList
            data={expenses}
            renderItem={({ item }) => (
                <Text>{item.description}</Text>
            )}
        />
    );
}