// CadastroComponent.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from '../firebase';

const CadastroComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCadastro = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log('Usuário criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar usuário:', error.message);
        }
    };

    return (
        <View>
            <Text>Email:</Text>
            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
            />
            <Text>Senha:</Text>
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Button title="Cadastrar" onPress={handleCadastro} />
        </View>
    );
};

export default CadastroComponent;
