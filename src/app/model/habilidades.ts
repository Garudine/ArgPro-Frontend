export class Habilidades {
  id?: number = 0;
  nombreHab: string = '';
  porcentajeHab: string = '';

  constructor(nombreHab: string, porcentajeHab: string) {
    this.nombreHab = nombreHab;
    this.porcentajeHab = porcentajeHab;
  }
}
