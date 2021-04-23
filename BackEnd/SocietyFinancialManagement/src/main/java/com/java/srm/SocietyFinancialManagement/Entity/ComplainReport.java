package com.java.srm.SocietyFinancialManagement.Entity;

import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class ComplainReport {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Temporal(TemporalType.DATE)
    private Date date;

    private String workType;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="complainId")
    private Complaint complaintId;

	@OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "complainReportId")
    private List<ComplaintWorkingVendor> complainReportIds;

	public Complaint getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(Complaint complaintId) {
		this.complaintId = complaintId;
	}

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getWorkType() {
        return workType;
    }

    public void setWorkType(String workType) {
        this.workType = workType;
    }

    public List<ComplaintWorkingVendor> getComplainReportIds() {
        return complainReportIds;
    }

    public void setComplainReportIds(List<ComplaintWorkingVendor> complainReportIds) {
        this.complainReportIds = complainReportIds;
    }

    
}
