export class Educacion {
  id?: number = 0;
  nombreEdu: string = '';
  anioInicioEdu: string = '';
  anioFinEdu: string = '';
  descripcionEdu: string = '';

  constructor(
    nombreEdu: string,
    anioInicioEdu: string,
    anioFinEdu: string,
    descripcionEdu: string
  ) {
    this.nombreEdu = nombreEdu;
    this.anioInicioEdu = anioInicioEdu;
    this.anioFinEdu = anioFinEdu;
    this.descripcionEdu = descripcionEdu;
  }
}
