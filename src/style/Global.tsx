import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}
   
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  #bgImg_swap{
    background:linear-gradient(#00000076, #00000076),url(images/swapbg.jpg);
    height:100vh;
    width:100%;
    background-repeat:no-repeat;
    background-size:cover;
    object-fit:cover
  }
  .Text-sc-c557047b-0.kiifTk {
    color: #7a65a4;
}
  label.CurrencyInputPanel__Container-sc-bfe4c0d-4.bcthqY {
    background: #16161d;
    border: none;
    box-shadow: none;
}
.CurrencyInputPanel__InputRow-sc-bfe4c0d-0.kgXJkk {
  background: #16161d;
}
.CurrencyInputPanel__LabelRow-sc-bfe4c0d-2.UiaZD {
  background: #16161d;
}
button.StyledButton-sc-7127e40f-0.jqKRnK {
  background: #7a65a4;
}
div#swap-currency-output {
  background: #16161d;
  padding: 5px;
  border-radius: 10px;
}
  div#swap-currency-input {
    background: #16161d;
    border-radius: 10px;
    padding: 5px;
}
  nav{background:#34253e !important}
  .Box-sc-992b7a-1.StyledCard__StyledCardInner-sc-110bbcc2-1.edrlKM.eWozjx {
    background: #221a2a;
}
  button{
    background:#7a65a4;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  } 

  .tinHome{
    border-radius:50%;
  }
  .tinBtn{
    background:#7a65a4;
    color:#fff;
    font-weight:bold;
    border:none ;
    outline:none;
  }
  .h_home{
    background-image: linear-gradient(#00000079, #00000079), url('https://i.ibb.co/DW6hSwM/alice-in-wonderland-fungal-forest-khtirorjt8wfoarm.jpg" alt="alice-in-wonderland-fungal-forest-khtirorjt8wfoarm');
    backround-repeat:no-repeat;
    height:100%;
    width:100%;
  }
  .tcard{
   
    min-width:270px;
    height:232px;
    box-shadow:0px 0px 4px #dfca72;
    border-radius:15px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:8px;
   


  }
  .tcard .subtcard h1,h2,h3,h4,h5,h6{
    color:#fff;
    font-weight:bold
    ;font-size:28px;
    text-align:center;

  }
.tcard .subtcard span{text-align:center; width:100%;}




  .tcard .subtcard img{
    width:100px;
    height:100px;
    border-radius:50%;
    margin-bottom:15px;
    animation-name: borderanim;
    animation-duration: 4s;
    animation-iteration-count:infinite;
  }
  @keyframes borderanim{
    0%{
      
      border:solid 5px #dfca72;
    }
    50%{
     
      border:solid 5px red;
    }
    75%{
     
      border:solid 5px orange;
    }
    
    100%{
     
      border:solid 5px green;
    }
  }

  #t4{
   background:#14ff14a8;
  }
  #t1{
    background:#ccb13e;
  }
  #t2{
         background:#0000ff78;
  }
  #t3{
    background:#ff000c59;
  }
  @keyframes t4{
    0%{
      background:green;
    }
    
    50%{
      background:#7a65a4;
    }
    75%{
      background:darkblue;
    }
    100%{
      background:chocolate;
    }
  }
  #metricSec{
    background:#111 ;
  }
  primaryButton{
    background:#7a65a4
  }
  .thirdSec{
    display:flex;
    justify-content:space-between;

  }
  .left_third_sec h1{
    font-size:36px;
    font-weight:bold;
  }
  .right_third_sec{
    position:relative;
    display:flex;
    justify-content:center;
    width:50%;
    align-items:center;
  }
.tintLogoright{
  width:160px ;
  border-radius:50%;
  height:160px;
  transform:translateX(-80px);
  animation-name:llogo;
  animation-duration:2.5s;
  animation-iteration-count:infinite;
}
.tintLogoLeft{
  width:200px;
  height:200px;
  border-radius:50%;
 right:5%;
  position:absolute;
  animation-name:rlogo;
  animation-duration:3s;
  animation-iteration-count:infinite;

}

@keyframes llogo{
  0%{
    
    transform:translateY(0px);
  }  25%{
    
    transform:translateY(8px);
  }
  50%{
    transform:translateY(-18px);
  }
  75%{
    transform:translateY(0px);
  }
  100%{
    transform:translateY(-18px);
  }
}


@keyframes rlogo{
  0%{
    
    transform:translateY(15px);
  }
  50%{
    transform:translateY(0px);
  }
  75%{
    transform:translateY(18px);
  }
  100%{
    transform:translateY(0px);
  }
}
.right_third_sec1{
  width:50%;
}
left_third_sec{
  width:50%;
}

.tiny{
  width:350px;
  height:360px;
  border-radius:20px
}
#home-3{
  background:#111 !important;
}
.Dropdown__Container-sc-f022b32e-1 {
  display: none !important;
}
.Text-sc-c557047b-0.Link__StyledLink-sc-51758661-0s {
  color: #7a65a4 !important;
  font-size: 20px !important;
}
.Spinner__Container-sc-c8ab67c1-0 {
  display: none !important;
}






  @media screen and (max-width:768px){
    .right_third_sec1{
      width:100%;
    }
    right_third_sec{width:100%;}
    .thirdSec{
      display:flex;
      justify-content:space-between;
      flex-direction:column;
  
    }

    .left_third_sec{margin-top:30px;}
    .right_third_sec{margin-top:60px;}
  }
`

export default GlobalStyle
