import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Demo from './src/firebase/FirebaseDemo.js'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text STYLE="font-size:30px">Home!</Text>
    </View>
  );
}

const SearchScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Photoes!</Text>
    </View>
  );
}

const ScanScreen = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Score is 55 out of 100</Text>
      <Button
        title="Why?" 
      />
    </View>
  );
}

const HistoryScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>History!</Text>
    </View>
  );
}

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const WhyScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>That's why!</Text>
    </View>
  );
}

const FireBaseScreen = () => {
  return (
    <Demo></Demo>
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
                : 'ios-home-outline';
            } 

            if (route.name === 'Search') {
              iconName = focused
                ? 'search'
                : 'search-outline';
            } 

            if (route.name === 'Scan') {
              iconName = focused
                ? 'ios-camera'
                : 'ios-camera-outline';
            } 
            
            if (route.name === 'History') {
              iconName = focused
              ? 'ios-albums' 
              : 'ios-albums-outline';
            } 
            
            if (route.name === 'Profile') {
              iconName = focused 
              ? 'ios-person' 
              : 'ios-person-outline';
            }

            if (route.name === 'Firebase') {
              iconName = focused 
              ? 'ios-logo-firebase' 
              : 'ios-logo-firebase';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Firebase" component={FireBaseScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}