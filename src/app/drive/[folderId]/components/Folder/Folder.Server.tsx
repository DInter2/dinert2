import React, { ReactNode } from 'react';

const Folder = ({ children, title }: {children: ReactNode, title: string }) => {
  return (
  <div className="space-y-5  mx-auto">
    <div className="bg-orange-500 m-2 mt-2 mb-[-3rem] sticky shadow-lg rounded-lg">
      <h2 className="text-white text-lg font-bold p-2 break-words">{title}</h2>
    </div>
    <div className="bg-white mb-2 pt-8 min-h-[70px] shadow-md rounded-lg items-center justify-center flex">
      <div className="grid xl:grid-cols-3  lg:grid-cols-2 xs:grid-cols-1 gap-4 py-8 px-2 ">
        {children}
      </div>
    </div>
  </div>

  );
};

export default Folder;
