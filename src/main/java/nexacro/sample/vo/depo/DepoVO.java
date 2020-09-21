package nexacro.sample.vo.depo;

import nexacro.sample.vo.DefaultVO;

public class DepoVO extends DefaultVO{

	//공탁조회
	private int rownum;
	private String depositDepoAdmNo;
	private String depositOthDepoName;	
	private String depositDepoName;	
	private String depositForcExecSeq;
	private String depositDepoChg;
	private String depositDepoDate;
	private String depositDepuName;
	private String depositJuriCortCode;	
	private String depositKeepDeptCode;
	private String depositDepoReleDate;
	private String depositDepchgCollDate;	
	private String depositDepoCollChg;
	private String depositDepoCollRea;
	
	//공탁담당자 조회
	private String depositmgrDepoAdmNo;	
	private String depositmgrSeq;
	private String depositmgrId;
	private String depositmgrName;
	private String depositmgrDeptCode;
	private String depositmgrAsigDate;				

	
	public int getRownum() {
		return rownum;
	}

	public void setRownum(int rownum) {
		this.rownum = rownum;
	}

	public String getDepositDepoAdmNo() {
		return depositDepoAdmNo;
	}

	public void setDepositDepoAdmNo(String depositDepoAdmNo) {
		this.depositDepoAdmNo = depositDepoAdmNo;
	}

	public String getDepositOthDepoName() {
		return depositOthDepoName;
	}

	public void setDepositOthDepoName(String depositOthDepoName) {
		this.depositOthDepoName = depositOthDepoName;
	}

	public String getDepositDepoName() {
		return depositDepoName;
	}

	public void setDepositDepoName(String depositDepoName) {
		this.depositDepoName = depositDepoName;
	}

	public String getDepositForcExecSeq() {
		return depositForcExecSeq;
	}

	public void setDepositForcExecSeq(String depositForcExecSeq) {
		this.depositForcExecSeq = depositForcExecSeq;
	}

	public String getDepositDepoChg() {
		return depositDepoChg;
	}

	public void setDepositDepoChg(String depositDepoChg) {
		this.depositDepoChg = depositDepoChg;
	}

	public String getDepositDepoDate() {
		return depositDepoDate;
	}

	public void setDepositDepoDate(String depositDepoDate) {
		this.depositDepoDate = depositDepoDate;
	}

	public String getDepositDepuName() {
		return depositDepuName;
	}

	public void setDepositDepuName(String depositDepuName) {
		this.depositDepuName = depositDepuName;
	}

	public String getDepositJuriCortCode() {
		return depositJuriCortCode;
	}

	public void setDepositJuriCortCode(String depositJuriCortCode) {
		this.depositJuriCortCode = depositJuriCortCode;
	}

	public String getDepositKeepDeptCode() {
		return depositKeepDeptCode;
	}

	public void setDepositKeepDeptCode(String depositKeepDeptCode) {
		this.depositKeepDeptCode = depositKeepDeptCode;
	}

	public String getDepositDepoReleDate() {
		return depositDepoReleDate;
	}

	public void setDepositDepoReleDate(String depositDepoReleDate) {
		this.depositDepoReleDate = depositDepoReleDate;
	}

	public String getDepositDepchgCollDate() {
		return depositDepchgCollDate;
	}

	public void setDepositDepchgCollDate(String depositDepchgCollDate) {
		this.depositDepchgCollDate = depositDepchgCollDate;
	}

	public String getDepositDepoCollChg() {
		return depositDepoCollChg;
	}

	public void setDepositDepoCollChg(String depositDepoCollChg) {
		this.depositDepoCollChg = depositDepoCollChg;
	}

	public String getDepositDepoCollRea() {
		return depositDepoCollRea;
	}

	public void setDepositDepoCollRea(String depositDepoCollRea) {
		this.depositDepoCollRea = depositDepoCollRea;
	}

	public String getDepositmgrDepoAdmNo() {
		return depositmgrDepoAdmNo;
	}

	public void setDepositmgrDepoAdmNo(String depositmgrDepoAdmNo) {
		this.depositmgrDepoAdmNo = depositmgrDepoAdmNo;
	}

	public String getDepositmgrSeq() {
		return depositmgrSeq;
	}

	public void setDepositmgrSeq(String depositmgrSeq) {
		this.depositmgrSeq = depositmgrSeq;
	}

	public String getDepositmgrId() {
		return depositmgrId;
	}

	public void setDepositmgrId(String depositmgrId) {
		this.depositmgrId = depositmgrId;
	}
	
	public String getDepositmgrName() {
		return depositmgrName;
	}

	public void setDepositmgrName(String depositmgrName) {
		this.depositmgrName = depositmgrName;
	}
	
	public String getDepositmgrDeptCode() {
		return depositmgrDeptCode;
	}

	public void setDepositmgrDeptCode(String depositmgrDeptCode) {
		this.depositmgrDeptCode = depositmgrDeptCode;
	}

	public String getDepositmgrAsigDate() {
		return depositmgrAsigDate;
	}

	public void setDepositmgrAsigDate(String depositmgrAsigDate) {
		this.depositmgrAsigDate = depositmgrAsigDate;
	}

	@Override
	public String toString() {
		return "DepoVO [depositDepoAdmNo=" + depositDepoAdmNo
				+ ", depositOthDepoName=" + depositOthDepoName
				+ ", depositDepoName=" + depositDepoName
				+ ", depositForcExecSeq=" + depositForcExecSeq
				+ ", depositDepoChg=" + depositDepoChg + ", depositDepoDate="
				+ depositDepoDate + ", depositDepuName=" + depositDepuName
				+ ", depositJuriCortCode=" + depositJuriCortCode
				+ ", depositKeepDeptCode=" + depositKeepDeptCode
				+ ", depositDepoReleDate=" + depositDepoReleDate
				+ ", depositDepchgCollDate=" + depositDepchgCollDate
				+ ", depositDepoCollChg=" + depositDepoCollChg
				+ ", depositDepoCollRea=" + depositDepoCollRea
				+ ", depositmgrDepoAdmNo=" + depositmgrDepoAdmNo
				+ ", depositmgrSeq=" + depositmgrSeq + ", depositmgrId="
				+ depositmgrId + ", depositmgrName=" + depositmgrName
				+ ", depositmgrDeptCode=" + depositmgrDeptCode
				+ ", depositmgrAsigDate=" + depositmgrAsigDate + "]";
	}
	
	
}
