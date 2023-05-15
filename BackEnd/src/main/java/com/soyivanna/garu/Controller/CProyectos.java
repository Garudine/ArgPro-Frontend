package com.soyivanna.garu.Controller;

import com.soyivanna.garu.Dto.dtoProyectos;
import com.soyivanna.garu.Entity.Proyectos;
import com.soyivanna.garu.Security.Controller.Mensaje;
import com.soyivanna.garu.Service.SProyectos;
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
@RequestMapping("/proyectos")
@CrossOrigin(origins = "http://localhost:4200")
public class CProyectos {

    @Autowired
    SProyectos sProyectos;

    @GetMapping("/lista")
    public ResponseEntity<List<Proyectos>> list() {
        List<Proyectos> list = sProyectos.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Proyectos> getById(@PathVariable("id") int id) {
        if (!sProyectos.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.BAD_REQUEST);
        }

        Proyectos proyectos = sProyectos.getOne(id).get();
        return new ResponseEntity(proyectos, HttpStatus.OK);
    }
    
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sProyectos.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        sProyectos.delete(id);
        return new ResponseEntity(new Mensaje("Proyecto eliminado"), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoProyectos dtoproyectos) {
        if (StringUtils.isBlank(dtoproyectos.getTituloPro())) {
            return new ResponseEntity(new Mensaje("El título es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sProyectos.existsByTituloPro(dtoproyectos.getTituloPro())) {
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtoproyectos.getImagenPro())) {
            return new ResponseEntity(new Mensaje("La imagen es obligatoria"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtoproyectos.getAltImagenPro())) {
            return new ResponseEntity(new Mensaje("La imagen alt es obligatorio"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtoproyectos.getDescriPro())) {
            return new ResponseEntity(new Mensaje("La descripción es obligatorio"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtoproyectos.getFechaPro())) {
            return new ResponseEntity(new Mensaje("La fecha es obligatoria"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoproyectos.getNombreBotPro())) {
            return new ResponseEntity(new Mensaje("El nombre botón es obligatoria"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoproyectos.getUrlBotPro())) {
            return new ResponseEntity(new Mensaje("La url botón es obligatoria"), HttpStatus.BAD_REQUEST);
        }

        Proyectos proyectos = new Proyectos(
                dtoproyectos.getTituloPro(), dtoproyectos.getImagenPro(), dtoproyectos.getAltImagenPro(), dtoproyectos.getDescriPro(), dtoproyectos.getFechaPro(), dtoproyectos.getUrlBotPro(), dtoproyectos.getNombreBotPro()
        );
        sProyectos.save(proyectos);
        return new ResponseEntity(new Mensaje("Proyecto creado"), HttpStatus.OK);

    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoProyectos dtoproyectos) {
        if (!sProyectos.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if (sProyectos.existsByTituloPro(dtoproyectos.getTituloPro()) && sProyectos.getByTituloPro(dtoproyectos.getTituloPro()).get().getId() != id) {
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoproyectos.getTituloPro())) {
            return new ResponseEntity(new Mensaje("El campo del título no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoproyectos.getImagenPro())) {
            return new ResponseEntity(new Mensaje("El campo imagen no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoproyectos.getAltImagenPro())) {
            return new ResponseEntity(new Mensaje("El campo imagen alt no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoproyectos.getDescriPro())) {
            return new ResponseEntity(new Mensaje("El campo descripción no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoproyectos.getFechaPro())) {
            return new ResponseEntity(new Mensaje("El campo fecha no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoproyectos.getNombreBotPro())) {
            return new ResponseEntity(new Mensaje("El campo nombre botón no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoproyectos.getUrlBotPro())) {
            return new ResponseEntity(new Mensaje("El campo url botón no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }

        Proyectos proyectos = sProyectos.getOne(id).get();

        proyectos.setTituloPro(dtoproyectos.getTituloPro());
        proyectos.setImagenPro(dtoproyectos.getImagenPro());
        proyectos.setAltImagenPro(dtoproyectos.getAltImagenPro());
        proyectos.setDescriPro(dtoproyectos.getDescriPro());
        proyectos.setFechaPro(dtoproyectos.getFechaPro());
        proyectos.setNombreBotPro(dtoproyectos.getNombreBotPro());
        proyectos.setUrlBotPro(dtoproyectos.getUrlBotPro());

        sProyectos.save(proyectos);

        return new ResponseEntity(new Mensaje("Proyecto actualizado"), HttpStatus.OK);
    }

}
