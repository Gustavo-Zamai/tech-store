import { useState } from "react";
import { Box, Center } from "@chakra-ui/react";
import { InputCard } from "../Input/Input";
import { IButton } from "../Button/Button";
import { login as loginService } from "../../services/Login/login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const LoginCard = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const user = await loginService(email, password);

      login(user);

      navigate("/home");

    } catch (error) {
      alert("Email ou senha inválidos");
    }
  };

  return (
    <Center>
      <Box
        padding="3rem"
        marginTop="4rem"
        border="1px solid black"
        borderRadius="10px"
        bg="#FFFFFF"
        width="75%"
        shadow="lg"
      >
        <InputCard
          id="email"
          type="email"
          label="USUÁRIO"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputCard
          id="password"
          type="password"
          label="SENHA"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <IButton text="Login" event={handleLogin} />
      </Box>
    </Center>
  );
};