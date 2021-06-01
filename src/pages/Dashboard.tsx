import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import api from '../services/api';
import { Module } from '../components/Module';

import colors from '../assets/styles/colors';
import fonts from '../assets/styles/fonts';

// Aqui definimos quais estados que o componente vai ter, e quais serão os tipos deles
type DashboardState = {
  readings: any;
  modules: string[];
}

// Dashboard não tem propriedades, mas o estado atual é do tipo DashboardState
// Os parâmetros genéricos na tipagem do Component permitem passar props
// e states. Como n tem propriedades nesse caso, passamos um objeto vazio
export class Dashboard extends Component<{}, DashboardState> {

  // A função tick define o estado atual. TypeScript nos informará
  // quais estados podemos setar (definimos lá em cima)
  // -- não nescessariamente precisamos setar todos os estados definidos --
  async tick() {
    // fetch('https://127.0.0.1:3333/reading')
    //   .then(res => res.json())
    //   .then(json => this.setState({
    //     readings: json.readings || {},
    //     modules: Object.keys(json.readings) || []
    //   }))   
    //   .catch(err => console.error(err));

    try {
      const response = await api.get('reading');
      
      this.setState({
        readings: response.data.readings || {},
        modules: Object.keys(response.data.readings) || []
      });
    } catch (err) {
      console.error(err);
    }
  }

  // Após a montagem do componente, mudaremos o estado dele a cada 5 segundos
  async componentDidMount() {
    // inicializamos nosso state
    await this.tick();
    
    setInterval(async () => await this.tick(), 5000);
  }

  // e renderiza! (tadah!)
  render() {
    return (
      <View style={styles.container}>
        {(this.state ? this.state.modules.map(module => 

          <Module 
            module={module} 
            co={this.state.readings[module].co}
            glp={this.state.readings[module].glp}
            bpm={this.state.readings[module].bpm}
            key={module}
          />

        ) : <Text style={styles.none}>Não há nenhum módulo no momento</Text> )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  none: {
    fontFamily: fonts.bold,
    marginTop: 25,
    fontSize: 18,
    width: 200,
    textAlign: 'center'
  }
});