import { KontentService } from "./KontentService";
import { DeliveryClient, ContentItem } from "@kentico/kontent-delivery";
import { Skill } from "../../models/Skill";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

export class SkillKontentService implements KontentService<Skill> {
    private deliveryClient = new DeliveryClient({
        projectId: process.env.REACT_APP_PUBLIC_KONTENT_API,
    });

    listenAll: Observable<Skill[]> = this.deliveryClient.items<ContentItem>()
        .type('skill')
        .toObservable()
        .pipe(
            map((response) => response.items.map((contentItem) => {
                return new Skill(contentItem.name.value, contentItem.percent.value);
            })),
        )
}