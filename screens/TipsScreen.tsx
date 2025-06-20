import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { styles } from '../styles';


export const TipsScreen = () => {
  const tips = [
    {
      title: "Promote Smart",
      description: "Use platforms like WhatsApp, Facebook Marketplace, and TikTok to showcase your hustle. Be visual!",
    },
    {
      title: "Reward Loyalty",
      description: "Offer small discounts or freebies for repeat customers. A simple loyalty card can go a long way.",
    },
    {
      title: "Partner Up",
      description: "Collaborate with nearby hustlers. A food stall can work with a local artist to draw in more customers.",
    },
    {
      title: "Stay Visible",
      description: "Print flyers, wear branded T-shirts, and use signs that clearly show who you are and what you offer.",
    },
    {
      title: "Keep It Professional",
      description: "Good communication, showing up on time, and delivering quality will set you apart from the rest.",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.header}>Top Tips for a Winning Hustle</Text>
        {tips.map((tip, index) => (
          <View key={index} style={styles.tipCard}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipDescription}>{tip.description}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};