package com.java.srm.SocietyFinancialManagement.Repository;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Complaint;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ComplaintRepo extends JpaRepository<Complaint,Long>{

    // @Query("SELECT c FROM Complaint AS c LEFT JOIN Customer as cs ON cs.customer_id = c.custid WHERE cs.customer_id = :id")
    public Optional<Complaint> findById(Long id);

    // public void getComplain();

    public List<Complaint> findAll();


    public Complaint save(Complaint c);

}