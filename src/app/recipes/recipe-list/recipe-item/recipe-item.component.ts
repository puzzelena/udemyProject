import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>(); // if we take a data from the outside we need to iplement interface
 // if we take a data from the outside we need to iplement interface
 // if we take a data from the outside we need to iplement interface
 onSelected() {
  this.recipeSelected.emit();
}

  constructor() { }

  ngOnInit(): void {
  }

}