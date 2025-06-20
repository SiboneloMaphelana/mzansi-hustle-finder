import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from '../styles';
import { demoHustles } from '../hustles';

const categories = ['All', 'Food', 'Services', 'Fashion'];


export const AddHustleScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Food');
  const [suburb, setSuburb] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (!name || !suburb || !description) {
      Alert.alert('Missing Info', 'Please fill in all fields.');
      return;
    }

    const newHustle = {
      id: Math.random().toString(),
      name,
      category,
      suburb,
      description,
      coords: { latitude: -26.2, longitude: 28.0 },
      rating: 0,
    };

    demoHustles.push(newHustle);
    Alert.alert('Success', 'Your hustle was added!');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.container}>
          <Text style={styles.header}>Add Your Hustle</Text>
          <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName} />
          <TextInput placeholder="Suburb" style={styles.input} value={suburb} onChangeText={setSuburb} />
          <TextInput placeholder="Description" style={styles.input} value={description} onChangeText={setDescription} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipScroll}>
            {categories.filter(c => c !== 'All').map(cat => (
              <TouchableOpacity
                key={cat}
                onPress={() => setCategory(cat)}
                style={[styles.chip, category === cat && styles.chipSelected]}
              >
                <Text style={[styles.chipText, category === cat && styles.chipTextSelected]}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.buttonPrimary} onPress={handleAdd}>
            <Text style={styles.buttonText}>Submit Hustle</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};