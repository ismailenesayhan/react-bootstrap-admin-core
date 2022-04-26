import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";

export default function Login() {
  return (
    <>
      <main className="form-signin">
        <div className="row">
          <div className="col-md-4"></div>
          <div
            className="col-md-4 text-center p-4 p-lg-5"
            style={{ maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}
          >
            <img
              src={Logo}
              alt="Logo"
              width="200"
              className="mt-3 mt-lg-5 img-fluid"
            />

            <h1 className="h4 mb-3 mt-5 fw-normal">Login your application</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">E-Posta Adresi</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Şifre"
              />
              <label for="floatingPassword">Şifre</label>
            </div>

            <div className="checkbox mb-3 mt-3">
              <label>
                <input type="checkbox" value="remember-me" /> Beni Hatırla
              </label>
            </div>

            <Link className="w-100 btn btn-dark mb-3 mt-5" to="/dashboard">
              Giriş Yap
            </Link>

            <p className="mt-3">
              <Link className="text-dark" to="forgot-password">
                Şifremi Unuttum
              </Link>
            </p>

            <p className="mt-3">
              <Link className="text-dark" to="reset-password">
                Şifremi Sıfırla
              </Link>
            </p>

            <p className="mt-5 mb-3 text-muted">
              &copy; 2022 İsmail Enes Ayhan
            </p>
          </div>
          <div className="col-md-4"></div>
        </div>
      </main>
    </>
  );
}
