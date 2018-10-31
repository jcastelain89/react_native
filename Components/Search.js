import React from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style={ styles.main_container }>
                <TextInput style={ styles.textinput } placeholder="Titre"/>
                <Button style={ styles.button } title="rechercher" onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1
    },
    textinput: {
        marginLeft: 5, 
        marginRight: 5, 
        height: 50, 
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 5
    },
    button: {
        height: 50
    }
})

export default Search