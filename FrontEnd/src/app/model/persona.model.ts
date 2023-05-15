export class datosBasicos {
  id?: number = 0;
  nombre: string = '';
  apellido: string = '';
  imgBanner: string = '';
  puesto: string = '';
  imgPerfil: string = '';

  constructor(
    nombre: string,
    apellido: string,
    imgBanner: string,
    puesto: string,
    imgPerfil: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.imgBanner = imgBanner;
    this.puesto = puesto;
    this.imgPerfil = imgPerfil;
  }
}
