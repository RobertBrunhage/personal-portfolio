import { KontentService } from "./KontentService";
import { DeliveryClient, ContentItem } from "@kentico/kontent-delivery";

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Project } from "../../models/Project";

export class ProjectKontentService implements KontentService<Project> {
    private deliveryClient = new DeliveryClient({
        projectId: process.env.REACT_APP_PUBLIC_KONTENT_API,
    });

    listenAll: Observable<Project[]> = this.deliveryClient.items<ContentItem>()
        .type('project')
        .toObservable()
        .pipe(
            map((response) => response.items.map((contentItem) => {
                console.log(contentItem);
                return new Project(
                    contentItem.title?.value,
                    contentItem.image?.value[0]?.url,
                    contentItem.image?.value[0]?.description,
                    contentItem.description?.value,
                    contentItem.weblink?.value,
                    contentItem.weblinkname?.value,
                    contentItem.weblink2?.value,
                    contentItem.weblink2name?.value,
                    contentItem.githublink?.value,
                    contentItem.date?.value,
                );
            })),
        )
}