import type { EventPayloadMap } from './events';
export declare class EventBus {
    private channel;
    publish<K extends keyof EventPayloadMap>(type: K, payload: EventPayloadMap[K]): void;
    subscribe<K extends keyof EventPayloadMap>(type: K, handler: (payload: EventPayloadMap[K]) => void): () => void;
}
export declare const bus: EventBus;
