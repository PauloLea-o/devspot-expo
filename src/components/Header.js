import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DEV.SPOT</Text>
      <Ionicons name="sparkles-outline" size={26} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 24,
  },
  logo: {
    color: colors.text,
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
