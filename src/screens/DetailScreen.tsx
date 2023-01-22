import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import DataService from '../services/DataService'
import { DataTypeItem } from '../types/DataType'
import { RouteProp } from '@react-navigation/native'
import { GlobalParamList } from '../Navigation/GlobalNavigation'
import { useNavigation } from "@react-navigation/native"

type DetailRouteProps = RouteProp<GlobalParamList, "DetailScreen">

type DetailProps = {
    route: DetailRouteProps
}

const DetailScreen: React.FC<DetailProps> = (props) => {
    const { route } = props
    const { id } = route.params
    const [data, setData] = useState<DataTypeItem>()
    const navigation = useNavigation()

    const getDetail = async () => {
        const result = await DataService.getById(id)
        setData(result[0])
    }

    useEffect(() => {
        getDetail()
    }, [id])

    if (!data) {
        return <></>
    }

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.title}>{data.product}</Text>
            </View>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.bottom}>
                <Text style={styles.detailText}>Detalles del producto:</Text>
                <Text style={styles.date}>{data.createdAt}</Text>
                <Text style={styles.detailText}>Con esta compra acumulaste: </Text>
                <Text style={styles.points}>{data.points} puntos</Text>
            </View>
            <PrimaryButton text='Aceptar' width={130} onPress={() => navigation.goBack()} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        backgroundColor: '#CFD6FF',
        height: Dimensions.get('screen').height * .16,
        justifyContent: 'flex-end'
    },
    title: {
        fontWeight: '800',
        fontSize: 24,
        padding: 20
    },
    image: {
        height: Dimensions.get('screen').height * .5,
        width: Dimensions.get('screen').width * .9,
        alignSelf: 'center',
        marginTop: 19,
        elevation: 5,
        borderRadius: 10,
        shadowOpacity: 10
    },
    points: {
        fontSize: 24,
        fontWeight: '800',
        lineHeight: 33
    },
    detailText: {
        fontSize: 14,
        lineHeight: 19,
        color: '#9B9898',
        fontWeight: '800',
        marginBottom: 7
    },
    date: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '800',
        marginBottom: 7
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 20,

    }
})
export default DetailScreen