package nexacro.sample.vo.approval;

/*
 * AprvVo			    	결재 리스트
 * 
 * 
//결재진행정보 (기안자)
INSA_SABUN	SABUN			사번					VARCHAR2
INSA_JOIN_GBN_CODE			입사구분코드			VARCHAR2
INSA_JOIN_DAY				입사일자				VARCHAR2
INSA_RETIRE_DAY				퇴사일자				VARCHAR2
INSA_PUT_WTR				투입여부				VARCHAR2
INSA_CLASS_GBN_CODE			등급구분코드			VARCHAR2
INSA_NAME					이름					VARCHAR2
INSA_REG_NO	REG_NO			주민번호				VARCHAR2
INSA_ENG_NAME				영문성명				VARCHAR2
INSA_PHONE					전화번호				VARCHAR2
INSA_HP	HP					핸드폰번호				VARCHAR2
INSA_CARRIER				경력					VARCHAR2
INSA_POS_GBN_CODE			직위구분코드			VARCHAR2
INSA_CMP_REG_NO				사업자등록번호			VARCHAR2
INSA_SEX					성별					VARCHAR2
INSA_YEARS					연령					NUMBER
INSA_EMAIL					이메일					VARCHAR2
INSA_ZIP					우편번호				VARCHAR2
INSA_ADDR1					주소1					VARCHAR2
INSA_ADDR2					주소2					VARCHAR2
INSA_MIL_WTR				군필여부				VARCHAR2
INSA_HOME_PHONE				집전화번호				VARCHAR2
INSA_SALARY					연봉					NUMBER
INSA_KOSA_REG_WTR			KOSA등록여부			VARCHAR2
INSA_KOSA_CLASS				KOSA등급				VARCHAR2
INSA_DEPT_CODE				부서코드				VARCHAR2
INSA_PSW					패스워드		 	 	VARCHAR2


*/



public class ApprovalProgVO {

	//기안자 컬럼명
	
