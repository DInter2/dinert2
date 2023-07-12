import React, { ReactNode } from 'react';

const Folder = ({ children, title }: {children: ReactNode, title: string }) => {
  return (
  <div className={`lg:w-auto space-y-5 w-[95vw] mx-auto`}>
    <div className="bg-orange-500 m-2 mt-2 mb-[-3rem] sticky shadow-lg rounded-lg">
      <h2 className="text-white text-lg font-bold p-2 break-words">{title}</h2>
    </div>
    <div className="grid-flow-row-dense bg-white mb-2 pb-10 pt-16 min-h-[70px] shadow-md rounded-lg px-1 md:px-4 grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-10">
     {children}
    </div>
  </div>

  );
};

export default Folder;
