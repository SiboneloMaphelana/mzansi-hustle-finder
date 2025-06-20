import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from '../styles';
import { demoHustles } from '../hustles';

const categories = ['All', 'Food', 'Services', 'Fashion'];

export const HomeScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredHustles = demoHustles.filter(h => {
    const matchesSearch =
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.suburb.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || h.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.container}>
          <Text style={styles.title}>Find Local Hustles</Text>
          <TextInput
            placeholder="Search by name or suburb"
            value={search}
            onChangeText={setSearch}
            style={styles.input}
          />

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipScroll}>
            {categories.map(cat => (
              <TouchableOpacity
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                style={[styles.chip, selectedCategory === cat && styles.chipSelected]}
              >
                <Text style={[styles.chipText, selectedCategory === cat && styles.chipTextSelected]}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <FlatList
            data={filteredHustles}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Details', { hustle: item })}>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text>{item.category} - {item.suburb}</Text>
                  <Text>⭐ {item.rating}</Text>
                </View>
              </TouchableOpacity>
            )}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.buttonPrimary}>
              <Text style={styles.buttonText}>View on Map</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tips')} style={styles.buttonSuccess}>
              <Text style={styles.buttonText}>Hustle Tips</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Add')} style={styles.buttonSecondary}>
              <Text style={styles.buttonText}>Add Your Hustle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};