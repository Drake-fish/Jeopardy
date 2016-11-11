import $ from 'jquery';
import Backbone from 'backbone';



export default Backbone.Model.extend({
  idAttribute:'id',
  defaults:{
    points:0,
    correctAnswers:0,
    totalGuessed:0,
  },
  addPoints(value){
  this.set('points',this.get('points')+value);
},
questionsAnswered(){
  this.set('totalGuessed',this.get('totalGuessed')+1);
},
questionsAnsweredRight(){
  this.set('correctAnswers',this.get('correctAnswers')+1);
}

});
