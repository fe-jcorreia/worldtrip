import {
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaCocktail,
  FaUmbrellaBeach,
  FaRegBuilding,
  FaLandmark,
  FaGlobeAmericas,
} from "react-icons/fa";

export function Categories() {
  const isWideVersion = useBreakpointValue({ base: false, xl: true });
  return (
    <Flex
      mx="9%"
      py="28"
      align="center"
      justify="space-between"
      color="gray.600"
      fontWeight="600"
      fontSize="2xl"
    >
      {isWideVersion ? (
        <>
          <Box w="13%">
            <Image mx="auto" src="/icons/cocktail.svg" />
            <Text mt="6" textAlign="center">
              vida noturna
            </Text>
          </Box>
          <Box w="13%">
            <Image mx="auto" src="/icons/surf.svg" />
            <Text mt="6" textAlign="center">
              praia
            </Text>
          </Box>
          <Box w="13%">
            <Image mx="auto" src="/icons/building.svg" />
            <Text mt="6" textAlign="center">
              moderno
            </Text>
          </Box>
          <Box w="13%">
            <Image mx="auto" src="/icons/museum.svg" />
            <Text mt="6" textAlign="center">
              clássico
            </Text>
          </Box>
          <Box w="13%">
            <Image mx="auto" src="/icons/earth.svg" />
            <Text mt="6" textAlign="center">
              e mais...
            </Text>
          </Box>
        </>
      ) : (
        <SimpleGrid
          w="100%"
          gap={["10", "12", "16", "20"]}
          columns={[1, 1, 2, 3, 4]}
          align="flex-start"
        >
          <Text textAlign="center">
            <Icon as={FaCocktail} color="orange.800" fontSize="2rem" /> vida
            noturna
          </Text>

          <Text textAlign="center">
            <Icon as={FaUmbrellaBeach} color="orange.800" fontSize="2rem" />
            {"  "}
            praia
          </Text>

          <Text textAlign="center">
            <Icon as={FaRegBuilding} color="orange.800" fontSize="2rem" />
            {"  "}
            moderno
          </Text>

          <Text textAlign="center">
            <Icon as={FaLandmark} color="orange.800" fontSize="2rem" /> clássico
          </Text>

          <Text textAlign="center">
            <Icon as={FaGlobeAmericas} color="orange.800" fontSize="2rem" /> e
            mais...
          </Text>
        </SimpleGrid>
      )}
    </Flex>
  );
}
