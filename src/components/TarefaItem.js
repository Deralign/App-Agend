import { View, Text, StyleSheet } from 'react-native';

export default function TarefaItem(props) {

    if (props.status == 'concluído') {
        statusColor = 'green';
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.nome}</Text>
            <Text style={styles.categoria}>{props.categoria}</Text>
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
        height: 130,
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
        marginTop: 25,
        marginLeft: 3.5,
        fontSize: 16,
        fontWeight: "bold"
    },
    categoria: {
        marginTop: 8,
        fontSize: 17,
        marginLeft: 4
    },
    status: {
        backgroundColor: 'orange',
        width: 110,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '70%',
        bottom: "4%"
    },
    textoStatus: {
        color: 'white',
        margin: 'auto',
        marginTop: 3.5,
    }
});