import { TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { arrow } from '@assets/icons/svg';
import { styles } from './Input.styled';

export default function Input() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for any IP address or domain"
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn}>
        <SvgXml xml={arrow} />
      </TouchableOpacity>
    </View>
  );
}
