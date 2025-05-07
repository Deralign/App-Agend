import { View, Text, StyleSheet, TouchableOpacity, useState, ScrollView, Image } from 'react-native';
import TarefaItem from '../components/TarefaItem';
import { useNavigation } from '@react-navigation/native';
import iconeConfig from '../components/Imgs/1.png'
import iconeAdd from '../components/Imgs/2.png'

export default function Home() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>ABRIL/2025</Text>
                <TouchableOpacity style={styles.icone}>
                    <Image style={styles.imagemConfig} source={iconeConfig}>

                    </Image>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.body}>
                <TarefaItem
                    nome="Tarefa 2"
                    status="a cumprir"
                    data="24/04/2004"
                    categoria="estudo"
                />

                <TarefaItem
                    nome="Tarefa 2"
                    status="a cumprir"
                    data="24/04/2004"
                    categoria="estudo"
                />

                <TarefaItem
                    nome="Tarefa 2"
                    status="a cumprir"
                    data="24/04/2004"
                    categoria="estudo"
                />
            </ScrollView>
            <TouchableOpacity
                style={styles.botaoAdicionar}
                onPress={() => (
                    navigation.navigate('NovaTarefa')
                )}
            >
                <Image style={styles.imagemAdds} source={iconeAdd}></Image>
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
        fontWeight: 'bold',
    },
    body: {

    },
    icone: {
        backgroundColor: 'transparent',
        width: 50,
        height: 50,
        borderRadius: 25,
        right: 20,
        position: 'absolute',
        borderRadius: 0,
    },
    botaoAdicionar: {
        backgroundColor: "#369ae8",
        width: 70,
        height: 70,
        borderRadius: 35,
        position: 'absolute',
        bottom: "2%",
        right: "4%",
    },
    imagemAdds: {
        height: 77.5,
        width: 77.5,
        marginLeft: -4,
        marginTop: -3
    },
    imagemConfig: {
        height: 50,
        width: 50
    },
});