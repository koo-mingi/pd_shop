package nexacro.sample.vo.out.web.outlegal.total;

/*
 * TAB_LAW_FIXINFO			소송기일정보
 * 
LAWSUIT_ADM_NO				소송관리번호			VARCHAR2
INST_ADM_CODE				심급코드				VARCHAR2
LAW_FIXINFO_NUM				일련번호				NUMBER
LAW_FIXINFO_SEPCODE			기일구분코드			VARCHAR2
LAW_FIXINFO_DATE			기일일시				DATE
LAW_FIXINFO_PLC				기일장소				VARCHAR2
LAW_FIXINFO_MAIN_ISSU		주요쟁점사항			VARCHAR2
LAW_FIXINFO_CP_INSI			당사주장				VARCHAR2
LAW_FIXINFO_OTH_INSI		상대방주장				VARCHAR2
LAW_FIXINFO_CORT_OPIN		재판부의견				VARCHAR2
LAW_FIXINFO_LYR_OPIN		변호사의견				VARCHAR2
LAW_FIXINFO_DLIN_DATE		기일마감일시			DATE
*/

public class OutFixinfoWebVO {
	
	private String lawsuitAdmNo;	
	private String instAdmCode;
	private String lawFixinfoNum;	
	private String lawFixinfoSepcode;	
	private String lawFixinfoDate;
	private String lawFixinfoPlc;
	private String lawFixinfoMainIssu;
	private String lawFixinfoCpInsi;
	private String lawFixinfoOthInsi;	
	private String lawFixinfoCortOpin;	
	private String lawFixinfoLyrOpin;
	private String lawFixinfoDlinDate;
	private String legaladvOutReqLyrid;	                 //외부의뢰변호사ID	
	
	private String lawFixinfoDate1;
	private String lawFixinfoDate2;
	private String lawFixinfoDate3;
	private String lawFixinfoDlinDate1;
	private String lawFixinfoDlinDate2;
	private String lawFixinfoDlinDate3;
	
	public String getLawFixinfoDate1() {
		return lawFixinfoDate1;
	}

	public void setLawFixinfoDate1(String lawFixinfoDate1) {
		this.lawFixinfoDate1 = lawFixinfoDate1;
	}

	public String getLawFixinfoDate2() {
		return lawFixinfoDate2;
	}

	public void setLawFixinfoDate2(String lawFixinfoDate2) {
		this.lawFixinfoDate2 = lawFixinfoDate2;
	}

	public String getLawFixinfoDate3() {
		return lawFixinfoDate3;
	}

	public void setLawFixinfoDate3(String lawFixinfoDate3) {
		this.lawFixinfoDate3 = lawFixinfoDate3;
	}

	public String getLawFixinfoDlinDate1() {
		return lawFixinfoDlinDate1;
	}

	public void setLawFixinfoDlinDate1(String lawFixinfoDlinDate1) {
		this.lawFixinfoDlinDate1 = lawFixinfoDlinDate1;
	}

	public String getLawFixinfoDlinDate2() {
		return lawFixinfoDlinDate2;
	}

	public void setLawFixinfoDlinDate2(String lawFixinfoDlinDate2) {
		this.lawFixinfoDlinDate2 = lawFixinfoDlinDate2;
	}

	public String getLawFixinfoDlinDate3() {
		return lawFixinfoDlinDate3;
	}

	public void setLawFixinfoDlinDate3(String lawFixinfoDlinDate3) {
		this.lawFixinfoDlinDate3 = lawFixinfoDlinDate3;
	}

	private String classCode;
	
	/** 페이지 총 개수 */
	private String totalCount;
	
	/** 페이징 리스트 사이즈 한페지에 링크숫자 몇번까지*/
	private int pageSize = 5;
	
	/** 현재페이지 */
	private int pageIndex = 1;

	/** 한 페이지에 게시되는 게시물 건수 */
	private int pageUnit = 5;

	/** 첫페이지 설정 */
	private int firstIndex = 1;

	/** 마지막 페이지 설정 */
	private int lastIndex = 5;

	/** 총 페이지 크기 설정 */
	private int recordCountPerPage = 5;

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

	public String getLawFixinfoNum() {
		return lawFixinfoNum;
	}

	public void setLawFixinfoNum(String lawFixinfoNum) {
		this.lawFixinfoNum = lawFixinfoNum;
	}

	public String getLawFixinfoSepcode() {
		return lawFixinfoSepcode;
	}

	public void setLawFixinfoSepcode(String lawFixinfoSepcode) {
		this.lawFixinfoSepcode = lawFixinfoSepcode;
	}

	public String getLawFixinfoDate() {
		return lawFixinfoDate;
	}

	public void setLawFixinfoDate(String lawFixinfoDate) {
		this.lawFixinfoDate = lawFixinfoDate;
	}

	public String getLawFixinfoPlc() {
		return lawFixinfoPlc;
	}

	public void setLawFixinfoPlc(String lawFixinfoPlc) {
		this.lawFixinfoPlc = lawFixinfoPlc;
	}

	public String getLawFixinfoMainIssu() {
		return lawFixinfoMainIssu;
	}

	public void setLawFixinfoMainIssu(String lawFixinfoMainIssu) {
		this.lawFixinfoMainIssu = lawFixinfoMainIssu;
	}

	public String getLawFixinfoCpInsi() {
		return lawFixinfoCpInsi;
	}

	public void setLawFixinfoCpInsi(String lawFixinfoCpInsi) {
		this.lawFixinfoCpInsi = lawFixinfoCpInsi;
	}

	public String getLawFixinfoOthInsi() {
		return lawFixinfoOthInsi;
	}

	public void setLawFixinfoOthInsi(String lawFixinfoOthInsi) {
		this.lawFixinfoOthInsi = lawFixinfoOthInsi;
	}

	public String getLawFixinfoCortOpin() {
		return lawFixinfoCortOpin;
	}

	public void setLawFixinfoCortOpin(String lawFixinfoCortOpin) {
		this.lawFixinfoCortOpin = lawFixinfoCortOpin;
	}

	public String getLawFixinfoLyrOpin() {
		return lawFixinfoLyrOpin;
	}

	public void setLawFixinfoLyrOpin(String lawFixinfoLyrOpin) {
		this.lawFixinfoLyrOpin = lawFixinfoLyrOpin;
	}

	public String getLawFixinfoDlinDate() {
		return lawFixinfoDlinDate;
	}

	public void setLawFixinfoDlinDate(String lawFixinfoDlinDate) {
		this.lawFixinfoDlinDate = lawFixinfoDlinDate;
	}

	public String getLegaladvOutReqLyrid() {
		return legaladvOutReqLyrid;
	}

	public void setLegaladvOutReqLyrid(String legaladvOutReqLyrid) {
		this.legaladvOutReqLyrid = legaladvOutReqLyrid;
	}

	public String getClassCode() {
		return classCode;
	}

	public void setClassCode(String classCode) {
		this.classCode = classCode;
	}

	public String getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(String totalCount) {
		this.totalCount = totalCount;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}

	public int getPageUnit() {
		return pageUnit;
	}

	public void setPageUnit(int pageUnit) {
		this.pageUnit = pageUnit;
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

	public int getRecordCountPerPage() {
		return recordCountPerPage;
	}

	public void setRecordCountPerPage(int recordCountPerPage) {
		this.recordCountPerPage = recordCountPerPage;
	}
	
	
	
}