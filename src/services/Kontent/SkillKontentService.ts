import { KontentService } from "./KontentService";
import { DeliveryClient, ContentItem } from "@kentico/kontent-delivery";
import { Skill } from "../../models/Skill";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

export class SkillKontentService implements KontentService<Skill> {
    private deliveryClient = new DeliveryClient({
        projectId: 'faf7e9cb-4b42-004f-73e5-6a65ee12e540',
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