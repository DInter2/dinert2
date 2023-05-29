import React from 'react';

const Skeleton = ({classProps}: { classProps: string}) => {
  return <div className={`bg-gray-300 animate-pulse ${classProps}`}></div>;
};

export default Skeleton;
