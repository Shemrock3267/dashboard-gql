import { useRef, useEffect, useState } from 'react';

export const useGetNodeRefSize = () => {
  const parentNodeRef = useRef(null);
  const [parentNodeSize, setParentNodeSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const calculateSize = () => {
      if (parentNodeRef.current) {
        const { offsetWidth, offsetHeight } = parentNodeRef.current;
        setParentNodeSize({
          width: parseInt(offsetWidth),
          height: parseInt(offsetHeight),
        });
      }
    };

    calculateSize();

    window.addEventListener('resize', calculateSize);

    return () => {
      window.removeEventListener('resize', calculateSize);
    };
  }, []);

  return { parentNodeSize, parentNodeRef };
};
