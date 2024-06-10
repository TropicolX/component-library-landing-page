import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
	return (
		<div key="1" className="flex flex-col min-h-screen">
			<nav className="flex items-center justify-between gap-4 px-4 py-2 border-b border-gray-100 md:gap-6 md:px-6">
				<div className="flex items-center space-x-2">
					<Link
						className="flex items-center gap-2 font-semibold pr-2"
						href="#"
					>
						<FlagIcon className="w-6 h-6 rounded-lg" />
						Axel
					</Link>
					<Link
						className="hidden md:inline text-sm font-semibold hover:underline"
						href="#"
					>
						Components
					</Link>
					<Link
						className="hidden md:inline text-sm font-semibold hover:underline"
						href="#"
					>
						Templates
					</Link>
				</div>
				<div className="flex items-center space-x-4">
					<Link
						className="text-sm font-semibold hover:underline"
						href="#"
					>
						Documentation
					</Link>
					<Button size="sm" variant="outline">
						Sign up
					</Button>
				</div>
			</nav>
			<section className="grid items-center w-full py-12">
				<div className="container mx-auto px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
						<img
							alt="Hero"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
							height="550"
							src="https://res.cloudinary.com/tropicolx/image/upload/v1715585968/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_design_components_9vy6_p5m4en.svg"
							width="550"
						/>
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Speed up your workflow with beautifully
									designed components
								</h1>
								<p className="max-w-[600px] text-gray-500 md:text-xl">
									Accessible. Customizable. Open Source.
									Designed for developer happiness.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link
									className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									href="#"
								>
									Get Started
								</Link>
								<Link
									className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									href="#"
								>
									GitHub
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-black py-8">
				<div className="container mx-auto grid grid-cols-4 gap-4">
					<div className="flex items-center justify-center">
						<img
							alt="Company Logo 1"
							height="62"
							src="https://res.cloudinary.com/tropicolx/image/upload/v1715586123/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/solid_zslldy.svg"
							style={{
								aspectRatio: "192/62",
								objectFit: "cover",
							}}
							width="192"
						/>
					</div>
					<div className="flex items-center justify-center">
						<img
							alt="Company Logo 2"
							height="62"
							src="https://res.cloudinary.com/tropicolx/image/upload/v1715586123/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/letterlabs_l68fnd.svg"
							style={{
								aspectRatio: "192/62",
								objectFit: "cover",
							}}
							width="192"
						/>
					</div>
					<div className="flex items-center justify-center">
						<img
							alt="Company Logo 3"
							height="62"
							src="https://res.cloudinary.com/tropicolx/image/upload/v1715586123/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/surge_advshs.svg"
							style={{
								aspectRatio: "192/62",
								objectFit: "cover",
							}}
							width="192"
						/>
					</div>
					<div className="flex items-center justify-center">
						<img
							alt="Company Logo 4"
							height="62"
							src="https://res.cloudinary.com/tropicolx/image/upload/v1715586122/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/athennian_cbomie.svg"
							style={{
								aspectRatio: "192/62",
								objectFit: "cover",
							}}
							width="192"
						/>
					</div>
				</div>
			</section>
			<section className="py-12 md:px-4 lg:px-6">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 px-4 gap-6">
					<div className="col-span-1 md:col-span-3">
						<h2 className="text-3xl font-bold tracking-tighter">
							Components
						</h2>
						<p className="text-gray-500">
							Browse through our collection of components.
						</p>
					</div>
					<div className="col-span-1 md:col-span-1">
						<div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md cursor-pointer">
							<img
								alt="Component 1"
								height="100"
								src="https://res.cloudinary.com/tropicolx/image/upload/v1715586690/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_mobile_images_rc-0-q_ynmnim.svg"
								style={{
									aspectRatio: "180/100",
									objectFit: "cover",
								}}
								width="180"
							/>
							<h3 className="text-lg font-semibold mt-2">Hero</h3>
							<p className="text-gray-500">30 components</p>
						</div>
					</div>
					<div className="col-span-1 md:col-span-1">
						<div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md cursor-pointer">
							<img
								alt="Component 2"
								height="100"
								src="https://res.cloudinary.com/tropicolx/image/upload/v1715587682/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_site_content_re_4ctl_l3aypl.svg"
								style={{
									aspectRatio: "180/100",
									objectFit: "cover",
								}}
								width="180"
							/>
							<h3 className="text-lg font-semibold mt-2">Card</h3>
							<p className="text-gray-500">25 components</p>
						</div>
					</div>
					<div className="col-span-1 md:col-span-1">
						<div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md cursor-pointer">
							<img
								alt="Component 3"
								height="100"
								src="https://res.cloudinary.com/tropicolx/image/upload/v1715587682/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_sign_up_n6im_xkxwni.svg"
								style={{
									aspectRatio: "180/100",
									objectFit: "cover",
								}}
								width="180"
							/>
							<h3 className="text-lg font-semibold mt-2">Form</h3>
							<p className="text-gray-500">20 components</p>
						</div>
					</div>
					<div className="col-span-1 md:col-span-1">
						<div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md cursor-pointer">
							<img
								alt="Component 4"
								height="100"
								src="https://res.cloudinary.com/tropicolx/image/upload/v1715586612/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_button_style_re_uctt_einomi.svg"
								style={{
									aspectRatio: "180/100",
									objectFit: "cover",
								}}
								width="180"
							/>
							<h3 className="text-lg font-semibold mt-2">
								Button
							</h3>
							<p className="text-gray-500">40 components</p>
						</div>
					</div>
					<div className="col-span-1 md:col-span-1">
						<div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md cursor-pointer">
							<img
								alt="Component 5"
								height="100"
								src="https://res.cloudinary.com/tropicolx/image/upload/v1715587449/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_progress_indicator_re_4o4n_yn4pno.svg"
								style={{
									aspectRatio: "180/100",
									objectFit: "cover",
								}}
								width="180"
							/>
							<h3 className="text-lg font-semibold mt-2">Tabs</h3>
							<p className="text-gray-500">35 components</p>
						</div>
					</div>
					<div className="col-span-1 md:col-span-1">
						<div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md cursor-pointer ">
							<img
								alt="Component 6"
								height="100"
								src="https://res.cloudinary.com/tropicolx/image/upload/v1715587389/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_pitching_re_fpgk_cse7s7.svg"
								style={{
									aspectRatio: "180/100",
									objectFit: "cover",
								}}
								width="180"
							/>
							<h3 className="text-lg font-semibold mt-2">
								Pricing
							</h3>
							<p className="text-gray-500">30 components</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 md:px-4 lg:px-6">
				<div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:px-6">
					<div className="col-span-1">
						<h2 className="text-3xl font-bold tracking-tighter">
							Templates
						</h2>
						<p className="text-gray-500">
							Browse through our collection of templates.
						</p>
					</div>
					<div className="col-span-1 grid grid-cols-1 gap-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex flex-col gap-4">
								<h3 className="text-lg font-semibold">
									Neo SaaS Template
								</h3>
								<p className="text-gray-500">
									A modern and sleek SaaS template for your
									next project.
								</p>
								<Link
									className="inline-block w-fit text-sm font-semibold rounded-md bg-gray-900 px-4 py-2 text-center text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									href="#"
								>
									View Template
								</Link>
							</div>
							<div className="grid sm:grid-cols-2 gap-4">
								<img
									alt="Template 1"
									className="w-full h-full object-cover rounded-lg"
									height="240"
									src="https://res.cloudinary.com/tropicolx/image/upload/v1715587864/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_heatmap_uyye_rvhknm.svg"
									style={{
										aspectRatio: "240/240",
										objectFit: "cover",
									}}
									width="240"
								/>
								<img
									alt="Template 1"
									className="w-full h-full object-cover rounded-lg"
									height="240"
									src="https://res.cloudinary.com/tropicolx/image/upload/v1715587863/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_website_setup_re_d4y9_z3gagp.svg"
									style={{
										aspectRatio: "240/240",
										objectFit: "cover",
									}}
									width="240"
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex flex-col gap-4">
								<h3 className="text-lg font-semibold">
									Creative Portfolio Template
								</h3>
								<p className="text-gray-500">
									Showcase your work in style with this
									creative portfolio template.
								</p>
								<Link
									className="inline-block w-fit text-sm font-semibold rounded-md bg-gray-900 px-4 py-2 text-center text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									href="#"
								>
									View Template
								</Link>
							</div>
							<div className="grid sm:grid-cols-2 gap-4">
								<img
									alt="Template 2"
									className="w-full h-full object-cover rounded-lg"
									height="240"
									src="https://res.cloudinary.com/tropicolx/image/upload/v1715587869/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_portfolio_website_re_jsdd_th8eed.svg"
									style={{
										aspectRatio: "240/240",
										objectFit: "cover",
									}}
									width="240"
								/>
								<img
									alt="Template 2"
									className="w-full h-full object-cover rounded-lg"
									height="240"
									src="https://res.cloudinary.com/tropicolx/image/upload/v1715587864/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_portfolio_re_qwm5_tv5vii.svg"
									style={{
										aspectRatio: "240/240",
										objectFit: "cover",
									}}
									width="240"
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex flex-col gap-4">
								<h3 className="text-lg font-semibold">
									E-commerce Shop Template
								</h3>
								<p className="text-gray-500">
									Start selling online with this feature-rich
									e-commerce shop template.
								</p>
								<Link
									className="inline-block w-fit text-sm font-semibold rounded-md bg-gray-900 px-4 py-2 text-center text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									href="#"
								>
									View Template
								</Link>
							</div>
							<div className="grid sm:grid-cols-2 gap-4">
								<img
									alt="Template 3"
									className="w-full h-full object-cover rounded-lg"
									height="240"
									src="https://res.cloudinary.com/tropicolx/image/upload/v1715588031/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_web_shopping_re_owap_fnwdop.svg"
									style={{
										aspectRatio: "340/240",
										objectFit: "cover",
									}}
									width="340"
								/>
								<img
									alt="Template 3"
									className="w-full h-full object-cover rounded-lg"
									height="240"
									src="https://res.cloudinary.com/tropicolx/image/upload/v1715588031/Building%20a%20Landing%20Page%20with%20AI%20and%20Next.js/undraw_add_to_cart_re_wrdo_xz4t2t.svg"
									style={{
										aspectRatio: "240/240",
										objectFit: "cover",
									}}
									width="240"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 md:px-4 lg:px-6">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 px-4 gap-6">
					<div className="col-span-1 md:col-span-3">
						<h2 className="text-3xl font-bold tracking-tighter">
							Why Our Templates & Components
						</h2>
					</div>
					<div className="col-span-1 md:col-span-1 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md h-full">
						<BoltIcon className="w-24 h-24" />
						<h3 className="text-lg font-semibold mt-2">
							Blazing Fast
						</h3>
						<p className="text-gray-500 leading-relaxed text-center">
							Our components are optimized for lightning-fast
							performance, ensuring your app loads quickly and
							responsively.
						</p>
					</div>
					<div className="col-span-1 md:col-span-1 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md h-full">
						<AlignCenterHorizontalIcon className="w-24 h-24" />
						<h3 className="text-lg font-semibold mt-2">
							Highly Customizable
						</h3>
						<p className="text-gray-500 leading-relaxed text-center">
							Tailor our components to match your brand&apos;s
							style and design preferences with ease.
						</p>
					</div>
					<div className="col-span-1 md:col-span-1 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md h-full">
						<SparklesIcon className="w-24 h-24" />
						<h3 className="text-lg font-semibold mt-2">
							Beautiful Design
						</h3>
						<p className="text-gray-500 leading-relaxed text-center">
							Our templates and components are crafted with an eye
							for detail, ensuring a visually stunning user
							experience.
						</p>
					</div>
					<div className="sm:col-span-3 flex items-center justify-center">
						<Link
							className="inline-block mt-6 text-sm font-semibold rounded-md bg-gray-900 px-4 py-2 text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
							href="#"
						>
							View Templates
						</Link>
					</div>
				</div>
			</section>
			<section className="py-12 md:px-4 lg:px-6 flex items-center justify-center">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 px-4 gap-6">
					<div className="col-span-1 md:col-span-3">
						<h2 className="text-3xl font-bold tracking-tighter text-center">
							New Templates Bi-Weekly Newsletter
						</h2>
						<p className="text-gray-500 text-center mt-4">
							Subscribe to our newsletter to receive the latest
							templates every two weeks.
						</p>
						<form className="flex flex-col items-center space-y-4 mt-6">
							<Input
								className="max-w-lg w-full"
								placeholder="Enter your email"
								type="email"
							/>
							<Button type="submit">Subscribe</Button>
						</form>
					</div>
				</div>
			</section>
			<footer className="py-8 px-4 md:px-6 bg-gray-900 text-gray-50">
				<div className="container mx-auto flex flex-col items-center justify-center">
					<p className="text-sm">© 2024 Axel. All rights reserved.</p>
					<div className="flex space-x-4 mt-4">
						<Link className="hover:underline" href="#">
							Privacy Policy
						</Link>
						<Link className="hover:underline" href="#">
							Terms of Service
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}

function AlignCenterHorizontalIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M2 12h20" />
			<path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
			<path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
			<path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
			<path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
		</svg>
	);
}

function BoltIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
			<circle cx="12" cy="12" r="4" />
		</svg>
	);
}

function FlagIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
			<line x1="4" x2="4" y1="22" y2="15" />
		</svg>
	);
}

function SparklesIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
			<path d="M5 3v4" />
			<path d="M19 17v4" />
			<path d="M3 5h4" />
			<path d="M17 19h4" />
		</svg>
	);
}
