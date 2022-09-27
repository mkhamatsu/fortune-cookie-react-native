import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function CookiePhrases(props) {
    return (
        <Text style={styles.phraseText}>
            {props.value}
        </Text>
    );
}

const styles = StyleSheet.create({
    phraseText: {
        fontSize: 20,
        color: '#dd7b22',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
    }
});

export default CookiePhrases;