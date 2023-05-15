export class Experiencia {
  id?: number = 0;
  puestoE: string = '';
  lugarE: string = '';
  descripcionE: string = '';
  anioInicioE: string = '';
  anioFinE: string = '';

  constructor(
    puestoE: string,
    lugarE: string,
    descripcionE: string,
    anioInicioE: string,
    anioFinE: string
  ) {
    this.puestoE = puestoE;
    this.lugarE = lugarE;
    this.descripcionE = descripcionE;
    this.anioInicioE = anioInicioE;
    this.anioFinE = anioFinE;
  }
}
