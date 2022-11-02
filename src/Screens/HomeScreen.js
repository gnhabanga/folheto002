import React from 'react';
import Banner from '../Components/Home/Banner';
import FolhetosPopulares from '../Components/Home/FolhetosPopulares';
import MaisPopulares from '../Components/Home/MaisPopulares';
import NovosFolhetos from '../Components/Home/NovosFolhetos';
import Promos from '../Components/Home/Promos';
import Layout from '../Layout/Layout';

function HomeScreen() {
	return (
		<Layout>
			<div className="container mx-auto min-h-screen px-2 mb-6">
				
				<NovosFolhetos />
				<FolhetosPopulares />
				<Promos />
				<MaisPopulares />
			</div>
		</Layout>

	);
}
export default HomeScreen