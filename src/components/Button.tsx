import React from 'react'
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps} from 'react-native'
import colors from '../styles/colors'

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

export function Button({ title, ...rest } : ButtonProps ) {
  return(
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
    <Text style={styles.buttonText}>
      { title }
    </Text>
  </TouchableOpacity>
  )
}


const styles = StyleSheet.create({  
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
    paddingHorizontal: 10
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})