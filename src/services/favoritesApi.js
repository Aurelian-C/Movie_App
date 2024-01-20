import { supabase } from './supabase';

export async function addToFavorites({
  id,
  title,
  vote_average,
  release_date,
  genres,
  backdrop_path,
  poster_path,
  overview,
  runtime,
  media_type,
  user_id,
}) {
  const storedId = String(id).includes(user_id) ? id : `${user_id}--${id}`;

  const { data, error } = await supabase
    .from('favorites')
    .insert([
      {
        id: storedId,
        title,
        vote_average,
        release_date: new Date(release_date),
        genres,
        backdrop_path,
        poster_path,
        overview,
        runtime,
        media_type,
        user_id,
      },
    ])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getFavorites(category, sortBy, order) {
  let url = supabase.from('favorites');
  let data, error;

  if (category === 'all' || !category) {
    url = url.select('*');
  }

  if (category === 'movie' || category === 'tv') {
    url = url.select('*').eq('media_type', category);
  }

  if (sortBy) {
    ({ data, error } = await url.order(sortBy, {
      ascending: order === 'ascending',
    }));
  } else {
    ({ data, error } = await url);
  }

  if (error) throw new Error(error.message);

  return data;
}

export async function removeFavorite({ id, userId }) {
  const removedId = userId ? `${userId}--${id}` : id;
  console.log(removedId);

  const { error } = await supabase
    .from('favorites')
    .delete()
    .eq('id', removedId);

  if (error) throw new Error(error.message);
}
