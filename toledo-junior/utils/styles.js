import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#003761',
        marginBottom: 20,
    },
    footer: {
        backgroundColor: '#003761',
        padding: 10,
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 8,
        marginTop: 15,
    },

    buttonText: {
        color: 'green',
        fontSize: 18,
        textAlign: 'center',
    },
});

export const produtoStyles = StyleSheet.create({
    listaContainer: {
        marginTop: 20,
    },
    produtoItem: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#003761',
        borderRadius: 10,
        backgroundColor: '#d58500',
    },
    produtoLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#003761',
    },
    produtoInfo: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    botaoRemover: {
        marginTop: 10,
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    botaoRemoverTexto: {
        color: '#fff',
        fontWeight: 'bold',
    },
    formContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#003761',
    },
    input: {
        borderWidth: 1,
        borderColor: '#003761',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#003761',
        marginBottom: 20,
    },
});
