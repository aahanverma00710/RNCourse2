import { Text, View , Pressable, Image , StyleSheet,Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";



function MealItem({id, title, imageUrl,duration, complexity, affordability}) {
  const navigation = useNavigation();
  return (
     <View style={styles.mealItem}>
        <Pressable onPress={() => navigation.navigate('MealDetail', { mealId: id })} android_ripple={{color : '#ccc'}} style={({pressed}) => pressed ? styles.buttonPressed : null}>
            <View style={styles.innerContainer}>
            <View>
                <Image source={{uri : imageUrl}} style={styles.image}></Image>
                <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </View>
           
        </Pressable>
     </View>
  );
}           

export default MealItem;


const styles = StyleSheet.create({ 
   mealItem :{
        margin: 8,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 8,
    },
      buttonPressed: {
        opacity: 0.90,
     },
});