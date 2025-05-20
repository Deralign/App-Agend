import { View, Text, StyleSheet } from 'react-native';

export default function TarefaItem(props) {

    if (props.statusTex == 'concluído') {
        statusTex = 'green';
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.nome}</Text>
            <Text style={styles.categoria}>{props.categoria}</Text>
            <View style={styles.campoTexto}>
                <Text style={styles.descricao}>{props.descricao}</Text>
            </View>
            <View style={styles.retangulo}>
                <Text style={styles.data}>{props.data}</Text>
                <View style={styles.statuss}>
                    <Text style={styles.textoStatus}>{props.statusTex}</Text>
                </View>
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
    },
    categoria: {
        marginTop: 7,
        fontSize: 17,
        marginLeft: 4
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
        backgroundColor: 'orange',
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