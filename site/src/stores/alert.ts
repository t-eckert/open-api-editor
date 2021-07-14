import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { Notification, Status } from "../interfaces"

export class AlertStore {
  private statuses: Map<string, Status> = new Map()
  private notifications: Map<string, Notification> = new Map()

  constructor() {
    makeAutoObservable(this)
  }

  getStatuses(): Status[] {
    return Array.from(this.statuses.values())
  }

  getNotifications(): Notification[] {
    return Array.from(this.notifications.values())
  }

  addStatus(status: Status) {
    this.statuses.set(status.statusKey, status)
  }

  addNotification(notification: Notification) {
    this.notifications.set(notification.notificationKey, notification)
  }

  setStatus(status: Status) {
    this.statuses.set(status.statusKey, status)
  }

  setNotification(notification: Notification) {
    this.notifications.set(notification.notificationKey, notification)
  }

  removeStatus(key: string) {
    this.statuses.delete(key)
  }

  removeNotification(key: string) {
    this.notifications.delete(key)
  }
}

export const AlertStoreContext = createContext(new AlertStore())