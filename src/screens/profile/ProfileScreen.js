import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5InzrXHEiUmqL5O2nfC1HDxMkUyIR5MQJFA&s', // avatar placeholder
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Username</Text>
      <Text style={styles.email}>user@example.com</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 60, backgroundColor: '#FAFAFA' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20, backgroundColor: '#DDD' },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  email: { fontSize: 14, color: '#777', marginBottom: 30 },
  button: {
    backgroundColor: '#D4AF37',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});