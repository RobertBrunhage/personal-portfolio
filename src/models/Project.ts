export class Project {
    constructor(title: string, image: string, imageAlt: string, description: string, webLink: string, webLinkName: string, webLink2: string, webLink2Name: string, githubLink: string, date: string) {
        this.title = title;
        this.image = image;
        this.imageAlt = imageAlt;
        this.description = description;
        this.webLink = webLink;
        this.webLinkName = webLinkName;
        this.webLink2 = webLink2;
        this.webLink2Name = webLink2Name;
        this.githubLink = githubLink;
        this.date = date;
    }

    title!: string;
    image!: string;
    imageAlt!: string;
    description!: string;
    webLink!: string;
    webLinkName!: string;
    webLink2!: string;
    webLink2Name!: string;
    githubLink!: string;
    date!: string;
}