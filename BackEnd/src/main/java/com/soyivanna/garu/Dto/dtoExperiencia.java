package com.soyivanna.garu.Dto;

import javax.validation.constraints.NotBlank;

public class dtoExperiencia {
    @NotBlank
    private String puestoE;
    @NotBlank
    private String lugarE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String anioInicioE;
    @NotBlank
    private String anioFinE;
    
    //// CONSTRUCTORES 

    public dtoExperiencia() {
    }

    public dtoExperiencia(String puestoE, String lugarE, String descripcionE, String anioInicioE, String anioFinE) {
        this.puestoE = puestoE;
        this.lugarE = lugarE;
        this.descripcionE = descripcionE;
        this.anioInicioE = anioInicioE;
        this.anioFinE = anioFinE;
    }
    
    //// GETTERS Y SETTERS

    public String getPuestoE() {
        return puestoE;
    }

    public void setPuestoE(String puestoE) {
        this.puestoE = puestoE;
    }

    public String getLugarE() {
        return lugarE;
    }

    public void setLugarE(String lugarE) {
        this.lugarE = lugarE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }

    public String getAnioInicioE() {
        return anioInicioE;
    }

    public void setAnioInicioE(String anioInicioE) {
        this.anioInicioE = anioInicioE;
    }

    public String getAnioFinE() {
        return anioFinE;
    }

    public void setAnioFinE(String anioFinE) {
        this.anioFinE = anioFinE;
    }
    
    
}
