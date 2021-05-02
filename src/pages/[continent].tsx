import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { CountryBanner } from "../components/CountryBanner";
import { CitiesGrid } from "../components/CitiesGrid";
import { CountryDescription } from "../components/CountryDescription";

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
        title={continent?.title}
        url_nation_img={continent?.url_nation_img}
      />

      <Flex
        flexDir="column"
        mx="auto"
        maxW={["720px", "720px", "820px", "960px", "1080px", "1250px"]}
      >
        <CountryDescription
          description={continent?.description}
          num_countries={continent?.num_countries}
          num_languages={continent?.num_languages}
          num_city_most_visited={continent?.num_city_most_visited}
        />

        <CitiesGrid cities={continent?.cities} />
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
