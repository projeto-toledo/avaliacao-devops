import React, { useState } from 'react';
import {  Text,StyleSheet } from 'react-native';

const Sucesso = (showSuccess) => {
    return showSuccess ? (
        <Text style={styles.texto}>
            Produto enviado com sucesso.
        </Text>
    ) : null;
};

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        marginTop: 40,
        color: "green",
        width: "80%",
        textAlign: "center",
        alignSelf: "center",
    }
})

export default Sucesso;
