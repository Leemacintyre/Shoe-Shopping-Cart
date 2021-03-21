import React from 'react';
import CardBg from './CardBg';
import CardInfo from './CardInfo';
import { shoeData } from './showData';

const Card = ({ updateCart }) => {
	return (
		<>
			{shoeData.map((shoe, index) => (
				<div key={index} className='card'>
					<CardBg shoeImg={shoe.cardImg} />
					<CardInfo
						shoePrice={shoe.cardPrice}
						updateCart={() => updateCart(shoe.cardImg, shoe.cardPrice)}
					/>
				</div>
			))}
		</>
	);
};

export default Card;
