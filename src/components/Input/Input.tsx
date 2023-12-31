import { TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { arrow } from '@assets/icons/svg';
import { styles } from './Input.styled';
import { useIPTracker } from 'components/IPTrackerProvider/IPTrackerProvider';

export default function Input() {
  const { inputValue, setInputValue, searchByIp, error } = useIPTracker();

  const findByIp = () => {
    searchByIp(inputValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for any IP address or domain"
        style={{ ...styles.input, borderColor: error ? 'red' : 'transparent' }}
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.btn} onPress={findByIp}>
        <SvgXml xml={arrow} />
      </TouchableOpacity>
    </View>
  );
}
