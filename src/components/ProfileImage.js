import { View, Image, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function ProfileImage() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.border} />
      <Image source={require('../assets/perfil.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    width: 280,
    height: 250,
    marginBottom: 28,
  },
  border: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 280,
    height: 250,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 18,
  },
  image: {
    width: 280,
    height: 250,
    borderRadius: 18,
  },
});
