import { StyleSheet, View } from 'react-native';
import News from './News';

export default function NewsList({ newsList }) {
  return (
    <View style={styles.newsList}>
      {newsList.map((news) => (
        <News key={news.id} news={news} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  newsList: {
    gap: 10,
  },
});
