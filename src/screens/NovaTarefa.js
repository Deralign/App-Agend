import { View, Text, StyleSheet, TouchableOpacity, useState, ScrollView } from 'react-native';
import TarefaItem from '../components/TarefaItem';
import { Picker } from '@react-native-picker/picker'

export default function Home() {



    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adicionar Tarefa</Text>
                <View style={styles.icone}>
                    <Text style={styles.botaoFechar}>⚙️</Text>
                </View>
            </View>
            <ScrollView style={styles.body}>

            </ScrollView>
            <TouchableOpacity
                style={styles.botaoAdicionar}
                onPress={() => (
                    alert("addedado")
                )}
            >
                <Text style={styles.emoji}>➕</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: '#f1c739',
        width: '100%',
        height: 70,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderColor: 'black',
        borderStyle: 'dashed',
    },
    titulo: {
        color: 'white',
        fontSize: 20,
        marginTop: 2,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    icone: {
        backgroundColor: 'grey',
        width: 45,
        height: 45,
        borderRadius: 25,
        right: 15,
        position: 'absolute'
    },
    body: {

    },
    botaoAdicionar: {
        backgroundColor: "#ffe033",
        width: 70,
        height: 70,
        borderRadius: 35,
        position: 'absolute',
        bottom: "2%",
        right: "4%",
        borderWidth: 3,
        borderStyle: 'dashed',
    },
    emoji: {
        margin: 'auto',
        marginBottom: 8,
        fontSize: 40,
        color: 'white'
    },
    botaoFechar: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 1.5,
    },
});