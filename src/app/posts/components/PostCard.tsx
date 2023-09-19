import React from 'react'

export const PostCard = ({ title }: { title: string }) => {
	const lineHeight = 1.2; // Ajuste isso para a altura da linha do seu texto
	const maxHeight = 3 * lineHeight + 'em';	
  return (
		<div className="bg-white p-4 rounded-lg shadow-md">
			<h2 className={`overflow-y-clip text-slate-900 font-semibold h-12`}>{title}</h2>
			{/* <p className="mt-2">{content}</p> */}
		</div>
	);
};

