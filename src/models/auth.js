import Cookie from "cookie-universal";

const cookie = Cookie();

class auth {

  static setToken(token) {
    cookie.set("access_token", token);
  }

  static getToken() {

    return cookie.get("access_token");
  }

  static middleware(to, from, next) {
    const isAuthenticated = !!auth.getToken(); //  check

    // Redirect to /home if authenticated and not already going there
    if (isAuthenticated && to.path == '/login') {
      next('/home');
    }
    // Redirect to /login if not authenticated and not already going there
    else if (!isAuthenticated && to.path !== '/login') {
      next('/login');
    }
    // Otherwise, proceed as planned
    else {
      next();
    }
  }

}

export default auth;