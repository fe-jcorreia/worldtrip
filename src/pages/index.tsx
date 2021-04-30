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
            <Heading fontSize="5xl" fontWeight="600" color="gray.50">
              {`${headings[i]}`}
            </Heading>
            <Text fontSize="2xl" fontWeight="600" color="gray.200">
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
        <Flex
          bgImage="url('/background.svg')"
          bgSize="cover"
          w="100%"
          h="335px"
          px="32"
          align="center"
          justify="space-between"
        >
          <Box direction="column">
            <Text fontSize="4xl" color="white" mb="4">
              5 Continentes, <br /> infinitas possibilidades
            </Text>
            <Text fontSize="xl" color="gray.400">
              Chegou a hora de tirar do papel a viagem que você <br /> sempre
              sonhou.
            </Text>
          </Box>
          <Box>
            <Image
              boxSize="lg"
              src="/icons/airplane.svg"
              transform="rotate(3deg)"
              mt="24"
            />
          </Box>
        </Flex>
        <HStack
          px="32"
          py="28"
          alignItems="center"
          justify="space-between"
          color="gray.600"
          fontWeight="600"
          fontSize="2xl"
        >
          <Box w="48">
            <Image mx="auto" src="/icons/cocktail.svg" />
            <Text mt="6" textAlign="center">
              vida noturna
            </Text>
          </Box>
          <Box w="48">
            <Image mx="auto" src="/icons/surf.svg" />
            <Text mt="6" textAlign="center">
              praia
            </Text>
          </Box>
          <Box w="48">
            <Image mx="auto" src="/icons/building.svg" />
            <Text mt="6" textAlign="center">
              moderno
            </Text>
          </Box>
          <Box w="48">
            <Image mx="auto" src="/icons/museum.svg" />
            <Text mt="6" textAlign="center">
              clássico
            </Text>
          </Box>
          <Box w="48">
            <Image mx="auto" src="/icons/earth.svg" />
            <Text mt="6" textAlign="center">
              e mais...
            </Text>
          </Box>
        </HStack>
        <Text
          mx="auto"
          justify="center"
          pt="3rem"
          fontSize="4xl"
          fontWeight="500"
          borderTop="3px solid"
          borderColor="gray.600"
        >
          Vamos nessa?
        </Text>
        <Text
          mx="auto"
          mb="3rem"
          justify="center"
          fontSize="4xl"
          fontWeight="500"
        >
          Então escolha seu continente
        </Text>
        <Flex
          maxWidth={1240}
          height={450}
          mb="20"
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
