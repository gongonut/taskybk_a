
/*export interface OnStartEnd {
    sendMail2?: string []; // Lista de correos
    sendWPMessage2?: string []; // Lista de teléfonos destino
    geoLoc?: boolean;
}
*/

export interface Payload {
    id: string;
    name: string;
    rol: string[];
}

export enum DbState {
    insert = 'insert',
    update = 'update',
    select = 'select',
    delete = 'delete',
    none = 'none'
  }