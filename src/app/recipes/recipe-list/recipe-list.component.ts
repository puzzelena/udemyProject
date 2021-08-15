import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'
//we putted in the curly braces because it is a class defined in the model ts and we must to import it

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Potato', 'Sweet potato', 'https://cdn.pixabay.com/photo/2016/11/06/23/28/yam-1804451_960_720.jpg') // here we call a constructor defined in the Recipe model
  ]; // here we define the model for recipes defined in the Recidpe model file class wih constructor
  // Recipe[] is an array of recipe, now every elem passed in the array will be a part of the recipe object
  constructor() { }

  ngOnInit(): void {
  }

}
