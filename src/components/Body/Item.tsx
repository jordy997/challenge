import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const Item = ({ product, createdAt, points, is_redemption, image }) => {
    return (
        <View style={styles.item}>
            <Image source={image} style={styles.image} />
            <View>
                <Text style={styles.title}>{product}</Text>
                <Text style={styles.date}>{createdAt}</Text>
            </View>
            <Text style={styles.points}>
                <Text style={{ color: is_redemption ? '#FF0000' : '#00B833' }}>
                    {is_redemption ? '-' : '+'}
                </Text>
                {points} {'  >'}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
        height: 55,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8
    },
    title: {
        fontSize: 14,
        fontWeight: '800',
        lineHeight: 19
    },
    date: {
        fontWeight: '400',
        lineHeight: 16,
        fontSize: 12
    },
    points: {
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 22,
        alignSelf: 'center',
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 10,
        backgroundColor: 'red'
    }
})

export default Item