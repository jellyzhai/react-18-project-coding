import { useEffect } from "react";
import style from "./style.module.scss";
import { starSkyAnimate } from "./starSkyAnamition";
import { Button, Image, Input, Space } from "antd";

function Login() {
  useEffect(() => starSkyAnimate(), []);

  return (
    <div className={style.canvasBox}>
      <canvas id="canvas" className={style.center}></canvas>
      
      <Space direction="vertical" size={"large"}  className={style.center} style={{width:500}}>
        <Input placeholder="请输入用户名" className="opacity-input"/>
        <Input.Password placeholder="请输入密码" className="opacity-input" />
        <div className={style.verifyCodeBox}>
          <Input placeholder="请输入验证码" className="opacity-input" />
          <Image preview={false} height={38} src="/src/assets/imgs/check-code.jpg" />
        </div>
        <Button type="primary" block={true}>登录</Button>
      </Space>
    </div>
  );
}

export default Login;
