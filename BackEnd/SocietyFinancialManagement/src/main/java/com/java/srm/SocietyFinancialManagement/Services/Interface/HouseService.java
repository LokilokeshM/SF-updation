package com.java.srm.SocietyFinancialManagement.Services.Interface;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.HouseDetails;

public interface HouseService {
    public HouseDetails save(HouseDetails hd);
    
    public List<HouseDetails> findAll();

    public Optional<HouseDetails> findById(Long id);
}
