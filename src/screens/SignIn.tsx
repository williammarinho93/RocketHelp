
import { VStack, Heading } from 'native-base';

import Logo from '../assets/logo_primary.svg'; //exportando a logo e criando o componente <Logo/>

export function SignIn(){
    return(
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo /> 


            <Heading color="gray.100">
                Acesse sua conta
            </Heading>
        </VStack>
    )
}