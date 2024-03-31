import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import firebase from '../firebase';

const LogoutButton = () => {
    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            console.log('Logout efetuado');
        } catch (error) {
            console.error('Erro ao fazer logout:', error.message);
        }
    };

    return (
        <TouchableOpacity onPress={handleLogout}>
            <Feather name="log-out" size={24} color="black" />
            <Text>Logout</Text>
        </TouchableOpacity>
    );
};

export default LogoutButton;
