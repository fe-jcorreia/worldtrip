import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <Image src="/europe.jpg" alt="europe" listStyleImage="none"></Image>
      </SwiperSlide>
    );
  }

  return (
    <Flex direction="column" mb="20">
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
          pt="20"
          fontSize="4xl"
          fontWeight="500"
          borderTop="3px solid"
          borderColor="gray.600"
        >
          Vamos nessa?
        </Text>
        <Text mx="auto" justify="center" fontSize="4xl" fontWeight="500">
          Então escolha seu continente
        </Text>
        <Swiper
          navigation
          pagination
          tag="section"
          wrapperTag="ul"
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides}
        </Swiper>
      </Flex>
    </Flex>
  );
}
