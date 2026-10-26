import { useState } from 'react';
import { View, Text, ScrollView, Switch, StyleSheet, Alert, Platform } from 'react-native';
import Header from '../components/Header';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/SocialButton';
import Footer from '../components/Footer';
import { colors } from '../theme/colors';

// Links das redes sociais da dupla.
// TODO: trocar LinkedIn, Instagram e Twitch pelos perfis reais
// (por enquanto apontam para a página inicial de cada rede).
const REDES = [
  { title: 'GitHub', icon: 'github', url: 'https://github.com/PauloLea-o' },
  { title: 'Linkedin', icon: 'linkedin', url: 'https://www.linkedin.com/' },
  { title: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/' },
  { title: 'Twitch', icon: 'twitch', url: 'https://www.twitch.tv/' },
];

// Alert.alert não funciona na versão web, então usamos window.alert lá.
function mostrarAlerta(mensagem) {
  if (Platform.OS === 'web') {
    window.alert(mensagem);
  } else {
    Alert.alert(mensagem);
  }
}

export default function HomeScreen({ navigation }) {
  const [ativo, setAtivo] = useState(false);

  function alternarSwitch(valor) {
    setAtivo(valor);
    mostrarAlerta('Switch pressionado');
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header />
        <ProfileImage />

        <Text style={styles.title}>
          Eleve seu negócio digital a outro nível{' '}
          <Text style={styles.highlight}>com um Front-end de qualidade!</Text>
        </Text>

        <Text style={styles.description}>
          Olá! Sou Joana Santos, desenvolvedora Front-end com especialidade em
          React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem em
          prática boas ideias. Vamos conversar?
        </Text>

        <PrimaryButton title="Sobre mim" onPress={() => navigation.navigate('Sobre')} />
        <PrimaryButton title="Entre em contato!" onPress={() => mostrarAlerta('Entre em contato')} />

        <Text style={styles.subtitle}>Acesse minhas redes:</Text>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Alterar visualização</Text>
          <Switch
            value={ativo}
            onValueChange={alternarSwitch}
            trackColor={{ false: colors.primary, true: colors.primary }}
            thumbColor={colors.text}
          />
        </View>

        {REDES.map((rede) => (
          <SocialButton key={rede.title} {...rede} />
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 34,
    marginBottom: 16,
  },
  highlight: {
    color: colors.primary,
  },
  description: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 24,
  },
  subtitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  switchLabel: {
    color: colors.muted,
    fontSize: 15,
  },
});
