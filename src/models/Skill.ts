export class Skill {
    constructor(name: string, percent: number) {
        this.name = name;
        this.percent = percent;
    }

    name!: string;
    percent!: number;
}