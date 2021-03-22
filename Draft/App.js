import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScoreScreen from "./src/screens/ScoreScreen";
import CamaraScreen from "./src/screens/CamaraScreen";
import WhyScreen from './src/screens/WhyScreen.js';
import HistoryScreen from "./src/screens/HistoryScreen.js";

// firebase demo view, it helps use firebase
// import Demo from './src/firebase/FirebaseDemo.js'
// import HistoryScreen from "./src/firebase/FirebaseDemo";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Score') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }
            
            if (route.name === 'Camara') {
              iconName = focused
                ? 'ios-camera'
                : 'ios-camera-outline';
            } 

            if (route.name === 'History') {
              iconName = focused
                ? 'time'
                : 'time-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#47C1C1',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Score" component={ScoreScreen} />
        <Tab.Screen name="Camara" component={CamaraScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
