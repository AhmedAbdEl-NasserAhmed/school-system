"use client";

import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const useClickOutside = ({
  close,
  value
}: {
  close: Dispatch<SetStateAction<boolean>>;
  value: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: any) {
      if (ref.current && e.target.contains(ref.current)) {
        close(value);
      }
    }

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [close, value]);

  return ref;
};

export default useClickOutside;
