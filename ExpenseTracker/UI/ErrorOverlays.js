import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../constants/styles';
import Button from './Button';

function ErrorOverlay({ message, onConfirm }) {
    return <View style={style.container}>
        <Text style={[style.text, style.title]}> An Error Occured!</Text>
        <Text style={[style.text, style.message]}>{message}</Text>
        <Button onPress={onConfirm}>Okay</Button>
    </View>

}
export default ErrorOverlay;

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        textAlign: 'center',
        margin: 8,
        color: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    message: {
        fontSize: 14
    }
})