import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from "./screens/HomeScreen";
import { DetailsScreen } from "./screens/DetailsScreen";
import { MapScreen } from "./screens/MapsScreen";
import { TipsScreen } from "./screens/TipsScreen";
import { AddHustleScreen } from "./screens/AddHustleScreen";
const categories = ['All', 'Food', 'Services', 'Fashion'];

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mzansi Hustles" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Tips" component={TipsScreen} />
        <Stack.Screen name="Add" component={AddHustleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
