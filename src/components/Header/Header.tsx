import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                Bienvenido de vuelta!
            </Text>
            <Text style={styles.points}>
                TUS PUNTOS
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: 290,
        marginTop: 45,
        left: 20,
    },
    headerText: {
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 27,
        fontWeight: '800'
    },
    points: {
        fontWeight: '800',
        fontSize: 14,
        lineHeight: 19,
        color: '#9B9898',
        marginTop: 15,
        alignSelf: 'flex-start'
    }
})

export default Header