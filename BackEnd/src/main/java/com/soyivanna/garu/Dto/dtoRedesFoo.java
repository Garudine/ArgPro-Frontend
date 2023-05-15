package com.soyivanna.garu.Dto;

import javax.validation.constraints.NotBlank;


public class dtoRedesFoo {
    
    @NotBlank
    private String textoAltRed;
    @NotBlank
    private String iconoRed;
    @NotBlank
    private String urlRed;

    
    /// CONSTRUCTORES

    public dtoRedesFoo() {
    }

    public dtoRedesFoo(String textoAltRed, String iconoRed, String urlRed) {
        this.textoAltRed = textoAltRed;
        this.iconoRed = iconoRed;
        this.urlRed = urlRed;
    }
    
    /// GETTERS Y SETTERS

    public String getTextoAltRed() {
        return textoAltRed;
    }

    public void setTextoAltRed(String textoAltRed) {
        this.textoAltRed = textoAltRed;
    }

    public String getIconoRed() {
        return iconoRed;
    }

    public void setIconoRed(String iconoRed) {
        this.iconoRed = iconoRed;
    }

    public String getUrlRed() {
        return urlRed;
    }

    public void setUrlRed(String urlRed) {
        this.urlRed = urlRed;
    }


    
}
