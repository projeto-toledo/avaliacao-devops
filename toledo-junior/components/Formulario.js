import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { produtoStyles } from '../utils/styles';

const Formulario = ({ onFormSubmit }) => {
    const [estabelecimento, setEstabelecimento] = useState('');
    const [categoria, setCategoria] = useState('');
    const [produto, setProduto] = useState('');
    const [marca, setMarca] = useState('');
    const [unidadeMedida, setUnidadeMedida] = useState('');
    const [valor, setValor] = useState('');
    const [dataRegistro, setDataRegistro] = useState('');
    const [listaProdutos, setListaProdutos] = useState([]);

    const handleInserirProduto = () => {
        try{
            const novoProduto = {
                produto,
                marca,
                estabelecimento,
                categoria,
                valor,
                unidadeMedida,
                dataRegistro,
            }
            onFormSubmit(novoProduto);

            setListaProdutos([...listaProdutos, novoProduto]);
            setEstabelecimento('');
            setCategoria('');
            setProduto('');
            setMarca('');
            setUnidadeMedida('');
            setValor('');
            setDataRegistro('');
        }catch(e){
            alert(`Erro ao adicionar produto: ${e}`);
        }
    };

    return (
        <View style={produtoStyles.formContainer}>
            <Text style={produtoStyles.label}>Nome do Estabelecimento Comercial:</Text>
            <TextInput
                style={produtoStyles.input}
                value={estabelecimento}
                onChangeText={(text) => setEstabelecimento(text)}
            />
            <Text style={produtoStyles.label}>Categoria do Produto</Text>
            <TextInput
                style={produtoStyles.input}
                value={categoria}
                onChangeText={(text) => setCategoria(text)}
            />
            <Text style={produtoStyles.label}>Nome do Produto</Text>
            <TextInput
                style={produtoStyles.input}
                value={produto}
                onChangeText={(text) => setProduto(text)}
            />
            <Text style={produtoStyles.label}>Marca do Produto</Text>
            <TextInput
                style={produtoStyles.input}
                value={marca}
                onChangeText={(text) => setMarca(text)}
            />
            <Text style={produtoStyles.label}>Unidade de medida do Produto</Text>
            <TextInput
                style={produtoStyles.input}
                value={unidadeMedida}
                onChangeText={(text) => setUnidadeMedida(text)}
            />
            <Text style={produtoStyles.label}>Valor do Produto</Text>
            <TextInput
                style={produtoStyles.input}
                value={valor}
                onChangeText={(text) => setValor(text)}
            />
            <Text style={produtoStyles.label}>Data do Registro do Produto</Text>
            <TextInput
                style={produtoStyles.input}
                value={dataRegistro}
                onChangeText={(text) => setDataRegistro(text)}/>
            <Button title="Enviar" onPress={handleInserirProduto} />
        </View>
    );
};

export default Formulario;