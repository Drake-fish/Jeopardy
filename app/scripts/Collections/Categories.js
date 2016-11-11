import Backbone from 'backbone';
import Category from '../Models/Category';
import $ from 'jquery';
export default Backbone.Collection.extend({
  model:Category,
  getCategories(){
    $.ajax({
      type:'GET',
      url:'http://jservice.io/api/category?id=105',
      success:(response)=>{
        window.console.log(this);
        this.add(response);
      }
    });
    $.ajax({
      type:'GET',
      url:'http://jservice.io/api/category?id=49',
      success:(response)=>{
        window.console.log(this);
        this.add(response);
      }
    });
    $.ajax({
      type:'GET',
      url:'http://jservice.io/api/category?id=51',
      success:(response)=>{
        window.console.log(this);
        this.add(response);
      }
    });
    $.ajax({
      type:'GET',
      url:'http://jservice.io/api/category?id=309',
      success:(response)=>{
        window.console.log(this);
        this.add(response);
      }
    });
    $.ajax({
      type:'GET',
      url:'http://jservice.io/api/category?id=21',
      success:(response)=>{
        window.console.log(this);
        this.add(response);
      }
    });
    $.ajax({
      type:'GET',
      url:'http://jservice.io/api/category?id=136',
      success:(response)=>{
        window.console.log(this);
        this.add(response);
      }
    });

  }

});
