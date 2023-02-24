const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }
      // If the user is logged in, execute the route function that will allow them to view the gallery
      // We call next() if the user is authenticated
      next();

  };

  module.exports = withAuth;