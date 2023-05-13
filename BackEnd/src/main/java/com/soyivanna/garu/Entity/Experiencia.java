package com.soyivanna.garu.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String puestoE;
    private String lugarE;
    private String descripcionE;
    private String anioInicioE;
    private String anioFinE;
    
    /// CONSTRUCTORES 

    public Experiencia() {
    }

    public Experiencia(String puestoE, String lugarE, String descripcionE, String anioInicioE, String anioFinE) {
        this.puestoE = puestoE;
        this.lugarE = lugarE;
        this.descripcionE = descripcionE;
        this.anioInicioE = anioInicioE;
        this.anioFinE = anioFinE;
    }
    
    /// GETTERS Y SETTERS 

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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
