# DEV.SPOT – App com Expo + React Native

Trabalho prático bimestral: aplicativo mobile com duas telas (Home e Sobre mim), feito com Expo e React Native.

## 👥 Integrantes

- Paulo Leão
- Lucas Gabriel

## 📲 Descrição do app

Portfólio de uma desenvolvedora Front-end fictícia, com duas telas:

- **Home**: logo, imagem de perfil, título e apresentação, botões "Sobre mim" (abre a segunda tela) e "Entre em contato!" (mostra um Alert), switch "Alterar visualização" (mostra o Alert "Switch pressionado") e botões para GitHub, LinkedIn, Instagram e Twitch, que abrem os links.
- **Sobre mim**: título, biografia em três parágrafos e rodapé com os créditos.

Tecnologias: Expo, React Native, React Navigation (native stack), `@expo/vector-icons` e `StyleSheet`.

## 📸 Prints

| Home | Sobre mim |
| --- | --- |
| ![Home](prints/home.png) | ![Sobre mim](prints/sobre.png) |

## 📁 Estrutura

```
App.js                  # navegação entre as telas
src/
  screens/
    HomeScreen.js
    SobreScreen.js
  components/           # componentes reutilizáveis
    Header.js
    ProfileImage.js
    PrimaryButton.js
    SocialButton.js
    Footer.js
  assets/
    perfil.png
  theme/
    colors.js
prints/
```

## ▶️ Como rodar o projeto

Pré-requisitos: Node.js (LTS) e o app **Expo Go** no celular.

```bash
npm install
npx expo install --fix
npx expo start
```

Depois, escaneie o QR Code com o Expo Go (Android) ou com a câmera (iOS). Para abrir no navegador, aperte `w` no terminal ou rode `npx expo start --web`.
