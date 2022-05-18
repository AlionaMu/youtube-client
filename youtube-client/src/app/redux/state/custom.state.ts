import { CardState } from "src/app/core/models/card-state.model";

export interface CustomState {
  customItems: CardState[];
}

export const initialCustomState: CustomState = {
  customItems: []
};
