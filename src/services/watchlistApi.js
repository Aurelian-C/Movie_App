import { supabase } from './supabase';

export async function addToWatchlist({
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
  const { data, error } = await supabase
    .from('watchlist')
    .insert([
      {
        id: `${user_id}--${id}`,
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

export async function getWatchlist(category, sortBy, order) {
  let url = supabase.from('watchlist');
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

export async function removeWatchlist({ id, userId }) {
  const removedId = userId ? `${userId}--${id}` : id;

  const { error } = await supabase
    .from('watchlist')
    .delete()
    .eq('id', removedId);

  if (error) throw new Error(error.message);
}
