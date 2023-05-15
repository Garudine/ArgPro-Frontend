package com.soyivanna.garu.Repository;

import com.soyivanna.garu.Entity.Proyectos;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RProyectos extends JpaRepository<Proyectos, Integer>{
    public Optional<Proyectos> findByTituloPro(String tituloPro);
    public boolean existsByTituloPro(String tituloPro);    
}
