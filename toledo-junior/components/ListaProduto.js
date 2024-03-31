import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Button,
    RefreshControl,
} from 'react-native';
import { globalStyles, produtoStyles } from '../utils/styles';
import firebase from '../firebase';

const ListaProdutos = ({ produtos }) => {
    const [refreshing, setRefreshing] = useState(false);
    const [listaProdutos, setListaProdutos] = useState([]);

    const removerProduto = (produtoKey) => {
        const produtosRef = firebase.database().ref('produtos');
        produtosRef
            .child(produtoKey)
            .remove()
            .then(() => {
                alert('Produto removido com sucesso!');
                fetchData();
            })
            .catch((error) => {
                console.error('Erro ao remover produto:', error);
            });
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

        fetchData();

        setRefreshing(false);
    };

    return (
        <ScrollView
            style={globalStyles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <Text style={globalStyles.header}>Produtos Registrados:</Text>
            {produtos.map((item, index) => (
                <ScrollView key={item.key} style={produtoStyles.produtoItem}>
                    <Text style={produtoStyles.produtoLabel}>Estabelecimento:</Text>
                    <Text style={produtoStyles.produtoInfo}>{item.estabelecimento}</Text>

                    <Text style={produtoStyles.produtoLabel}>Categoria:</Text>
                    <Text style={produtoStyles.produtoInfo}>{item.categoria}</Text>

                    <Text style={produtoStyles.produtoLabel}>Nome do Produto:</Text>
                    <Text style={produtoStyles.produtoInfo}>{item.produto}</Text>

                    <Text style={produtoStyles.produtoLabel}>Marca do Produto:</Text>
                    <Text style={produtoStyles.produtoInfo}>{item.marca}</Text>

                    <Text style={produtoStyles.produtoLabel}>Unidade de Medida:</Text>
                    <Text style={produtoStyles.produtoInfo}>{item.unidadeMedida}</Text>

                    <Text style={produtoStyles.produtoLabel}>Valor do Produto:</Text>
                    <Text style={produtoStyles.produtoInfo}>R$ {item.valor}</Text>

                    <Text style={produtoStyles.produtoLabel}>Data do Registro:</Text>
                    <Text style={produtoStyles.produtoInfo}>{item.dataRegistro}</Text>

                    <TouchableOpacity onPress={() => removerProduto(item.key)}>
                        <View style={produtoStyles.botaoRemoverTexto}>
                            <Text style={produtoStyles.botaoRemover}>Remover Produto</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            ))}
        </ScrollView>
    );
};

export default ListaProdutos;
