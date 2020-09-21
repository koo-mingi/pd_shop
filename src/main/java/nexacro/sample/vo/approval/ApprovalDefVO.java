package nexacro.sample.vo.approval;

/*
 * AprvVo			    	결재 리스트
 * 
 * 
//결재진행정보 (기안자)
APRVPRGR_INFO_STEP_CODE			결재진행단계코드			VARCHAR2
APRVPRGR_INFO_BOOK_NO			결재대장번호				VARCHAR2
APRVPRGR_INFO_SEQ				결재일련번호				NUMBER
APRVPRGR_INFO_UP_SEQ			상위결재일련번호			NUMBER
APRVPRGR_INFO_WRIT_SABUN		작성자 사원번호				VARCHAR2
APRVPRGR_INFO_WRIT				작성자명					VARCHAR2
APRVPRGR_INFO_WRIT_DEPT_CODE	작성자 부서코드				VARCHAR2
APRVPRGR_INFO_WRIT_DEPT_NAME	작성자 부서명				VARCHAR2
APRVPRGR_INFO_WRIT_DATE			작성일시					VARCHAR2
APRVPRGR_INFO_WRIT_CONT			작성내용					VARCHAR2
APRVPRGR_INFO_WRIT_TIT			제목명						VARCHAR2

//결재정보 (결재자)
APRVPRGR_INFO_STEP_CODE			결재진행단계코드			VARCHAR2
APRVPRGR_INFO_BOOK_NO			결재대장번호				VARCHAR2
APRVPRGR_INFO_SEQ				결재일련번호				NUMBER
APRV_INFO_SEQ					순번						NUMBER
APRV_INFO_SABUN					결재자사원번호				VARCHAR2
APRV_INFO_NAME					결재자명					VARCHAR2
APRV_INFO_DEPT_CODE				결재자부서코드				VARCHAR2
APRV_INFO_DEPT_NAME				결재자부서명				VARCHAR2
APRV_INFO_COND_CODE				결재상태코드				VARCHAR2
APRV_INFO_PROC_DATE				결재처리일자				VARCHAR2
APRV_INFO_REQ_DATE				결재요청일자				VARCHAR2
APRV_INFO_FIN_WTR				최종결재여부				VARCHAR2
APRV_INFO_CONT					결재내용					VARCHAR2

//결재라인관리
APRV_PROC_CODE					결재진행단계코드			VARCHAR2
APRVLINE_ADM_SEQ				결재라인순번				NUMBER
APRVLINE_ADM_APRV_ID			결재자ID					VARCHAR2
APRVLINE_ADM_APRV_DEPT_ID		결재자부서ID				VARCHAR2
APRVLINE_ADM_UP_APRVCODE		상위결재진행단계코드		VARCHAR2
APRVLINE_ADM_UP_SEQ				상위결재라인순번			NUMBER
APRVLINE_ADM_AD_WTR				전결여부					VARCHAR2

*/



public class ApprovalDefVO {
	
	//기안자정보
	private String aprvprgrInfoUpSeq;
	private String aprvprgrInfoWritSabun;    
	private String aprvprgrInfoWrit;
	private String aprvprgrInfoWritDeptCode ;   
	private String aprvprgrInfoWritDeptName;
	private String aprvprgrInfoWritDate;
	private String aprvprgrInfoWritCont;
	private String aprvprgrInfoWritTit;
	
	//결재자정보
	private String aprvprgrInfoStepCode;
	private String aprvprgrInfoBookNo;
	private String aprvprgrInfoSeq;
	private String aprvInfoSeq;
	private String aprvInfoSabun;
	private String aprvInfoName;
	private String aprvInfoDeptCode;
	private String aprvInfoDeptName;
	private String aprvInfoCondCode;
	private String aprvInfoProcDate;
	private String aprvInfoReqDate;
	private String aprvInfoFinWtr;
	private String aprvInfoCont;
	
	//결재라인정보
	private String aprvlineAdmProcCode;
	private String aprvlineAdmSeq;
	private String aprvlineAdmAprvId;
	private String aprvlineAdmAprvDeptId;
	private String aprvlineAdmUpAprvcode;
	private String aprvlineAdmUpSeq;
	private String aprvlineAdmAdWtr;
	private String aprvlineAdmUpId;				//상위결재자ID
	
	public String getAprvlineAdmUpId() {
		return aprvlineAdmUpId;
	}
	public void setAprvlineAdmUpId(String aprvlineAdmUpId) {
		this.aprvlineAdmUpId = aprvlineAdmUpId;
	}
	
