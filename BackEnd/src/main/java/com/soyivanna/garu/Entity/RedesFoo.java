package com.soyivanna.garu.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RedesFoo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;
        private String textoAltRed;
        private String iconoRed;
        private String urlRed;
        
        
        /// CONSTRUCTORES 

    public RedesFoo() {
    }

    public RedesFoo(String textoAltRed, String iconoRed, String urlRed) {
        this.textoAltRed = textoAltRed;
        this.iconoRed = iconoRed;
        this.urlRed = urlRed;
    }
 
        //// GETTERS Y SETTERS

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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
