package com.soyivanna.garu.Service;

import com.soyivanna.garu.Entity.Experiencia;
import com.soyivanna.garu.Repository.RExperiencia;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SExperiencia {
    @Autowired
    RExperiencia rExperiencia;
    
    public List<Experiencia> list() {
        return rExperiencia.findAll();
    }
    
    public Optional<Experiencia> getOne(int id){
        return rExperiencia.findById(id);
    }
    
    public Optional<Experiencia> getByLugarE(String lugarE) {
        return rExperiencia.findByLugarE(lugarE);
    }
    
    public void save(Experiencia expe) {
        rExperiencia.save(expe);
    }
    
    public void delete(int id) {
        rExperiencia.deleteById(id);
    } 
    
    public boolean existById(int id) {
        return rExperiencia.existsById(id);
    }
    
    public boolean existByLugarE (String lugarE) {
        return rExperiencia.existsByLugarE(lugarE);
    }
}
