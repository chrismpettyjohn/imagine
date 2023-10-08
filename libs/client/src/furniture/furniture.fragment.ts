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
  COMMON = 'COMMON',
  RARE = 'RARE',
  EPIC = 'EPIC',
  LEGENDARY = 'LEGENDARY',
}


export interface FurnitureFragment {
  id: number;
  publicName: string;
  itemName: string;
  valueType: FurnitureValueType;
}