import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { BookCard } from "../../components/bookCard";
import { TopSection } from "./topSection";
import { BookingSteps } from "./bookingStep";
import { Marginer } from "../../components/marginer";
import { AboutUs } from "./aboutUs";
import { TopCars } from "./topCars";
import { Footer } from "../../components/footer";
const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
`}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="4em" />
      <AboutUs />
      <Marginer direction="vertical" margin="4em" />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
