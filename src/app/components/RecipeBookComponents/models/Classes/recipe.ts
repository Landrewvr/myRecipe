import { Ingredient } from "src/app/components/ShoppingListComponents/models/Classes/ingredient";

export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(id: number,name: string, desc: string, imgPath: string, ingredients: Ingredient[]) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.ingredients = ingredients;
    }
}
