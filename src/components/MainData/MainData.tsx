import { Text, View } from 'react-native';

import { styles } from './MainData.styled';
import { useMain } from 'components/MainProvider/MainProvider';

export default function MainData() {
  const { MainUserData } = useMain();

  return (
    <View style={styles.relativeContainer}>
      <View style={styles.dataContainer}>
        <Text style={styles.labelText}>ip address</Text>
        <Text style={styles.dataText}>{MainUserData.ip ?? ''}</Text>
        <Text style={styles.labelText}>location</Text>
        <Text style={styles.dataText}>
          {MainUserData.location ?? ''}
        </Text>
        <Text style={styles.labelText}>timezone</Text>
        <Text style={styles.dataText}>{MainUserData.timezone ?? ''}</Text>
        <Text style={styles.labelText}>isp</Text>
        <Text style={styles.dataText}>{MainUserData.isp ?? ''}</Text>
      </View>
    </View>
  );
}
