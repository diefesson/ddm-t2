import { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import HackerNewsRepository from './repository/HackerNewsRepository';
import { SearchBar } from './components/SearchBar';
import color from './colors';
import NewsList from './components/NewsList';

export default function App() {
  const [newsList, setNewsList] = useState([]);
  async function onSearch(query) {
    if (query == '') {
      setNewsList(await HackerNewsRepository.getAll());
    } else {
      setNewsList(await HackerNewsRepository.search(query));
    }
  }
  return (
    <View style={styles.root}>
      <StatusBar translucent={false} />
      <SearchBar onSearch={onSearch} />
      <NewsList newsList={newsList} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
});
