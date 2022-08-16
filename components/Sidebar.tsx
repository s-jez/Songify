import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navbarElements = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Libary",
    icon: MdLibraryMusic,
    route: "/libary",
  },
  {
    name: "Playlist",
    icon: MdPlaylistAdd,
    route: "/playlist",
  },
  {
    name: "Favorite",
    icon: MdFavorite,
    route: "/favorite",
  },
];
const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/spotify_icon.svg" width={30} height={30} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={3}>
            {navbarElements.map((el) => (
              <ListItem paddingX="18px" fontSize="16px" key={el.name}>
                <LinkBox>
                  <NextLink href={el.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={el.icon} color="white" marginRight="18px" />
                      {el.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
