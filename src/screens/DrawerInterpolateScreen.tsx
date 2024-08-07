import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {CustomDrawerItem, TDrawerList} from 'components/DrawerInterpolate';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DrawerInterpolate = ({
  navigation,
}: {
  navigation: DrawerNavigationHelpers;
}) => {
  const insets = useSafeAreaInsets();
  const drawerProgress = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8]);

    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 34]);

    return {
      borderRadius,
      transform: [{scale}],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <TouchableOpacity
        onPress={navigation.openDrawer}
        style={[
          styles.menuContainer,
          {
            paddingTop: insets.top > 0 ? insets.top + 8 : 28,
          },
        ]}>
        <Entypo name="menu" size={26} />
        <Text style={styles.label}>Menu</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const CustomDrawerContent = ({
  navigation,
}: {
  navigation: DrawerNavigationHelpers;
}) => {
  return (
    <DrawerContentScrollView scrollEnabled contentContainerStyle={styles.flex}>
      <View style={styles.drawerScroll}>
        <TouchableOpacity
          style={styles.marginBottom}
          onPress={() => navigation.closeDrawer()}>
          <AntDesign name="close" size={24} color={'white'} />
        </TouchableOpacity>

        <CustomDrawerItem label="Home" icon="home" />
        <CustomDrawerItem label="My wallet" icon="wallet" />
        <CustomDrawerItem label="Notifications" icon="bells" />
        <CustomDrawerItem label="Favourite" icon="hearto" />
        <View style={styles.hr} />
        <Text style={styles.implementedWith}>Implemented with:</Text>
        <Text style={[styles.implementedWith, {paddingTop: 0}]}>
          Reanimated
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator<TDrawerList>();

const DrawerInterpolateScreen = () => {
  return (
    <View style={styles.navigatorContainer}>
      <Drawer.Navigator
        drawerContent={props => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          sceneContainerStyle: styles.sceneContainerStyle,
          drawerStyle: styles.drawerStyle,
        }}>
        <Drawer.Screen name="DrawerInterpolateNested">
          {(props: any) => <DrawerInterpolate {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 8,
  },
  flex: {
    flex: 1,
  },
  navigatorContainer: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  sceneContainerStyle: {
    backgroundColor: 'transparent',
  },
  drawerStyle: {
    flex: 1,
    width: '65%',
    paddingRight: 20,
    backgroundColor: 'transparent',
  },
  hr: {
    height: 1,
    backgroundColor: 'white',
    left: 8,
  },
  implementedWith: {
    paddingLeft: 8,
    paddingVertical: 16,
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  marginBottom: {
    marginBottom: 32,
  },
  drawerScroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default DrawerInterpolateScreen;
