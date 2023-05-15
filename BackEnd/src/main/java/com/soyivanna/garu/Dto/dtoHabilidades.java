package com.soyivanna.garu.Dto;

import javax.validation.constraints.NotBlank;


public class dtoHabilidades {
    @NotBlank
    private String nombreHab;
    @NotBlank
    private String porcentajeHab;
    
    // CONSTRUCTORES

    public dtoHabilidades() {
    }

    public dtoHabilidades(String nombreHab, String porcentajeHab) {
        this.nombreHab = nombreHab;
        this.porcentajeHab = porcentajeHab;
    }
    
    //// GETTERS Y SETTERS

    public String getNombreHab() {
        return nombreHab;
    }

    public void setNombreHab(String nombreHab) {
        this.nombreHab = nombreHab;
    }

    public String getPorcentajeHab() {
        return porcentajeHab;
    }

    public void setPorcentajeHab(String porcentajeHab) {
        this.porcentajeHab = porcentajeHab;
    }
    
    
}
