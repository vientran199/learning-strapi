module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  // url: '/dashboard',//To make the admin panel accessible from http://localhost:1337/dashboard
  //By default, the front end development server runs on localhost:8000
  // host: 'my-host', // only used along with `strapi develop --watch-admin` command
  // port: 3000, // only used along with `strapi develop --watch-admin` command
});
