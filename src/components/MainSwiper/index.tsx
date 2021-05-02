import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function MainSwiper() {
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
    <Flex
      maxWidth={["full", "full", "full", "full", "1250px"]}
      height="450px"
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
  );
}
