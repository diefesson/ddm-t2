import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import colors from '../colors';
import { TouchableWithoutFeedback } from 'react-native';

const maxRating = 5;

export default function Rating({ rating, onRating }) {
  let stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <Star key={i} solid={i <= rating} onPress={() => onRating(i)} />
    );
  }
  return <View style={styles.rating}>{stars}</View>;
}

function Star({ solid, onPress }) {
  const icon = solid ? solidStar : regularStar;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <FontAwesomeIcon style={styles.star} size={40} icon={icon} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-end',
    margin: 5,
  },
  star: {
    color: colors.primary,
    fontSize: 30,
  },
});
