package com.soyivanna.garu.Repository;

import com.soyivanna.garu.Entity.RedesFoo;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RRedesFoo extends JpaRepository<RedesFoo, Integer>{
    public Optional<RedesFoo> findByTextoAltRed(String textoAltRed);
    public boolean existsByTextoAltRed(String textoAltRed);    
}
