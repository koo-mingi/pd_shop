package nexacro.sample.vo.out.web.outlegal.total;

public class OutPreiwrWebVo {
	
	//법률자문의뢰
	private String legaladvLawAdvReqNo;	                 //법률자문의뢰번호		
	private String legaladvOpenWtr;	                     //공개여부		
	private String legaladvReqDeptCode;	                 //의뢰부서코드		
	private String legaladvReqMgrCode;	                 //의뢰담당자코드		
	private String legaladvReqDate;	                     //의뢰일자		
	private String legaladvAdvTit;	                     //자문제목		
	private String legaladvFactRela;	                 //사실관계		
	private String legaladvQuesIssu;	                 //질의요지		
	private String legaladvEtc;	                         //기타사항		
	private String legaladvLawAdvCode;	                 //법률자문유형분류코드		
	private String legaladvOutReqWtr;	                 //외부의뢰여부		
	private String legaladvReviDay;	                     //검토일수		
	private String legaladvRepDeptCode;	                 //회신부서코드		
	private String legaladvRepMgrCode;	                 //회신담당자코드		
	private String legaladvRepDate;	                     //회신일자		
	private String legaladvRepCont;	                     //회신내용		
	private String legaladvRepTit;	                     //회신제목		
	private String legaladvRepWtr;	                     //회신여부		
	private String legaladvEtcRepPoin;	                 //기타회신사항		
	private String legaladvOutReqTit;	                 //외부의뢰제목		
	private String legaladvOutReqLyrid;	                 //외부의뢰변호사ID		
	private String legaladvOutReqRepdate;	             //외부의뢰회신요청일자		
	private String legaladvOutReqDate;	                 //외부의뢰일자		
	private String legaladvOutReqFact;	                 //외부의뢰사실관계		
	private String legaladvOutReqQues;	                 //외부의뢰질의사항		
	private String legaladvOutReqReq;                    //외부의뢰요청사항		
	
	//심급 목록
	private String LawsuitAdmNo;
	private String InstAdmCode;
	private String InstAdmPrgrCode;
	private String InstAdmCaseNo;
	private String InstAdmName;
	private String InstAdmCortCode;
	private String InstAdmRaisreqDate;
	private String InstAdmJudId;
	private String InstAdmIssuPoin;
	
	//준비서면 목록
	private String PreIwrNo;
	private String PreIwrDfsDeg;
	private String PreIwrName;
	private String PreIwrWritDate;
	private String PreIwrCompWtr;
	private String PreIwrIssuSepcode;
	private String PreIwrCont;
	private String PreIwrOutLyrid;
	
	private String instAdmJudName;
	private String preIwrOutLyrname;
	
	//준비서면팝업
	private String lawsuitAdmNo;			//소송관리번호 (소송테이블)
	private String instAdmName;				//심급명 (심급테이블)
	private String pladefName;				//원피고명 (원피고테이블)
	private String lawsuitCpPladefSepCode;
	private String insaName;				//소송담당자 이름 (인사마스터 테이블)
	private String code;					//검색코드
	private String search1;					//코드명
	private String search2;					//검색명
	private String instAdmEntLyrId;			//외부변호사
	
	//의뢰기간
	private String legaladvReqDate1;	
	private String legaladvReqDate2;
	
	//법률자문비
	private String legaladvCostLawadvReqno;	             //법률자문의뢰번호		
	private String legaladvCostLawadvSeq;	             //법률자문비일련번호		
	private String legaladvCostReqCost;	                 //자문수수료		
	private String legaladvCostStax;                     //부가세		
	private String legaladvCostClamsumChg;	             //청구합계금액		
	private String legaladvCostRepCont;                  //회신내용	
	
	/** 페이지 총 개수 */
	private String totalCount;
	
	/** 페이징 리스트 사이즈 */
	private int pageSize = 2;
	
	/** 현재페이지 */
	private int pageIndex = 1;

	/** 한 페이지에 게시되는 게시물 건수 */
	private int pageUnit = 5;

	/** 첫페이지 설정 */
	private int firstIndex = 1;

	/** 마지막 페이지 설정 */
	private int lastIndex = 1;

