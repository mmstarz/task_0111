import types from 'redux/constants';
import { INotification } from 'redux/common/interfaces';
import {
  NotificationId,
  NotificationsActions,
  NotificationsState,
} from 'redux/notifications/interfaces';

const initialState: NotificationsState = {
  data: [] as INotification[],
};

const notificationsReducer = (
  state = initialState,
  action: NotificationsActions,
): NotificationsState => {
  switch (action.type) {
    case types.ADD_NOTIFICATION:
      return {
        ...state,
        data: [...state.data, action.payload as INotification],
      };
    case types.REM_NOTIFICATION:
      return {
        ...state,
        data: [
          ...state.data.filter((item: INotification) => {
            const { id } = action?.payload as NotificationId;
            return item.id !== id;
          }),
        ],
      };
    default:
      return {
        ...state,
      };
  }
};

export default notificationsReducer;
