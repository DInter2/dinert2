import { Card } from "../Cards/Card"

export interface People {
	name: string
	title: string
	imageUrl: string
	rote: string
}
export const ListTile = () => {
	const peopleList: People[] = [
		{
			name: "cefas",
			rote: "#",
			title: "Tilte de list",
			imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9sMPnlIAPlrx5zb7zi_whOSEH2SdmMNx5Ckt4ir9Mdajff6_S0vnDFawKMI9Uk9_Km8&usqp=CAU"
		},{
			name: "Daniela",
			rote: "#",
			title: "Tilte de list",
			imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9sMPnlIAPlrx5zb7zi_whOSEH2SdmMNx5Ckt4ir9Mdajff6_S0vnDFawKMI9Uk9_Km8&usqp=CAU"
		},{
			name: "Laura",
			rote: "#",
			title: "Tilte de list",
			imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9sMPnlIAPlrx5zb7zi_whOSEH2SdmMNx5Ckt4ir9Mdajff6_S0vnDFawKMI9Uk9_Km8&usqp=CAU"
		}
	]
	return (
		<ul role="list" className="group block max-w-xs mx-auto rounded-lg p-6 ring-1 ring-slate-900/5 shadow-lg space-y-3">
			{peopleList.map((people)=>{
				return (
					<li key={people.name} className="group/item items-center">
						<Card people={people}/>
					</li>
				)
			})}
		</ul>
	)
}