import { Slot, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const RootLayout = () => {
    return(

        <>
        <Stack>
            <Stack.Screen name='index' options={{headerShown: false}}/>

           
        <Text>

        Header
        </Text>
        <Slot/>
       <Text>

        Footer
        </Text>
        </Stack>
        </>
    ) 
}


export default RootLayout