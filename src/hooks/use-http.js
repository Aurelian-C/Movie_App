import { useEffect } from 'react';
import { API_URL } from '../config/config';
import { AJAX } from '../config/helpers';

export default function useHttpRequest(category, mediaType, timeWindow) {
  useEffect(() => {
    AJAX(`${API_URL}`);
  });
}
