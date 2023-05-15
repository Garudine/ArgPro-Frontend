export class RedesFooter {
  id?: number = 0;
  iconoRed: string = '';
  urlRed: string = '';
  textoAltRed: string = '';

  constructor(iconoRed: string, urlRed: string, textoAltRed: string) {
    this.iconoRed = iconoRed;
    this.urlRed = urlRed;
    this.textoAltRed = textoAltRed;
  }
}
