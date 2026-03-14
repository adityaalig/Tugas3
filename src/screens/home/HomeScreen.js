import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// Data produk
const PERFUMES = [
  { id: '1', name: 'Parfum 1', brand: 'Dior', price: 'Rp 450.000', image: 'https://fimgs.net/mdimg/perfume/375x500.100388.jpg' },
  { id: '2', name: 'Parfum 2', brand: 'Dior', price: 'Rp 150.000', image: 'https://fimgs.net/mdimg/perfume/social.100243.jpg' },
  { id: '3', name: 'Parfum 3', brand: 'Dior', price: 'Rp 3.200.000', image: 'https://fimgs.net/mdimg/perfume/375x500.100388.jpg' },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Koleksi Parfum</Text>
      <FlatList 
        data={PERFUMES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', paddingHorizontal: 20, paddingTop: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 15 },
  card: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 15, marginBottom: 15, padding: 15, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5, elevation: 3 },
  imageContainer: { width: 80, height: 80, backgroundColor: '#F5F5F5', borderRadius: 10, padding: 1, marginRight: 15 },
  image: { width: '100%', height: '100%', resizeMode: 'contain' },
  infoContainer: { flex: 1, justifyContent: 'center' },
  brand: { fontSize: 12, color: '#7F8C8D', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 6 },
  price: { fontSize: 16, fontWeight: '600', color: '#D4AF37' } // Warna aksen emas
});