import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

import Head from "next/head";
import { Categories } from "../components/Categories";
import { MainBanner } from "../components/MainBanner";
import { MainDivider } from "../components/MainDivider";
import { MainSwiper } from "../components/MainSwiper";

export default function Home() {
  return (
    <Flex direction="column" mb="12">
      <Head>
        <title>Home | World Trip</title>
      </Head>

      <Header />

      <MainBanner />

      <Categories />

      <MainDivider />

      <MainSwiper />
    </Flex>
  );
}
