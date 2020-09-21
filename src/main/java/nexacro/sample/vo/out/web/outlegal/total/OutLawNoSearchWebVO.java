package nexacro.sample.vo.out.web.outlegal.total;

public class OutLawNoSearchWebVO {
	

	private String lawsuitAdmNo;			//소송관리번호 (소송테이블)
	private String instAdmCode;
	private String instAdmName;				//심급명 (심급테이블)
	
	private String pladefName;				//원피고명 (원피고테이블)
	private String lawsuitCpPladefSepcode;
	private String insaName;				//소송담당자 이름 (인사마스터 테이블)
	
	private String code;					//검색코드
	private String search1;					//코드명
	private String search2;					//검색명

	private String instAdmEntLyrId;			//외부변호사
	private String classCode;
	

	// 페이징 
	/** 한 페이지당 게시되는 게시물 건수 */
	private int recordCountPerPage = 5;
	
	/** 페이징 리스트 사이즈 한페지에 링크숫자 몇번까지*/
	private int pageSize = 5;
	
	/** 조회값 총 개수, 쿼리 조회시 필요 */
	private String totalCount;
	
	/** 현재페이지 조회시 필요 */
	private int pageIndex = 1;

	/** 현재 조회시 첫페이지  */
	private int firstIndex = 1;

	/** 현재 조회시 마지막 페이지  */
	private int lastIndex = 5;
		
	
	
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

	public String getLawsuitCpPladefSepCode() {
		return lawsuitCpPladefSepcode;
	}

	public void setLawsuitCpPladefSepCode(String lawsuitCpPladefSepCode) {
		this.lawsuitCpPladefSepcode = lawsuitCpPladefSepCode;
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

	public String getSearch1() {
		return search1;
	}

	public void setSearch1(String search1) {
		this.search1 = search1;
	}

	public String getSearch2() {
		return search2;
	}

	public void setSearch2(String search2) {
		this.search2 = search2;
	}

	public String getInstAdmEntLyrId() {
		return instAdmEntLyrId;
	}

	public void setInstAdmEntLyrId(String instAdmEntLyrId) {
		this.instAdmEntLyrId = instAdmEntLyrId;
	}

	public String getClassCode() {
		return classCode;
	}

	public void setClassCode(String classCode) {
		this.classCode = classCode;
	}

	public int getRecordCountPerPage() {
		return recordCountPerPage;
	}

	public void setRecordCountPerPage(int recordCountPerPage) {
		this.recordCountPerPage = recordCountPerPage;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public String getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(String totalCount) {
		this.totalCount = totalCount;
	}

	public int getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}

	public int getFirstIndex() {
		return firstIndex;
	}

	public void setFirstIndex(int firstIndex) {
		this.firstIndex = firstIndex;
	}

	public int getLastIndex() {
		return lastIndex;
	}

	public void setLastIndex(int lastIndex) {
		this.lastIndex = lastIndex;
	}

	
	
	
	
}