package com.java.srm.SocietyFinancialManagement.Services.Interface;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Vendor;

public interface VendorService {

    public Vendor save(Vendor v);

    public List<Vendor> findAll();

    public Optional<Vendor> findById(Long id);

    
}
