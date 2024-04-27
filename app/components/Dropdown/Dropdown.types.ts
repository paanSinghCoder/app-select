import { AppsDataItemType } from '../../type'

export type DropdownPropsType = {
  appsData: AppsDataItemType[]
  searchTerm: string
  addToCart: (item: AppsDataItemType) => void
  cart: AppsDataItemType[]
}
