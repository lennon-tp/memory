export interface Card {
  id: number;          // identifiant unique de la carte dans la grille
  pairId: number;      // identifiant de la paire (deux cartes partagent le même)
  image: string;       // nom du fichier image (ex: "cat.png")
  isFlipped: boolean;  // la carte est-elle retournée ?
  isMatched: boolean;  // la paire a-t-elle été trouvée ?
}