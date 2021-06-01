import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { View, StyleSheet } from 'react-native';

import Routes  from './src/routes';

import {
  useFonts,
  Archivo_400Regular,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';

export default function App(){
  const [ fontsLoaded ] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold
  });

  if(!fontsLoaded)
    return <AppLoading />
    
  return (
    <Routes />
  )
}

