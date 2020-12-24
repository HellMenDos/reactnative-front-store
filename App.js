import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import ListScreen from './screens/ListScreen'
import ProfileScreen from './screens/ProfileScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';

import ForgetScreen from './screens/auth/ForgetScreen'
import LoginScreen from './screens/auth/LoginScreen'
import RegistrScreen from './screens/auth/RegistrScreen'


const SettingsStack = createStackNavigator();

function Home() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}  />
      <SettingsStack.Screen name="Product" component={ProductScreen} />
    </SettingsStack.Navigator>
  );
}


const Auth = createStackNavigator();

function Settings() {
  return (
    <Auth.Navigator>
      <Auth.Screen name="login" component={LoginScreen} options={{headerShown: false}}  />
      <Auth.Screen name="registr" component={RegistrScreen} />
      <Auth.Screen name="forget" component={ForgetScreen} />
      <Auth.Screen name="profile" component={ProfileScreen} />
    </Auth.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'List') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Profile') {
              iconName = 'ios-clipboard';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#50a3bd',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="List" component={ListScreen} />
        <Tab.Screen name="Profile" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}