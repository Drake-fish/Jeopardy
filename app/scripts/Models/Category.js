import $ from 'jquery';
import Backbone from 'backbone';



export default Backbone.Model.extend({
  idAttribute:'id',
  defaults:{
  clues:[],
  id:'',
  title:''
  }
});
