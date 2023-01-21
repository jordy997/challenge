import React from 'react'
import { FlatList, View, Text, StyleSheet, Image } from 'react-native'
import Item from './Item'

const items = [
    {
        "createdAt": "2022-12-18T10:20:00.909Z",
        "product": "Fantastic Granite Bacon",
        "points": 42416,
        "image": "https://loremflickr.com/640/480/technics",
        "is_redemption": false,
        "id": "1"
    },
    {
        "createdAt": "2022-12-09T10:20:00.909Z",
        "product": "Fantastic Granite Bacon",
        "points": 43457,
        "image": "https://loremflickr.com/640/480/technics",
        "is_redemption": true,
        "id": "2"
    },
    {
        "createdAt": "2022-12-11T10:20:00.909Z",
        "product": "Fantastic Granite Bacon",
        "points": 42432,
        "image": "https://loremflickr.com/640/480/technics",
        "is_redemption": false,
        "id": "3"
    },
    {
        "createdAt": "2022-12-29T10:20:00.909Z",
        "product": "Fantastic Granite Bacon",
        "points": 42416,
        "image": "https://loremflickr.com/640/480/technics",
        "is_redemption": true,
        "id": "4"
    }
]

const Body = () => {

    return (
        <View>
            <Text style={styles.points}>
                TUS MOVIMIENTOS
            </Text>
            <FlatList
                contentContainerStyle={styles.flatList}
                data={items}
                keyExtractor={i => i.id}
                renderItem={({ item }) => <Item {...item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatList: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    points: {
        fontWeight: '800',
        fontSize: 14,
        lineHeight: 19,
        color: '#9B9898',
        alignSelf: 'flex-start',
        left: 20,
    }
})

export default Body