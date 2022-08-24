import { Box, Flex } from "@chakra-ui/layout";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";
import { Button, Input } from "@chakra-ui/react";
import NextImage from "next/image";
import signup from "../pages/api/signup";

export const AuthForm: FC<{ mode: "signup" | "signin" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const user = await auth(mode, {
      email,
      password,
    });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        textTransform="uppercase"
        borderBottom="white 1px solid"
      >
        <Box marginRight="20px">
          <NextImage src="/spotify_icon.svg" height={60} width={60} />
        </Box>
        <Box fontSize={24} fontWeight={600}>
          <h1>Songify App</h1>
        </Box>
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <Box textTransform="uppercase">{mode} form</Box>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Enter a email.."
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              marginY="20px"
            />
            <Input
              placeholder="Enter a password.."
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              marginY="20px"
            />
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                },
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
