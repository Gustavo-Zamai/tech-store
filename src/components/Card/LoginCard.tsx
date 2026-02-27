import { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import { InputCard } from '../Input/Input';
import { IButton } from '../Button/Button';
import { login } from '../../services/Login/login';



export const LoginCard = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <Center>
        <Box padding='3rem' 
            marginTop='4rem' 
            border='1px solid black' 
            borderRadius='10px' 
            bg='#FFFFFF'
            width='75%'
            shadow='lg'
            >
            <InputCard id='email' type='email' label='USUÁRIO' value={email} onChange={(e) => setEmail(e.target.value)}  /> 
            <InputCard id='password' type='password' label='SENHA' value={password} onChange={(e) => setPassword(e.target.value)} />
            <IButton text='Login' event={() => { login(email, password).then((message) => console.log(message)) }} />
        </Box>
        {/*<Image src='https://placehold.co/400x400' alt='Login Image' w='400px' h='400px' marginLeft='2rem' />*/}
        </Center>
    );
};