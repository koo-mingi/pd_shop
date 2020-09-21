package nexacro.sample.vo.aprv;

import nexacro.sample.vo.DefaultVO;

public class AprvListVO extends DefaultVO {

	private String aprvprgrInfoStepCode;
	private String aprvprgrInfoBookNo;
	private String aprvprgrInfoSeq;
	private String aprvprgrInfoWrit;
	private String aprvprgrInfoWritDeptName;
	private String aprvprgrInfoWritDate;
	private String aprvprgrInfoWritTit;
	private String aprvprgrInfoWritCont;
	
	private String aprvInfoCondCode;
	private String aprvInfoSeq;
	private String codey;
	private String coden;
	private String codez;
	private String stepCodeCount;
	
	
	public String getAprvInfoSeq() {
		return aprvInfoSeq;
	}
	public void setAprvInfoSeq(String aprvInfoSeq) {
		this.aprvInfoSeq = aprvInfoSeq;
	}
	public String getAprvprgrInfoStepCode() {
		return aprvprgrInfoStepCode;
	}
	public void setAprvprgrInfoStepCode(String aprvprgrInfoStepCode) {
		this.aprvprgrInfoStepCode = aprvprgrInfoStepCode;
	}
	public String getAprvprgrInfoBookNo() {
		return aprvprgrInfoBookNo;
	}
	public void setAprvprgrInfoBookNo(String aprvprgrInfoBookNo) {
		this.aprvprgrInfoBookNo = aprvprgrInfoBookNo;
	}
	public String getAprvprgrInfoSeq() {
		return aprvprgrInfoSeq;
	}
	public void setAprvprgrInfoSeq(String aprvprgrInfoSeq) {
		this.aprvprgrInfoSeq = aprvprgrInfoSeq;
	}
	public String getAprvprgrInfoWrit() {
		return aprvprgrInfoWrit;
	}
	public void setAprvprgrInfoWrit(String aprvprgrInfoWrit) {
		this.aprvprgrInfoWrit = aprvprgrInfoWrit;
	}
	public String getAprvprgrInfoWritDeptName() {
		return aprvprgrInfoWritDeptName;
	}
	public void setAprvprgrInfoWritDeptName(String aprvprgrInfoWritDeptName) {
		this.aprvprgrInfoWritDeptName = aprvprgrInfoWritDeptName;
	}
	public String getAprvprgrInfoWritDate() {
		return aprvprgrInfoWritDate;
	}
	public void setAprvprgrInfoWritDate(String aprvprgrInfoWritDate) {
		this.aprvprgrInfoWritDate = aprvprgrInfoWritDate;
	}
	public String getAprvprgrInfoWritTit() {
		return aprvprgrInfoWritTit;
	}
	public void setAprvprgrInfoWritTit(String aprvprgrInfoWritTit) {
		this.aprvprgrInfoWritTit = aprvprgrInfoWritTit;
	}
	public String getAprvprgrInfoWritCont() {
		return aprvprgrInfoWritCont;
	}
	public void setAprvprgrInfoWritCont(String aprvprgrInfoWritCont) {
		this.aprvprgrInfoWritCont = aprvprgrInfoWritCont;
	}
	public String getAprvInfoCondCode() {
		return aprvInfoCondCode;
	}
	public void setAprvInfoCondCode(String aprvInfoCondCode) {
		this.aprvInfoCondCode = aprvInfoCondCode;
	}

	public String getStepCodeCount() {
		return stepCodeCount;
	}
	public void setStepCodeCount(String stepCodeCount) {
		this.stepCodeCount = stepCodeCount;
	}
	public String getCodey() {
		return codey;
	}
	public void setCodey(String codey) {
		this.codey = codey;
	}
	public String getCoden() {
		return coden;
	}
	public void setCoden(String coden) {
		this.coden = coden;
	}
	public String getCodez() {
		return codez;
	}
	public void setCodez(String codez) {
		this.codez = codez;
	}
	@Override
	public String toString() {
		return "AprvListVO [aprvprgrInfoStepCode=" + aprvprgrInfoStepCode
				+ ", aprvprgrInfoBookNo=" + aprvprgrInfoBookNo
				+ ", aprvprgrInfoSeq=" + aprvprgrInfoSeq
				+ ", aprvprgrInfoWrit=" + aprvprgrInfoWrit
				+ ", aprvprgrInfoWritDeptName=" + aprvprgrInfoWritDeptName
				+ ", aprvprgrInfoWritDate=" + aprvprgrInfoWritDate
				+ ", aprvprgrInfoWritTit=" + aprvprgrInfoWritTit
				+ ", aprvprgrInfoWritCont=" + aprvprgrInfoWritCont
				+ ", aprvInfoCondCode=" + aprvInfoCondCode + ", codeY=" + codey
				+ ", codeN=" + coden + ", codeZ=" + codez + ", stepCodeCount="
				+ stepCodeCount + "]";
	}
	
	
}
