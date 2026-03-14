import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Impor layar yang baru saja kita buat
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    // headerShown: false agar judul "Login" atau "Register" bawaan tidak muncul di atas
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}