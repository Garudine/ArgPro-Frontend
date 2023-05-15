package com.soyivanna.garu.Repository;

import com.soyivanna.garu.Entity.Habilidades;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RHabilidades extends JpaRepository<Habilidades, Integer> {
    public Optional<Habilidades> findByNombreHab(String nombreHab);
    public boolean existsByNombreHab(String nombreHab);
}
