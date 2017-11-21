export class Brastlewark {
    public id: number;
    public name: string;
    public thumbnail: string;
    public age: number;
    public weight: number;
    public height: number;
    public hair_color: string;
    public professions: string[];
    public friends: string[];

    constructor(b: Brastlewark) {
        this.id = b.id;
        this.name = b.name;
        this.thumbnail = b.thumbnail;
        this.age = b.age;
        this.weight = b.weight;
        this.height = b.height;
        this.hair_color = b.hair_color;
        this.professions = b.professions;
        this.friends = b.friends;
    }
}
