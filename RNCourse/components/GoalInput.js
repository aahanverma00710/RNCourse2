import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Modal,
    Image
} from "react-native";
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');


    function goadInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer} >
                <Image 
                     style={styles.Image} 
                   source={require('../assets/splash-icon.png')}
                   //  source = "some/img/tiny_logo.png"
                     />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course gole"
                    onChangeText={goadInputHandler} value={enteredGoalText} />

                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalHandler} 
                            color= "#b180f0"/>
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color= "#f31282"
                            onPress={props.onCancel}
                        />
                    </View>

                </View>

            </View>
        </Modal>

    );
}

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b',
    },
    textInput: {
        borderBottomColor: '#e4d0ff',
        borderWidth: 1,
        width: '95%',
        marginRight: 8,
        color: '#120438',
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        padding: 12,

    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    Image: {
        width: 100,
        height: 100,
        marginBottom: 16,
    },

});