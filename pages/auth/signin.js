import { getProviders, signIn } from 'next-auth/react';
import Header from '@/components/Header';

export default function signin({ providers }) {
	return (
		<>
			<Header />
			<div>
				<img
					src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
					alt="instagram-image"
				/>
				<div>
					{Object.values(providers).map((provider) => (
						<div>
							<img src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png" />
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
