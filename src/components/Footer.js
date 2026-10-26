import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Desenvolvido por Paulo Leão e Lucas Gabriel.</Text>
      <Text style={styles.text}>Projeto fictício sem fins comerciais.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    alignItems: 'center',
  },
  text: {
    color: colors.textDark,
    fontSize: 12,
  },
});
