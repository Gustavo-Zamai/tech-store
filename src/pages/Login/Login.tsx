import { Box } from "@chakra-ui/react";
import { LoginCard } from "../../components/Card/LoginCard";
import { AuthLayout } from "../../components/Layout/AuthLayout";

export const Login = () => {
    return (
        <AuthLayout>
            <Box bg='#0F172A' h='80vh'>
                    <LoginCard />
            </Box>
        </AuthLayout>
    );
}