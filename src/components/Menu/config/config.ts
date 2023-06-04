import {
  MenuItemsType,

} from '@pancakeswap/uikit'

import { ContextApi } from '@pancakeswap/localization'

import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'


export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}



const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = () =>
  [
    
      
     
  
   
  ]

export default config
