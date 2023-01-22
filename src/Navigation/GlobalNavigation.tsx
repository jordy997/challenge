import { createStackNavigator } from "@react-navigation/stack"
import DetailScreen from "../screens/DetailScreen"
import HomeScreen from "../screens/HomeScreen"

export type GlobalParamList = {
    DetailScreen: {
        id: string
    }
}

const HomeStack = createStackNavigator()

const GlobalNavigation = () => {
    return (
        <HomeStack.Navigator initialRouteName="HomeScreen">
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    )
}

export default GlobalNavigation