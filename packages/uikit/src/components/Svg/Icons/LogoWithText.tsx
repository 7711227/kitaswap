import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
   
    <>

    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}} >
      <img style={{width:'60px', height:'60px', borderRadius:'50%'}} src="images/home/cake/logo.png" alt="logo"/>
      <h4 style={{marginLeft:'15px', color:'#7a65a4'}}>KITASWAP</h4>
    </div>
    
    </>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
