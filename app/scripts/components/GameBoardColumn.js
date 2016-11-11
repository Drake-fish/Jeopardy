import React from 'react';
import CategoryBox from './CategoryBox';
import QuestionBoxList from './QuestionBoxList';
export default React.createClass({
render(){
  return(
      <ul className="category-column">
        <CategoryBox title={this.props.category.title}/>
        <QuestionBoxList clues={this.props.category.clues}/>
      </ul>
  );
}
});
