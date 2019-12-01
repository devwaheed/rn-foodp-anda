import React from 'react';
import { Button, View, Text } from "react-native";

class HomeComponent extends React.Component  {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
                <Text>Home</Text>
            </View>
        );
    }

    
}

export { HomeComponent as Home }