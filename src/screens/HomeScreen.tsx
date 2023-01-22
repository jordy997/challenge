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
    const [lostPoints, setLostPoints] = useState<boolean>()
    const [pointsEarned, setPointsEarned] = useState<boolean>()

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

    if (!data) return

    const initialValue = 0;
    const partialPoints = data.map(e => e.points);
    const totalPoints = partialPoints.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initialValue);

    const reduceItems = data.filter(e => e.is_redemption === true);
    const redemptionPoints = reduceItems.map(e => e.points);
    const pointsToSubstract = redemptionPoints.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initialValue);

    const redemptiomItems = data.filter(e => e.is_redemption === false);

    const validatingAttributes = lostPoints ? reduceItems :
        pointsEarned ? redemptiomItems : data

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Card totalPoints={lostPoints ? pointsToSubstract : (totalPoints - pointsToSubstract)} />
            <View style={{ height: Dimensions.get('screen').height * .47 }}>
                <Text style={styles.points}>
                    TUS MOVIMIENTOS
                </Text>
                <FlatList
                    contentContainerStyle={styles.flatList}
                    data={validatingAttributes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return <Item {...item} onPress={() => goToDetails(item.id)} />
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                {!lostPoints && !pointsEarned ? (
                    <>
                        <PrimaryButton
                            text={'Ganados'}
                            width={60}
                            onPress={() => setPointsEarned(true)}
                        />
                        <PrimaryButton
                            text={'Canjeados'}
                            width={60}
                            onPress={() => setLostPoints(true)}
                        />
                    </>
                ) : (
                    <PrimaryButton
                        text={'Todos'}
                        width={130}
                        onPress={() =>
                            lostPoints ? setLostPoints(false)
                                : setPointsEarned(false)
                        }
                    />
                )}
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