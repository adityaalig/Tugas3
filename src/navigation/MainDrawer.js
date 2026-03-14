import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// 1. Import Tab Navigator yang sudah kita buat sebelumnya
import HomeTabs from './HomeTabs';

// 2. Buat komponen halaman About sederhana
function AboutScreen() { 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Tentang Aplikasi PerfumeShop</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

// Data dummy untuk ditampilkan di Drawer
const userAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5InzrXHEiUmqL5O2nfC1HDxMkUyIR5MQJFA&s';

// 3. Buat Custom Drawer Content (Foto Profil & Tombol Logout)
function CustomDrawerContent(props) {
  const handleLogout = () => {
    alert('Anda telah keluar (Logout).');
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* Bagian Profil Header */}
      <View style={styles.header}>
        <Image source={{ uri: userAvatar }} style={styles.avatar} />
        <Text style={styles.username}>Username</Text>
        <Text style={styles.email}>user@example.com</Text>
      </View>
      
      {/* List Menu Bawaan (MainApp & About) */}
      <DrawerItemList {...props} />
      
      {/* Tombol Logout Kustom */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
        <Text style={{ color: 'red', fontWeight: 'bold' }}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

// 4. Komponen Utama MainDrawer
export default function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#1565C0' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#1565C0',
      }}
    >
      {/* Menu 'MainApp' ini akan langsung membuka HomeTabs yang berisi Home, Search, Cart, Profile */}
      <Drawer.Screen 
        name="MainApp" 
        component={HomeTabs} 
        options={{ title: 'Katalog Parfum' }} 
      />
      
      {/* Menu tambahan */}
      <Drawer.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ title: 'Tentang' }} 
      />
    </Drawer.Navigator>
  );
}

// 5. Stylesheet agar profil terlihat rapi
const styles = StyleSheet.create({
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10 },
  avatar: { width: 60, height: 60, borderRadius: 30, marginBottom: 10 },
  username: { fontSize: 16, fontWeight: 'bold' },
  email: { fontSize: 14, color: 'gray' },
  logoutBtn: { padding: 20, marginTop: 10, borderTopWidth: 1, borderTopColor: '#ccc' }
});