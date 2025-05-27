import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function TarefaItem(props) {

    const [isCompleted, setIsCompleted] = useState(props.statusTex === 'concluído');

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.nome}</Text>
            <Text style={styles.categoria}>{props.categoria}</Text>
            <View style={styles.campoTexto}>
                <Text style={styles.descricao}>{props.descricao}</Text>
            </View>
            <View style={styles.retangulo}>
                <Text style={styles.data}>{props.data}</Text>
                <TouchableOpacity style={{...styles.statuss, backgroundColor: isCompleted ? '#4CAF50' : 'orange'}} onPress={() => setIsCompleted(!isCompleted)}>
                    <Text style={styles.textoStatus}>{props.statusTex}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        padding: 15,
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#ccc'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 21,
        textAlign: 'center',
    },
    data: {
        marginLeft: '1%',
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: 'italic'
    },
    categoria: {
        marginTop: 7,
        fontSize: 17,
        marginLeft: 4,
        fontStyle: 'italic'
    },
    campoTexto: {
        width: '99%',
        height: 'auto',
        margin: 'auto',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: '3%',
        borderColor: '#6f7275'
    },
    descricao: {
        fontSize: 17,
        padding: 15,
        paddingLeft: 5
    },
    retangulo: {
        width: '92.5%',
        height: 30,
        justifyContent: 'center',
        paddingTop: '7.5%',
        paddingBottom: '2%'
    },
    statuss: {
        width: '25%',
        height: 30,
        borderRadius: 5,
        borderWidth: 1.5,
        borderStyle: 'dashed',
        alignItems: 'center',
        marginLeft: 5,
        position: 'absolute',
        right: '-7%',
    },
    textoStatus: {
        color: 'white',
        margin: 'auto',
        marginTop: 3.5,
    }
});