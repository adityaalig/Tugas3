import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProductDetailScreen({ route, navigation }) {
  // Menerima parameter yang dikirim dari Home
  const { productId } = route.params || {};

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Detail Produk</Text>
      <Text style={{ marginBottom: 20 }}>ID Produk yang dipilih: {productId}</Text>
      
      <View style={{ marginBottom: 10, width: 200 }}>
        <Button 
          title="Ke Checkout" 
          color="#1565C0"
          onPress={() => navigation.navigate('Cart')} 
        />
      </View>
      
      <View style={{ width: 200 }}>
        <Button 
          title="Kembali" 
          color="gray"
          onPress={() => navigation.goBack()} 
        />
      </View>
    </View>
  );
}