
export default function DriveLayout({ children }: {
    children: React.ReactNode,
  }) {
    return (
		<section>

			<main>
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          { children }
				</div>
			</main>
    </section>);
  }
