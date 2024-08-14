import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeartProgressCircle from 'components/HeartProgressCircle';

const HeartProgressCircleScreen = () => {
  return (
    <View style={styles.container}>
      <HeartProgressCircle />
    </View>
  );
};

export default HeartProgressCircleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c44a3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
