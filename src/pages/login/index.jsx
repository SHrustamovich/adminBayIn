import { Button, Form, Input, Typography } from "antd";
import { usePostRequest } from "../../hooks/request";
import { Urls } from "../../constants/urls";
import axios from "axios";
// import { useContext } from "react";
// import { UserContext } from "../../context/userContext";
const { Title } = Typography;
const LoginPage = () => {
    const loginPost = usePostRequest({ url: Urls.auth.login });

    // const { setTokens } = useContext(UserContext);
    const onFinish = async (values) => {
        axios
            .post(
                "https://desolate-island-81849-8adb75aee344.herokuapp.com/api/user/login",
                values
            )
            .then(function (response) {
                localStorage.setItem(
                    "accessToken",
                    response.data.data.accessToken
                );
                localStorage.setItem(
                    "refreshToken",
                    response.data.data.refreshToken
                );
                console.log(
                    response.data.data.accessToken,
                    response.data.data.refreshToken
                );
                // setTokens(
                //     response.data.data.accessToken,
                //     response.data.data.refreshToken
                // );
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className='bg-[#2b3c7a] w-full h-screen'>
            <div className='w-[420px] h-[320px] bg-white rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3'>
                <Title level={2} className='text-center pt-2'>
                    BayIn
                </Title>
                <Form
                    name='basic'
                    className=''
                    onFinish={onFinish}
                    autoComplete='off'>
                    <Form.Item
                        label='Username'
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='Password'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='w-full text-white bg-[#2b3c7a] '>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
