import React from 'react';
import {ScrollView, View} from 'react-native';

import {useSharedValue} from 'react-native-reanimated';
import {ListItem} from '../components/ListItem';
import {
  getInitialPositions,
  SONGS,
  SONG_HEIGHT,
  Color_Pallete,
} from '../constants';
import {NullableNumber, TSongPositions} from '../types';
import {styles} from 'styles/drag_drop.style';
import {SafeAreaView} from 'react-native-safe-area-context';

const DragDropMusciScreen = () => {
  //will hold the songs position in list at every moment
  const currentSongPositions = useSharedValue<TSongPositions>(
    getInitialPositions(),
  );

  //used to know if drag is happening or not
  const isDragging = useSharedValue<0 | 1>(0);

  //this will hold id for item which user started dragging
  const draggedItemId = useSharedValue<NullableNumber>(null);

  console.log('currentSongPositions : ', currentSongPositions.value);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color_Pallete.metal_black}}>
      <View style={styles.listContainer}>
        <ScrollView
          contentContainerStyle={{height: SONGS.length * SONG_HEIGHT}}>
          {SONGS.map(eachSong => (
            <ListItem
              item={eachSong}
              key={eachSong.id}
              isDragging={isDragging}
              draggedItemId={draggedItemId}
              currentSongPositions={currentSongPositions}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DragDropMusciScreen;
