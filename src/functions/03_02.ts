type StreetType = {
  title: string
}

type AddressType = {
  number?: number
  street: StreetType
}

type HouseType = {
  buildedAt: number
  repaired: boolean
  address: AddressType
}

type governmentBuildingType = {
  type: "HOSPITAL" | "FIRE-STATION"
  budget: number
  staffCount: number
  address: AddressType
}

export type cityType = {
  title: string
  houses: Array<HouseType>
  governmentBuildings: Array<governmentBuildingType>
  citizensNumber: number
}

export const addMoneyToBudget = (building: governmentBuildingType, money: number) => {
  building.budget += money;
}

export const repairHouse = (house: HouseType) => {
  house.repaired = true;
}

export const toFireStaff = (building: governmentBuildingType, stuffToFire: number) => {
  building.staffCount -= stuffToFire;
}

export function toHireStaff(building: governmentBuildingType, staffToHire: number) {
  building.staffCount += staffToHire;
}