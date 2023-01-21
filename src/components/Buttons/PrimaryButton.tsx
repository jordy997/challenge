import React from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableWithoutFeedback } from 'react-native'

const PrimaryButton = ({ text, width }) => {
    return (
        <View style={[styles.button, { width: width * 2.5 }]}>
            <TouchableWithoutFeedback onPress={() => alert('Tocaste el botòn')}>
                <Text style={styles.text}>{text}</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('screen').width * 0.9,
        alignSelf: 'center',
        backgroundColor: '#334FFA',
        borderRadius: 5,
        height: 35,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default PrimaryButton