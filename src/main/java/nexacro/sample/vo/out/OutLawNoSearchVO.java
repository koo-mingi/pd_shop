package nexacro.sample.vo.out;

public class OutLawNoSearchVO {
	

	private String lawsuitAdmNo;			//소송관리번호 (소송테이블)
	private String instAdmName;				//심급명 (심급테이블)
	

	private String pladefName;				//원피고명 (원피고테이블)
	private String lawsuitCpPladefSepCode;
	private String insaName;				//소송담당자 이름 (인사마스터 테이블)
	
	private String code;					//검색코드
	
	private String searchId1;					//검색 type
	private String searchId;					//검색 keyword
	private String lyrId;

	private String instAdmEntLyrId;			//외부변호사

	//Getter & Setter
	public String getLawsuitAdmNo() {
		return lawsuitAdmNo;
	}

	public void setLawsuitAdmNo(String lawsuitAdmNo) {
		this.lawsuitAdmNo = lawsuitAdmNo;
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

	public String getLawsuitCpPladefSepCode() {
		return lawsuitCpPladefSepCode;
	}

	public void setLawsuitCpPladefSepCode(String lawsuitCpPladefSepCode) {
		this.lawsuitCpPladefSepCode = lawsuitCpPladefSepCode;
	}

	public String getInsaName() {
		return insaName;
	}

	public void setInsaName(String insaName) {
		this.insaName = insaName;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getSearchId1() {
		return searchId1;
	}

	public void setSearchId1(String searchId1) {
		this.searchId1 = searchId1;
	}

	public String getSearchId() {
		return searchId;
	}

	public void setSearchId(String searchId) {
		this.searchId = searchId;
	}

	public String getLyrId() {
		return lyrId;
	}

	public void setLyrId(String lyrId) {
		this.lyrId = lyrId;
	}

	public String getInstAdmEntLyrId() {
		return instAdmEntLyrId;
	}

	public void setInstAdmEntLyrId(String instAdmEntLyrId) {
		this.instAdmEntLyrId = instAdmEntLyrId;
	}
	

	
	
	
	
	//ToString
/*	@Override
	public String toString() {
		return "LawNoSearchVO [lawsuitAdmNo=" + lawsuitAdmNo + ", instAdmName="
				+ instAdmName + ", pladefName=" + pladefName + ", insaName="
				+ insaName + ", code=" + code + ", search1=" + search1
				+ ", search2=" + search2 + ", getLawsuitAdmNo()="
				+ getLawsuitAdmNo() + ", getInstAdmName()=" + getInstAdmName()
				+ ", getPladefName()=" + getPladefName() + ", getInsaName()="
				+ getInsaName() + ", getCode()=" + getCode()
				+ ", getSearch1()=" + getSearch1() + ", getSearch2()="
				+ getSearch2() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}*/
	
}