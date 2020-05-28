import styled from "@emotion/styled";
import { DefaultMDXWrapper } from "./index";
import Card from "../components/base/Card";
import FooterCTA from "../components/base/FooterCTA";
import { breakUp } from "../components/breakpoints";
import developerCommunityIcon from "../assets/images/content-images/content-icons/developer-community.svg";

const StyledCTA = styled.a`
  display: block;
  text-decoration: none;
  padding: 0 20px 20px;

  @media (${breakUp("md")}) {
    padding: 20px 40px 40px;
    width: 70%;
  }
`;

export default (frontMatter) => {
  return ({ children: content }: { children: any }) => {
    return (
      <>
        <DefaultMDXWrapper frontMatter={frontMatter}>
          {content}
        </DefaultMDXWrapper>

        <StyledCTA href="https://discuss.dwolla.com/" target="_blank">
          <Card
            icon={developerCommunityIcon}
            topic="Still haven’t found what you are looking for?"
            description="Ask the community."
            link
            centerAlign
          />
        </StyledCTA>

        <FooterCTA
          topic="Test in the Sandbox for free today."
          description="Use sandbox environment to test API requests."
          button={{
            text: "Get API Keys",
            link: {
              href: "https://accounts-sandbox.dwolla.com/sign-up",
              external: true,
            },
          }}
        />
      </>
    );
  };
};
