/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {

	it('are defined', function() {
            expect(allFeeds).toBeDefined(); //allFeeds variable has been defined
            expect(allFeeds.length).not.toBe(0); //allFeeds variable is not empty
        });

		it('have URL defined and is not empty',function () {
			allFeeds.forEach(function(x)	{ //verify in loop that URLs are defined and not empty
			var address = x.url
			expect(address).toBeDefined();
			expect(address).not.toBe('');
			});

			});	

		it('have name defined and is not empty',function () {
			allFeeds.forEach(function(x)	{ //verify in loop that names are defined and not empty
			var feedName = x.name
			expect(feedName).toBeDefined();
			expect(feedName).not.toBe('');
			});

		});
    });

    describe('The menu', function() {

		it('is hidden by default',function () {
			expect(document.body.classList.contains('menu-hidden')).toBe(true); 
		});

		it('hides and unhides upon click',function () {
			const menuIcon = $('.menu-icon-link') 
			menuIcon.click(); //on click the menu hides and unhides
			expect(document.body.classList.contains('menu-hidden')).toBe(false);
			menuIcon.click();
			expect(document.body.classList.contains('menu-hidden')).toBe(true)
			});  
		  
	});

    describe('Initial Entries', function() {

 		beforeEach(function(done){ //ensure feed is loaded prior to testing
			loadFeed(0, done); //https://github.com/aayusharora/Feed-Reader-Testing/blob/master/jasmine/spec/feedreader.js
		});
		it('has at least one entry',function () { 
			//at least a single .entry element within the .feed container
			var entryElement = $('.feed').find('.entry').length
			expect(entryElement).toBeGreaterThan(0);
		}) 
	});

    describe('New Feed Selection', function() {

		var loadOne = '';
		var loadTwo = '';
		//https://medium.com/letsboot/testing-javascript-with-jasmine-basics-48efe03cf973

		beforeEach(function(done){  //ensure feed is loaded and reloaded before comparison
			loadFeed(0, function () {
			loadOne = $('.feed').html(); //storing initial feed
			
			loadFeed(1, function () {
			loadTwo = $('.feed').html();
			done();
				});
			});
		});
		
		it('content changes when loaded',function () {
			expect(loadOne).not.toBe(loadTwo);
		});  
	});

}());




