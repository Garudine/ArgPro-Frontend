package com.soyivanna.garu.Service;

import com.soyivanna.garu.Entity.RedesFoo;
import com.soyivanna.garu.Repository.RRedesFoo;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SRedesFoo {
    @Autowired
    RRedesFoo rRedesFoo;
    
    public List<RedesFoo> list() {
        return rRedesFoo.findAll();
    }
    
    public Optional<RedesFoo> getOne(int id) {
        return rRedesFoo.findById(id);
    }
    
    public Optional<RedesFoo> getByTextoAltRed(String textoAltRed) {
        return rRedesFoo.findByTextoAltRed(textoAltRed);
    }
    
    public void save(RedesFoo redesFoo) {
        rRedesFoo.save(redesFoo);
    }
    
    public void delete(int id) {
        rRedesFoo.deleteById(id);
    } 
    
    public boolean existsById(int id) {
        return rRedesFoo.existsById(id);
    }
    
    public boolean existsByTextoAltRed(String textoAltRed) {
        return rRedesFoo.existsByTextoAltRed(textoAltRed);
    }
}
