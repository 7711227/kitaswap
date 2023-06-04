import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('White Paper'),
    items: [
      
    
      
     
      {
        label: t('White Papper'),
        href: 'white.pdf',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: '/',
      },
      {
        label: t('Troubleshooting'),
        href: '/',
      },
      {
        label: t('Guides'),
        href: '/',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: '/',
      },
      {
        label: t('Documentation'),
        href: '/',
      },
      {
        label: t('Bug Bounty'),
        href: '/',
      },
      {
        label: t('Audits'),
        href: '/',
      },
      {
        label: t('Careers'),
        href: '/',
      },
    ],
  },
]
