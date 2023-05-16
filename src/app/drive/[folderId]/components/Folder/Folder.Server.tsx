import BreadcrumbsClient from '@/app/Components/layout/breadcrumbs/BreadcrumbsClient';
import React, { ReactNode } from 'react';

const Folder = ({ children, title, breadDrumbs}: {children: ReactNode, title: string, breadDrumbs: ReactNode }) => {
  return (
    <>
      { breadDrumbs }
      <div className="space-y-4">
        <div className="bg-orange-500 m-2 mt-2 mb-[-3rem] sticky shadow-lg rounded-lg">
          <h2 className="text-white text-lg font-bold p-2">{title}</h2>
        </div>
        <div className="bg-white mb-2 pt-8 min-h-[70px] shadow-md rounded-lg items-center justify-center flex">
          <div className="grid xl:grid-cols-3 max-w-fit lg:grid-cols-2 xs:grid-cols-1 gap-4 py-8 px-2 ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Folder;
