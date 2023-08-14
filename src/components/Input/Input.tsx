import {
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

import { arrow } from '@assets/icons/svg';
import { styles } from './Input.styled';
import { useMain } from 'components/MainProvider/MainProvider';

export default function Input() {
  const { inputValue, setInputValue } = useMain();

  const findByIp = () => {
    console.log(inputValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for any IP address or domain"
        style={styles.input}
        value={inputValue}
        onChangeText={data => setInputValue(data)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.btn} onPress={findByIp}>
        <SvgXml xml={arrow} />
      </TouchableOpacity>
    </View>
  );
}
