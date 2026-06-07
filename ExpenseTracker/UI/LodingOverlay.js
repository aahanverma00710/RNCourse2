import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { GlobalStyles } from '../constants/styles';

function LoadingOverlay() {
    return <View style={style.container}>
        <ActivityIndicator size="large" color="white" />
    </View>
}

export default LoadingOverlay;

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
    }
})