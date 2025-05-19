import { View, Text, StyleSheet } from 'react-native';

export default function TarefaItem(props) {

    if (props.status == 'concluído') {
        statusColor = 'green';
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.nome}</Text>
            <Text style={styles.categoria}>{props.categoria}</Text>
            <Text style={styles.descricao}>{props.descricao}</Text>
            <Text style={styles.data}>{props.data}</Text>
            <View style={styles.status}>
                <Text style={styles.textoStatus}>{props.status}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '36.5%',
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
        position: 'absolute',
        left: '3%',
        bottom: '-15%'
    },
    categoria: {
        marginTop: 7,
        fontSize: 17,
        marginLeft: 4
    },
    descricao: {
        fontSize: 17,
        marginLeft: '1%',
    },
    status: {
        backgroundColor: 'orange',
        width: '25%',
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        position: 'absolute',
        left: '70%',
        bottom: "7%"
    },
    textoStatus: {
        color: 'white',
        margin: 'auto',
        marginTop: 3.5,
    }
});