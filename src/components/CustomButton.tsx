import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './CustomButtonStyles';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

export default function CustomButton({text, onPress}: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
