import { View, Text, Image,StyleSheet,ScrollView, Button } from 'react-native';
import {MEALS} from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

function MealDetailScreen({ route, navigation }) {      
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);  
    function headerButtonPressHandler() {
        alert('Button tapped HEHEEHEH!');
    }
     useLayoutEffect(() =>{
         navigation.setOptions({
                title: selectedMeal.title,
                headerRight: () =>{
                  return <IconButton icon="star" color="white" onPress={headerButtonPressHandler} />
                }
            });
        },[headerButtonPressHandler, navigation]);
    return (
        <ScrollView style={styles.rootContainer}>    
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails    duration={selectedMeal.duration}
                            complexity={selectedMeal.complexity}
                            affordability={selectedMeal.affordability} 
                            textStyle={styles.detailText}/>
            <View style={styles.listContainer}>
               
            <SubTitle>Ingredients</SubTitle>
            <List data={selectedMeal.ingredients} />
            
           
            <SubTitle>Steps</SubTitle>
            <List data={selectedMeal.steps} />
            </View>
               
        </View>
        </ScrollView>
    );
}

export default MealDetailScreen;



const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
        flex: 1,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },

    detailText: {
        color: 'white',
    },
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
        marginHorizontal: 24,
        marginVertical: 4,
    },
    listContainer: {
        width: '90%',
        alignSelf: 'center',
    },
});