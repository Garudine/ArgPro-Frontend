package com.soyivanna.garu.Entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
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
    
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String apellido;
    
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String puesto;
    
    @Size(min = 1, max = 100, message = "No cumple con la longitud")
    private String imgBanner;
    
    @Size(min = 1, max = 100, message = "No cumple con la longitud")
    private String imgPerfil;
    
    
}
