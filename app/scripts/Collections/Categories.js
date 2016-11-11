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
        this.add(response);
      }
    });
    $.ajax({
      type:'GET',
      url:'http://jservice.io/api/category?id=777',
      success:(response)=>{
        this.add(response);
      }
    });
    $.ajax({
      type:'GET',
      url:'http://jservice.io/api/category?id=51',
      success:(response)=>{
        this.add(response);
      }
    });
    $.ajax({
      type:'GET',
      url:'http://jservice.io/api/category?id=103',
      success:(response)=>{
        this.add(response);
      }
    });
    $.ajax({
      type:'GET',
      url:'http://jservice.io/api/category?id=21',
      success:(response)=>{
        this.add(response);
      }
    });
    $.ajax({
      type:'GET',
      url:'http://jservice.io/api/category?id=136',
      success:(response)=>{
        this.add(response);
      }
    });

  }

});
