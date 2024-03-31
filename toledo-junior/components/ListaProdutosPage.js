import {React, useState, useCallback} from 'react';
import { ScrollView, Text, View } from 'react-native';
import ListaProdutos from './ListaProduto';
import { globalStyles } from '../utils/styles';

const ListaProdutosPage = ({ route }) => {
    const { produtos } = route.params;

    return (
        <ScrollView style={globalStyles.container}>
            <ListaProdutos produtos={produtos} />
        </ScrollView>
    );
};

export default ListaProdutosPage;
