package com.soyivanna.garu.Controller;

import com.soyivanna.garu.Dto.dtoRedesFoo;
import com.soyivanna.garu.Entity.RedesFoo;
import com.soyivanna.garu.Security.Controller.Mensaje;
import com.soyivanna.garu.Service.SRedesFoo;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/redesfoo")
@CrossOrigin(origins = "http://localhost:4200")
public class CRedesFoo {

    @Autowired
    SRedesFoo sRedesFoo;

    @GetMapping("/lista")
    public ResponseEntity<List<RedesFoo>> list() {
        List<RedesFoo> list = sRedesFoo.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<RedesFoo> getById(@PathVariable("id") int id) {
        if (!sRedesFoo.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.BAD_REQUEST);
        }

        RedesFoo redesFoo = sRedesFoo.getOne(id).get();
        return new ResponseEntity(redesFoo, HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sRedesFoo.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        sRedesFoo.delete(id);
        return new ResponseEntity(new Mensaje("Red eliminada"), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoRedesFoo dtoredesFoo) {
        if (StringUtils.isBlank(dtoredesFoo.getTextoAltRed())) {
            return new ResponseEntity(new Mensaje("El texto alternativo es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sRedesFoo.existsByTextoAltRed(dtoredesFoo.getTextoAltRed())) {
            return new ResponseEntity(new Mensaje("Esa red ya existe"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtoredesFoo.getIconoRed())) {
            return new ResponseEntity(new Mensaje("El icono es obligatorio"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtoredesFoo.getUrlRed())) {
            return new ResponseEntity(new Mensaje("La URL es obligatoria"), HttpStatus.BAD_REQUEST);
        }

        RedesFoo redesFoo = new RedesFoo(
                dtoredesFoo.getTextoAltRed(), dtoredesFoo.getIconoRed(), dtoredesFoo.getUrlRed()
        );
        sRedesFoo.save(redesFoo);
        return new ResponseEntity(new Mensaje("Red creada"), HttpStatus.OK);

    }


    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoRedesFoo dtoredesFoo) {
        if (!sRedesFoo.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if (sRedesFoo.existsByTextoAltRed(dtoredesFoo.getTextoAltRed()) && sRedesFoo.getByTextoAltRed(dtoredesFoo.getTextoAltRed()).get().getId() != id) {
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtoredesFoo.getTextoAltRed())) {
            return new ResponseEntity(new Mensaje("El campo texto alt inicio no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoredesFoo.getIconoRed())) {
            return new ResponseEntity(new Mensaje("El campo icono no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoredesFoo.getUrlRed())) {
            return new ResponseEntity(new Mensaje("El campo url inicio no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }

        RedesFoo redesFoo = sRedesFoo.getOne(id).get();

        redesFoo.setTextoAltRed(dtoredesFoo.getTextoAltRed());
        redesFoo.setIconoRed(dtoredesFoo.getIconoRed());
        redesFoo.setUrlRed(dtoredesFoo.getUrlRed());

        sRedesFoo.save(redesFoo);

        return new ResponseEntity(new Mensaje("Red social actualizada"), HttpStatus.OK);
    }
}
