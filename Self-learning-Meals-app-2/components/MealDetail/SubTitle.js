import { View, Text, Image,StyleSheet } from 'react-native';
function SubTitle({children}){
    return <View style={styles.subTitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
     </View>
}

export default SubTitle;


const styles = StyleSheet.create({
    subtitle :{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center',
        padding: 6,
        color: '#e2b497',
    }, 
    subTitleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4,
    },
});