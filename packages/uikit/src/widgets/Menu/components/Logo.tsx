import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  isDark: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ isDark, href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <img style={{width:'50px ', height:'50px', borderRadius:'50%'}} src="images/home/cake/logo.png" alt="logo"/>
    
    </>
  );

  return (
    <Flex alignItems="center">
     <img style={{width:'50px ', height:'50px', borderRadius:'50%'}} src="images/home/cake/logo.png" alt="logo"/>
    
    <span style={{fontSize:'27px', marginLeft:'10px'}}>KITASWAP</span>
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
