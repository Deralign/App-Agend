import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { Picker } from '@react-native-picker/picker'
import React, { useState, useEffect } from 'react';
import { addData, updateData, } from '../storage/async-storage'
import { removeData } from '../storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import botaoExcl from '../components/Imgs/5.png';
import botaoEdit from '../components/Imgs/6.png';
import affirmImageSrc from '../components/Imgs/7.png';
import cancelImageSrc from '../components/Imgs/8.png';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

export default function TarefaItem(props) {

    const [isCompleted, setIsCompleted] = useState(props.statusTex === 'concluído');
    const { task, setIsLoaded, editingTaskId, setEditingTaskId } = props;
    const [visible, setVisible] = useState(false);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const [nome, setNome] = useState(task.nome);
    const [descricao, setDesc] = useState(task.descricao);
    const [data, setData] = useState(task.data);
    const [categoria, setCate] = useState(task.categoria);

    const isEditing = editingTaskId === task.id;

    useEffect(() => {
        if (!isEditing) {
            setNome(task.nome);
            setDesc(task.descricao);
            setData(task.data);
            setCate(task.categoria);
            setIsCompleted(task.statusTex === 'concluído');
            setVisible(false);
        }
    }, [editingTaskId]);

    const changeData = async () => {
        const tarefaAtualizada = {
            id: task.id,
            nome: nome.trim() === '' ? task.nome : nome,
            descricao: descricao.trim() === '' ? task.descricao : descricao,
            data: data.trim() === '' ? task.data : data,
            categoria: categoria === '' ? task.categoria : categoria,
            statusTex: isCompleted ? 'concluído' : 'a cumprir'
        };

        await updateData(tarefaAtualizada);

        setIsLoaded(true);

        setEditingTaskId(null);
    }

    const handleDelete = async () => {
        await removeData(task)
        setIsLoaded(true)
        setVisible(false)
    }

    const showUp = () => {
        if (editingTaskId && editingTaskId !== task.id) return;
        setVisible(true);
    }

    const onPressEdit = () => {
        if (isEditing) {
            
            setEditingTaskId(null);
        } else {
            
            setEditingTaskId(task.id);
        }
    };

    return (
        <View style={{ ...styles.container, paddingBottom: isEditing ? 10 : 15 }}>
            {(editingTaskId === null || isEditing) && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={{ ...styles.botaoExcluir, backgroundColor: isEditing ? 'transparent' : null }} onPress={isEditing ? null : showUp}>
                        <Image style={styles.imagemExcluir} source={botaoExcl}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonEdit} onPress={onPressEdit} >
                        <Image style={styles.imageEdit} source={botaoEdit}></Image>
                    </TouchableOpacity>
                </View>
            )}
            {isEditing ? (
                <View>
                    <TextInput style={styles.titulo} placeholder={task.nome} onChangeText={(texto) => setNome(texto)}></TextInput>
                    <Picker style={styles.dataPicker} onValueChange={(texto) => setCate(texto)}>
                        <Picker.Item label='estudo' value='estudo' />
                        <Picker.Item label='lazer' value='lazer' />
                        <Picker.Item label='programação' value='programacao' />
                        <Picker.Item label='trabalho' value='trabalho' />
                        <Picker.Item label='projeto' value='projeto' />
                    </Picker>
                    <View style={styles.campoTexto}>
                        <TextInput style={styles.descricao} numberOfLines={5} adjustsFontSizeToFit placeholder={props.task.descricao} multiline onChangeText={(texto) => setDesc(texto)}></TextInput>
                    </View>
                    <View style={styles.retangulo}>
                        <MaskInput style={styles.data} placeholder={task.data} value={data} mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} onChangeText={(texto) => setData(texto)}></MaskInput>
                        <TouchableOpacity style={{ ...styles.statuss, backgroundColor: isCompleted ? '#4CAF50' : 'orange' }} onPress={() => setIsCompleted(!isCompleted)}>
                            <Text style={styles.textoStatus}>{isCompleted ? 'concluído' : 'a cumprir'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.autenticacao}>
                        <TouchableOpacity style={styles.buttonAffirm} onPress={changeData}>
                            <Image style={styles.imageAffirm} source={affirmImageSrc}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCancel} onPress={() => setEditingTaskId(null)}>
                            <Image style={styles.imageCancel} source={cancelImageSrc}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View>
                    <Text style={styles.titulo}>{task.nome}</Text>
                    <Text style={styles.categoria}>{task.categoria}</Text>
                    <View style={styles.campoTexto}>
                        <Text style={styles.descricao} numberOfLines={5} adjustsFontSizeToFit>{task.descricao}</Text>
                    </View>
                    <View style={styles.retangulo}>
                        <Text style={styles.data}>{task.data}</Text>
                        <TouchableOpacity style={{ ...styles.statuss, backgroundColor: isCompleted ? '#4CAF50' : 'orange' }} onPress={() => setIsCompleted(!isCompleted)}>
                            <Text style={styles.textoStatus}>{isCompleted ? 'concluído' : 'a cumprir'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={() => setVisible(false)}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle} numberOfLines={3} adjustsFontSizeToFit>Tem certeza que deseja apagar a tarefa '{task.nome}'?</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.yesButton} onPress={handleDelete}>
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
        marginLeft: '0.5%',
        fontStyle: 'italic'
    },
    dataPicker: {
        width: '98.5%',
        margin: 'auto',
        marginTop: 7,
        fontSize: 17,
        marginLeft: '0.5%',
        fontStyle: 'italic',
        backgroundColor: 'transparent',
        borderRadius: 5,
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
        paddingLeft: 5,
        paddingTop: 7.5,
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
    autenticacao: {
        width: '23.5%',
        height: 30,
        flexDirection: 'row',
        gap: 10,
        marginTop: '4%',
        marginLeft: '75.625%'
    },
    buttonAffirm: {
        width: '10%',
        flex: 1,
        backgroundColor: 'rgba(103, 223, 93, 0.75)',
        borderRadius: 5,
    },
    imageAffirm: {
        height: '100%',
        width: '80%',
        margin: 'auto',
    },
    buttonCancel: {
        width: '10%',
        flex: 1,
        backgroundColor: 'rgba(223, 95, 93, 0.75)',
        borderRadius: 5,
    },
    imageCancel: {
        height: '80%',
        width: '60%',
        margin: 'auto',
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