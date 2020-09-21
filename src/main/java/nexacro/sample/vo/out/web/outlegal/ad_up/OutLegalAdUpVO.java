package nexacro.sample.vo.out.web.outlegal.ad_up;

public class OutLegalAdUpVO {

	private String gbParam; 				// 전체, 세부 구분자
	
	private int page;					// 현재 페이지넘버
	private int tpage;				// 총페이지수 +1
	private int trow;				// 아이템수
	private int nrow;				// 마지막페이지 아이템 수, 나머지(%10) 아이템
	
	private String legaladvLawAdvReqNo;		// 자문의뢰번호
	private String codeName;				// 자문구분이름
	private String legaladvAdvTit;			// 자문의뢰제목
	private String legaladvReqDate;			// 의뢰일자
	private String insaName;				// 의뢰담당자이름
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getTpage() {
		return tpage;
	}
	public void setTpage(int tpage) {
		this.tpage = tpage;
	}
	public int getTrow() {
		return trow;
	}
	public void setTrow(int trow) {
		this.trow = trow;
	}
	public int getNrow() {
		return nrow;
	}
	public void setNrow(int nrow) {
		this.nrow = nrow;
	}
	private String legaladvOutReqRepdate; 	// 회신요청일자
	
	private String legaladvOutReqLyrid; 	// 의뢰변호사id LEGALADV_OUT_REQ_LYRID
	private String legaladvLawAdvCode;		// 자문유형분류코드
	private String legaladvReqMgrCode;		// 의뢰담당자 코드
		
	private String legaladvOutReqFact;		// 외부의뢰사실관계
	private String legaladvOutReqQues;		// 외부의뢰질의사항
	private String legaladvOutReqReq;		// 외부의뢰요청사항
	
	private String date1;					// 조회 시작날짜
	private String date2;					// 조회 마지막날짜
	
	// 회신
	private String legaladvRepDate;			// 회신일자
	private String legaladvRepTit;			// 회신제목	
	private String legaladvRepCont;			// 회신내용
	private String legaladvEtcRepPoin;		// 기타회신사항
	private String legaladvRepWtr;			// 회신여부


	
	private String legaladvRepMgrCode;			// 내부회신담당자1
	private String legaladvOutReqDate;			// 외부의뢰일자1
	private String legaladvOutRepWtr;			// 외부회신여부1
	private String legaladvOutRepDate;			// 외부회신일자2
	private String legaladvOutRepTit;			// 외부회신제목	1
	private String legaladvOutRepCont;			// 외부회신내용1
	private String legaladvOutEtcRepPoin;		// 외부기타회신사항1
	
	
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
	public String getLegaladvOutReqRepdate() {
		return legaladvOutReqRepdate;
	}
	public void setLegaladvOutReqRepdate(String legaladvOutReqRepdate) {
		this.legaladvOutReqRepdate = legaladvOutReqRepdate;
	}
	public String getLegaladvOutReqLyrid() {
		return legaladvOutReqLyrid;
	}
	public void setLegaladvOutReqLyrid(String legaladvOutReqLyrid) {
		this.legaladvOutReqLyrid = legaladvOutReqLyrid;
	}
	public String getLegaladvLawAdvCode() {
		return legaladvLawAdvCode;
	}
	public void setLegaladvLawAdvCode(String legaladvLawAdvCode) {
		this.legaladvLawAdvCode = legaladvLawAdvCode;
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
	public String getLegaladvOutReqFact() {
		return legaladvOutReqFact;
	}
	public void setLegaladvOutReqFact(String legaladvOutReqFact) {
		this.legaladvOutReqFact = legaladvOutReqFact;
	}
	public String getLegaladvOutReqQues() {
		return legaladvOutReqQues;
	}
	public void setLegaladvOutReqQues(String legaladvOutReqQues) {
		this.legaladvOutReqQues = legaladvOutReqQues;
	}
	public String getLegaladvOutReqReq() {
		return legaladvOutReqReq;
	}
	public void setLegaladvOutReqReq(String legaladvOutReqReq) {
		this.legaladvOutReqReq = legaladvOutReqReq;
	}
	public String getGbParam() {
		return gbParam;
	}
	public void setGbParam(String gbParam) {
		this.gbParam = gbParam;
	}
	public String getLegaladvRepTit() {
		return legaladvRepTit;
	}
	public void setLegaladvRepTit(String legaladvRepTit) {
		this.legaladvRepTit = legaladvRepTit;
	}
	public String getLegaladvRepCont() {
		return legaladvRepCont;
	}
	public void setLegaladvRepCont(String legaladvRepCont) {
		this.legaladvRepCont = legaladvRepCont;
	}
	public String getLegaladvEtcRepPoin() {
		return legaladvEtcRepPoin;
	}
	public void setLegaladvEtcRepPoin(String legaladvEtcRepPoin) {
		this.legaladvEtcRepPoin = legaladvEtcRepPoin;
	}
	public String getLegaladvRepMgrCode() {
		return legaladvRepMgrCode;
	}
	public void setLegaladvRepMgrCode(String legaladvRepMgrCode) {
		this.legaladvRepMgrCode = legaladvRepMgrCode;
	}
	public String getLegaladvOutReqDate() {
		return legaladvOutReqDate;
	}
	public void setLegaladvOutReqDate(String legaladvOutReqDate) {
		this.legaladvOutReqDate = legaladvOutReqDate;
	}
	public String getLegaladvOutRepWtr() {
		return legaladvOutRepWtr;
	}
	public void setLegaladvOutRepWtr(String legaladvOutRepWtr) {
		this.legaladvOutRepWtr = legaladvOutRepWtr;
	}
	public String getLegaladvOutRepDate() {
		return legaladvOutRepDate;
	}
	public void setLegaladvOutRepDate(String legaladvOutRepDate) {
		this.legaladvOutRepDate = legaladvOutRepDate;
	}
	public String getLegaladvOutRepTit() {
		return legaladvOutRepTit;
	}
	public void setLegaladvOutRepTit(String legaladvOutRepTit) {
		this.legaladvOutRepTit = legaladvOutRepTit;
	}
	public String getLegaladvOutRepCont() {
		return legaladvOutRepCont;
	}
	public void setLegaladvOutRepCont(String legaladvOutRepCont) {
		this.legaladvOutRepCont = legaladvOutRepCont;
	}
	public String getLegaladvOutEtcRepPoin() {
		return legaladvOutEtcRepPoin;
	}
	public void setLegaladvOutEtcRepPoin(String legaladvOutEtcRepPoin) {
		this.legaladvOutEtcRepPoin = legaladvOutEtcRepPoin;
	}
	
	
	
	
	
	
	
	
}
