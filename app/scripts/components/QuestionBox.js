import React from 'react';
import store from '../store';
import $ from 'jquery';
export default React.createClass({

  getInitialState(){
    return{
      clicked:false,
      answered:false,
      correct:false
    };
  },
  render(){

    console.log(this.props);
      const questions=this.props.clue;

    if(this.state.clicked===false && this.state.answered===false){
    return(
      <li className="points" onClick={this.handleQuestion}>
      ${questions.value}
      </li>
    )
  }else if(this.state.clicked===true && this.state.answered===false){
  return(
<div>
<li className="points" onClick={this.handleQuestion}>
${questions.value}
</li>
  <div className="modal">
  <div className="question">
  <h3>{questions.question}</h3>
  <form>
  <input id="answer" type="text" placeholder="Answer Here"/>
  <input id="submit" type="submit" value="Submit" onClick={this.handleSubmit}/>
  </form>
  </div>
  </div>
  </div>
);
}else if(this.state.clicked===true && this.state.answered===true && this.state.correct===false){
  return(
    <li className="empty-points">
    <span className="answer">{questions.answer.replace(/\<[\/]?i\>/, '')}</span>
    </li>
  )
}else if(this.state.clicked===true && this.state.answered===true && this.state.correct===true){
  return(
  <li className="empty-points">
  <span className="correct-answer">CORRECT!</span>
  </li>
);
}
},
handleQuestion(e){
  this.setState({
    clicked:true,
    answered:false
  });
},
handleSubmit(e){
  e.preventDefault();
  this.setState({
    clicked:true,
    answered:true,
  });
  let userAnswer=document.getElementById('answer').value.toLowerCase();
  let answer= this.props.clue.answer.toLowerCase().replace(/\<[\/]?i\>/g, '');
  if(userAnswer!=='' && answer.includes(userAnswer)){
    this.setState({
      correct:true
    });
    store.session.addPoints(this.props.clue.value);
    store.session.questionsAnsweredRight();
}
 store.session.questionsAnswered();

}
});
