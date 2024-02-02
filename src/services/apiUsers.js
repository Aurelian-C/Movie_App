import { supabase, supabaseUrl } from './supabase';
import { isValidEmail } from '../helpers/helpers';

export async function updateUserData({
  firstName,
  lastName,
  profileImage,
  userId,
}) {
  // 1. Update firstName and lastName
  const { data, error } = await supabase.auth.updateUser({
    data: { firstName: firstName, lastName: lastName },
  });

  if (error) throw new Error(error.message);

  if (!profileImage) {
    return data;
  }

  // 2.1 Upload the avatar image
  const fileName = `profile-${Date.now()}`;
  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(`${userId}/${fileName}.jpg`, profileImage, {
      cacheControl: '3600',
      upsert: false,
    });

  if (uploadError) throw new Error(uploadError.message);

  // 2.2 List all images in a specified bucket and remove them, but not the uploaded one
  const { data: allFilesInBucket, error: allFilesInBucketError } =
    await supabase.storage.from('avatars').list(`${userId}`, {
      limit: 100,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
    });

  if (allFilesInBucketError) throw new Error(allFilesInBucketError.message);

  if (allFilesInBucket.length > 0) {
    for (const file of allFilesInBucket) {
      if (file.name !== `${fileName}.jpg`)
        await supabase.storage
          .from('avatars')
          .remove([`${userId}/${file.name}`]);
    }
  }

  // 3. Update avatar in the user
  const { data: updatedUser, error: updatedUserError } =
    await supabase.auth.updateUser({
      data: {
        profileImage: `${supabaseUrl}/storage/v1/object/public/avatars/${userId}/${fileName}.jpg`,
      },
    });

  if (updatedUserError) throw new Error(updatedUserError.message);

  return updatedUser;
}

// Update the user with a new email or password
export async function updateUserEmailOrPassword(newEmailOrPassword) {
  const updateUserObject = isValidEmail(newEmailOrPassword)
    ? { email: newEmailOrPassword }
    : { password: newEmailOrPassword };

  const { data, error } = await supabase.auth.updateUser(updateUserObject);

  if (error) throw new Error(error);

  return data;
}
