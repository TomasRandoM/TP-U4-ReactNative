import React, { useRef, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';


export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      {game.image && (
        <Image source={{ uri: game.image }} style={styles.image} />
      )}
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.score}>{game.score}</Text>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 300,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={[styles.card, { opacity }]}>
      <GameCard game={game} />
    </Animated.View>
  );
}
    
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 160,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
    color: '#555',
  },
  score: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 8,
    color: '#ff0000',
    fontWeight: '600',
  },
});
