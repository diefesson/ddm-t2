import { StyleSheet, View } from 'react-native';
import News from './News';

export default function NewsList({ newsList, onRating }) {
  return (
    <View style={styles.newsList}>
      {newsList.map((news) => (
        <News
          key={news.id}
          news={news}
          onRating={(rating) => onRating(news.id, rating)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  newsList: {
    gap: 10,
  },
});
