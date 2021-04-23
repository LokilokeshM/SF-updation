package com.java.srm.SocietyFinancialManagement.Repository;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Vendor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface VendorRepo extends JpaRepository<Vendor, Long>{
    
    public Vendor save(Vendor v);

    public List<Vendor> findAll();

    public Optional<Vendor> findById(Long id);
}
