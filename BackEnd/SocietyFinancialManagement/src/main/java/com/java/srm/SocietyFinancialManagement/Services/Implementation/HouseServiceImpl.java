package com.java.srm.SocietyFinancialManagement.Services.Implementation;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.HouseDetails;
import com.java.srm.SocietyFinancialManagement.Repository.HouseRepo;
import com.java.srm.SocietyFinancialManagement.Services.Interface.HouseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HouseServiceImpl implements HouseService{

    @Autowired
    private HouseRepo repo;

	@Override
	public HouseDetails save(HouseDetails hd) {		
			return repo.save(hd);	
	}

	@Override
	public List<HouseDetails> findAll() {
		
		return repo.findAll();
	}

	@Override
	public Optional<HouseDetails> findById(Long id) {

		return repo.findById(id);
	}
    
}
