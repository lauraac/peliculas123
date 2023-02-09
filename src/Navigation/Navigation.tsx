import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {Movie} from '../interfaces/movieInterface';
import {Pagination} from '../screens/Pagination';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
  Pagination: Movie;
};

//componenetes
const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="Pagination" component={Pagination} />
    </Stack.Navigator>
  );
};
