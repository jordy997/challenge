import React from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableWithoutFeedback } from 'react-native'

type ButtonProps = {
    text: string,
    width: number,
    onPress?: () => void
}
const PrimaryButton: React.FC<ButtonProps> = (props) => {
    const { text, width, onPress } = props
    return (
        <View style={[styles.button, { width: width * 2.5 }]}>
            <TouchableWithoutFeedback onPress={onPress}>
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