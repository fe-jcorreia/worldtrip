import { Box, Flex, Icon, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FiChevronLeft } from "react-icons/fi";

export function Header() {
  const { asPath } = useRouter();

  return (
    <>
      {asPath !== "/" ? (
        <Flex
          h="100px"
          px="8%"
          align="center"
          justify="center"
          bg="gray.100"
          boxShadow="base"
          pos="relative"
        >
          <Link href="/" position="absolute" left="8%">
            <Icon as={FiChevronLeft} fontSize="2rem" />
          </Link>
          <Image src="/logo.svg" alt="logo" />
        </Flex>
      ) : (
        <Flex
          h="100px"
          px="6"
          align="center"
          justify="center"
          bg="gray.100"
          boxShadow="base"
        >
          <Image src="/logo.svg" alt='logo' />
        </Flex>
      )}
    </>
  );
}
