import { useState } from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
      <StatusBar translucent={false} />
      <SearchBar onSearch={onSearch} />
      <NewsListComponent newsList={newsList} />
    </View>
  );
}

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  return (
    <View style={styles.searchBar}>
      <TextInput style={styles.searchBarInput} onChangeText={setQuery}>
        {query}
      </TextInput>
      <TouchableOpacity
        style={styles.searchBarButton}
        onPress={() => onSearch(query)}
      >
        <Text style={styles.searchBarButtonText}>SEARCH</Text>
      </TouchableOpacity>
    </View>
  );
}

function NewsListComponent({ newsList }) {
  return (
    <View style={styles.newsList}>
      {newsList.map((n) => (
        <NewsComponent key={n.id} news={n} />
      ))}
    </View>
  );
}

function NewsComponent({ news }) {
  return (
    <View style={styles.news}>
      <Text style={styles.newsTitle}>{news.title}</Text>
      <Text style={styles.newsAuthor}>by {news.author}</Text>
      <Text style={styles.newsUrl}>{news.url}</Text>
    </View>
  );
}

const colors = {
  background: '#190e4f',
  primary: '#237bc9',
  textPrimary: '#fffffff8',
  textSecondary: '#ffffffdd',
  searchBarBackground: '#ffffff',
  searchBarText: '#000000',
};

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
  searchBar: {
    flexDirection: 'row',
  },
  searchBarInput: {
    flexGrow: 1,
    fontSize: 22,
    paddingLeft: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: colors.searchBarBackground,
  },
  searchBarButton: {
    padding: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: colors.primary,
  },
  searchBarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.textPrimary,
  },
  newsList:{
    gap: 10,
  },
  news:{
    borderColor: colors.primary,
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
  },
  newsTitle:{
      color: colors.textPrimary,
      fontSize: 18,
      fontWeight: "bold"
  },
  newsAuthor:{
    color: colors.textSecondary,
  },
  newsUrl:{
    color: colors.textSecondary,
  }
});
