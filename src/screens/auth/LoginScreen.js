import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const { login } = useAuth(); // Panggil fungsi login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://w7.pngwing.com/pngs/815/64/png-transparent-perfume-chanel-computer-icons-fragrance-oil-symbol-perfume-miscellaneous-orange-logo.png' }} 
          style={styles.logo} 
        />
        <Text style={styles.title}>PerfumeShop</Text>
        <Text style={styles.subtitle}>Temukan aroma khasmu hari ini</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginBtn} onPress={login}>
          <Text style={styles.loginText}>MASUK</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Belum punya akun? <Text style={{fontWeight: 'bold', color: '#1A1A1A'}}>Daftar di sini</Text></Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#FFF', padding: 35, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5, alignItems: 'center' },
  logo: { width: 90, height: 80, marginBottom: 10 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#7F8C8D', marginBottom: 30 },
  input: { width: '100%', height: 50, backgroundColor: '#F8F9F9', borderRadius: 10, paddingHorizontal: 15, marginBottom: 15, borderWidth: 1, borderColor: '#E5E7E9' },
  loginBtn: { width: '100%', backgroundColor: '#205ed9', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 20 },
  loginText: { color: '#FFF', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 },
  registerText: { color: '#7F8C8D', fontSize: 14 }
});