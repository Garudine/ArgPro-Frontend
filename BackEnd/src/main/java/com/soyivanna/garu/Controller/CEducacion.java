package com.soyivanna.garu.Controller;

import com.soyivanna.garu.Dto.dtoEducacion;
import com.soyivanna.garu.Entity.Educacion;
import com.soyivanna.garu.Security.Controller.Mensaje;
import com.soyivanna.garu.Service.SEducacion;
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
@RequestMapping("/educacion")
@CrossOrigin(origins = "http://localhost:4200")
public class CEducacion {

    @Autowired
    SEducacion sEducacion;

    @GetMapping("/lista")
    public ResponseEntity<List<Educacion>> list() {
        List<Educacion> list = sEducacion.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Educacion> getById(@PathVariable("id") int id) {
        if (!sEducacion.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.BAD_REQUEST);
        }

        Educacion educacion = sEducacion.getOne(id).get();
        return new ResponseEntity(educacion, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sEducacion.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        sEducacion.delete(id);
        return new ResponseEntity(new Mensaje("Educacion eliminada"), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoEducacion dtoeducacion) {
        if (StringUtils.isBlank(dtoeducacion.getNombreEdu())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sEducacion.existsByNombreEdu(dtoeducacion.getNombreEdu())) {
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtoeducacion.getAnioInicioEdu())) {
            return new ResponseEntity(new Mensaje("El año de inicio es obligatorio"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtoeducacion.getAnioFinEdu())) {
            return new ResponseEntity(new Mensaje("El año final es obligatorio"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtoeducacion.getDescripcionEdu())) {
            return new ResponseEntity(new Mensaje("La descripción es obligatoria"), HttpStatus.BAD_REQUEST);
        }

        Educacion educacion = new Educacion(
                dtoeducacion.getNombreEdu(), dtoeducacion.getAnioInicioEdu(), dtoeducacion.getAnioFinEdu(), dtoeducacion.getDescripcionEdu()
        );
        sEducacion.save(educacion);
        return new ResponseEntity(new Mensaje("Educacion creada"), HttpStatus.OK);

    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoEducacion dtoeducacion) {
        if (!sEducacion.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if (sEducacion.existsByNombreEdu(dtoeducacion.getNombreEdu()) && sEducacion.getByNombreEdu(dtoeducacion.getNombreEdu()).get().getId() != id) {
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoeducacion.getNombreEdu())) {
            return new ResponseEntity(new Mensaje("El campo del nombre no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoeducacion.getAnioInicioEdu())) {
            return new ResponseEntity(new Mensaje("El campo del año inicio no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoeducacion.getAnioFinEdu())) {
            return new ResponseEntity(new Mensaje("El campo del año final no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoeducacion.getDescripcionEdu())) {
            return new ResponseEntity(new Mensaje("El campo descripción no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }

        Educacion educacion = sEducacion.getOne(id).get();

        educacion.setNombreEdu(dtoeducacion.getNombreEdu());
        educacion.setAnioInicioEdu(dtoeducacion.getAnioInicioEdu());
        educacion.setAnioFinEdu(dtoeducacion.getAnioFinEdu());
        educacion.setDescripcionEdu(dtoeducacion.getDescripcionEdu());

        sEducacion.save(educacion);

        return new ResponseEntity(new Mensaje("Educacion actualizada"), HttpStatus.OK);
    }
}
