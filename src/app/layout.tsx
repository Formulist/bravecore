"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import styled from "styled-components";
import StyledComponentsRegistry from "./lib/registry";
import { GlobalStyles } from "./styles/GlobalStyles";
import { sizes } from "./styles/sizes";
import { colors } from "./styles/colors";

const font = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html className={font.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <StyledLayout>
            <Main>{props.children}</Main>
          </StyledLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.div`
  flex: 1 0 auto;
  max-height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${colors.background.primary};
`;
