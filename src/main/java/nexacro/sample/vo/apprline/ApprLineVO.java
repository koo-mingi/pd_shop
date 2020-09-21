package nexacro.sample.vo.apprline;

import nexacro.sample.vo.DefaultVO;

public class ApprLineVO extends DefaultVO{
	
	private String aprvlineAdmProcCode;			//결재라인코드							
	private String aprvlineAdmSeq;				//결재라인순번
	private String aprvlineAdmAprvId;			//결재자ID
	private String aprvlineAdmAprvDeptId;		//결재자부서ID
	private String AprvlineAdmUpAprvcode;		//상위결재진행단계코드
	private String aprvlineAdmUpSeq;			//상위결재라인순번
	private String aprvlineAdmAdWtr;			//전결여부
	private String aprvlineAdmUpId;				//상위결재자ID
	private String insaName;
	public String getAprvlineAdmProcCode() {
		return aprvlineAdmProcCode;
	}
	public void setAprvlineAdmProcCode(String aprvlineAdmProcCode) {
		this.aprvlineAdmProcCode = aprvlineAdmProcCode;
	}
	public String getAprvlineAdmSeq() {
		return aprvlineAdmSeq;
	}
	public void setAprvlineAdmSeq(String aprvlineAdmSeq) {
		this.aprvlineAdmSeq = aprvlineAdmSeq;
	}
	public String getAprvlineAdmAprvId() {
		return aprvlineAdmAprvId;
	}
	public void setAprvlineAdmAprvId(String aprvlineAdmAprvId) {
		this.aprvlineAdmAprvId = aprvlineAdmAprvId;
	}
	public String getAprvlineAdmAprvDeptId() {
		return aprvlineAdmAprvDeptId;
	}
	public void setAprvlineAdmAprvDeptId(String aprvlineAdmAprvDeptId) {
		this.aprvlineAdmAprvDeptId = aprvlineAdmAprvDeptId;
	}
	public String getAprvlineAdmUpAprvcode() {
		return AprvlineAdmUpAprvcode;
	}
	public void setAprvlineAdmUpAprvcode(String aprvlineAdmUpAprvcode) {
		AprvlineAdmUpAprvcode = aprvlineAdmUpAprvcode;
	}
	public String getAprvlineAdmUpSeq() {
		return aprvlineAdmUpSeq;
	}
	public void setAprvlineAdmUpSeq(String aprvlineAdmUpSeq) {
		this.aprvlineAdmUpSeq = aprvlineAdmUpSeq;
	}
	public String getAprvlineAdmAdWtr() {
		return aprvlineAdmAdWtr;
	}
	public void setAprvlineAdmAdWtr(String aprvlineAdmAdWtr) {
		this.aprvlineAdmAdWtr = aprvlineAdmAdWtr;
	}
	public String getAprvlineAdmUpId() {
		return aprvlineAdmUpId;
	}
	public void setAprvlineAdmUpId(String aprvlineAdmUpId) {
		this.aprvlineAdmUpId = aprvlineAdmUpId;
	}
	public String getInsaName() {
		return insaName;
	}
	public void setInsaName(String insaName) {
		this.insaName = insaName;
	}

}
