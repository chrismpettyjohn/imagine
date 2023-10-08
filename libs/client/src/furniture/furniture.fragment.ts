import gql from 'graphql-tag';

export const FURNITURE_FRAGMENT: any = gql`
  fragment FurnitureFragment on FurnitureModel {
    id
    publicName
    itemName
    valueType
  }
`

export enum FurnitureValueType {
  COMMON = 1,
  RARE = 2,
  EPIC = 3,
  LEGENDARY = 4,
}


export interface FurnitureFragment {
  id: number;
  publicName: string;
  itemName: string;
  valueType: FurnitureValueType;
}