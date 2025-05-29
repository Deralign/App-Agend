import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React from 'react';

export default function TestScreen() {

    return (
        <View style={styles.container}>
            <Modal>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Tem certeza que deseja escluir a tarefa '{props.task.nome}'?</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.yesButton} onPress={() => {props.pressedYes = true}}>
                                <Text>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.noButton} onPress={() => {props.pressedNo = true}}>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        height: '17.5%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'space-between',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: '10%',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
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