import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import HackerNewsRepository from './repository/HackerNewsRepository';

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
      <SearchBar onSearch={onSearch} />
      <NewsListComponent newsList={newsList} />
    </View>
  );
}

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  return (
    <View>
      <TextInput onChangeText={setQuery}>{query}</TextInput>
      <Button title="search" onPress={() => onSearch(query)} />
    </View>
  );
}

function NewsListComponent({ newsList }) {
  return (
    <View>
      {newsList.map((n) => (
        <NewsComponent key={n.id} news={n} />
      ))}
    </View>
  );
}

function NewsComponent({ news }) {
  return (
    <View>
      <Text>{news.author}</Text>
      <Text>{news.title}</Text>
      <Text>{news.url}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
