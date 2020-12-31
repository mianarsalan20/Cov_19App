import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import WorldStatistic from './components/WorldStatistic';
import countriesList from './components/countriesList';
import favourite from './components/favourite';

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="WorldStatistic" component={worldstackNavigator} />
      <Drawer.Screen name="CountriesList" component={countrystackNavigator} />
      <Drawer.Screen name="Favourite" component={worldstackNavigator} />
    </Drawer.Navigator>
  );
}

const worldstackNavigator = () => {
  return (
  <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerLeft: () =>
        <Ionicons name="md-menu" size={24} color="black" onPress = { () => navigation.openDrawer() } />
      })
  }>
        <Stack.Screen name="Home" component={WorldStatistic} />
        <Stack.Screen name="countriesList" component={countriesList} 
        options={({navigation}) => ({
        headerLeft: () =>
        <Ionicons name="arrow-back-circle-sharp" size={30} color="black" onPress = { () => navigation.goBack() } />
      })
  } />
  </Stack.Navigator>
  );
}
const countrystackNavigator = () => {
  return (
  <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerLeft: () =>
        <Ionicons name="md-menu" size={24} color="black" onPress = { () => navigation.openDrawer() } />
      })
  }>
        <Stack.Screen name="Countries" component={countriesList} />
        <Stack.Screen name="countriesList" component={countriesList} 
        options={({navigation}) => ({
        headerLeft: () =>
        <Ionicons name="arrow-back-circle-sharp" size={30} color="black" onPress = { () => navigation.goBack() } />
      })
  } />
  </Stack.Navigator>
  );
}


export default function App({navigation}){
  return(
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}
