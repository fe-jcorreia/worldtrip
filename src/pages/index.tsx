import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { Header } from "../components/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Head from "next/head";
import { Categories } from "../components/Categories";
import { MainBanner } from "../components/MainBanner";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home() {
  const continents = [
    "europe",
    "southAmerica",
    "northAmerica",
    "africa",
    "asia",
    "oceania",
  ];
  const headings = [
    "Europa",
    "América do Sul",
    "América do Norte",
    "África",
    "Ásia",
    "Oceania",
  ];
  const texts = [
    "O continente mais antigo",
    "Praias mais bonitas",
    "Aventuras de tirar o fôlego",
    "Natureza sem igual",
    "Culturas milenares",
    "Turistar a vontade",
  ];

  const slides = [];
  for (let i = 0; i < continents.length; i += 1) {
    slides.push(
      <SwiperSlide
        key={`slide-${continents[i]}`}
        tag="li"
        style={{ listStyle: "none" }}
      >
        <Link href={`/${continents[i]}`} align="center" justifyContent="center">
          <Image
            src={`/${continents[i]}.jpg`}
            alt={`${continents[i]}`}
            w="100%"
            h="100%"
            objectFit="cover"
            filter="brightness(0.5)"
          />
          <Flex
            position="absolute"
            direction="column"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Heading fontSize={["4xl", "5xl"]} fontWeight="600" color="gray.50">
              {`${headings[i]}`}
            </Heading>
            <Text fontSize={["xl", "2xl"]} fontWeight="600" color="gray.200">
              {`${texts[i]}`}
            </Text>
          </Flex>
        </Link>
      </SwiperSlide>
    );
  }

  return (
    <Flex direction="column" mb="12">
      <Head>
        <title>Home | World Trip</title>
      </Head>
      <Header />
      <Flex direction="column" justify="center">
        <MainBanner />

        <Categories />

        <Text
          mx="auto"
          justify="center"
          textAlign="center"
          pt="3rem"
          fontSize={["2xl", "4xl"]}
          fontWeight="500"
          borderTop="3px solid"
          borderColor="gray.600"
        >
          Vamos nessa?
        </Text>
        <Text
          mx="auto"
          px="6"
          mb="3rem"
          textAlign="center"
          justify="center"
          fontSize={["2xl", "4xl"]}
          fontWeight="500"
        >
          Então escolha seu continente
        </Text>
        <Flex
          maxWidth={["full", "full", "full", "full", "1250px"]}
          height={450}
          mx="auto"
        >
          <Swiper
            id="main"
            navigation
            pagination={{ clickable: true }}
            autoplay={{ disableOnInteraction: false, delay: 4000 }}
            tag="section"
            wrapperTag="ul"
            spaceBetween={0}
            slidesPerView={1}
          >
            {slides}
          </Swiper>
        </Flex>
      </Flex>
    </Flex>
  );
}
