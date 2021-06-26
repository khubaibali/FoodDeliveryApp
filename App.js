import React from 'react'
import Tabs from './navigation/tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home,OrderDelivery,Resturant } from './Screens'

const Stack = createStackNavigator();

const App =()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown:false
            }}
            initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Tabs}/>
                <Stack.Screen name="Resturant" component={Resturant}/>
                <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>

            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default App;