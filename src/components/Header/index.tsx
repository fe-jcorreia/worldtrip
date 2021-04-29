import { Box, Flex, Icon, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FiChevronLeft } from "react-icons/fi";

export function Header() {
  const { asPath } = useRouter();

  return (
    <>
      {asPath !== "/" ? (
        <Flex
          w="100vw"
          maxW="full"
          h="100px"
          px="32"
          align="center"
          justify="start"
          bg="gray.100"
          boxShadow="base"
        >
          <Link href="/">
            <Icon as={FiChevronLeft} fontSize="2rem" />
          </Link>
          <Image
            src="/logo.svg"
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
          />
        </Flex>
      ) : (
        <Flex
          w="100vw"
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
      )}
    </>
  );
}
