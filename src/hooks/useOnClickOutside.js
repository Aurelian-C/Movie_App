import { useEffect } from 'react';

export function useOnClickOutside(ref, handler) {
  function listener(e) {
    const isContain = ref.current.contains(e.target);
    if (!isContain) handler();
  }

  useEffect(() => {
    window.addEventListener('click', listener);

    return () => {
      window.removeEventListener('click', listener);
    };
  }, [ref, handler]);
}
