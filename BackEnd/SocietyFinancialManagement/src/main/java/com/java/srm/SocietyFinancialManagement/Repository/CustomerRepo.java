package com.java.srm.SocietyFinancialManagement.Repository;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepo extends JpaRepository<Customer,Long>{

    public Customer save(Customer o);

    public List<Customer> findAll();

    public Optional<Customer> findById(Long id);

    

}
