package com.soyivanna.garu.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Habilidades {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreHab;
    private String porcentajeHab;
    
    /// CONSTRUCTORES
    public Habilidades() {
    }
    
    public Habilidades(String nombreHab, String porcentajeHab) {
        this.nombreHab = nombreHab;
        this.porcentajeHab = porcentajeHab;
    }
    
    /// GETTERS Y SETTERS

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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
