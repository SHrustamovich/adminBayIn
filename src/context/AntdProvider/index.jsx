import { ConfigProvider } from "antd";

const AntdProvider = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#2b3c7a",
                    borderRadius: 6,
                },
                components: {
                    Input: {
                        algorithm: true,
                        paddingBlockLG: 8,
                    },
                    Button: {
                        defaultShadow: "none",
                        primaryShadow: "none",
                    },
                },
            }}>
            {children}
        </ConfigProvider>
    );
};

export default AntdProvider;
