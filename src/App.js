import React, { Component } from 'react';
import MenuContainer from './MenuContainer.js';
import FriendContainer from './FriendContainer.js';
import StringContainer from './StringContainer.js';
import RacketContainer from './RacketContainer.js';
import BoardContainer from './BoardContainer.js';

import './App.css';
class App extends Component {

  state = {
    requestData: true,
    restring: false,
    friendSearch: false,
    racketTrade: false,
    tennisBoard: false
  }

  //any functions
  changeCompRestring = () => {
    this.setState({
      requestData: true,
      restring: true,
      friendSearch: false,
      racketTrade: false,
      tennisBoard: false
    })
  }
  changeCompRacket = () => {
    this.setState({
      requestData: true,
      restring: false,
      friendSearch: false,
      racketTrade: true,
      tennisBoard: false
    })
  }
  changeCompFriend = () => {
    this.setState({
      requestData: true,
      restring: false,
      friendSearch: true,
      racketTrade: false,
      tennisBoard: false
    })
  }
  changeCompBoard = () => {
    this.setState({
      requestData: true,
      restring: false,
      friendSearch: false,
      racketTrade: false,
      tennisBoard: true
    })
  }


  render() {

    const { requestData, restring, friendSearch, racketTrade, tennisBoard  } = this.state

    return (

      <div className="container">
        {console.log(this.state.requestData)}
        <div className="leftContainer">
          {console.log(this.state.friendSearch)}
          <MenuContainer
            changeCompRestring={this.changeCompRestring}
            changeCompFriend={this.changeCompFriend}
            changeCompBoard={this.changeCompBoard}
            changeCompRacket={this.changeCompRacket}
            restring={this.state.restring}
            friendSearch={this.state.friendSearch}
            racketTrade={this.state.racketTrade}
            tennisBoard={this.state.tennisBoard} />
        </div>
        { restring ? (
          <div className="rightContainer">
            <StringContainer />
          </div>
        ) : friendSearch ? (
          <div className="rightContainer">
            <FriendContainer />
          </div>
        ) : racketTrade ? (
          <div className="rightContainer">
            <RacketContainer />
          </div>
        ) : tennisBoard ? (
          <div className="rightContainer">
            <BoardContainer />
          </div>
        ) : (
          <div>
            <h5>The page is currently loading.. Please wait</h5>
          </div>
        )}
    </div>

    );
  }
}


export default App;
