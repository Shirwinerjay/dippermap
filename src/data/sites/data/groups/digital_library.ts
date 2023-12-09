import { IGroup } from '../../../types'

export const DigitalLibrary: IGroup = {
  icon: 'icon-ditupeise',
  name: '数字馆藏',
  en_name: 'Digital Library',
  order: 3,
  children: [
    {
      icon: 'https://www.alexandria.ucsb.edu/assets/favicon-b4185c7dd08c0b4f2142c58bbcca322b3a01f50adc3413438b98be2b664bb4b6.ico',
      name: 'Alexandria Global Digital LIbrary at UC Santa Barbara',
      en_name: 'Alexandria Global Digital LIbrary at UC Santa Barbara',
      description: 'UCSB图书馆，包含地理空间信息分享',
      en_description:
        'Providing access to unique digital research materials from UC Santa Barbara Library',
      site_url: 'http://www.alexandria.ucsb.edu/ ',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    }
  ]
}
