
export interface IFilmsCategoryItem {
   show: IShow;
   
}

interface IShow {
   id: string;
   name: string;
   genres: string[];
   network: INetwork | null;
   image: IImage;
   summary: string | null;
   language: string | null;
   rating: IRating | null;
   premiered: string | null;
}
interface IImage {
   original: string;
   medium: string;
}

interface IRating {

   average: string | null;

}
interface INetwork {

   country: ICoumtry;

}

interface ICoumtry {

   timezone: string | null;

}