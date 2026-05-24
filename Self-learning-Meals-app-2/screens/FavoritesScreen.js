import { Text ,StyleSheet,View} from 'react-native';
//import { useContext } from 'react';
//import { FavoritesContext } from '../store/context/favorites-context';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

function FavoritesScreen() {
 // const favoritesCtx = useContext(FavoritesContext);
  const favoritesCtx = useSelector((state) => state.favoritesMeals);

  const favoriteMeals = MEALS.filter((meal) => favoritesCtx.ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return <View style={styles.container}>
          <Text style={styles.text}>You have no favorite meals yet.</Text>

    </View>
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text :{
        fontSize: 18,
         fontWeight: 'bold',  
         textColor: 'white',
    }
  }

);   
  
