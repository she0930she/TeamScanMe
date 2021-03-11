import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Demo from './src/firebase/FirebaseDemo.js'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ScoreScreen from "./src/screens/ScoreScreen";
import CamaraScreen from "./src/screens/CamaraScreen";
import HistoryScreen from "./src/firebase/FirebaseDemo";
import WhyScreen from './src/screens/WhyScreen.js';

// const navigator = createStackNavigator(
//   {
//     Score: ScoreScreen,
//     Camara: CamaraScreen,
//     History: HistoryScreen,
//     Firebase: FirebaseScreen,
//     Why: WhyScreen
    
//   },
//   {
//     initialRouteName: "Score",
//     defaultNavigationOptions: {
//       title: "Scan Me"
//     }
//   }
// );

// export default createAppContainer(navigator);

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
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Score" component={ScoreScreen} />
        <Tab.Screen name="Camara" component={CamaraScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-home'
//                 : 'ios-home-outline';
//             } 

//             if (route.name === 'Search') {
//               iconName = focused
//                 ? 'search'
//                 : 'search-outline';
//             } 

//             if (route.name === 'Scan') {
//               iconName = focused
//                 ? 'ios-camera'
//                 : 'ios-camera-outline';
//             } 
            
//             if (route.name === 'History') {
//               iconName = focused
//               ? 'ios-albums' 
//               : 'ios-albums-outline';
//             } 
            
//             if (route.name === 'Profile') {
//               iconName = focused 
//               ? 'ios-person' 
//               : 'ios-person-outline';
//             }

//             if (route.name === 'Firebase') {
//               iconName = focused 
//               ? 'ios-logo-firebase' 
//               : 'ios-logo-firebase';
//             }
//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Search" component={SearchScreen} />
//         <Tab.Screen name="Scan" component={ScanScreen} />
//         <Tab.Screen name="History" component={HistoryScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//         <Tab.Screen name="Firebase" component={FirebaseScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }