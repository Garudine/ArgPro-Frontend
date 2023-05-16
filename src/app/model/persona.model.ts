export class datosBasicos {
  id?: number = 0;
  nombre: string = '';
  apellido: string = '';
  puesto: string = '';
  imgBanner: string = '';

  constructor(
    nombre: string,
    apellido: string,
    puesto: string,
    imgBanner: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.puesto = puesto;
    this.imgBanner = imgBanner;
  }
}
