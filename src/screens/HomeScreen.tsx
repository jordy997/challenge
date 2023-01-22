import React, { useState } from 'react';
import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Item from '../components/Body/Item';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import DataService from '../services/DataService';
import { DataTypeItem } from '../types/DataType'
import { useNavigation } from "@react-navigation/native"

const HomeScreen: React.FC = () => {
    const [data, setData] = useState<DataTypeItem[]>()
    const navigation = useNavigation()

    const getDataService = async () => {
        const result = await DataService.getData()
        setData(result)
    }

    React.useEffect(() => {
        getDataService()
    }, [])

    const goToDetails = (id: string) => {
        navigation.navigate("DetailScreen", { id })
    }

    const partialPoints = data.map(e => e.points);
    const initialValue = 0;
    const totalPoints = partialPoints.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initialValue);

    const reducePoints = data.filter(e => e.is_redemption === true);
    const redemptionPoints = reducePoints.map(e => e.points);
    const value = 0;
    const pointsToSubstract = redemptionPoints.reduce(
        (accumulator, currentValue) => accumulator + currentValue, value);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Card totalPoints={totalPoints - pointsToSubstract} />
            <View style={{ height: Dimensions.get('screen').height * .47 }}>
                <Text style={styles.points}>
                    TUS MOVIMIENTOS
                </Text>
                <FlatList
                    contentContainerStyle={styles.flatList}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return <Item {...item} onPress={() => goToDetails(item.id)} />
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                <PrimaryButton text={'Ganados'} width={60} />
                <PrimaryButton text={'Canjeados'} width={60} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    flatList: {
        marginHorizontal: 10,
        marginBottom: 20
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

export default HomeScreen