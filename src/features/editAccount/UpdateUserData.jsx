import classes from './UpdateUser.module.css';
import useUpdateUserData from './useUpdateUserData';
import { useUser } from '../authentication/useUser';
import Spinner from '../../ui/Spinner/Spinner';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ToastErrorMessage from '../../ui/Toast/ToastErrorMessage';

function UpdateUserData() {
  const { updateUserData, isLoadingUpdateUserData } = useUpdateUserData();
  const { userEmail, firstName, lastName, isLoadingGetUser, userId } =
    useUser();
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    updateUserData(
      {
        ...data,
        profileImage: data.profileImage[0],
        userId,
      },
      {
        onError: error =>
          toast(
            t => (
              <ToastErrorMessage
                toastObject={t}
                title="An error occurred while updating the profile data!"
                message={
                  error.message ===
                  'The object exceeded the maximum allowed size'
                    ? 'The image you want to upload as your profile picture exceeds 200KB. Upload an image with dimensions below 200KB!'
                    : error.message
                }
              />
            ),
            { duration: 20000, id: 'upload-profile-image-error' }
          ),
      }
    );
  }

  if (isLoadingUpdateUserData || isLoadingGetUser) return <Spinner />;

  return (
    <div className={classes.user}>
      <div className={classes.user__title}>Update profile data</div>
      <form className={classes.user__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.user__row}>
          <div>Email address</div>
          <div className={classes.user__email}>{userEmail}</div>
        </div>
        <div className={classes.user__row}>
          <label>First Name</label>
          <input
            {...register('firstName')}
            defaultValue={firstName}
            className={classes.user__input}
          />
        </div>
        <div className={classes.user__row}>
          <label>Last Name</label>
          <input
            {...register('lastName')}
            defaultValue={lastName}
            className={classes.user__input}
          />
        </div>
        <div className={classes.user__row}>
          <div className={classes.user__info}>
            <label>Profile picture</label>
            <i
              className={`fa-solid fa-circle-info ${classes.user__infoIcon}`}
              title="Images can only be in jpeg/png format and cannot be larger than 200 KB!"
            ></i>
            <div className={classes.user__popup}>
              Images can only be in jpeg/png format and cannot be larger than
              200 KB!
            </div>
          </div>
          <input
            type="file"
            className={classes.user__input}
            {...register('profileImage')}
          />
        </div>
        <div className={classes.user__buttons}>
          <button
            type="reset"
            className={`${classes.user__button} ${classes['user__button--reset']}`}
          >
            Reset
          </button>
          <button
            type="submit"
            className={`${classes.user__button} ${classes['user__button--update']}`}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUserData;
