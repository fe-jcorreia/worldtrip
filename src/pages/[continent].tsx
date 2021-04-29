import { GetStaticPaths, GetStaticProps } from "next";

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
  console.log(continent);
  return <h1>{continent.name}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const req = await (
    await fetch("http://localhost:3000/api/getCountries")
  ).json();

  const paths = req.map((continent: ContinentProps) => ({
    params: { continent: continent.name },
  }));

  console.log(paths);

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

  console.log(continent);
  console.log(params);

  return {
    props: { continent },
    revalidate: 60 * 30,
  };
};
