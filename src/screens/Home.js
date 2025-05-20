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
                    nome="Estudar"
                    statusTex="a cumprir"
                    data="24/04/2004"
                    categoria="estudo"
                    descricao="Lembre-se de estudar a como fazer modelos 3D utilizando o Blender."
                />

                <TarefaItem
                    nome="Regar"
                    statusTex="a cumprir"
                    data="24/04/2004"
                    categoria="estudo"
                    descricao="Regar a planta da frente."
                />

                <TarefaItem
                    nome="Trocar a água"
                    statusTex="concluído"
                    data="24/04/2004"
                    categoria="estudo"
                    descricao="Trocar a água da vasilha dos cachorros."
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
        width: 95,
        height: 95,
        borderRadius: 35,
        position: 'absolute',
        bottom: "2%",
        right: "4%",
    },
    imagemAdds: {
        height: '100%',
        width: '100%',
    },
    imagemConfig: {
        height: 50,
        width: 50
    },
});