import { Subject, filter } from 'rxjs';
export class EventBus {
    channel = new Subject();
    publish(type, payload) {
        this.channel.next({ type, payload });
    }
    subscribe(type, handler) {
        const sub = this.channel
            .pipe(filter(e => e.type === type))
            .subscribe(e => handler(e.payload));
        return () => sub.unsubscribe();
    }
}
export const bus = new EventBus();
