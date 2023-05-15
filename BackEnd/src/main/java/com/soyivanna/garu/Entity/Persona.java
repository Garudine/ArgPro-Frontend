package com.soyivanna.garu.Entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Getter @Setter
@Entity
public class Persona implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @javax.persistence.Id
    private Long id;
    private String nombre;
    private String apellido;
    private String puesto;
    private String imgBanner;
    private String imgPerfil;
    
    
}
