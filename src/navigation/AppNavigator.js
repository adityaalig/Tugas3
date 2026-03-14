import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import MainDrawer from './MainDrawer';
import { useAuth } from '../context/AuthContext'; // Import hook

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isLoggedIn } = useAuth(); // Ambil status login secara otomatis

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={MainDrawer} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}