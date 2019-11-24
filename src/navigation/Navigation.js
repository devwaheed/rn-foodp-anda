import {createStackNavigator} from 'react-navigation-stack';
import {Home} from '../components/HomeComponent';
import { Restaurant } from '../components/Restaurant';
import { createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: Home,
  Restaurant: Restaurant
});

const Navigation = createAppContainer(StackNavigator);

export {Navigation}