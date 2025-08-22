import { Subject, filter } from 'rxjs';
import type { EventPayloadMap } from './events';

type AnyEvent = { type: keyof EventPayloadMap; payload: any };

export class EventBus {
    private channel = new Subject<AnyEvent>();

    publish<K extends keyof EventPayloadMap>(type: K, payload: EventPayloadMap[K]) {
        this.channel.next({ type, payload });
    }

    subscribe<K extends keyof EventPayloadMap>(
        type: K,
        handler: (payload: EventPayloadMap[K]) => void
    ): () => void {
        const sub = this.channel
            .pipe(filter(e => e.type === type))
            .subscribe(e => handler(e.payload as EventPayloadMap[K]));
        return () => sub.unsubscribe();
    }
}

export const bus = new EventBus();
