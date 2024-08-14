import {StyleSheet, View} from 'react-native';
import React from 'react';
import {PieChart} from 'components/BarChart';

const BarChartScreen = () => {
  return (
    <View style={styles.container}>
      <PieChart />
    </View>
  );
};

export default BarChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
