import React, { useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import types from 'redux/constants';
import { INotification } from 'redux/common/interfaces';
import Notification from 'components/notification/notification';

interface NotificationsProps {}

const Notifications: React.FC<NotificationsProps> = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(state => state.notifications.data);

  const handleCloseNotification = useCallback(
    ({ id }: Pick<INotification, 'id'>) => {
      dispatch({
        type: types.WATCH_REM_NOTIFICATION,
        payload: { id },
      });
    },
    [dispatch],
  );

  const renderNotifications = useCallback(() => {
    return notifications.map(({ id, msg, type }: INotification) => {
      return (
        <Notification
          key={id}
          msg={msg}
          type={type}
          onClose={() => handleCloseNotification({ id })}
        />
      );
    });
  }, [notifications, handleCloseNotification]);

  return (
    <div id="notifications">
      <AnimatePresence>{renderNotifications()}</AnimatePresence>
    </div>
  );
};

export default Notifications;
