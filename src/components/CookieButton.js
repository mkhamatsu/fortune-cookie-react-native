import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function CookieButton(props) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.function}>
            <View style={styles.buttonArea}>
                <Text style={styles.buttonText}>
                    Quebrar Biscoito
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        backgroundColor: '#dd7b22',
        borderRadius: 25
    },
    buttonArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff'
    }

});

export default CookieButton;