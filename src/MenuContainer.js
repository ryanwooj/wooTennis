import React, {Component} from 'react';

class MenuContainer extends Component {

  state = {
    hi: true
  }

  render() {

    const {changeCompBoard, changeCompFriend, changeCompRacket, changeCompRestring, restring, friendSearch, racketTrade, tennisBoard } = this.props

    return (
      <div className="menus">
        <div onClick={() => changeCompFriend()} className='buttons'>Find a Partner</div>
        <div onClick={() => changeCompRestring()} className='buttons'>Restring</div>
        <div onClick={() => changeCompRacket()}className='buttons'>For Sale</div>
        <div onClick={() => changeCompBoard()} className='buttons'>자유게시판</div>
      </div>
    );
  }
}

export default MenuContainer;
