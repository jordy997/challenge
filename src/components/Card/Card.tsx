import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export type PointsProps = {
    points: number
}
const Card = ({ points }: PointsProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardPoints}>
                <Text style={styles.month}>Month</Text>
                <Text style={styles.points}>{points} pts</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '25%'
    },
    cardPoints: {
        height: 143,
        width: 286,
        borderRadius: 20,
        marginTop: 7,
        alignSelf: 'center',
        backgroundColor: '#334FFA',
        position: 'absolute',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 4,

        }
    },
    month: {
        fontWeight: '800',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 22,
        marginTop: 21,
        marginLeft: 18
    },
    points: {
        marginTop: 7,
        fontSize: 32,
        lineHeight: 44,
        fontWeight: '800',
        color: '#FFFFFF',
        textAlign: 'center'
    }
})

export default Card