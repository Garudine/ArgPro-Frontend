package com.soyivanna.garu.Repository;

import com.soyivanna.garu.Entity.Experiencia;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RExperiencia extends JpaRepository <Experiencia, Integer>{
    public Optional<Experiencia> findByLugarE (String LugarE);
    public boolean existsByLugarE(String lugarE);    
}
