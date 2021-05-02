import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

interface CitiesGridProps {
  cities: {
    city: string;
    country: string;
    country_code: string;
    img_url: string;
  }[];
}

export function CitiesGrid({ cities }: CitiesGridProps) {
  return (
    <Box mx="auto" w={["90%", "80%", "80%", "100%"]}>
      <Heading fontWeight="500" fontSize={["3xl", "4xl"]}>
        Cidades +100
      </Heading>
      <SimpleGrid
        gap={["10", "12", "16", "20"]}
        columns={[1, 1, 2, 3, 4]}
        align="flex-start"
        mt="3rem"
      >
        {cities?.map((cityElement) => {
          return (
            <Box
              h="280px"
              w="256px"
              mx="auto"
              borderRadius="5px"
              bg="white"
              key={cityElement.city}
            >
              <Image
                src={cityElement?.img_url}
                alt={cityElement?.country}
                w="100%"
                h="62%"
                borderRadius="5px 5px 0 0"
                objectFit="cover"
              />
              <Box
                borderWidth="0 1px 1px 1px"
                borderRadius="0 0 5px 5px"
                borderColor="rgba(255, 186, 8, 0.5)"
                h="38%"
              >
                <Flex
                  align="center"
                  justify="space-between"
                  mx="1rem"
                  pt="1.5rem"
                >
                  <Text fontWeight="600" fontSize="lg">
                    {cityElement?.city}
                  </Text>
                  <ReactCountryFlag
                    countryCode={cityElement?.country_code}
                    svg
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: "1px solid #DADADA",
                    }}
                    title={cityElement?.country_code}
                  />
                </Flex>

                <Text
                  fontSize="md"
                  color="gray.400"
                  mt="0.5rem"
                  mx="1rem"
                  pb="1.5rem"
                >
                  {cityElement?.country}
                </Text>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
