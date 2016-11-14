import React from 'react';
import QuestionBox from './QuestionBox';
export default React.createClass({

  render(){
    console.log(this.props);
    let randomQuestion=this.props.clues.map((clue,id)=>{
      return <QuestionBox key={id} clue={clue}/>
    })

    return(

    <ul className="point-list">
    {randomQuestion}



    </ul>
  );
  }
});
