import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Akun Baru</Text>
      
      {/* Nanti form input nama, email & password ditaruh di sini */}
      
      <View style={styles.buttonSpacing}>
        <Button 
          title="Register" 
          onPress={() => alert('Akun berhasil dibuat!')} 
          color="#1565C0"
        />
      </View>
      <Button 
        title="Sudah punya akun? Kembali ke Login" 
        color="gray"
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  buttonSpacing: { marginBottom: 10, width: '100%' }
});