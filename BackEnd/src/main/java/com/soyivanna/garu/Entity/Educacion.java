package com.soyivanna.garu.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Educacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreEdu;
    private String anioInicioEdu;
    private String anioFinEdu;
    private String descripcionEdu;

    
    //// C0NSTRUCTOR
    public Educacion() {
    }

    public Educacion(String nombreEdu, String anioInicioEdu, String anioFinEdu, String descripcionEdu) {
        this.nombreEdu = nombreEdu;
        this.anioInicioEdu = anioInicioEdu;
        this.anioFinEdu = anioFinEdu;
        this.descripcionEdu = descripcionEdu;
    }
    
    /// GETTERS AND SETTERS 

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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
