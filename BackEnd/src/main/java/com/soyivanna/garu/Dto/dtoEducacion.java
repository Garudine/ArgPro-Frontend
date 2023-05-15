package com.soyivanna.garu.Dto;

import javax.validation.constraints.NotBlank;

public class dtoEducacion {
    @NotBlank
    private String nombreEdu;
    @NotBlank
    private String anioInicioEdu;
    @NotBlank
    private String anioFinEdu;
    @NotBlank
    private String descripcionEdu;

    
    /////// CONSTRUCTORES
    public dtoEducacion() {
    }

    public dtoEducacion(String nombreEdu, String anioInicioEdu, String anioFinEdu, String descripcionEdu) {
        this.nombreEdu = nombreEdu;
        this.anioInicioEdu = anioInicioEdu;
        this.anioFinEdu = anioFinEdu;
        this.descripcionEdu = descripcionEdu;
    }
    
    ////// GETTES AND SETTERS
    public String getNombreEdu() {
        return nombreEdu;
    }

    public void setNombreEdu(String nombreEdu) {
        this.nombreEdu = nombreEdu;
    }

    public String getAnioInicioEdu() {
        return anioInicioEdu;
    }

    public void setAnioInicioEdu(String anioInicioEdu) {
        this.anioInicioEdu = anioInicioEdu;
    }

    public String getAnioFinEdu() {
        return anioFinEdu;
    }

    public void setAnioFinEdu(String anioFinEdu) {
        this.anioFinEdu = anioFinEdu;
    }

    public String getDescripcionEdu() {
        return descripcionEdu;
    }

    public void setDescripcionEdu(String descripcionEdu) {
        this.descripcionEdu = descripcionEdu;
    }
    
    
    
}
