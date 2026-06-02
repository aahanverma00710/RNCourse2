import { Pressable ,View, Text,StyleSheet} from "react-native";
import { GlobalStyles } from "../constants/styles";

function Button( {children, onPress, mode,style} ) {
    return <View style={style}>
        <Pressable onPress={onPress} android_ripple={{color: GlobalStyles.colors.primary200}} 
        style={({pressed}) => [styles.button, mode === 'flat' && styles.flat, pressed && styles.pressed]}>
            <View  style={[styles.button, mode === 'flat' && styles.flat]}>
                <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
            </View>
        </Pressable>
    </View>
}

export default Button;

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: GlobalStyles.colors.primary500
    },
    flat :{
        backgroundColor: 'transparent'
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    }
})  