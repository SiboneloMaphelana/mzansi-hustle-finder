import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../styles';

export const DetailsScreen = ({ route }: any) => {
  const { hustle } = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>{hustle.name}</Text>
        <Text>{hustle.category} - {hustle.suburb}</Text>
        <Text style={{ marginVertical: 10 }}>{hustle.description}</Text>
        <Text>⭐ {hustle.rating}</Text>
      </View>
    </SafeAreaView>
  );
};