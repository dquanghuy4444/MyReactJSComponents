import { useEffect } from "react";
import { Subscription } from "rxjs";
import EventBus from "./event-bus";

export default function useEventBus(cb: any) {
    const subscriptions = new Subscription();

    useEffect(() => {
        subscriptions.add(
            EventBus.getInstance().events.subscribe(cb)
        );
    }, []);

    useEffect(() => {
        return () => {
            subscriptions.unsubscribe();
        };
    }, []);
}