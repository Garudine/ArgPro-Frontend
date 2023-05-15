export class Proyectos {
  id?: number = 0;
  imagenPro: string = '';
  altImagenPro: string = '';
  tituloPro: string = '';
  fechaPro: string = '';
  descriPro: string = '';
  nombreBotPro: string = '';
  urlBotPro: string = '';

  constructor(
    imagenPro: string,
    altImagenPro: string,
    tituloPro: string,
    fechaPro: string,
    descriPro: string,
    nombreBotPro: string,
    urlBotPro: string
  ) {
    this.imagenPro = imagenPro;
    this.altImagenPro = altImagenPro;
    this.tituloPro = tituloPro;
    this.fechaPro = fechaPro;
    this.descriPro = descriPro;
    this.nombreBotPro = nombreBotPro;
    this.urlBotPro = urlBotPro;
  }
}
