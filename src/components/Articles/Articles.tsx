import React from 'react';
import './_articles.scss';

const Articles = () => {
	return (
		<div className='articles col-3'>
			<article className='search'>
				<svg
					viewBox='0 0 24 24'
					aria-hidden='true'
					className='r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr'>
					<g>
						<path
							d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
					</g>
				</svg>
				<input type='text' placeholder='Search Twitter'/>
			</article>
			<article className='trends'>
				<h3 className='trends__title'>Trends for you</h3>
			</article>
			<article className='recommendation-follow'>
				<h3 className='recommendation-follow__title'>Who to follow</h3>
				<ul className='recommendation-follow__list'>
					<li className='recommendation-follow__item'>
						<img
							src='https://pbs.twimg.com/profile_images/1441611208176455681/lA7WO8i1_normal.png'
							alt=''
							className='recommendation-follow__img'
						/>
						<div className='recommendation-follow__info'>
							<p className='recommendation-follow__name'>Azamat</p>
							<p className='recommendation-follow__user-name'>@tawmant</p>
						</div>
						<button className='recommendation-follow__follow'>Follow</button>
					</li>
				</ul>
				<button className='recommendation-follow__show-more'>Show more</button>
			</article>
		</div>
	);
};

export default Articles;
