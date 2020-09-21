package nexacro.sample.vo.out.legal.advrq;

public class OutLegalAdvVO {

	private String legaladvLawAdvReqNo;	// 자문의뢰번호
	private String codeName;			// 자문구분이름
	private String legaladvAdvTit;		// 자문의뢰제목
	private String legaladvRepWtr;		// 회신여부
	private String legaladvReqDate;		// 의뢰일자
	private String insaName;			// 의뢰담당자이름
	private String legaladvRepDate;		// 회신일자
	
	private String legaladvOutReqLyrid; // 의뢰변호사id LEGALADV_OUT_REQ_LYRID
	private String legaladvLawAdvCode;	// 자문유형분류코드
	private String legaladvReqMgrCode;	//의뢰담당자 코드
	
	private String date1;				// 조회 시작날짜
	private String date2;				// 조회 마지막날짜
	
	public String getLegaladvLawAdvReqNo() {
		return legaladvLawAdvReqNo;
	}
	public void setLegaladvLawAdvReqNo(String legaladvLawAdvReqNo) {
		this.legaladvLawAdvReqNo = legaladvLawAdvReqNo;
	}
	public String getCodeName() {
		return codeName;
	}
	public void setCodeName(String codeName) {
		this.codeName = codeName;
	}
	public String getLegaladvAdvTit() {
		return legaladvAdvTit;
	}
	public void setLegaladvAdvTit(String legaladvAdvTit) {
		this.legaladvAdvTit = legaladvAdvTit;
	}
	public String getLegaladvRepWtr() {
		return legaladvRepWtr;
	}
	public void setLegaladvRepWtr(String legaladvRepWtr) {
		this.legaladvRepWtr = legaladvRepWtr;
	}
	public String getLegaladvReqDate() {
		return legaladvReqDate;
	}
	public void setLegaladvReqDate(String legaladvReqDate) {
		this.legaladvReqDate = legaladvReqDate;
	}
	public String getInsaName() {
		return insaName;
	}
	public void setInsaName(String insaName) {
		this.insaName = insaName;
	}
	public String getLegaladvRepDate() {
		return legaladvRepDate;
	}
	public void setLegaladvRepDate(String legaladvRepDate) {
		this.legaladvRepDate = legaladvRepDate;
	}
	public String getLegaladvOutReqLyrid() {
		return legaladvOutReqLyrid;
	}
	public void setLegaladvOutReqLyrid(String legaladvOutReqLyrid) {
		this.legaladvOutReqLyrid = legaladvOutReqLyrid;
	}
	
	public String getLegaladvReqMgrCode() {
		return legaladvReqMgrCode;
	}
	public void setLegaladvReqMgrCode(String legaladvReqMgrCode) {
		this.legaladvReqMgrCode = legaladvReqMgrCode;
	}
	public String getDate1() {
		return date1;
	}
	public void setDate1(String date1) {
		this.date1 = date1;
	}
	public String getDate2() {
		return date2;
	}
	public void setDate2(String date2) {
		this.date2 = date2;
	}
	public String getLegaladvLawAdvCode() {
		return legaladvLawAdvCode;
	}
	public void setLegaladvLawAdvCode(String legaladvLawAdvCode) {
		this.legaladvLawAdvCode = legaladvLawAdvCode;
	}
	
}
