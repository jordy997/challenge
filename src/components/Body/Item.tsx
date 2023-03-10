import React from 'react'
import { GestureResponderEvent, Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

type DataTypeItem = {
    createdAt: string,
    product: string,
    points: number,
    image: string,
    is_redemption: boolean,
    id: string,
    onPress: () => void
}
const Item: React.FC<DataTypeItem> = (props) => {
    const { createdAt, product, points, image, is_redemption, onPress } = props
    const date = new Date(createdAt)
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.item}>
                <Image source={{ uri: image }} style={styles.image} />
                <View>
                    <Text style={styles.title}>{product}</Text>
                    <Text style={styles.date}>{date.toDateString()}</Text>
                </View>
                <Text style={styles.points}>
                    <Text style={{ color: is_redemption ? '#FF0000' : '#00B833' }}>
                        {is_redemption ? '-' : '+'}
                    </Text>
                    {points} {'  >'}
                </Text>
            </View>
        </TouchableWithoutFeedback>
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
        borderRadius: 10
    }
})

export default Item