import { Observable } from "rxjs";

export interface KontentService<T> {
    listenAll: Observable<T[]>,
}