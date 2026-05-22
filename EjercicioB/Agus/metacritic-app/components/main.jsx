import React, { useState, useEffect } from 'react';
import { 
  StatusBar,
  FlatList,
  StyleSheet,
  View, 
  ActivityIndicator
} from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { Logo } from './Logo';


export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((data) => {
      setTimeout(() => {
        setGames(data);
      }, 1500);
    });
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <StatusBar barStyle="light-content" />
        <View>
          <Logo style={{ alignSelf: 'center', marginBottom: 20 }} />
        </View>
        {games.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#642f69" />
        </View>
        ) : (
            <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({ item, index }) => (
              <AnimatedGameCard game={item} index={index} />
            )}
            contentContainerStyle={styles.scrollContent}
            />
        )}
        </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 20,
  },
});
