/**
 * Cette une classe qui sert de modèle pour les articles
 */
export class Article {
    image: string;
    constructor(public id: number,
                public nom: string,
                public desc: string,
                public categorie: number,
                public prix: number,
                public louma: number,
                public created_by: number,
                public created_at: string,
                public lastmodified_at: string) {}
}
