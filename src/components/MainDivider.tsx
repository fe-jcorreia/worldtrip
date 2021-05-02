import { Text } from "@chakra-ui/react";

export function MainDivider() {
  return (
    <>
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
    </>
  );
}
