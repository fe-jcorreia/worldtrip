import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import ReactCountryFlag from "react-country-flag";
import { CountryBanner } from "../components/CountryBanner";

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
        <title>{continent?.title} | World Trip</title>
      </Head>
      <Header />
      <CountryBanner
        name={continent?.name}
        title={continent.title}
        url_nation_img={continent?.url_nation_img}
      />
      <Flex
        flexDir="column"
        mx="auto"
        maxW={["720px", "720px", "820px", "960px", "1080px", "1250px"]}
      >
        <Flex
          flexDir={["column", "column", "column", "row"]}
          my="4rem"
          align="center"
          justify="space-between"
        >
          <Text
            w={["80%", "80%", "80%", "45%"]}
            fontSize={["lg", "xl"]}
            textAlign="justify"
          >
            {continent?.description}
          </Text>
          <Flex
            w={["80%", "80%", "80%", "45%"]}
            mt={["2rem", "2rem", "2rem", "0"]}
            align="center"
            justify="space-between"
          >
            <Box
              w="33%"
              fontWeight="600"
              fontSize={["lg", "xl"]}
              textAlign="center"
            >
              <Text color="orange.800" fontSize={["3xl", "5xl"]}>
                {continent?.num_countries}
              </Text>
              países
            </Box>
            <Box
              w="33%"
              fontWeight="600"
              fontSize={["lg", "xl"]}
              textAlign="center"
            >
              <Text color="orange.800" fontSize={["3xl", "5xl"]}>
                {continent?.num_languages}
              </Text>
              línguas
            </Box>
            <Box
              w="33%"
              fontWeight="600"
              fontSize={["lg", "xl"]}
              textAlign="center"
            >
              <Text color="orange.800" fontSize={["3xl", "5xl"]}>
                {continent?.num_city_most_visited}
              </Text>
              cidades +100
            </Box>
          </Flex>
        </Flex>
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
            {continent?.cities.map((cityElement) => {
              return (
                <Box
                  h="280px"
                  w="256px"
                  mx="auto"
                  borderRadius="5px"
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
