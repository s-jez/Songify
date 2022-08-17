import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
  Divider,
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
];
const musicElements = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];
const playlistElements = Array(40)
  .fill(1)
  .map((_, i) => `Playlist Item ${i + 1}`);
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
        <Box
          width="100%"
          marginBottom="20px"
          paddingX="10px"
          display="flex"
          justifyContent="start"
        >
          <NextImage src="/spotify_icon.svg" width={30} height={30} />
          <Box marginLeft="15px">
            <span>Songify App</span>
          </Box>
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
      <Divider color="gray.800" />
      <Box marginTop="20px" marginBottom="20px">
        <List spacing={2}>
          {musicElements.map((el) => (
            <ListItem
              paddingX="20px"
              paddingY="5px"
              fontSize="16px"
              key={el.name}
            >
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
      <Divider color="gray.800" />
      <Box height="55%" overflowY="auto" padding="20px">
        <List spacing={2}>
          {playlistElements.map((item) => (
            <ListItem paddingX="20px" key={item}>
              <LinkBox>
                <NextLink href="/">{item}</NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
