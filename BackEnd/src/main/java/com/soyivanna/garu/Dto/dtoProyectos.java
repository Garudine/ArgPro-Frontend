package com.soyivanna.garu.Dto;

import javax.validation.constraints.NotBlank;

public class dtoProyectos {
    @NotBlank
    private String tituloPro;
    @NotBlank
    private String imagenPro;
    @NotBlank
    private String altImagenPro;
    @NotBlank
    private String descriPro;
    @NotBlank
    private String fechaPro;
    @NotBlank
    private String urlBotPro;
    @NotBlank
    private String nombreBotPro;

    /// CONSTRUCTORES
    public dtoProyectos() {
    }

    public dtoProyectos(String tituloPro, String imagenPro, String altImagenPro, String descriPro, String fechaPro, String urlBotPro, String nombreBotPro) {
        this.tituloPro = tituloPro;
        this.imagenPro = imagenPro;
        this.altImagenPro = altImagenPro;
        this.descriPro = descriPro;
        this.fechaPro = fechaPro;
        this.urlBotPro = urlBotPro;
        this.nombreBotPro = nombreBotPro;
    }

    /// GETTERS Y SETTERS

    public String getTituloPro() {
        return tituloPro;
    }

    public void setTituloPro(String tituloPro) {
        this.tituloPro = tituloPro;
    }

    public String getImagenPro() {
        return imagenPro;
    }

    public void setImagenPro(String imagenPro) {
        this.imagenPro = imagenPro;
    }

    public String getAltImagenPro() {
        return altImagenPro;
    }

    public void setAltImagenPro(String altImagenPro) {
        this.altImagenPro = altImagenPro;
    }

    public String getDescriPro() {
        return descriPro;
    }

    public void setDescriPro(String descriPro) {
        this.descriPro = descriPro;
    }

    public String getFechaPro() {
        return fechaPro;
    }

    public void setFechaPro(String fechaPro) {
        this.fechaPro = fechaPro;
    }

    public String getUrlBotPro() {
        return urlBotPro;
    }

    public void setUrlBotPro(String urlBotPro) {
        this.urlBotPro = urlBotPro;
    }

    public String getNombreBotPro() {
        return nombreBotPro;
    }

    public void setNombreBotPro(String nombreBotPro) {
        this.nombreBotPro = nombreBotPro;
    }



}
