import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import ButtonGradient from 'components/ButtonGradient';
import Button from 'components/Button';

const RunnyBorderScreen = () => {
  const [loadingGradeint, setLoadingGradient] = useState(false);
  const [loadingPrimary, setLoadingPrimay] = useState(false);
  const [loadingPurple, setLoadingPurlple] = useState(false);
  return (
    <View style={styles.container}>
      <ButtonGradient
        onPress={() => setLoadingGradient(!loadingGradeint)}
        loading={loadingGradeint}
      />

      <Button
        loading={loadingPurple}
        onPress={() => setLoadingPurlple(!loadingPurple)}
      />

      <Button
        borderColor="rgba(0, 123, 255,0.8)"
        loading={loadingPrimary}
        onPress={() => setLoadingPrimay(!loadingPrimary)}
      />
    </View>
  );
};

export default RunnyBorderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181028',
  },
});
