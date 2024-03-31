import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {auth} from 'firebase';
import firebase from './../firebase';

const AuthComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password);

            const userId = response.user.uid;
            await saveUserToDatabase(userId, additionalUserData);

            console.log('Usuário criado com sucesso:', userId);
        } catch (error) {
            console.error('Erro ao criar usuário:', error.message);
        }
    };

    const saveUserToDatabase = async (userId, additionalUserData) => {
        try {
            const userRef = firebase.database().ref('users').child(userId);
            await userRef.set({
                ...additionalUserData,
            });

            console.log('Informações adicionais do usuário salvas no banco de dados.');
        } catch (error) {
            console.error('Erro ao salvar informações adicionais do usuário:', error.message);
        }
    };

    const handleLogin = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log('Usuário autenticado:', response.user.uid);
        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            console.log('Usuário desconectado');
        } catch (error) {
            console.error('Erro ao fazer logout:', error.message);
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
            <Button title="Login" onPress={handleLogin} />
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default AuthComponent;
