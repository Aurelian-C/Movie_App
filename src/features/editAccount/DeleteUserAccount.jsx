import classes from './UpdateUser.module.css';
import Spinner from '../../ui/Spinner/Spinner';
import SpinnerMini from '../../ui/Spinner/SpinnerMini';
import ToastMessage from '../../ui/Toast/ToastMessage';

import toast from 'react-hot-toast';
import { useUser } from '../authentication/useUser';
import { useRef, useState } from 'react';
import { useDeleteUserAccount } from './useDeleteUserAccount';

function DeleteUserAccount() {
  const [emailError, setEmailError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const inputEmailRef = useRef();
  const { userEmail, userID, isLoadingGetUser } = useUser();
  const { deleteUser, isLoadingDeleteUser } = useDeleteUserAccount();

  if (isLoadingGetUser) return <Spinner />;

  function handleSubmit(e) {
    e.preventDefault();

    if (userEmail !== inputEmailRef.current.value) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    setShowModal(true);
  }

  function handleDeleteUserAccount() {
    deleteUser(userID, {
      onSuccess: () =>
        toast(
          t => (
            <ToastMessage
              toastObject={t}
              title="Contul a fost șters cu succes!"
              message="Ne pare rău că nu ai fost mulțumit de serviciile și funcționalitățile oferite de biblia-online.ro"
            />
          ),
          {
            duration: 30000,
            id: 'delete-user-account',
          }
        ),
    });
  }

  return (
    <div>
      <div className={classes.user}>
        <div className={classes.user__title}>
          Permanently delete your account
        </div>
        <form className={classes.user__form} onSubmit={handleSubmit}>
          <div className={classes.user__extra}>
            *You've just entered the danger zone! If you want to continue and to
            delete your account, you can do so by repeating in the box below the
            email address, and then click on "Delete account". Account deletion
            will result in the irreversible loss of all saved data.
          </div>
          <div className={classes.user__row}>
            <div>Email address</div>
            <div className={classes.user__column}>
              <div>
                <b>
                  <i>{userEmail}</i>
                </b>
              </div>
            </div>
          </div>
          <div className={classes.user__row}>
            <div>Confirm email address</div>
            <div className={classes.user__column}>
              <input
                className={classes.user__input}
                type="email"
                ref={inputEmailRef}
              />
              {emailError && (
                <div className={classes.user__error}>
                  The email address entered does not match yours.
                </div>
              )}
            </div>
          </div>
          <div className={classes.user__buttons}>
            <button
              type="submit"
              className={`${classes.user__button} ${classes['user__button--delete']}`}
            >
              Delete account
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <div>
          <div
            className={classes.overlay}
            onClick={() => setShowModal(false)}
          ></div>
          <div className={classes.module}>
            <div className={classes.module__title}>
              Are you sure you want to{' '}
              <span className={classes.module__highlight}>
                permanently delete
              </span>{' '}
              your account?
            </div>
            <div className={classes.module__buttons}>
              <button
                className={`${classes.user__button} ${classes['user__button--cancel']}`}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className={`${classes.user__button} ${classes['user__button--delete']}`}
                onClick={handleDeleteUserAccount}
                disabled={isLoadingDeleteUser}
              >
                {isLoadingDeleteUser ? <SpinnerMini /> : 'Delete account'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteUserAccount;
