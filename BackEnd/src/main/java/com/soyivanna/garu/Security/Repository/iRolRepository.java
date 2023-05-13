package com.soyivanna.garu.Security.Repository;

import com.soyivanna.garu.Security.Entity.Rol;
import com.soyivanna.garu.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}