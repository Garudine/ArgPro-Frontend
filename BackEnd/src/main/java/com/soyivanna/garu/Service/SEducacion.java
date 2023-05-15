package com.soyivanna.garu.Service;

import com.soyivanna.garu.Entity.Educacion;
import com.soyivanna.garu.Repository.REducacion;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SEducacion {
    @Autowired
    REducacion rEducacion;
    
    public List<Educacion> list() {
        return rEducacion.findAll();
    }
    
    public Optional<Educacion> getOne(int id) {
        return rEducacion.findById(id);
    }
    
    public Optional<Educacion> getByNombreEdu(String nombreEdu) {
        return rEducacion.findByNombreEdu(nombreEdu);
    }
    
    public void save(Educacion educacion) {
        rEducacion.save(educacion);
    }
    
    public void delete(int id) {
        rEducacion.deleteById(id);
    } 
    
    public boolean existsById(int id) {
        return rEducacion.existsById(id);
    }
    
    public boolean existsByNombreEdu(String nombreEdu) {
        return rEducacion.existsByNombreEdu(nombreEdu);
    }
}
