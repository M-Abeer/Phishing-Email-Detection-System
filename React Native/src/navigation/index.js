// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { theme } from '../styles/theme';

// // Auth Screens
// import LoginScreen from '../screens/auth/LoginScreen';
// import RegisterScreen from '../screens/auth/RegisterScreen';

// // Main Screens
// import HomeScreen from '../screens/home/HomeScreen';
// import AnalyzeScreen from '../screens/analyze/AnalyzeScreen';
// import ResultScreen from '../screens/analyze/ResultScreen';
// import AboutScreen from '../screens/about/AboutScreen';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const AuthStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: theme.colors.card,
//         },
//         headerTintColor: theme.colors.text,
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//         contentStyle: {
//           backgroundColor: theme.colors.background,
//         },
//       }}
//     >
//       <Stack.Screen 
//         name="Login" 
//         component={LoginScreen} 
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen 
//         name="Register" 
//         component={RegisterScreen} 
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

// const MainTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: {
//           backgroundColor: theme.colors.card,
//           borderTopColor: theme.colors.border,
//         },
//         tabBarActiveTintColor: theme.colors.primary,
//         tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
//         headerStyle: {
//           backgroundColor: theme.colors.card,
//         },
//         headerTintColor: theme.colors.text,
//       }}
//     >
//       <Tab.Screen 
//         name="Home" 
//         component={HomeScreen} 
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen 
//         name="Analyze" 
//         component={AnalyzeScreen} 
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="magnify" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen 
//         name="About" 
//         component={AboutScreen} 
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="information" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const MainStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: theme.colors.card,
//         },
//         headerTintColor: theme.colors.text,
//         contentStyle: {
//           backgroundColor: theme.colors.background,
//         },
//       }}
//     >
//       <Stack.Screen 
//         name="MainTabs" 
//         component={MainTabs} 
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen 
//         name="Result" 
//         component={ResultScreen} 
//         options={{ title: 'Analysis Result' }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default function Navigation() {
//   // For now, we'll just show the auth stack
//   // In a real app, you'd check if the user is logged in
//   const isLoggedIn = false;

//   return (
//     <NavigationContainer>
//       {!isLoggedIn ? <MainStack /> : <AuthStack />}
//     </NavigationContainer>
//   );
// }


"use client"

import { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { theme } from "../styles/theme"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Auth Screens
import LoginScreen from "../screens/auth/LoginScreen"
import RegisterScreen from "../screens/auth/RegisterScreen"

// Main Screens
import HomeScreen from "../screens/home/HomeScreen"
import AnalyzeScreen from "../screens/analyze/AnalyzeScreen"
import ResultScreen from "../screens/analyze/ResultScreen"
import AboutScreen from "../screens/about/AboutScreen"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const RootStack = createNativeStackNavigator()

// Auth Stack
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.card,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

// Main Tabs Stack
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.card,
          borderTopColor: theme.colors.border,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.6)",
        headerStyle: {
          backgroundColor: theme.colors.card,
        },
        headerTintColor: theme.colors.text,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Analyze"
        component={AnalyzeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="magnify" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="information" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}

// Main Stack
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.card,
        },
        headerTintColor: theme.colors.text,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Result" component={ResultScreen} options={{ title: "Analysis Result" }} />
    </Stack.Navigator>
  )
}

// Navigation Container
export default function Navigation() {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)

  // Function to check for token
  const checkToken = async () => {
    let token
    try {
      token = await AsyncStorage.getItem("token")
      setUserToken(token)
    } catch (e) {
      console.error("Failed to get token from storage", e)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    // Check for the token when the component mounts
    checkToken()

    // Set up a listener to check for token changes
    const tokenCheckInterval = setInterval(() => {
      checkToken()
    }, 1000) // Check every second

    return () => clearInterval(tokenCheckInterval)
  }, [])

  if (isLoading) {
    // You could return a loading screen here
    return null
  }

  return <NavigationContainer>{userToken ? <MainStack /> : <AuthStack />}</NavigationContainer>
}
