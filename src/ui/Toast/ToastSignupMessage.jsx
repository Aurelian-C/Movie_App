import classes from './ToastSignupMessage.module.css';
import toast from 'react-hot-toast';

function ToastSignupMessage({ toastObject }) {
  return (
    <div>
      <div className={classes.toast__title}>Welcome!</div>
      <div className={classes.toast__message}>
        Before the first login, you will receive an email asking you to{' '}
        <b>
          <i>confirm your account registration</i>
        </b>
        . Check your email address to receive the message.
      </div>
      <div className={classes.toast__buttons}>
        <button
          className={classes.toast__button}
          onClick={() => toast.dismiss(toastObject.id)}
        >
          Close the notification
        </button>
      </div>
    </div>
  );
}

export default ToastSignupMessage;
