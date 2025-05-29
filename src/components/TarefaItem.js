import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { removeData } from '../storage/async-storage';
import botaoExcl from '../components/Imgs/5.png';
import botaoEdit from '../components/Imgs/6.png';

export default function TarefaItem(props) {

    const [isCompleted, setIsCompleted] = useState(props.statusTex === 'concluído');
    const [visible, setVisible] = useState(false);

    const handleDelete = async () => {
        await removeData(props.task)
        props.setIsLoaded(true)
        setVisible(false)
    }

    const showUp = async () => {
        setVisible(true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.botaoExcluir} onPress={() => showUp()}>
                    <Image style={styles.imagemExcluir} source={botaoExcl}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonEdit} onPress={1}>
                    <Image style={styles.imageEdit} source={botaoEdit}></Image>
                </TouchableOpacity>
            </View>
            <Text style={styles.titulo}>{props.task.nome}</Text>
            <Text style={styles.categoria}>{props.task.categoria}</Text>
            <View style={styles.campoTexto}>
                <Text style={styles.descricao}>{props.task.descricao}</Text>
            </View>
            <View style={styles.retangulo}>
                <Text style={styles.data}>{props.task.data}</Text>
                <TouchableOpacity style={{ ...styles.statuss, backgroundColor: isCompleted ? '#4CAF50' : 'orange' }} onPress={() => setIsCompleted(!isCompleted)}>
                    <Text style={styles.textoStatus}>{isCompleted ? 'concluído' : 'a cumprir'}</Text>
                </TouchableOpacity>
            </View>
            <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={() => setVisible(false)}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle} numberOfLines={3} adjustsFontSizeToFit>Tem certeza que deseja apagar a tarefa '{props.task.nome}'?</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.yesButton} onPress={() => handleDelete()}>
                                <Text>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.noButton} onPress={() => setVisible(false)}>
                                <Text>Não</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        padding: 15,
        paddingTop: '2%',
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#ccc',
    },
    buttonContainer: {
        width: '100%',
        height: 30,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 21,
        textAlign: 'center',
        marginTop: '1%',
    },
    botaoExcluir: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: '-1%',
        borderRadius: 5,
    },
    imagemExcluir: {
        height: '100%',
        width: '100%'
    },
    buttonEdit: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: '9%',
        borderRadius: 5
    },
    imageEdit: {
        width: '100%',
        height: '100%'
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
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        height: 'auto',
        minHeight: 120,
        minWidth: 250,
        maxWidth: 350,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: '5%',
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    yesButton: {
        flex: 1,
        height: 30,
        backgroundColor: '#ebebeb',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    noButton: {
        flex: 1,
        height: 30,
        backgroundColor: '#ebebeb',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginHorizontal: 5,
    },
});