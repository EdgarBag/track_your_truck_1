export interface ICategory {
    value: number,
    label: string;
    color: string;
    categoryName: string;
}

export enum ILanguage {
    russian = 'ru',
    english = 'en'
}
export interface ITruck {
    id: number,
    categoryId: number,
    drawer: { fullName: string, phone: number; };
    registration_number: string;
    coordinates: { latitude: number, longitude: number; };
}

export enum Categories {
    truck = "truck",
    passenger = "passenger",
    special = "special",
    all = 'all'
}

export enum TypeOfContact {
    whatsapp = 'whatsapp',
    call = 'call'
}