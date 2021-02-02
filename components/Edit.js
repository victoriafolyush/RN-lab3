import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {editGame} from '../actions'
import {connect} from 'react-redux'

class Edit extends Component {
  state = {
    storeName: this.props.navigation.state.params.storeName,
    developer:  this.props.navigation.state.params.developer,
    publisher:  this.props.navigation.state.params.publisher,
    supportedSystems:  this.props.navigation.state.params.supportedSystems,
    lastRecordUpdate:  this.props.navigation.state.params.lastRecordUpdate,
    releaseDate:  this.props.navigation.state.params.releaseDate,

  }

  submit = () => {

    this.props.editGame(
      this.props.navigation.state.params.key,
      this.state.storeName,
      this.state.developer,
      this.state.publisher,
      this.state.supportedSystems,
      this.state.lastRecordUpdate,
      this.state.releaseDate,

      
      )
    this.setState({
      storeName: "",
      developer: "",
      publisher: "",
      supportedSystems: "",
      lastRecordUpdate: "",
      releaseDate: ""
    })
    this.props.navigation.navigate('Games')
  }

  render() {   
    return (
      <View style={styles.container}>
        <Text style = {styles.textLogo}>Edit Post</Text>  
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="storeName" 
          onChangeText={storeName => this.setState({storeName})} 
          value={this.state.storeName}/>
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="developer" 
          onChangeText={developer => this.setState({developer})} 
          value={this.state.developer}/>
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="publisher" 
          onChangeText={publisher => this.setState({publisher})} 
          value={this.state.publisher}/>
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="supportedSystems" 
          onChangeText={supportedSystems => this.setState({supportedSystems})} 
          value={this.state.supportedSystems}/>
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="lastRecordUpdate" 
          onChangeText={lastRecordUpdate => this.setState({lastRecordUpdate})} 
          value={this.state.lastRecordUpdate}/>
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="releaseDate" 
          onChangeText={releaseDate => this.setState({releaseDate})} 
          value={this.state.releaseDate}/>
          
        <Button 
          title = "Submit"
          onPress = {this.submit}
          color = "#171a21"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  }, 
  textInputStyle: {
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }, 
  textLogo: {
    textAlign: 'center', // <-- the magic
    fontSize: 40,
    marginBottom: 20
  }
});

export default connect(null, {editGame})(Edit);