	/** 총 페이지 크기 설정 */
	private int recordCountPerPage = 5;
	
	
	//심급 목록
	public String getLawsuitAdmNo() {
		return LawsuitAdmNo;
	}
	public void setLawsuitAdmNo(String lawsuitAdmNo) {
		LawsuitAdmNo = lawsuitAdmNo;
	}
	public String getInstAdmCode() {
		return InstAdmCode;
	}
	public void setInstAdmCode(String instAdmCode) {
		InstAdmCode = instAdmCode;
	}
	public String getInstAdmPrgrCode() {
		return InstAdmPrgrCode;
	}
	public void setInstAdmPrgrCode(String instAdmPrgrCode) {
		InstAdmPrgrCode = instAdmPrgrCode;
	}
	public String getInstAdmCaseNo() {
		return InstAdmCaseNo;
	}
	public void setInstAdmCaseNo(String instAdmCaseNo) {
		InstAdmCaseNo = instAdmCaseNo;
	}
	public String getInstAdmName() {
		return InstAdmName;
	}
	public void setInstAdmName(String instAdmName) {
		InstAdmName = instAdmName;
	}
	public String getInstAdmCortCode() {
		return InstAdmCortCode;
	}
	public void setInstAdmCortCode(String instAdmCortCode) {
		InstAdmCortCode = instAdmCortCode;
	}
	public String getInstAdmRaisreqDate() {
		return InstAdmRaisreqDate;
	}
	public void setInstAdmRaisreqDate(String instAdmRaisreqDate) {
		InstAdmRaisreqDate = instAdmRaisreqDate;
	}
	public String getInstAdmJudId() {
		return InstAdmJudId;
	}
	public void setInstAdmJudId(String instAdmJudId) {
		InstAdmJudId = instAdmJudId;
	}
	public String getInstAdmIssuPoin() {
		return InstAdmIssuPoin;
	}
	public void setInstAdmIssuPoin(String instAdmIssuPoin) {
		InstAdmIssuPoin = instAdmIssuPoin;
	}
	
	
	//준비서면 목록
	public String getPreIwrNo() {
		return PreIwrNo;
	}
	public void setPreIwrNo(String preIwrNo) {
		PreIwrNo = preIwrNo;
	}
	public String getPreIwrDfsDeg() {
		return PreIwrDfsDeg;
	}
	public void setPreIwrDfsDeg(String preIwrDfsDeg) {
		PreIwrDfsDeg = preIwrDfsDeg;
	}
	public String getPreIwrName() {
		return PreIwrName;
	}
	public void setPreIwrName(String preIwrName) {
		PreIwrName = preIwrName;
	}
	public String getPreIwrWritDate() {
		return PreIwrWritDate;
	}
	public void setPreIwrWritDate(String preIwrWritDate) {
		PreIwrWritDate = preIwrWritDate;
	}
	public String getPreIwrCompWtr() {
		return PreIwrCompWtr;
	}
	public void setPreIwrCompWtr(String preIwrCompWtr) {
		PreIwrCompWtr = preIwrCompWtr;
	}
	public String getPreIwrIssuSepcode() {
		return PreIwrIssuSepcode;
	}
	public void setPreIwrIssuSepcode(String preIwrIssuSepcode) {
		PreIwrIssuSepcode = preIwrIssuSepcode;
	}
	public String getPreIwrCont() {
		return PreIwrCont;
	}
	public void setPreIwrCont(String preIwrCont) {
		PreIwrCont = preIwrCont;
	}
	public String getPreIwrOutLyrid() {
		return PreIwrOutLyrid;
	}
	public void setPreIwrOutLyrid(String preIwrOutLyrid) {
		PreIwrOutLyrid = preIwrOutLyrid;
	}
	public String getInstAdmJudName() {
		return instAdmJudName;
	}
	public void setInstAdmJudName(String instAdmJudName) {
		this.instAdmJudName = instAdmJudName;
	}
	public String getPreIwrOutLyrname() {
		return preIwrOutLyrname;
	}
	public void setPreIwrOutLyrname(String preIwrOutLyrname) {
		this.preIwrOutLyrname = preIwrOutLyrname;
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
	public String getLegaladvLawAdvReqNo() {
		return legaladvLawAdvReqNo;
	}
	public void setLegaladvLawAdvReqNo(String legaladvLawAdvReqNo) {
		this.legaladvLawAdvReqNo = legaladvLawAdvReqNo;
	}
	public String getLegaladvOpenWtr() {
		return legaladvOpenWtr;
	}
	public void setLegaladvOpenWtr(String legaladvOpenWtr) {
		this.legaladvOpenWtr = legaladvOpenWtr;
	}
	public String getLegaladvReqDeptCode() {
		return legaladvReqDeptCode;
	}
	public void setLegaladvReqDeptCode(String legaladvReqDeptCode) {
		this.legaladvReqDeptCode = legaladvReqDeptCode;
	}
	public String getLegaladvReqMgrCode() {
		return legaladvReqMgrCode;
	}
	public void setLegaladvReqMgrCode(String legaladvReqMgrCode) {
		this.legaladvReqMgrCode = legaladvReqMgrCode;
	}
	public String getLegaladvReqDate() {
		return legaladvReqDate;
	}
	public void setLegaladvReqDate(String legaladvReqDate) {
		this.legaladvReqDate = legaladvReqDate;
	}
	public String getLegaladvAdvTit() {
		return legaladvAdvTit;
	}
	public void setLegaladvAdvTit(String legaladvAdvTit) {
		this.legaladvAdvTit = legaladvAdvTit;
	}
	public String getLegaladvFactRela() {
		return legaladvFactRela;
	}
	public void setLegaladvFactRela(String legaladvFactRela) {
		this.legaladvFactRela = legaladvFactRela;
	}
	public String getLegaladvQuesIssu() {
		return legaladvQuesIssu;
	}
	public void setLegaladvQuesIssu(String legaladvQuesIssu) {
		this.legaladvQuesIssu = legaladvQuesIssu;
	}
	public String getLegaladvEtc() {
		return legaladvEtc;
	}
	public void setLegaladvEtc(String legaladvEtc) {
		this.legaladvEtc = legaladvEtc;
	}
	public String getLegaladvLawAdvCode() {
		return legaladvLawAdvCode;
	}
	public void setLegaladvLawAdvCode(String legaladvLawAdvCode) {
		this.legaladvLawAdvCode = legaladvLawAdvCode;
	}
	public String getLegaladvOutReqWtr() {
		return legaladvOutReqWtr;
	}
	public void setLegaladvOutReqWtr(String legaladvOutReqWtr) {
		this.legaladvOutReqWtr = legaladvOutReqWtr;
	}
	public String getLegaladvReviDay() {
		return legaladvReviDay;
	}
	public void setLegaladvReviDay(String legaladvReviDay) {
		this.legaladvReviDay = legaladvReviDay;
	}
	public String getLegaladvRepDeptCode() {
		return legaladvRepDeptCode;
	}
	public void setLegaladvRepDeptCode(String legaladvRepDeptCode) {
		this.legaladvRepDeptCode = legaladvRepDeptCode;
	}
	public String getLegaladvRepMgrCode() {
		return legaladvRepMgrCode;
	}
	public void setLegaladvRepMgrCode(String legaladvRepMgrCode) {
		this.legaladvRepMgrCode = legaladvRepMgrCode;
	}
	public String getLegaladvRepDate() {
		return legaladvRepDate;
	}
	public void setLegaladvRepDate(String legaladvRepDate) {
		this.legaladvRepDate = legaladvRepDate;
	}
	public String getLegaladvRepCont() {
		return legaladvRepCont;
	}
	public void setLegaladvRepCont(String legaladvRepCont) {
		this.legaladvRepCont = legaladvRepCont;
	}
	public String getLegaladvRepTit() {
		return legaladvRepTit;
	}
	public void setLegaladvRepTit(String legaladvRepTit) {
		this.legaladvRepTit = legaladvRepTit;
	}
	public String getLegaladvRepWtr() {
		return legaladvRepWtr;
	}
	public void setLegaladvRepWtr(String legaladvRepWtr) {
		this.legaladvRepWtr = legaladvRepWtr;
	}
	public String getLegaladvEtcRepPoin() {
		return legaladvEtcRepPoin;
	}
	public void setLegaladvEtcRepPoin(String legaladvEtcRepPoin) {
		this.legaladvEtcRepPoin = legaladvEtcRepPoin;
	}
	public String getLegaladvOutReqTit() {
		return legaladvOutReqTit;
	}
	public void setLegaladvOutReqTit(String legaladvOutReqTit) {
		this.legaladvOutReqTit = legaladvOutReqTit;
	}
	public String getLegaladvOutReqLyrid() {
		return legaladvOutReqLyrid;
	}
	public void setLegaladvOutReqLyrid(String legaladvOutReqLyrid) {
		this.legaladvOutReqLyrid = legaladvOutReqLyrid;
	}
	public String getLegaladvOutReqRepdate() {
		return legaladvOutReqRepdate;
	}
	public void setLegaladvOutReqRepdate(String legaladvOutReqRepdate) {
		this.legaladvOutReqRepdate = legaladvOutReqRepdate;
	}
	public String getLegaladvOutReqDate() {
		return legaladvOutReqDate;
	}
	public void setLegaladvOutReqDate(String legaladvOutReqDate) {
		this.legaladvOutReqDate = legaladvOutReqDate;
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
	public String getLegaladvReqDate1() {
		return legaladvReqDate1;
	}
	public void setLegaladvReqDate1(String legaladvReqDate1) {
		this.legaladvReqDate1 = legaladvReqDate1;
	}
	public String getLegaladvReqDate2() {
		return legaladvReqDate2;
	}
	public void setLegaladvReqDate2(String legaladvReqDate2) {
		this.legaladvReqDate2 = legaladvReqDate2;
	}

	
	
}
