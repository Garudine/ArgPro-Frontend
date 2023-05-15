package com.soyivanna.garu.Controller;

import com.soyivanna.garu.Dto.dtoHabilidades;
import com.soyivanna.garu.Entity.Habilidades;
import com.soyivanna.garu.Security.Controller.Mensaje;
import com.soyivanna.garu.Service.SHabilidades;
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
@RequestMapping("/habilidades")
@CrossOrigin(origins = "http://localhost:4200")
public class CHabilidades {
    @Autowired
    SHabilidades sHabilidades;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Habilidades>> list() {
        List<Habilidades> list = sHabilidades.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Habilidades> getById(@PathVariable("id") int id) {
        if (!sHabilidades.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.BAD_REQUEST);
        }

        Habilidades habilidades = sHabilidades.getOne(id).get();
        return new ResponseEntity(habilidades, HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sHabilidades.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        sHabilidades.delete(id);
        return new ResponseEntity(new Mensaje("Habilidad eliminada"), HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoHabilidades dtohabilidades) {
        if (StringUtils.isBlank(dtohabilidades.getNombreHab())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sHabilidades.existsByNombreHab(dtohabilidades.getNombreHab())) {
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtohabilidades.getPorcentajeHab())) {
            return new ResponseEntity(new Mensaje("El porcentaje es obligatorio"), HttpStatus.BAD_REQUEST);
        }


       Habilidades habilidades = new Habilidades(
                dtohabilidades.getNombreHab(), dtohabilidades.getPorcentajeHab()
        );
        sHabilidades.save(habilidades);
        return new ResponseEntity(new Mensaje("Habilidad creada"), HttpStatus.OK);

    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoHabilidades dtohabilidades) {
        if (!sHabilidades.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if (sHabilidades.existsByNombreHab(dtohabilidades.getNombreHab()) && sHabilidades.getByNombreHab(dtohabilidades.getNombreHab()).get().getId() != id) {
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtohabilidades.getNombreHab())) {
            return new ResponseEntity(new Mensaje("El campo del nombre no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtohabilidades.getPorcentajeHab())) {
            return new ResponseEntity(new Mensaje("El campo del porcentaje no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }


        Habilidades habilidades = sHabilidades.getOne(id).get();

        habilidades.setNombreHab(dtohabilidades.getNombreHab());
        habilidades.setPorcentajeHab(dtohabilidades.getPorcentajeHab());

        sHabilidades.save(habilidades);

            return new ResponseEntity(new Mensaje("Habilidad actualizada"), HttpStatus.OK);
    }
}
