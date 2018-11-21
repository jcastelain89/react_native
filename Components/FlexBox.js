import React from 'react'
import { View, FlatList, Text } from 'react-native'

class FlexBox extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow', flexDirection: 'column'}}>
                <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                <View style={{ flex: 1, backgroundColor: 'green' }}></View>
            </View>
        )
    }
}

export default FlexBox
