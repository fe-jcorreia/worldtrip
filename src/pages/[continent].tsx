import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import ReactCountryFlag from "react-country-flag";

interface ContinentProps {
  id: number;
  name: string;
  title: string;
  description: string;
  num_countries: number;
  num_languages: number;
  num_city_most_visited: number;
  url_nation_img: string;
  cities: {
    city: string;
    country: string;
    country_code: string;
    img_url: string;
  }[];
}

interface ContinentPageProps {
  continent: ContinentProps;
}

export default function ContinentPage({ continent }: ContinentPageProps) {
  return (
    <Flex direction="column" mb="12">
      <Head>
        <title>page | World Trip</title>
      </Head>
      <Header />
      <Flex h="500px" pos="relative">
        <Image
          src={continent?.url_nation_img}
          alt={`${continent?.name}`}
          objectFit="cover"
          filter="brightness(0.5)"
        />
        <Text
          as="header"
          position="absolute"
          left="32"
          bottom="4rem"
          fontSize="5xl"
          fontWeight="600"
          color="gray.50"
        >
          {continent?.title}
        </Text>
      </Flex>
      <Flex mx="32" my="4rem" align="center" justify="space-between">
        <Text fontSize="xl" w="600px" textAlign="justify">
          {continent?.description}
        </Text>
        <Flex align="center" justify="space-between">
          <Box w="8.5rem" fontWeight="600" fontSize="xl" textAlign="center">
            <Text color="orange.800" fontSize="5xl">
              {continent?.num_countries}
            </Text>
            países
          </Box>
          <Box w="8.5rem" fontWeight="600" fontSize="xl" textAlign="center">
            <Text color="orange.800" fontSize="5xl">
              {continent?.num_languages}
            </Text>
            línguas
          </Box>
          <Box w="8.5rem" fontWeight="600" fontSize="xl" textAlign="center">
            <Text color="orange.800" fontSize="5xl">
              {continent?.num_city_most_visited}
            </Text>
            cidades +100
          </Box>
        </Flex>
      </Flex>
      <Box mx="32">
        <Heading fontWeight="500" fontSize="4xl">
          Cidades +100
        </Heading>
        <SimpleGrid flex="1" gap="20" columns={4} align="flex-start" mt="3rem">
          {continent?.cities.map((cityElement) => {
            return (
              <Box
                h="280px"
                w="256px"
                bg="white"
                key={cityElement.country_code}
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
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const req = await (
    await fetch("http://localhost:3000/api/getCountries")
  ).json();

  const paths = req.map((continent: ContinentProps) => ({
    params: { continent: continent.name },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const req = await (
    await fetch("http://localhost:3000/api/getCountries")
  ).json();

  const continent = req.filter((continent: ContinentProps) =>
    continent.name === params?.continent ? continent : ""
  )[0];

  return {
    props: { continent },
    revalidate: 60 * 30,
  };
};
