import {MEALS,CATEGORIES} from '../data/dummy-data';
import { View, Text,StyleSheet ,FlatList} from 'react-native';  
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';


function MealsOverviewScreen(
    {route,navigation}
) {    
    const catID = route.params.categoryId;
  

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    });
    useLayoutEffect(() =>{
        const catTitle = CATEGORIES.find((category) => category.id === catID).title;
        
        navigation.setOptions({
            title: catTitle,
        });
    },[catID, navigation]);
 

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemsPros = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }   
        return <MealItem   {...mealItemsPros } />
    }
    return (
        <View style = {styles.container}>
            <FlatList data={displayedMeals} 
                      keyExtractor={(item) => item.id} 
                      renderItem={renderMealItem} />    
        </View>
    );
}

export default MealsOverviewScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });       