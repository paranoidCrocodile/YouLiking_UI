import React, { useRef, useEffect } from "react";

interface CardProps {
  htmlString: string;
}

const Card = ({ htmlString }: CardProps): React.ReactElement => {
  const targetDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    (targetDiv.current as HTMLDivElement).innerHTML = htmlString;
  }, []);
  return <div ref={targetDiv}></div>;
};

export default Card;
