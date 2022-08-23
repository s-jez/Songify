import { Box, Flex } from "@chakra-ui/layout";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

export const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex justify="center" align="center" height="100px">
        Hello World
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        Form
      </Flex>
    </Box>
  );
};
