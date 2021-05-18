import { Subject } from "rxjs";

export interface EventBusType {
  type: ENUM_EVENT_BUS_NAME;
  payload?: any;
}

export enum ENUM_EVENT_BUS_NAME {
  NEW_MESSSAGE="NEW_MESSSAGE",
}

export default class EventBus {
  private static instance: EventBus;
  private eventSubject = new Subject<EventBusType>();

  static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  get events() {
    return this.eventSubject.asObservable();
  }

  post(event: EventBusType) {
    this.eventSubject.next(event);
  }
}
