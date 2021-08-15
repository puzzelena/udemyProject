export class Recipe { // it defines how the recipe will looks like
    public name: string;  // public determines that it can be accessed form everywhere
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}