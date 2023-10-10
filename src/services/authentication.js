import { supabase } from './supabase';

// Create an async function called signUp that takes an email and password
// Call supabase.auth.signUp with the form data
// If the sign up is successful, return the user object
// If the sign up fails, throw an error
export async function signUp({ firstName, lastName, email, password }) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
      },
    },
  });

  if (error) throw new Error(error.message);

  return user;
}
