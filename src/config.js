import { names } from './Data/names.js';
import { cardDetails } from './Data/CardDetails.js';
import {
	addressData,
	cityData,
	postalCodeData,
	countryData,
	stateData,
	countryCodes,
} from './Data/address.js';
import { emailData } from './Data/email.js';

export const firstName = () => {
	const namesList = names();
	return namesList[
		Math.floor(Math.random() * namesList.length)
	];
};

export const card = () => {
	return cardDetails();
};

export const fullName = () => {
	const namesList = names();
	return (
		namesList[
			Math.floor(Math.random() * namesList.length)
		] +
		' ' +
		namesList[
			Math.floor(Math.random() * namesList.length)
		]
	);
};

export const email = () => {
	const email = emailData();
	return email[
		Math.floor(Math.random() * email.length)
	];
};

export const number = {
	getRange(min, max) {
		if (!min || !max) {
			throw new Error(
				'Minimum and Maximum value required'
			);
		}
		if (min > max) {
			throw new Error(
				'Minimum value cannot be greater than maximum value'
			);
		}
		return Math.floor(
			Math.random() * (max - min) + min
		);
	},

	getNumber(length) {
		if (!length) {
			throw new Error('Length required');
		}
		return Math.floor(
			Math.random() *
				(Math.pow(10, length) -
					Math.pow(10, length - 1)) +
				Math.pow(10, length - 1)
		);
	},
};

export const address = {
	getCity() {
		const cityList = cityData();
		return cityList[
			Math.floor(Math.random() * cityList.length)
		];
	},

	getPostalCode() {
		const postalCodeList = postalCodeData();
		return postalCodeList[
			Math.floor(
				Math.random() * postalCodeList.length
			)
		];
	},

	getCountry() {
		const countryList = countryData();
		return countryList[
			Math.floor(Math.random() * countryList.length)
		];
	},

	getState() {
		const stateList = stateData();
		return stateList[
			Math.floor(Math.random() * stateList.length)
		];
	},

	getCountryCode() {
		const countryCodeList = countryCodes();
		return countryCodeList[
			Math.floor(
				Math.random() * countryCodeList.length
			)
		];
	},

	getFullAddress() {
		const address = addressData();
		return address[
			Math.floor(Math.random() * address.length)
		];
	},
};

export const date = {
	currentDate() {
		return new Date().toISOString();
	},

	currentTime() {
		return new Date().toLocaleTimeString();
	},

	epochTime(type) {
		if (type === 'ms') {
			return new Date().getTime();
		}
		if (type == 's') {
			return Math.floor(new Date().getTime() / 1000);
		}
		return new Date().getTime();
	},
};

export const image = (width, height) => {
	if (!height || !width) {
		return `https://picsum.photos/400/400`;
	}
	return `https://picsum.photos/${width}/${height}`;
};
