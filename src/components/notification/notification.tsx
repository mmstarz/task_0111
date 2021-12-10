import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { fromLeftToBottom } from 'common/variants';
import SubmitIcon from 'components/svgs/submitIcon';
import CancelIcon from 'components/svgs/cancelIcon';

interface NotificationProps {
  msg: string;
  type: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  msg,
  type,
  onClose,
}: NotificationProps): React.ReactElement => {
  const [clicked, setClicked] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      setClicked(prev => true);
      setTimeout(() => {
        setClicked(prev => false);
      }, 500);
      setTimeout(() => {
        onClose();
      }, 500);
    },
    [onClose],
  );

  return (
    <motion.div
      // className={`notification container ${type}`}
      variants={fromLeftToBottom}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="content">
        <div className="content_icon">
          <SubmitIcon />
        </div>
        <div className="content_msg">
          <p>{msg}</p>
        </div>
        <div className="content_action">
          <button
            type="button"
            className={clicked ? 'icon_btn cancel clicked' : 'icon_btn cancel'}
            onClick={handleClick}
          >
            <CancelIcon />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default Notification;
