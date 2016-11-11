import React from 'react';
import GameBoardColumn from './GameBoardColumn';

export default React.createClass({
  render(){
    const allCategories=this.props.categories.map((category,i,arr)=>{
      return <GameBoardColumn key={category.title} category={category}/>
    });
    return(
      <ul className="whole-board">
      {allCategories}
      </ul>
    );
  }
});
