export declare enum WS_EVENTS {
    MESSAGE = "message",
    PING = "ping",
    PONG = "pong",
    GET_SHAPES = "get-shapes",
    DELETE_SHAPES = "delete-shapes",
    UPDATE_SHAPES = "update-shapes",
    LOCK_SHAPES = "lock-shapes",
    UNLOCK_SHAPES = "unlock-shapes",
    JOIN_ROOM = "join-room",
    DISCONNECT = "disconnect",
    ERROR = "error"
}
export declare type ConnectionStatus = 'disconnected' | 'connected' | 'connecting';
export declare type ParsedData = {
    event?: WS_EVENTS;
    user?: string;
    userId?: string;
    value?: Record<string, any>[] | string;
    [key: string]: any;
};
export declare type RoomConnectionData = {
    userName?: string;
    roomId?: string;
};
