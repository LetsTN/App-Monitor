import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../assets/styles/colors';
import fonts from '../assets/styles/fonts';

export interface GasBpmAlertProps {
  level: number;
  type: 'gas' | 'bpm';
  label: string;
}

export const GasBpmAlert: FC<GasBpmAlertProps> = ({ level, type, label }) => {

  function getClassName(): any {
    if (type === 'bpm') {
      return getBPMClassName();
    }

    else {
      if (label  === 'CO') {
        return getCOClassName();
      }

      else {
        return getGLPClassName();
      }
    }
  }

  function getCOClassName(): any {
    if (level > 50) {
      return styles.perigo;
    } else {
      if (level > 30) {
        return styles.alerta;
      } else {
        return styles.ok;
      }
    }
  }

  function getGLPClassName(): any {
    if (level > 1000) {
      return styles.perigo;
    } else {
      if (level > 500) {
        return styles.alerta;
      } else {
        return styles.ok;
      }
    }
  }

  function getBPMClassName(): any {
    if (level > 140) {
      return styles.perigo;
    } else {
      if (level > 120) {
        return styles.alerta;
      } else {
        return styles.ok;
      }
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.label, type === 'gas' ? styles.regular : styles.small]}>{label}: </Text>

        {(level) ? 
          <Text style={[styles.alert, getClassName()]}>{level.toFixed(2)} {type === 'gas' ? 'ppm' : 'bpm'}</Text>
        :
          <Text style={[styles.alert, styles.null]}>N/A {type === 'gas' ? 'ppm' : 'bpm'}</Text>
        }

      </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 10
  },

  label: {
    fontFamily: fonts.bold,
    alignSelf: 'flex-end',
    width: 100
  },

  regular: {
    color: colors.black
  },

  small: {
    color: colors.black,
    fontSize: 12
  },


  alert: {
    padding: 10,
    textAlign: 'center',
    borderRadius: 8,
  },

  null: {
    backgroundColor: colors.gray,
    color: colors.black
  },

  perigo: {
    backgroundColor: colors.red,
    color: colors.white
  },

  alerta: {
    backgroundColor: colors.yellow,
    color: colors.black
  },

  ok: {
    backgroundColor: colors.green,
    color: colors.black
  },

});