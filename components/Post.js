import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {postGame} from '../actions'
import {connect} from 'react-redux'

class Post extends Component {
  state = {
    storeName: "",
      developer: "",
      publisher: "",
      supportedSystems: "",
      lastRecordUpdate: "",
      releaseDate: ""
  }

  submit = () => {
    this.props.postGame(
      this.state.storeName, 
      this.state.developer,
      this.state.publisher,
      this.state.supportedSystems,
      this.state.lastRecordUpdate,
      this.state.releaseDate)
    this.setState({
      storeName: '',
      developer: '',
      publisher: '',
      supportedSystems: '',
      lastRecordUpdate: '',
      releaseDate: ''
    })
    this.props.navigation.navigate('Games')
  }

  render() {   
    return (
      <View style={styles.container}>  
        <Text style = {styles.textLogo}>Make Post</Text>  
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="Store name" 
          onChangeText={storeName => this.setState({storeName})} 
          value={this.state.storeName}/>
          <TextInput 
          style = {styles.textInputStyle} 
          placeholder="Developer" 
          onChangeText={developer => this.setState({developer})} 
          value={this.state.developer}/>
          <TextInput 
          style = {styles.textInputStyle} 
          placeholder="Publisher" 
          onChangeText={publisher => this.setState({publisher})} 
          value={this.state.publisher}/>
          <TextInput 
          style = {styles.textInputStyle} 
          placeholder="Supported Systems" 
          onChangeText={supportedSystems => this.setState({supportedSystems})} 
          value={this.state.supportedSystems}/>
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="Last Record Update" 
          onChangeText={lastRecordUpdate => this.setState({lastRecordUpdate})} 
          value={this.state.lastRecordUpdate}/>
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="Release Date" 
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

export default connect(null, {postGame})(Post);