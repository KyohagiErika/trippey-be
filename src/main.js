const App = require('./core/app');
const upload = require('./core/upload');

const TripeyApp = new App();
TripeyApp.init().then(() => {
    TripeyApp.addHandler('post', '/register', require('./handlers/register'));
    TripeyApp.addHandler('post', '/login', require('./handlers/login'));
    TripeyApp.addHandler('post', '/create-location', require('./handlers/create-location'), upload.single('img'));
    TripeyApp.addHandler('get', '/get-all-location', require('./handlers/get-all-location'));
    TripeyApp.addHandler('post', '/update-location/:id', require('./handlers/update-location'), upload.single('img'));
    TripeyApp.addHandler('get', '/delete-location/:id', require('./handlers/delete-location'));
    TripeyApp.addHandler('post', '/create-places', require('./handlers/create-places'), upload.array('imgs'));
    TripeyApp.addHandler('get', '/get-all-places', require('./handlers/get-all-places'));
    TripeyApp.addHandler('post', '/update-place/:id', require('./handlers/update-place'), upload.single('img'));
    TripeyApp.addHandler('get', '/delete-place/:id', require('./handlers/delete-place'));
    TripeyApp.addHandler('post', '/create-schedule-seed', require('./handlers/create-schedule-seed'));
    TripeyApp.addHandler('post', '/create-schedule-place-seed', require('./handlers/create-schedule-place-seed'));
    TripeyApp.addHandler('get', '/get-all-schedule-seed', require('./handlers/get-all-schedule-seed'));
    TripeyApp.addHandler('get', '/get-all-schedule-place-seed', require('./handlers/get-all-schedule-place-seed'));
    TripeyApp.addHandler('get', '/delete-schedule-seed/:id', require('./handlers/delete-schedule-seed'));
    TripeyApp.addHandler('post', '/create-schedule', require('./handlers/create-schedule'));
    TripeyApp.addHandler('post', '/update-schedule/:id', require('./handlers/update-schedule'));
    TripeyApp.addHandler('get', '/get-schedule/:id', require('./handlers/get-schedule'));
    TripeyApp.addHandler('get', '/test', require('./handlers/test'));

    TripeyApp.start();
}).catch(err => {
    console.log(err);
});

module.exports = TripeyApp;