import { ItemType } from '../enum';

export interface IFolder {
    id: number;
    libelle: string;
    files: Array<any>;
    type: ItemType;
}

export interface IFile {
    id: number;
    libelle: string;
    content: any;
    type: ItemType;
}