	private String insaSabun;
	private String insaJoinGbnCode;
	private String insaJoinDay;
	private String insaRetireDay;
	private String insaPutWtr;
	private String insaClassGbnCode;
	private String insaName;
	private String insaRegBirth;
	private String insaEngName;
	private String insaPhone;
	private String insaHp;
	private String insaCarrier;
	private String insaPosGbnCode;
	private String insaCmpRegNo;
	private String insaSex;
	private String insaYears;
	private String insaEmail;
	private String insaZip;
	private String insaAddr1;
	private String insaAddr2;
	private String insaMilWtr;
	private String insaHomePhone;
	private String insaSalary;
	private String insaKosaRegWtr;
	private String insaKosaClass;
	private String insaDeptCode;
	private String insaPsw;
	private String insaDeptName;
	
	
	
	
	public String getInsaSabun() {
		return insaSabun;
	}
	public void setInsaSabun(String insaSabun) {
		this.insaSabun = insaSabun;
	}
	public String getInsaJoinGbnCode() {
		return insaJoinGbnCode;
	}
	public void setInsaJoinGbnCode(String insaJoinGbnCode) {
		this.insaJoinGbnCode = insaJoinGbnCode;
	}
	public String getInsaJoinDay() {
		return insaJoinDay;
	}
	public void setInsaJoinDay(String insaJoinDay) {
		this.insaJoinDay = insaJoinDay;
	}
	public String getInsaRetireDay() {
		return insaRetireDay;
	}
	public void setInsaRetireDay(String insaRetireDay) {
		this.insaRetireDay = insaRetireDay;
	}
	public String getInsaPutWtr() {
		return insaPutWtr;
	}
	public void setInsaPutWtr(String insaPutWtr) {
		this.insaPutWtr = insaPutWtr;
	}
	public String getInsaClassGbnCode() {
		return insaClassGbnCode;
	}
	public void setInsaClassGbnCode(String insaClassGbnCode) {
		this.insaClassGbnCode = insaClassGbnCode;
	}
	public String getInsaName() {
		return insaName;
	}
	public void setInsaName(String insaName) {
		this.insaName = insaName;
	}
	public String getInsaRegBirth() {
		return insaRegBirth;
	}
	public void setInsaRegBirth(String insaRegBirth) {
		this.insaRegBirth = insaRegBirth;
	}
	public String getInsaEngName() {
		return insaEngName;
	}
	public void setInsaEngName(String insaEngName) {
		this.insaEngName = insaEngName;
	}
	public String getInsaPhone() {
		return insaPhone;
	}
	public void setInsaPhone(String insaPhone) {
		this.insaPhone = insaPhone;
	}
	public String getInsaHp() {
		return insaHp;
	}
	public void setInsaHp(String insaHp) {
		this.insaHp = insaHp;
	}
	public String getInsaCarrier() {
		return insaCarrier;
	}
	public void setInsaCarrier(String insaCarrier) {
		this.insaCarrier = insaCarrier;
	}
	public String getInsaPosGbnCode() {
		return insaPosGbnCode;
	}
	public void setInsaPosGbnCode(String insaPosGbnCode) {
		this.insaPosGbnCode = insaPosGbnCode;
	}
	public String getInsaCmpRegNo() {
		return insaCmpRegNo;
	}
	public void setInsaCmpRegNo(String insaCmpRegNo) {
		this.insaCmpRegNo = insaCmpRegNo;
	}
	public String getInsaSex() {
		return insaSex;
	}
	public void setInsaSex(String insaSex) {
		this.insaSex = insaSex;
	}
	public String getInsaYears() {
		return insaYears;
	}
	public void setInsaYears(String insaYears) {
		this.insaYears = insaYears;
	}
	public String getInsaEmail() {
		return insaEmail;
	}
	public void setInsaEmail(String insaEmail) {
		this.insaEmail = insaEmail;
	}
	public String getInsaZip() {
		return insaZip;
	}
	public void setInsaZip(String insaZip) {
		this.insaZip = insaZip;
	}
	public String getInsaAddr1() {
		return insaAddr1;
	}
	public void setInsaAddr1(String insaAddr1) {
		this.insaAddr1 = insaAddr1;
	}
	public String getInsaAddr2() {
		return insaAddr2;
	}
	public void setInsaAddr2(String insaAddr2) {
		this.insaAddr2 = insaAddr2;
	}
	public String getInsaMilWtr() {
		return insaMilWtr;
	}
	public void setInsaMilWtr(String insaMilWtr) {
		this.insaMilWtr = insaMilWtr;
	}
	public String getInsaHomePhone() {
		return insaHomePhone;
	}
	public void setInsaHomePhone(String insaHomePhone) {
		this.insaHomePhone = insaHomePhone;
	}
	public String getInsaSalary() {
		return insaSalary;
	}
	public void setInsaSalary(String insaSalary) {
		this.insaSalary = insaSalary;
	}
	public String getInsaKosaRegWtr() {
		return insaKosaRegWtr;
	}
	public void setInsaKosaRegWtr(String insaKosaRegWtr) {
		this.insaKosaRegWtr = insaKosaRegWtr;
	}
	public String getInsaKosaClass() {
		return insaKosaClass;
	}
	public void setInsaKosaClass(String insaKosaClass) {
		this.insaKosaClass = insaKosaClass;
	}
	public String getInsaDeptCode() {
		return insaDeptCode;
	}
	public void setInsaDeptCode(String insaDeptCode) {
		this.insaDeptCode = insaDeptCode;
	}
	public String getInsaPsw() {
		return insaPsw;
	}
	public void setInsaPsw(String insaPsw) {
		this.insaPsw = insaPsw;
	}
	public String getInsaDeptName() {
		return insaDeptName;
	}
	public void setInsaDeptName(String insaDeptName) {
		this.insaDeptName = insaDeptName;
	}
	
	
}