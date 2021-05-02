import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function MainBanner() {
  const isWideVersion = useBreakpointValue({ base: false, xl: true });

  return (
    <Flex
      bgImage="url('/background.svg')"
      bgSize="cover"
      w="100%"
      h="335px"
      px="9%"
      align="center"
      justify={isWideVersion ? "space-between" : "center"}
    >
      <Box direction="column" w={isWideVersion ? "40%" : ""}>
        <Text fontSize={["2xl", "4xl"]} color="white" mb="4">
          5 Continentes, infinitas possibilidades
        </Text>
        <Text fontSize={["lg", "xl"]} color="gray.400">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {isWideVersion ? (
        <Box>
          <Image
            boxSize="lg"
            src="/icons/airplane.svg"
            transform="rotate(3deg)"
            mt="24"
          />
        </Box>
      ) : (
        ""
      )}
    </Flex>
  );
}
