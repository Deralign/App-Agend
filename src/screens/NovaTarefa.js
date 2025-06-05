import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { addData } from '../storage/async-storage'
import iconeVoltar from '../components/Imgs/3.png';
import iconeConfirm from '../components/Imgs/4.png';

export default function addTaskScreen() {
    
    const navigation = useNavigation()

    const [nome, setNome] = useState('');
    const [descricao, setDesc] = useState('');
    const [data, setData] = useState('');
    const [categoria, setCate] = useState('');
    const [status, setStatus] = useState('');

    const handleSave = async () => {
        const tarefa = {
            nome: nome,
            descricao: descricao,
            data: data,
            categoria: categoria,
            statusTex: status
        };
        if (nome.trim() == '') {
            alert('Campo nome inválido.')
        }
        else if (descricao.trim() == '') {
            alert("Campo descrição não válido.")
        }
        else if (data.trim() == '') {
            alert("Campo data não válido.")
        }
        else if (categoria.trim() == '') {
            alert("Campo categoria não válido.")
        }
        else {
            await addData(tarefa)
            alert("Nova tarefa cadastrada!")
            navigation.navigate("Home")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <TouchableOpacity style={styles.icone} onPress={() => (
                    navigation.goBack()
                )}>
                    <Image style={styles.iconeVoltar} source={iconeVoltar}></Image>
                </TouchableOpacity>

                <Text style={styles.titulo}>Adicionar Tarefa</Text>

            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 120 }} style={styles.conteudo}>
                <Text style={styles.texto}>Nome da tarefa</Text>
                <TextInput style={styles.input} placeholder='Digite o nome da tarefa' value={nome} onChangeText={texto => setNome(texto)}></TextInput>

                <Text style={styles.texto}>Descrição da tarefa</Text>
                <TextInput style={styles.descricao} multiline placeholder='Digite a descrição da tarefa' numberOfLines={5} value={descricao} onChangeText={texto => setDesc(texto)}></TextInput>

                <Text style={styles.texto}>Categoria</Text>
                <Picker style={styles.dataPicker} onValueChange={texto => setCate(texto) }>
                    <Picker.Item label='estudo' value='estudo' />
                    <Picker.Item label='lazer' value='lazer' />
                    <Picker.Item label='programação' value='programacao' />
                    <Picker.Item label='trabalho' value='trabalho' />
                    <Picker.Item label='projeto' value='projeto' />
                </Picker>
                
                <Text style={styles.texto}>Selecione a data</Text>
                <MaskInput style={styles.input} placeholder='DD/MM/AAAA' value={data} mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} onChangeText={texto => setData(texto)}></MaskInput>
            </ScrollView>

            <TouchableOpacity
                style={styles.botaoConfirmar}
                onPress={() => {handleSave()}}>
                <Image style={styles.iconeConfirmar} source={iconeConfirm}>

                </Image>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cabecalho: {
        backgroundColor: '#369ae8',
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
    descricao: {
        borderWidth: 1.5,
        borderColor: '#3e99e0',
        borderRadius: 5,
        height: 'auto',
        width: '92.5%',
        marginTop: 12.5,
        margin: 'auto'
    },
    texto: {
        fontSize: 16,
        marginTop: 25,
        marginLeft: 11
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#3e99e0',
        borderRadius: 5,
        height: 45,
        width: '92.5%',
        marginTop: 12.5,
        margin: 'auto'
    },
    dataPicker: {
        width: '92.5%',
        height: '10%',
        margin: 'auto',
        marginTop: 15,
        borderRadius: 5,
        borderColor: '#3e99e0'
    },
    icone: {
        backgroundColor: 'transparent',
        width: 50,
        height: 50,
        borderRadius: 25,
        left: 15,
        position: 'absolute',
        borderRadius: 0,
    },
    iconeVoltar: {
        height: 50,
        width: 50
    },
    botaoConfirmar: {
        width: 95,
        height: 95,
        borderRadius: 35,
        position: 'absolute',
        bottom: "2%",
        right: "4%",
    },
    iconeConfirmar: {
        width: '87.5%',
        height: '87.5%',
        margin: 'auto'
    },
});