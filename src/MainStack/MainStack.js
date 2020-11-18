import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import Gerencial from '../Screens/Gerencial';




const Stack = createStackNavigator();


export default () => (
    <Stack.Navigator initialRouteName="Home"  >
    
        <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Gerencial" component={Gerencial} />
    
    </Stack.Navigator>
);