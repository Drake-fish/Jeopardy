import React from 'react';
import store from '../store';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
export default React.createClass({
  getInitialState(){
    return{
      categories: store.Categories.toJSON(),
      session: store.session.toJSON()
    };
  },
  componentWillMount(){
    store.Categories.getCategories();
    store.Categories.on('update change',()=>{
      this.setState({
        categories:store.Categories.toJSON()
      });
    });
    store.session.on('update change',()=>{
      this.setState({
        session:store.session.toJSON()
      });
    });

  },
  render(){
    return(
      <div>
      <GameBoard categories={this.state.categories}/>
      <ScoreBoard session={this.state.session}/>
      </div>
    );
  }
});
