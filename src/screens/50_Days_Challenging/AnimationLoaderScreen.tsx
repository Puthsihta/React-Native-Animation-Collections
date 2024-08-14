import LoaderItem from 'components/LoaderItem';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const CIRCLE_SIZE = 300;

const LoadingScreen = () => {
  const rotation = useSharedValue(0);
  const loaderAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });
  useEffect(() => {
    // rotation.value = withRepeat(withTiming(120, { duration: 700 }), -1, true);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#322d30',
      }}>
      <Animated.View style={[styles.container, loaderAnimatedStyle]}>
        {[...Array(9)].map((_, i) => (
          <LoaderItem key={i} index={i} />
        ))}
      </Animated.View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'relative',
  },
});
