package com.example.testproject.model;
 

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
 
@Entity
@Table(name = "datasx")
public class Datasx {
 
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
 
  @Column(name = "datasx")
  private String datasx;
 
 
 
  public Datasx() {
  }
 
  public Datasx(String datasx) {
    this.datasx = datasx;
    
  }
 
  public long getId() {
    return id;
  }
 
  public void setDatasx(String datasx) {
    this.datasx = datasx;
  }
 
  public String getDatasx() {
    return this.datasx;
  }
  
 
 
  @Override
  public String toString() {
    return "Datasx [id=" + id + ", datasx=" + datasx + "]";
    
  
  }
}