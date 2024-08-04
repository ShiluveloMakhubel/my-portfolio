// src/Components/useIntersectionObserver.js
import { useInView } from 'react-intersection-observer';

const useIntersectionObserver = (options) => {
  const { ref, inView } = useInView(options);
  return [ref, inView];
};

export default useIntersectionObserver;
