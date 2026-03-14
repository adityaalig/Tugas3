import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Import HomeStack dan halaman lainnya
import HomeStack from './HomeStack';
import SearchScreen from '../screens/home/SearchScreen';
import CartScreen from '../screens/cart/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Sembunyikan header agar tidak menumpuk dengan Drawer
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Mengatur ikon yang menyala (focused) dan redup (outline)
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1565C0', 
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 90, paddingBottom: 8 },
      })}
    >
      {/* Home menggunakan HomeStack, bukan HomeScreen langsung */}
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ tabBarBadge: 2 }} // Menambahkan notifikasi angka
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}