import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItems(props) {
    return (
        <View style={styles.goalItem} >
            <Pressable android_ripple = {{ color: '#dddddd' }} 
                  onPress={props.onDeleteItem.bind(this, props.id)}
                  style={({ pressed }) => pressed ? styles.pressedItem : null} >

                <Text style={styles.goalText}>{props.text}</Text>

            </Pressable>
        </View>

    )
};

export default GoalItems;


const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 8,
  
        backgroundColor: '#5e08cc',
        borderRadius: 4,

    },
    goalText: {
        color: '#ffffff',
              padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
    },
});