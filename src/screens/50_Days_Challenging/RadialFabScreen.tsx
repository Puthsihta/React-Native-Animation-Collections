import {StyleSheet, View} from 'react-native';
import React from 'react';
import {RadialFab} from 'components/RadiaFab';

const RadialFabScreen = () => {
  return (
    <View style={styles.container}>
      <RadialFab />
    </View>
  );
};

export default RadialFabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
