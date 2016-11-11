import React from 'react';

export default React.createClass({
  render(){
    return(
      <h2 className="category-title">
        {this.props.title}
      </h2>
    );
  }
});
