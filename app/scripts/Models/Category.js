import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


export default Backbone.Model.extend({
  defaults:{
  clues:[],
  id:'',
  title:''
},
shuffleClues(){
  let oldClues=this.get('clues');
  let newClues=_.take(_.shuffle(oldClues),5).map((clue,i)=>{
    clue.value=(i+1)*200;
    return clue;
  });
  this.set('clues',newClues);
}

});
