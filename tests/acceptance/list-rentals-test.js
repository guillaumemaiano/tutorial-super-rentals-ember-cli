import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

//test('visiting /', function(assert) {
//  visit('/');
//
//  andThen(function() {
//    assert.equal(currentURL(), '/');
//  });
//});

test('Should show rentals as the home page', function(assert) {
	visit('/');
	andThen( function(){
	assert.equal(currentURL(), '/rentals', 'should redirect automatically');
	});
});
test('Should link to company information', function(assert) {
	 visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});
test('Should link to contact information', function(assert) {
	 visit('/');
  	click('a:contains("Contact")');
  	andThen(function() {
   	 assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});
test('Should list available rentals', function(assert) {
	 visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});
test('Should filter the list of rentals per city', function(assert) {});
test('Should show details for a selected rental', function(assert) {});
