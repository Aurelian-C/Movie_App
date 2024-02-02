import classes from './ToastErrorMessage.module.css';
import toast from 'react-hot-toast';

function ToastErrorMessage({ toastObject, title, message }) {
  return (
    <div>
      <div className={classes.toast__title}>{title}</div>
      <div className={classes.toast__message}>{message}</div>
      <div className={classes.toast__buttons}>
        <button
          className={classes.toast__button}
          onClick={() => toast.dismiss(toastObject.id)}
        >
          Închide notificarea
        </button>
      </div>
    </div>
  );
}

export default ToastErrorMessage;
