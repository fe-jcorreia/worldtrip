import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface CountryBannerProps {
  name: string;
  title: string;
  url_nation_img: string;
}

export function CountryBanner({
  name,
  title,
  url_nation_img,
}: CountryBannerProps) {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex h={["200px", "350px", "500px"]} pos="relative">
      <Image
        src={url_nation_img}
        alt={`${name}`}
        objectFit="cover"
        filter="brightness(0.5)"
        w="100%"
      />
      {isWideVersion ? (
        <Text
          as="header"
          position="absolute"
          left="8%"
          bottom="12%"
          fontSize={["2xl", "3xl", "5xl"]}
          fontWeight="600"
          color="gray.50"
        >
          {title}
        </Text>
      ) : (
        <Text
          as="header"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize={["2xl", "3xl", "5xl"]}
          fontWeight="600"
          color="gray.50"
          textAlign="center"
        >
          {title}
        </Text>
      )}
    </Flex>
  );
}
