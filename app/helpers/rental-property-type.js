import Ember from 'ember';

const communityPropertyTypes = [
	'Condo',
	'Townhouse',
	'Appartment'
];

export function rentalPropertyType([propertyType]) {
 if (communityPropertyTypes.includes(propertyType)) {
	return 'Community';
}
else {
	return 'Standalone';
}
}

export default Ember.Helper.helper(rentalPropertyType);
