package nexacro.sample.vo.out.legal.lawsuitno;

public class LawsuitNoVo {

	
	private String lawsuitAdmNo;			// 소송관리번호
	private String instAdmCode;				// 심급코드
	private String instAdmName;				// 심급명
	private String codeName;				// 원피고
	private String pladefName;				// 원피고명
	private String lawsuitMgrName;			// 소송담당자명
	
	private String gbcode;					// 구분코드
	private String keyword;					// 검색어
	
	
	

	public String getCodeName() {
		return codeName;
	}
	public void setCodeName(String codeName) {
		this.codeName = codeName;
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
	
	
	
	
	public String getPladefName() {
		return pladefName;
	}
	public void setPladefName(String pladefName) {
		this.pladefName = pladefName;
	}
	

	
	public void setGbcode(String gbcode) {
		this.gbcode = gbcode;
	}
	
	public String getGbcode() {
		return gbcode;
	}
	
	
	public String getKeyword() {
		return keyword;
	}		
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getLawsuitMgrName() {
		return lawsuitMgrName;
	}
	public void setLawsuitMgrName(String lawsuitMgrName) {
		this.lawsuitMgrName = lawsuitMgrName;
	}

	
	
	
}
