import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ValuePickersScreen from 'screens/ValuePickersScreen';
import Carousel3DScreen from 'screens/Carousel3DScreen';
import CircularAnimatedTextScreen from 'screens/CircularAnimatedTextScreen';
import CircularProgressScreen from 'screens/CircularProgressBarScreen';
import CustomDrawerScreen from 'screens/CustomDrawerScreen';
import DotLoaderScreen from 'screens/DotLoaderScreen';
import DoubleListScreen from 'screens/DoubleListScreen';
import DrawerInterpolateScreen from 'screens/DrawerInterpolateScreen';
import FloatingButton from 'screens/FloatingButtonScreen';
import LikeInteractionScreen from 'screens/LikeInteractionScreen';
import ListWithTabScreen from 'screens/ListWithIndicator';
import NFCReaderScreen from 'screens/NFCReaderScreen';
import ParallaxScreen from 'screens/ParallaxScreen';
import PinCodeScreen from 'screens/PinCodeScreen';
import ProductListScreen from 'screens/ProuctListScreen';
import ProgressLoaderScreen from 'screens/ProgressLoaderScreen';
import ScrollItemListScreen from 'screens/ScrollItemListScreen';
import ShutdownIOSScreen from 'screens/ShutdownIOSScreen';
import TicketScreen from 'screens/TicketScreen';
import TogglersScreen from 'screens/TogglerIOSScreen';
import TranslateSearchIOSScreen from 'screens/TranslateSearchIOSScreen';

type TStackList = {
  ValuePickers: undefined;
  Carousel3D: undefined;
  CircularAnimationText: undefined;
  CircularProgress: undefined;
  CustomDrawer: undefined;
  DotLoader: undefined;
  DoubleList: undefined;
  DrawerInterpolate: undefined;
  FloatingButton: undefined;
  LikeInteraction: undefined;
  ListWithIndicator: undefined;
  NFCReader: undefined;
  Parallax: undefined;
  PinCode: undefined;
  ProductList: undefined;
  ProgressLoader: undefined;
  ScrollItemList: undefined;
  ShutdownIOS: undefined;
  Ticket: undefined;
  Togglers: undefined;
  TranslateSearchIOS: undefined;
};

const Stack = createNativeStackNavigator<TStackList>();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
          <Stack.Screen
            name="TranslateSearchIOS"
            component={TranslateSearchIOSScreen}
          />
          <Stack.Screen name="Togglers" component={TogglersScreen} />
          <Stack.Screen name="Ticket" component={TicketScreen} />
          <Stack.Screen name="ShutdownIOS" component={ShutdownIOSScreen} />
          <Stack.Screen
            name="ScrollItemList"
            component={ScrollItemListScreen}
          />
          <Stack.Screen
            name="ProgressLoader"
            component={ProgressLoaderScreen}
          />
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          <Stack.Screen name="PinCode" component={PinCodeScreen} />
          <Stack.Screen name="Parallax" component={ParallaxScreen} />
          <Stack.Screen name="NFCReader" component={NFCReaderScreen} />
          <Stack.Screen
            name="ListWithIndicator"
            component={ListWithTabScreen}
          />
          <Stack.Screen
            name="LikeInteraction"
            component={LikeInteractionScreen}
          />
          <Stack.Screen name="FloatingButton" component={FloatingButton} />
          <Stack.Screen
            name="DrawerInterpolate"
            component={DrawerInterpolateScreen}
          />
          <Stack.Screen name="DoubleList" component={DoubleListScreen} />
          <Stack.Screen name="DotLoader" component={DotLoaderScreen} />
          <Stack.Screen name="CustomDrawer" component={CustomDrawerScreen} />
          <Stack.Screen
            name="CircularProgress"
            component={CircularProgressScreen}
          />
          <Stack.Screen name="ValuePickers" component={ValuePickersScreen} />
          <Stack.Screen name="Carousel3D" component={Carousel3DScreen} />
          <Stack.Screen
            name="CircularAnimationText"
            component={CircularAnimatedTextScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
