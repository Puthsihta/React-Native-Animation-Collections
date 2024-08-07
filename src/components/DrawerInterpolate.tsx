import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';

import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export type TDrawerList = {
  DrawerInterpolateNested: undefined;
};

export type THomeNavigationProps = DrawerNavigationProp<
  TDrawerList,
  'DrawerInterpolateNested'
>;
export type THomeScreenProps = DrawerScreenProps<
  TDrawerList,
  'DrawerInterpolateNested'
>;

export const CustomDrawerItem = ({
  label,
  icon,
}: {
  label: string;
  icon: string;
}) => {
  return (
    <TouchableOpacity style={styles.drawerItemContainer}>
      <AntDesign name={icon} color={'white'} size={22} />
      <Text style={styles.drawerItemLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerItemContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 16,
  },
  drawerItemLabel: {
    color: 'white',
    marginLeft: 15,
    fontSize: 16,
  },
});
