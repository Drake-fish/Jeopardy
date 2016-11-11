import React from 'react';
import store from '../store';
export default React.createClass({
  getInitialState(){
    return{
      clicked:false,
      answered:false,
    }
  },
  render(){
    console.log(this.props.question[0]);
    if(this.state.clicked===false && this.state.answered===false){

    return(
      <li className="points" onClick={this.handleQuestion}>
      ${this.props.question[0].value}
      </li>
    )
  }else if(this.state.clicked===true && this.state.answered===false){
  return(
<div>
<li className="points" onClick={this.handleQuestion}>
${this.props.question[0].value}
</li>
  <div className="modal">
  <div className="question">
  <h3>{this.props.question[0].question}</h3>
  <form>
  <input id="answer" type="text" placeholder="Answer Here"/>
  <input type="submit" value="Submit" onClick={this.handleSubmit}/>
  </form>
  </div>
  </div>
  </div>
);
}else if(this.state.clicked===true && this.state.answered===true){
  return(
    <li className="empty-points">
    </li>
  )
}
},
handleQuestion(e){
  this.setState({
    clicked:true,
    answered:false
  })
},
handleSubmit(e){
  e.preventDefault();
  this.setState({
    clicked:true,
    answered:true
  })
  let userAnswer=document.getElementById('answer').value.toLowerCase().italics();
  console.log(userAnswer);
  let answer= this.props.question[0].answer.toLowerCase().italics();
  if(userAnswer.indexOf(answer)>-1){
    store.session.addPoints(this.props.question[0].value);
    store.session.questionsAnsweredRight();
    console.log(store.session.get('points'));
    alert('WOW thats correct! You have been awarded $'+this.props.question[0].value);
}else{
  alert('That is incorrect! The Correct answer is '+ this.props.question[0].answer);
}
 store.session.questionsAnswered();

}
})
