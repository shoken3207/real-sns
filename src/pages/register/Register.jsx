import "./Register.css";

import React from "react";

function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを、自分の手で。</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">新規登録はこちら</p>
            <input
              type="text"
              placeholder="ユーザー名"
              className="loginInput"
            />
            <input type="text" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="パスワード"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="確認用パスワード"
              className="loginInput"
            />
            <button className="loginButton">サインアップ</button>
            <button className="loginRegisterButton">ログイン</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
