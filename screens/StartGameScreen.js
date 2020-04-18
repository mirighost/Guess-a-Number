import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Card from '../components/Card';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The a New Game</Text>

            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select a Number!</Text>
                <TextInput />

                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => { }} />
                    <Button title="Confirm" onPress={() => { }} />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        marginTop: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 15
    }
});

export default StartGameScreen;