import React, { Component } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import {getGames, deleteGame} from '../actions'
import {connect} from 'react-redux'
import _ from 'lodash';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { Header } from 'react-navigation-stack';

const MIN_HEIGHT = 80;
const MAX_HEIGHT = 150;

class Games extends Component {

componentDidMount () {
  this.props.getGames()
}

  render() {   
    return (
      <ImageHeaderScrollView 
      maxHeight={MAX_HEIGHT}
      minHeight={MIN_HEIGHT}
      headerImage={require("../assets/background.png")}
      renderForeground={() => (
        <View style={{ height: 150, justifyContent: "center", alignItems: "center" }} >
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Post')}>
            <Text style={{marginTop: 120, fontSize: 30, fontWeight: "bold"}}>make post</Text>
          </TouchableOpacity>
        </View>
      )}
        >  
        
        <FlatList
          style = {styles.flatListStyle}
          data = {this.props.listOfGames}
          keyExtractor = {(item) => item.key}
          renderItem = {({item}) => {
            return(
              <View style = {styles.gamesViewStyle}>
                 <View style = {styles.iconsViewStyle}>
                  <TouchableHighlight onPress = {() => this.props.navigation.navigate('Edit', {...item})}>
                    <Text style={styles.textED}>edit</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => this.props.deleteGame(item.key)}>
                    <Text style={styles.textED}>delete</Text>
                  </TouchableHighlight>
                </View>
                <Text style = {styles.mainTitleStyle}>{item.storeName}</Text>
                <View style = {styles.viewBoxStyle}>
                  <Text style = {styles.titleStyle}>Developer: </Text>
                  <Text style = {styles.contentStyle}>{item.developer}</Text>
                </View>
                <View style = {styles.viewBoxStyle}>
                  <Text style = {styles.titleStyle}>Publisher: </Text>
                  <Text style = {styles.contentStyle}>{item.publisher}</Text>
                </View>
                <View style = {styles.viewBoxStyle}>
                  <Text style = {styles.titleStyle}>Sypported systems: </Text>
                  <Text style = {styles.contentStyle}>{item.supportedSystems}</Text>
                </View>
                <View style = {styles.viewBoxStyle}>
                  <Text style = {styles.titleStyle}>Last record update: </Text>
                  <Text style = {styles.contentStyle}>{item.lastRecordUpdate}</Text>
                </View>
                <View style = {styles.viewBoxStyle}>
                  <Text style = {styles.titleStyle}>Realease date: </Text>
                  <Text style = {styles.contentStyle}>{item.releaseDate}</Text>
                </View>
              </View>
            )
          }}/>
      </ImageHeaderScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff',
    height: 1000
  }, 
  flatListStyle: {
    width: '100%',
    height: 1500,
    backgroundColor: 'white'
  },
  gamesViewStyle:{
    padding:10,
    elevation:8,
    borderRadius: 15,
    backgroundColor: "#1b2838",
    marginBottom: 5
  
  },
  titleStyle:{
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 12, 
    color: '#c7d5e0'
  },
  contentStyle: {
    fontSize: 16,
    color: 'white',
  }, 
  iconsViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5
  }, 
  textED: {
    marginHorizontal: 10,
    color: "#c7d5e0",
    fontWeight: "bold",
    fontSize: 20
  },
  mainTitleStyle:{
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 25, 
    color: '#c7d5e0'
  },
  viewBoxStyle: {
    flexDirection: 'row'
  },
  headerText:{
    backgroundColor: "transparent",
    color: 'white',
    fontSize: 40,
    backgroundColor: 'black',
    padding: 10
  }
});

function mapStateToProps (state) {
const listOfGames = _.map(state.gamesList.gamesList, (val, key)=> {
  return {
    ...val,
    key:key
  }
})

  return {
    listOfGames
  }
}

export default connect(mapStateToProps, {getGames, deleteGame})(Games);