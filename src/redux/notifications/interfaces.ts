import types from 'redux/constants';
import { INotification } from 'redux/common/interfaces';

/* STATE TYPES */
export interface NotificationsState {
  data: INotification[];
}

/* PAYLOAD TYPES */
export type NotificationId = Pick<INotification, 'id'>;
export type NotificationBody = Pick<INotification, 'msg' | 'type'>;

export type NotificationsPayload =
  | INotification
  | NotificationId
  | NotificationBody;

/* ACTIONS TYPES */

type NotificationsActionsTypes =
  | typeof types.ADD_NOTIFICATION
  | typeof types.REM_NOTIFICATION;

export type NotificationsActions = {
  type: NotificationsActionsTypes;
  payload: NotificationsPayload;
};
