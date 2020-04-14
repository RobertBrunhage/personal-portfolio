import { ContentItem } from "@kentico/kontent-delivery";

export class Skill extends ContentItem {
    constructor(name: string, percent: number) {
        super();
        this.name = name;
        this.percent = percent;

    }

    name!: string;
    percent!: number;
}