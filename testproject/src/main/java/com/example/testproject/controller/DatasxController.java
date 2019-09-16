package com.example.testproject.controller;
 
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
import com.example.testproject.model.Datasx;
import com.example.testproject.repo.DatasxRepository;


 
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class DatasxController {
 
  @Autowired
  DatasxRepository repository;
 
  @GetMapping("/datasx")
  public List<Datasx> getAlls() {
    System.out.println("Get all Datas...");
 
    List<Datasx> datasx = new ArrayList<>();
    repository.findAll().forEach(datasx::add);
 
    return datasx;
  }
 
  @PostMapping(value = "/datasx/create")
  public Datasx postDatasx(@RequestBody Datasx datasx) {
 
    Datasx _datasx = repository.save(new Datasx(datasx.getDatasx()));
    return _datasx;
  }
 
  @DeleteMapping("/datasx/{id}")
  public ResponseEntity<String> deleteDatasx(@PathVariable("id") long id) {
    System.out.println("Delete Data with ID = " + id + "...");
 
    repository.deleteById(id);
 
    return new ResponseEntity<>("Data has been deleted!", HttpStatus.OK);
  }
 
  @DeleteMapping("/datasx/delete")
  public ResponseEntity<String> deleteAllDatasx() {
    System.out.println("Delete All Datas...");
 
    repository.deleteAll();
 
    return new ResponseEntity<>("All datas have been deleted!", HttpStatus.OK);
  }
 
 
  ///////////////////
  //@PutMapping("/datasx/{id}")
 // public ResponseEntity<Datasx> updateDatasx(@PathVariable("id") long id, @RequestBody Datasx datasx) {
   // System.out.println("Update Data with ID = " + id + "...");

   // Optional<Datasx> datasxDatasx = repository.findById(id);
 
   // if (datasxDatasx.isPresent()) {
    //  Datasx _datasx = datasxDatasx.get();
    //  _datasx.setDatasx(datasx.getDatasx());
      
   //   return new ResponseEntity<>(repository.save(_datasx), HttpStatus.OK);
   // } else {
     // return new ResponseEntity<>(HttpStatus.NOT_FOUND);
   // }
//  }
  ///////////////////
  
  //Holder*delete all below if failed
  @PutMapping(value="/datasx/{id}")
	public void putDatasx(@RequestBody Datasx datasx){
	  System.out.println("Editing Stuff...");
	  
	  repository.save(datasx);
	}
  
 

  
}