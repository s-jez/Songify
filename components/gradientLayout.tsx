import { Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500), ${color}.600 15%, ${color}.700 40%, rgba(0, 0, 0, .95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="20px" alignItems="end">
        <Box>
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius={roundImage ? "100%" : "3px"}
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
};
export default GradientLayout;
