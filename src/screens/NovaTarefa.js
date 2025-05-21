import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import TarefaItem from '../components/TarefaItem';
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

    const handleSave = () => {
        const tarefa = {
            nome: nome,
            descricao: descricao,
            data: data,
            categoria: categoria
        };
        addData()
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <TouchableOpacity style={styles.icone} onPress={() => (
                    navigation.navigate('Home')
                )}>
                    <Image style={styles.iconeVoltar} source={iconeVoltar}></Image>
                </TouchableOpacity>

                <Text style={styles.titulo}>Adicionar Tarefa</Text>

            </View>

            <View style={styles.conteudo}>
                <Text style={styles.texto}>Nome da tarefa</Text>
                <TextInput style={styles.input} placeholder='Digite o nome da tarefa' value={nome} onChangeText={texto => setNome(texto)}></TextInput>

                <Text style={styles.texto}>Descrição da tarefa</Text>
                <TextInput style={styles.descricao} multiline placeholder='Digite a descrição da tarefa' numberOfLines={5} value={descricao} onChangeText={texto => setDesc(texto)}></TextInput>

                <Text style={styles.texto}>Categoria</Text>
                <TextInput style={styles.input} placeholder='Digite categoria da tarefa' value={categoria} onChangeText={texto => setCate(texto)}></TextInput>

                <Text style={styles.texto}>Selecione a data</Text>
                <Picker style={styles.dataPicker} selectedValue={data} onValueChange={dataa => setData(dataa)}></Picker>
            </View>

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
        flex: 1
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
        width: '82.5%',
        height: '82.5%',
        margin: 'auto'
    },
});