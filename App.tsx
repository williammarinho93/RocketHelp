import { SignIn } from './src/screens/SignIn';
import { NativeBaseProvider, StatusBar } from 'native-base';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";


import { THEME } from './src/styles/theme';

import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold }); //carregamento de fonte

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent

      />
      { fontsLoaded ? <SignIn /> : <Loading/> }     
    </NativeBaseProvider>
  ); //fontes carregaram? o fontsLoaded é verdadeiro(?) se for vedadeiro carrega a tela de login caso contrario carega a tela de loading
}