	public String getAprvInfoSeq() {
		return aprvInfoSeq;
	}
	public void setAprvInfoSeq(String aprvInfoSeq) {
		this.aprvInfoSeq = aprvInfoSeq;
	}
	public String getAprvInfoSabun() {
		return aprvInfoSabun;
	}
	public void setAprvInfoSabun(String aprvInfoSabun) {
		this.aprvInfoSabun = aprvInfoSabun;
	}
	public String getAprvInfoName() {
		return aprvInfoName;
	}
	public void setAprvInfoName(String aprvInfoName) {
		this.aprvInfoName = aprvInfoName;
	}
	public String getAprvInfoDeptCode() {
		return aprvInfoDeptCode;
	}
	public void setAprvInfoDeptCode(String aprvInfoDeptCode) {
		this.aprvInfoDeptCode = aprvInfoDeptCode;
	}
	public String getAprvInfoDeptName() {
		return aprvInfoDeptName;
	}
	public void setAprvInfoDeptName(String aprvInfoDeptName) {
		this.aprvInfoDeptName = aprvInfoDeptName;
	}
	public String getAprvInfoCondCode() {
		return aprvInfoCondCode;
	}
	public void setAprvInfoCondCode(String aprvInfoCondCode) {
		this.aprvInfoCondCode = aprvInfoCondCode;
	}
	public String getAprvInfoProcDate() {
		return aprvInfoProcDate;
	}
	public void setAprvInfoProcDate(String aprvInfoProcDate) {
		this.aprvInfoProcDate = aprvInfoProcDate;
	}
	public String getAprvInfoReqDate() {
		return aprvInfoReqDate;
	}
	public void setAprvInfoReqDate(String aprvInfoReqDate) {
		this.aprvInfoReqDate = aprvInfoReqDate;
	}
	public String getAprvInfoFinWtr() {
		return aprvInfoFinWtr;
	}
	public void setAprvInfoFinWtr(String aprvInfoFinWtr) {
		this.aprvInfoFinWtr = aprvInfoFinWtr;
	}
	public String getAprvInfoCont() {
		return aprvInfoCont;
	}
	public void setAprvInfoCont(String aprvInfoCont) {
		this.aprvInfoCont = aprvInfoCont;
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
	public String getAprvprgrInfoUpSeq() {
		return aprvprgrInfoUpSeq;
	}
	public void setAprvprgrInfoUpSeq(String aprvprgrInfoUpSeq) {
		this.aprvprgrInfoUpSeq = aprvprgrInfoUpSeq;
	}
	public String getAprvprgrInfoWritSabun() {
		return aprvprgrInfoWritSabun;
	}
	public void setAprvprgrInfoWritSabun(String aprvprgrInfoWritSabun) {
		this.aprvprgrInfoWritSabun = aprvprgrInfoWritSabun;
	}
	public String getAprvprgrInfoWrit() {
		return aprvprgrInfoWrit;
	}
	public void setAprvprgrInfoWrit(String aprvprgrInfoWrit) {
		this.aprvprgrInfoWrit = aprvprgrInfoWrit;
	}
	public String getAprvprgrInfoWritDeptCode() {
		return aprvprgrInfoWritDeptCode;
	}
	public void setAprvprgrInfoWritDeptCode(String aprvprgrInfoWritDeptCode) {
		this.aprvprgrInfoWritDeptCode = aprvprgrInfoWritDeptCode;
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
	public String getAprvprgrInfoWritCont() {
		return aprvprgrInfoWritCont;
	}
	public void setAprvprgrInfoWritCont(String aprvprgrInfoWritCont) {
		this.aprvprgrInfoWritCont = aprvprgrInfoWritCont;
	}
	public String getAprvprgrInfoWritTit() {
		return aprvprgrInfoWritTit;
	}
	public void setAprvprgrInfoWritTit(String aprvprgrInfoWritTit) {
		this.aprvprgrInfoWritTit = aprvprgrInfoWritTit;
	}
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
		return aprvlineAdmUpAprvcode;
	}
	public void setAprvlineAdmUpAprvcode(String aprvlineAdmUpAprvcode) {
		this.aprvlineAdmUpAprvcode = aprvlineAdmUpAprvcode;
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
	@Override
	public String toString() {
		return "ApprovalDefVO [aprvprgrInfoUpSeq=" + aprvprgrInfoUpSeq
				+ ", aprvprgrInfoWritSabun=" + aprvprgrInfoWritSabun
				+ ", aprvprgrInfoWrit=" + aprvprgrInfoWrit
				+ ", aprvprgrInfoWritDeptCode=" + aprvprgrInfoWritDeptCode
				+ ", aprvprgrInfoWritDeptName=" + aprvprgrInfoWritDeptName
				+ ", aprvprgrInfoWritDate=" + aprvprgrInfoWritDate
				+ ", aprvprgrInfoWritCont=" + aprvprgrInfoWritCont
				+ ", aprvprgrInfoWritTit=" + aprvprgrInfoWritTit
				+ ", aprvprgrInfoStepCode=" + aprvprgrInfoStepCode
				+ ", aprvprgrInfoBookNo=" + aprvprgrInfoBookNo
				+ ", aprvprgrInfoSeq=" + aprvprgrInfoSeq + ", aprvInfoSeq="
				+ aprvInfoSeq + ", aprvInfoSabun=" + aprvInfoSabun
				+ ", aprvInfoName=" + aprvInfoName + ", aprvInfoDeptCode="
				+ aprvInfoDeptCode + ", aprvInfoDeptName=" + aprvInfoDeptName
				+ ", aprvInfoCondCode=" + aprvInfoCondCode
				+ ", aprvInfoProcDate=" + aprvInfoProcDate
				+ ", aprvInfoReqDate=" + aprvInfoReqDate + ", aprvInfoFinWtr="
				+ aprvInfoFinWtr + ", aprvInfoCont=" + aprvInfoCont
				+ ", aprvlineAdmProcCode=" + aprvlineAdmProcCode
				+ ", aprvlineAdmSeq=" + aprvlineAdmSeq + ", aprvlineAdmAprvId="
				+ aprvlineAdmAprvId + ", aprvlineAdmAprvDeptId="
				+ aprvlineAdmAprvDeptId + ", aprvlineAdmUpAprvcode="
				+ aprvlineAdmUpAprvcode + ", aprvlineAdmUpSeq="
				+ aprvlineAdmUpSeq + ", aprvlineAdmAdWtr=" + aprvlineAdmAdWtr
				+ ", aprvlineAdmUpId=" + aprvlineAdmUpId + "]";
	}
	
	
	
}