import React from 'react';
import store from '../store';


export default React.createClass({
  render(){
    console.log(this.props);
return  (
<div className="my-points">
  <span>Moneys: ${this.props.session.points}</span>
  <span>Correct: {this.props.session.correctAnswers}</span>
  <span>Total Answered: {this.props.session.totalGuessed}</span>
</div>
);
  }
});
