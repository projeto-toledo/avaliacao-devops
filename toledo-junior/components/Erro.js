import React, { useState } from 'react';
import {  Text,StyleSheet } from 'react-native';

const Erro = (showError) => {
    return showError ? (
        <Text style={styles.texto}>
            Erro ao fazer o login, tente novamente.
        </Text>
    ) : null;
};

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        marginTop: 40,
        color: "red",
        width: "80%",
        textAlign: "center",
        alignSelf: "center",
    }
})

export default Erro;
