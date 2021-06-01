import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { GasBpmAlert } from './GasBpmAlert';

import colors from '../assets/styles/colors';
import fonts from '../assets/styles/fonts';

export interface ModuleProps {
  module: string;
  co: number;
  glp: number;
  bpm: number;
}

export const Module: FC<ModuleProps> = ({ module, co, glp, bpm }) => {
  const navigation = useNavigation();

  function handleMoveOn(){
    navigation.navigate('Graphics', { module });
  }

  return (
    <View style={styles.container} >
      <View style={styles.module}>
        <Text style={styles.label}>Módulo: </Text>
        <Text>{module}</Text>
      </View>

      <GasBpmAlert label={'CO'} level={co} type={'gas'}/>
      <GasBpmAlert label={'GLP'} level={glp} type={'gas'}/>
      <GasBpmAlert label={'Frequência cardíaca'} level={bpm} type={'bpm'}/>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',

    backgroundColor: colors.white,
    borderRadius: 8,
    width: '75%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 25,
    marginTop: 25,
  },

  module: {
    marginBottom: 10
  },

  label: {
    fontFamily: fonts.bold,
    alignSelf: 'flex-end',
    width: 100
  },
});
