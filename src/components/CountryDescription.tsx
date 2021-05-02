import { Box, Flex, Text } from "@chakra-ui/react";

interface CountryDescriptionProps {
  description: string;
  num_countries: number;
  num_languages: number;
  num_city_most_visited: number;
}

export function CountryDescription({
  description,
  num_countries,
  num_languages,
  num_city_most_visited,
}: CountryDescriptionProps) {
  return (
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
        {description}
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
            {num_countries}
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
            {num_languages}
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
            {num_city_most_visited}
          </Text>
          cidades +100
        </Box>
      </Flex>
    </Flex>
  );
}
