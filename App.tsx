import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function App() {
  const [appCarregou, setEstadoApp] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Deixa a tela de carregamento visível enquanto busca os recursos
        await SplashScreen.preventAutoHideAsync();

        // Carrega as fontes, faz todas as chamadas de API que você precisa fazer aqui
        await Font.loadAsync(Entypo.font);

        // Força um delay de 5 seg só pra forçar a tela de carregamento
        // TODO: LETICIA SUA IDIOTA N ESQUECE DE TIRAR ISSO DEPOIS
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        // renderiza a app
        setEstadoApp(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appCarregou) {
      //  ESCONDA! ESCONDA A TELA DE CARREGAMENTO IMEDIATAMENTE!
      // Só n chama isso dps de setEstadoApp(true) pq se n corre o risco
      // de rolar uma tela em branco durante um tempo
      await SplashScreen.hideAsync();
    }
  }, [appCarregou]);

  if (!appCarregou) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
      <Text>FUNFOU! 👋</Text>
      <Entypo name="rocket" size={30} />
    </View>
  );
}

