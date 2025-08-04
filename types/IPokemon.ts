export interface IPokemon {
  name: string;
  url: string;
  sprites?: {
    front_default: string;
    back_default: string;
    front_shiny?: string;
    back_shiny?: string;
  }
}