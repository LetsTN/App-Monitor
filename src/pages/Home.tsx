import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/core';

export function Home() {
  const navigation = useNavigation();

  function handleMoveOn(){
    navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.container} >
      <Text>HOME! 👋</Text>
      <Entypo name="rocket" size={30} />

      <Button 
        title={'Dashboard'}
        onPress={handleMoveOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

