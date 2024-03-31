import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, TouchableOpacity, RefreshControl } from 'react-native';
import Formulario from './Formulario';
import { globalStyles } from '../utils/styles';
import firebase from '../firebase';

const HomePage = ({ navigation }) => {
    const [listaProdutos, setListaProdutos] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        const produtosRef = firebase.database().ref('produtos');

        const handleChildAdded = (childSnapshot) => {
            const novoProduto = childSnapshot.val();
            setListaProdutos((prevLista) => [...prevLista, novoProduto]);
        };

        produtosRef.on('child_added', handleChildAdded);

        return () => {
            produtosRef.off('child_added', handleChildAdded);
        };
    }, []);

    const handleFormSubmit = (novoProduto) => {
        try {
            const produtosRef = firebase.database().ref('produtos');
            const newProdutoRef = produtosRef.push();
            const produtoKey = newProdutoRef.key;
            newProdutoRef.set({
                ...novoProduto,
                key: produtoKey,
            });
            setListaProdutos([...listaProdutos, novoProduto]);
            alert('Produto adicionado com sucesso!');
        } catch (error) {
            alert(`Erro ao adicionar produto: ${error}`);
        }
    };
    const fetchData = async () => {
        try {
            const produtosRef = firebase.database().ref('produtos');
            const snapshot = await produtosRef.once('value');
            const produtosData = snapshot.val();

            setListaProdutos(produtosData ? Object.values(produtosData) : []);
        } catch (error) {
            console.error('Erro ao recarregar dados:', error);
        }
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchData()
        setRefreshing(false);
    };


    return (
        <ScrollView
            style={globalStyles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <>
                <Text style={globalStyles.header}>Índice de Preços Toledo</Text>
                <Formulario onFormSubmit={handleFormSubmit} />
                <TouchableOpacity
                    style={globalStyles.buttonText}
                    onPress={() => navigation.navigate('ListaProdutos', { produtos: listaProdutos })}
                >
                    <Text style={globalStyles.buttonText}>Ver Lista de Produtos</Text>
                </TouchableOpacity>
            </>
        </ScrollView>
    );
};

export default HomePage;
