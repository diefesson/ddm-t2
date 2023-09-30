import { StyleSheet, Text, View } from 'react-native';
import colors from '../colors';
import Rating from './Rating';

export default function News({ news, onRating }) {
  return (
    <View style={styles.news}>
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.author}>by {news.author}</Text>
      <Text style={styles.url}>{news.url}</Text>
      <Rating rating={news.rating} onRating={onRating} />
    </View>
  );
}

const styles = StyleSheet.create({
  news: {
    borderColor: colors.primary,
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    color: colors.textSecondary,
  },
  url: {
    color: colors.textSecondary,
  },
});
