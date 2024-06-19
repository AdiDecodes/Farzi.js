import { names } from './names.js';

const expiryDate = () => {
	const currentYear = new Date().getFullYear();
	const expiryYear =
		currentYear + Math.floor(Math.random() * 5) + 1; // Card expires in 1 to 5 years from the current year
	const expiryMonth =
		Math.floor(Math.random() * 12) + 1; // Random month
	return `${expiryMonth.toString().padStart(2, '0')}/${expiryYear.toString().slice(-2)}`; // Format as MM/YY
};

export const cardDetails = () => {
	const nameList = names();
	const cardNumber = Math.floor(
		Math.random() * 10000000000000000
	);
	const cardHolder =
		nameList[
			Math.floor(Math.random() * nameList.length)
		] +
		' ' +
		nameList[
			Math.floor(Math.random() * nameList.length)
		];
	const expiry = expiryDate();
	const cardType = [
		'Visa',
		'MasterCard',
		'American Express',
	];

	const cardTypeIndex = Math.floor(
		Math.random() * cardType.length
	);

	const getCardType = cardType[cardTypeIndex];

	const cvv = Math.floor(
		100 + Math.random() * 900
	);

	const obj = {
		Card: getCardType,
		'Owner Name': cardHolder,
		'Card Number': cardNumber,
		expiry: expiry,
		cvv: cvv,
	};

	return JSON.stringify(obj, null, 2);
};
