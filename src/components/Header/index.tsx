import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW="full"
      h="100px"
      px="6"
      align="center"
      justify="center"
      bg="gray.100"
      boxShadow="base"
    >
      <Image src="/logo.svg" />
    </Flex>
  );
}
