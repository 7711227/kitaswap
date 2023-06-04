import { NextLinkFromReactRouter } from 'components/NextLink'
import { Button, Flex, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { LandingBodyWrapper } from 'views/PancakeSquad/styles'

import bunniesConfig from './config'
import { StyledBunnySectionContainer, StyledTextContainer } from './styles'
import BunniesImages from './BunniesImages'

const BunniesSection = () => {
  const { t } = useTranslation()
 
  const { bodyText, primaryButton, images } = bunniesConfig(t)

  return (
    <StyledBunnySectionContainer justifyContent={['flex-start', null, null, 'center']}>
      <LandingBodyWrapper
        pb={['64px', null, null, '0']}
        pt={['64px', null, null, '40px']}
        alignItems={['flex-end', null, 'center', null]}
        flexDirection={['column', null, null, 'row']}
      >
        <BunniesImages basePath={images.basePath} altText={images.alt} />
        <StyledTextContainer
          flexDirection="column"
          alignSelf={['flex-start', null, null, 'center']}
          width={['100%', null, null, '50%']}
        >
          {bodyText.map((text) => (
            <Text key={text} color="textSubtle" mb="20px">
              {text}
            </Text>
          ))}
          <Flex>
            <NextLinkFromReactRouter to={primaryButton.to}>
              <Button>
                <Text color="card" bold fontSize="16px">
                  {t(primaryButton.text)}
                </Text>
              </Button>
            </NextLinkFromReactRouter>
          </Flex>
        </StyledTextContainer>
      </LandingBodyWrapper>
    
    </StyledBunnySectionContainer>
  )
}

export default BunniesSection
