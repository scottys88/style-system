import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Box } from "../components/Box";
import { Stack } from "../components/Stack";
import styles from "../styles/Home.module.css";
import styled, { DefaultTheme } from "styled-components";
import { Button } from "../components/Button";
import { SideBar } from "../components/SideBar";
import { Aside } from "../components/Aside";
import { Center } from "../components/Center";
import { Cluster } from "../components/Cluster";
import { Columns } from "../components/Columns";
import { Column } from "../components/Column";
import { Tiles } from "../components/Tiles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Cluster justify={"space-between"}>
          <span>Logo</span>
          <Cluster role="list" justify={"flex-end"}>
            <div role={"listitem"}>List item</div>
            <div role={"listitem"}>List item</div>
            <div role={"listitem"}>List item</div>
          </Cluster>
        </Cluster>
      </header>

      <SideBar>
        <Aside>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </Aside>
        <Center as={"main"}>
          <Columns spacing="medium">
            <Column width="1/2">
              <Stack spacing="small">
                <Box>Something</Box>
                <Box>Something</Box>
                <Box>Something</Box>
              </Stack>
            </Column>
            <Column width="content">
              <h1>Hello</h1>
            </Column>
          </Columns>
          <Tiles width="1/3" spacing="xsmall">
            <Box>Hello</Box>
            <Box>Hello</Box>
            <Box>Hello</Box>
          </Tiles>
          <Stack spacing={"small"} justify="center">
            <Button variation="primary">What up</Button>
            <Box>What up</Box>
            <Box>What up</Box>
            <Box>What up</Box>
          </Stack>
        </Center>
      </SideBar>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Home;
