package nexacro.sample.vo.out.web.outlegal.lawno;

public class OutLawNoVO {


	private String lawsuitAdmNo;			// 소송관리번호
	private String instAdmCode;				// 심급코드
	private String instAdmName;				// 심급명
	private String codeName;				// 원피고
	private String pladefName;				// 원피고명
	private String insaName;				// 소송담당자명
	
	
	private String gbcode;					// 구분코드
	private String keyword;					// 검색어
	
	private String instAdmEntLyrId;			// 위임변호사 아이디 INST_ADM_ENT_LYR_ID
	
	private int page;					// 현재 페이지넘버
	private int tpage;				// 총페이지수 +1
	private int trow;				// 아이템수
	private int nrow;				// 마지막페이지 아이템 수, 나머지(%10) 아이템
	
	
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
	public String getLawsuitAdmNo() {
		return lawsuitAdmNo;
	}
	public void setLawsuitAdmNo(String lawsuitAdmNo) {
		this.lawsuitAdmNo = lawsuitAdmNo;
	}
	public String getInstAdmCode() {
		return instAdmCode;
	}
	public void setInstAdmCode(String instAdmCode) {
		this.instAdmCode = instAdmCode;
	}
	public String getInstAdmName() {
		return instAdmName;
	}
	public void setInstAdmName(String instAdmName) {
		this.instAdmName = instAdmName;
	}
	public String getCodeName() {
		return codeName;
	}
	public void setCodeName(String codeName) {
		this.codeName = codeName;
	}
	public String getPladefName() {
		return pladefName;
	}
	public void setPladefName(String pladefName) {
		this.pladefName = pladefName;
	}
	public String getInsaName() {
		return insaName;
	}
	public void setInsaName(String insaName) {
		this.insaName = insaName;
	}
	public String getGbcode() {
		return gbcode;
	}
	public void setGbcode(String gbcode) {
		this.gbcode = gbcode;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getInstAdmEntLyrId() {
		return instAdmEntLyrId;
	}
	public void setInstAdmEntLyrId(String instAdmEntLyrId) {
		this.instAdmEntLyrId = instAdmEntLyrId;
	}


}

/*
searchKeyword
gbParam
*/