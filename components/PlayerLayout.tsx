import { Box } from "@chakra-ui/layout";
import GradientLayout from "./gradientLayout";
import Sidebar from "./Sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="110px">
        <Box>{children}</Box>
        <Box position="absolute" bottom="0" left="0">
          <Box
            background="#333"
            paddingX="105px"
            paddingY="50px"
            color="gray.400"
          >
            Player
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PlayerLayout;
