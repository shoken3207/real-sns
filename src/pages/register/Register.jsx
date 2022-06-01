import "./Register.css";

import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const username = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const email = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // パスワードと確認用のパスワードがあっているかどうかを確認

    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワードが違います。");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };

        // registerApiを叩く
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを、自分の手で。</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">新規登録はこちら</p>
            <input
              type="text"
              placeholder="ユーザー名"
              className="loginInput"
              required
              ref={username}
            />
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              required
              ref={email}
            />
            <input
              type="password"
              placeholder="パスワード"
              className="loginInput"
              required
              minLength="6"
              ref={password}
            />
            <input
              type="password"
              placeholder="確認用パスワード"
              className="loginInput"
              required
              minLength="6"
              ref={passwordConfirmation}
            />
            <button className="loginButton" type="submit">
              サインアップ
            </button>
            <Link to="/login">
              <button className="loginRegisterButton">ログイン</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
