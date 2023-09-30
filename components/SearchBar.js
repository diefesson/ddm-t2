import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../colors';

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  return (
    <View style={styles.searchBar}>
      <TextInput style={styles.input} onChangeText={setQuery}>
        {query}
      </TextInput>
      <TouchableOpacity style={styles.button} onPress={() => onSearch(query)}>
        <Text style={styles.buttonText}>SEARCH</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
  },
  input: {
    flexGrow: 1,
    fontSize: 22,
    paddingLeft: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: colors.searchBarBackground,
  },
  button: {
    padding: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.textPrimary,
  },
});
