import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProfileImage from '../components/ProfileImage';
import Footer from '../components/Footer';
import { colors } from '../theme/colors';

export default function SobreScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header />
        <ProfileImage />

        <Text style={styles.title}>Sobre mim</Text>

        <Text style={styles.paragraph}>
          Sou a Joana Santos, desenvolvedora Front-end apaixonada por transformar
          ideias em interfaces funcionais, acessíveis e bem pensadas. Trabalho
          principalmente com React, HTML e CSS, criando experiências digitais que
          não só funcionam bem, mas também fazem sentido para quem usa.
        </Text>

        <Text style={styles.paragraph}>
          Gosto de colaborar de perto com pequenos negócios, designers e times
          criativos, ajudando a tirar projetos do papel e levá-los para a web de
          forma prática e eficiente. Acredito que um bom produto nasce do
          equilíbrio entre código bem escrito, atenção aos detalhes e uma
          comunicação clara ao longo de todo o processo.
        </Text>

        <Text style={styles.paragraph}>
          Estou sempre buscando evoluir, aprender novas tecnologias e aprimorar
          minhas soluções, seja otimizando performance, melhorando a usabilidade
          ou explorando novas formas de construir interfaces mais escaláveis. Se
          você tem uma ideia e quer transformá-la em algo real, vamos conversar!
        </Text>
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
    marginBottom: 20,
  },
  paragraph: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 24,
  },
});
