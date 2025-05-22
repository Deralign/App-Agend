import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import TarefaItem from '../components/TarefaItem';
import { useNavigation } from '@react-navigation/native';
import { getData } from '../storage/async-storage';
import iconeConfig from '../components/Imgs/1.png';
import iconeAdd from '../components/Imgs/2.png';

export default function Home() {
    const navigation = useNavigation()

    const [tasks, setTasks] = useState(null)
    const [isLoaded, setIsLoaded] = useState(true)

    const loadData = async () => {
        const data = await getData();
        setTasks(data);
        setIsLoaded(!isLoaded)
    }

    useEffect(() => {
       if (isLoaded) {
            loadData()
       }
    }, []);

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
                {
                    tasks != null && tasks.map((item, index) => {
                        return(
                            <TarefaItem 
                                key={index}
                                nome={item.nome}
                                descricao={item.descricao}
                                data={item.data}
                                categoria={item.categoria}
                                statusTex='a cumprir'
                            />
                        );
                    })
                }

            </ScrollView>
            <TouchableOpacity
                style={styles.botaoAdicionar}
                onPress={() => (
                    navigation.navigate('NovaTarefa')
                )}
            >
                <Image style={styles.imagemAdds} source={iconeAdd}>
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
        height: '90%',
        width: '90%',
        margin: 'auto'
    },
    imagemConfig: {
        height: 50,
        width: 50
    },
});