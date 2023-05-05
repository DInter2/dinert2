import Image from "next/image"

export const Notification = () => {
	return (
		<>
			<div className="ml-4 mt-2 p-4 max-w-sm mx-auto bg-red-300 fixed rounded-xl shadow-lg flex items-center space-x-4">
			<div className="shrink-0">
				<Image 
						className="h-12 w-12" 
						src="/next.svg"
						alt="Next.js Logo"
						width={180}
						height={37}
						priority />
			</div>
			<div className="space-y-2">
				<div className="text-xl font-medium text-black">ChitChat</div>
				<p className="text-slate-500">You have a new message!</p>
				<button className="active:bg-green-700 px-4 py-2 text-sm text-white font-normal rounded-full hover:text-white bg-red-700 focus:bg-yellow-500 hover:bg-purple-600 hover:border-green-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-ofset-1">Message</button>
			</div>
			</div>
		</>
	)
}