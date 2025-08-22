export type EventName = 'cart:itemAdded' | 'cart:countUpdated' | 'search:queryChanged' | 'products:loaded';
export interface CartItemAdded {
    productId: string;
    price: number;
}
export interface CartCountUpdated {
    count: number;
}
export interface SearchQueryChanged {
    q: string;
}
export interface ProductsLoaded {
    total: number;
}
export type EventPayloadMap = {
    'cart:itemAdded': CartItemAdded;
    'cart:countUpdated': CartCountUpdated;
    'search:queryChanged': SearchQueryChanged;
    'products:loaded': ProductsLoaded;
};
