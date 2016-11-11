import React from 'react';
import QuestionBox from './QuestionBox';
export default React.createClass({

  render(){
    let question1= this.props.clues.filter((clue,i,arr)=>{
      if(clue.value===200){
        return clue;
      }
    });
    let question2= this.props.clues.filter((clue,i,arr)=>{
      if(clue.value===400){
        return clue;
      }
    });
    let question3= this.props.clues.filter((clue,i,arr)=>{
      if(clue.value===600){
        return clue;
      }
    });
    let question4= this.props.clues.filter((clue,i,arr)=>{
      if(clue.value===800){
        return clue;
      }
    });
    let question5= this.props.clues.filter((clue,i,arr)=>{
      if(clue.value===1000){
        return clue;
      }
    });

    return(

    <ul className="point-list">
    <QuestionBox question={question1}/>
    <QuestionBox question={question2}/>
    <QuestionBox question={question3}/>
    <QuestionBox question={question4}/>
    <QuestionBox question={question5}/>


    </ul>
  );
  }
});
