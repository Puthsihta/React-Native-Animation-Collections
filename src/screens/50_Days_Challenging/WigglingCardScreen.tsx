import {StyleSheet, View} from 'react-native';
import React from 'react';
import WigglingCards from 'components/WigglingCards';

const WigglingCardScreen = () => {
  return (
    <View style={styles.container}>
      <WigglingCards />
    </View>
  );
};

export default WigglingCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
