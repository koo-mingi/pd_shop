package nexacro.sample.vo.out.web.outlegal.total;


public class OutLegalWebVo {
	private String legaladvOutRepWtr;			// 외부회신여부1
	private String legaladvOutRepDate;			// 외부회신일자2
	private String legaladvOutRepTit;			// 외부회신제목	1
	private String legaladvOutRepCont;			// 외부회신내용1
	private String legaladvOutEtcRepPoin;		// 외부기타회신사항1
	
	
	
	
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
	
	//법률자문비
	private String legaladvCostLawadvReqno;	             //법률자문의뢰번호		
	private String legaladvCostLawadvSeq;	             //법률자문비일련번호		
	private String legaladvCostReqCost;	                 //자문수수료		
	private String legaladvCostStax;                     //부가세		
	private String legaladvCostClamsumChg;	             //청구합계금액		
	private String legaladvCostRepCont;                  //회신내용	
	
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
	private String instAdmCode;				//심급코드
	private String instAdmName;				//심급명 (심급테이블)
	private String pladefName;				//원피고명 (원피고테이블)
	private String lawsuitCpPladefSepCode;
	private String insaName;				//소송담당자 이름 (인사마스터 테이블)
	private String code;					//검색코드
	private String search1;					//코드명
	private String search2;					//검색명
	private String instAdmEntLyrId;			//외부변호사
		
	
	//의뢰담당자, 회신담당자 조회
	private String reqMgrName;  
	private String repMgrName;  
	
	private String classCode;
	
	//의뢰기간
	private String legaladvReqDate1;	
	private String legaladvReqDate2;
	
	//서증관리
	
	private String edocAdmSeq;
	private String edocAdmHozSepcode;	
	private String edocAdmHozNo;
	private String edocAdmHozkindSepcode;	
	private String edocAdmName;
	private String edocAdmWritDate;
	private String lawsuitCaseTyCode;
	private String instAdmCortCode;
	
	//첨부파일
	private String addFileAdmName;	// 파일관리명
	private String addFileRelSeq;	// 첨부파일일련번호
	private String addFileCode;		// 첨부파일구분코드
	private String addFilePcFile;	// PC파일명
	private String addFilePcFileExt;// PC파일확장자	
	private Integer addFileSize;		// 파일크기
	private String addFileSerPath;	// 서버저장경로
	private String addFileSerFileName;	// 서버저장파일명
	private String addFileDownCount;	// 다운로드회수
	private String addFileDel;			// 삭제여부
	private String addFileRegDate;		// 등록일시
	private String addFileChanDate;		// 변경일자
	private String addFileCheck;		// 파일체크
	
	private String edocAddFileSeq;    //서증첨부파일
	private String preAddFileSeq;		 //준비서면 첨부파일
	
	private String imgHeight = "";
	private String imgWidth = "";
	
	
	private int pageUnit;
	// 페이징 
	/** 한 페이지당 게시되는 게시물 건수 */
	private int recordCountPerPage = 5;
	
	/** 페이징 리스트 사이즈 한페지에 링크숫자 몇번까지*/
	private int pageSize = 5;
	
	/** 조회값 총 개수, 쿼리 조회시 필요 */
	private String totalCount;
	private String totalCount1;
	private String totalCount2;
	
	/** 현재페이지 조회시 필요 */
	private int pageIndex = 1;
	private int pageIndex1 = 1;
	private int pageIndex2 = 1;

	/** 현재 조회시 첫페이지  */
	private int firstIndex = 1;
	private int firstIndex1 = 1;

	/** 현재 조회시 마지막 페이지  */
	private int lastIndex = 5;
	private int lastIndex1 = 5;
	
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
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
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
	
	
	public String getTotalCount1() {
		return totalCount1;
	}
	public void setTotalCount1(String totalCount1) {
		this.totalCount1 = totalCount1;
	}
	public String getTotalCount2() {
		return totalCount2;
	}
	public void setTotalCount2(String totalCount2) {
		this.totalCount2 = totalCount2;
	}
	public int getPageIndex1() {
		return pageIndex1;
	}
	public void setPageIndex1(int pageIndex1) {
		this.pageIndex1 = pageIndex1;
	}
	public int getPageIndex2() {
		return pageIndex2;
	}
	public void setPageIndex2(int pageIndex2) {
		this.pageIndex2 = pageIndex2;
	}
	public int getFirstIndex1() {
		return firstIndex1;
	}
	public void setFirstIndex1(int firstIndex1) {
		this.firstIndex1 = firstIndex1;
	}
	public int getLastIndex1() {
		return lastIndex1;
	}
	public void setLastIndex1(int lastIndex1) {
		this.lastIndex1 = lastIndex1;
	}
	public String getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(String totalCount) {
		this.totalCount = totalCount;
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
	
	//자문비 내역
	
	public String getLegaladvCostLawadvSeq() {
		return legaladvCostLawadvSeq;
	}
	public String getLegaladvCostLawadvReqno() {
		return legaladvCostLawadvReqno;
	}
	public void setLegaladvCostLawadvReqno(String legaladvCostLawadvReqno) {
		this.legaladvCostLawadvReqno = legaladvCostLawadvReqno;
	}
	public void setLegaladvCostLawadvSeq(String legaladvCostLawadvSeq) {
		this.legaladvCostLawadvSeq = legaladvCostLawadvSeq;
	}
	public String getLegaladvCostReqCost() {
		return legaladvCostReqCost;
	}
	public void setLegaladvCostReqCost(String legaladvCostReqCost) {
		this.legaladvCostReqCost = legaladvCostReqCost;
	}
	public String getLegaladvCostStax() {
		return legaladvCostStax;
	}
	public void setLegaladvCostStax(String legaladvCostStax) {
		this.legaladvCostStax = legaladvCostStax;
	}
	public String getLegaladvCostClamsumChg() {
		return legaladvCostClamsumChg;
	}
	public void setLegaladvCostClamsumChg(String legaladvCostClamsumChg) {
		this.legaladvCostClamsumChg = legaladvCostClamsumChg;
	}
	public String getLegaladvCostRepCont() {
		return legaladvCostRepCont;
	}
	public void setLegaladvCostRepCont(String legaladvCostRepCont) {
		this.legaladvCostRepCont = legaladvCostRepCont;
	}
	
	//의뢰담당자, 회신담당자 조회
	public String getReqMgrName() {
		return reqMgrName;
	}
	public void setReqMgrName(String reqMgrName) {
		this.reqMgrName = reqMgrName;
	}
	public String getRepMgrName() {
		return repMgrName;
	}
	public void setRepMgrName(String repMgrName) {
		this.repMgrName = repMgrName;
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
	public String getInstAdmCode() {
		return instAdmCode;
	}
	public void setInstAdmCode(String instAdmCode) {
		this.instAdmCode = instAdmCode;
	}
	public String getEdocAdmSeq() {
		return edocAdmSeq;
	}
	public void setEdocAdmSeq(String edocAdmSeq) {
		this.edocAdmSeq = edocAdmSeq;
	}
	public String getEdocAdmHozSepcode() {
		return edocAdmHozSepcode;
	}
	public void setEdocAdmHozSepcode(String edocAdmHozSepcode) {
		this.edocAdmHozSepcode = edocAdmHozSepcode;
	}
	public String getEdocAdmHozNo() {
		return edocAdmHozNo;
	}
	public void setEdocAdmHozNo(String edocAdmHozNo) {
		this.edocAdmHozNo = edocAdmHozNo;
	}
	public String getEdocAdmHozkindSepcode() {
		return edocAdmHozkindSepcode;
	}
	public void setEdocAdmHozkindSepcode(String edocAdmHozkindSepcode) {
		this.edocAdmHozkindSepcode = edocAdmHozkindSepcode;
	}
	public String getEdocAdmName() {
		return edocAdmName;
	}
	public void setEdocAdmName(String edocAdmName) {
		this.edocAdmName = edocAdmName;
	}
	public String getEdocAdmWritDate() {
		return edocAdmWritDate;
	}
	public void setEdocAdmWritDate(String edocAdmWritDate) {
		this.edocAdmWritDate = edocAdmWritDate;
	}
	public String getAddFileAdmName() {
		return addFileAdmName;
	}
	public void setAddFileAdmName(String addFileAdmName) {
		this.addFileAdmName = addFileAdmName;
	}
	
	public String getAddFileRelSeq() {
		return addFileRelSeq;
	}
	public void setAddFileRelSeq(String addFileRelSeq) {
		this.addFileRelSeq = addFileRelSeq;
	}
	public String getAddFileCode() {
		return addFileCode;
	}
	public void setAddFileCode(String addFileCode) {
		this.addFileCode = addFileCode;
	}
	public String getAddFilePcFile() {
		return addFilePcFile;
	}
	public void setAddFilePcFile(String addFilePcFile) {
		this.addFilePcFile = addFilePcFile;
	}
	public String getAddFilePcFileExt() {
		return addFilePcFileExt;
	}
	public void setAddFilePcFileExt(String addFilePcFileExt) {
		this.addFilePcFileExt = addFilePcFileExt;
	}
	
	public Integer getAddFileSize() {
		return addFileSize;
	}
	public void setAddFileSize(Integer addFileSize) {
		this.addFileSize = addFileSize;
	}
	public String getAddFileSerPath() {
		return addFileSerPath;
	}
	public void setAddFileSerPath(String addFileSerPath) {
		this.addFileSerPath = addFileSerPath;
	}
	public String getAddFileSerFileName() {
		return addFileSerFileName;
	}
	public void setAddFileSerFileName(String addFileSerFileName) {
		this.addFileSerFileName = addFileSerFileName;
	}
	public String getAddFileDownCount() {
		return addFileDownCount;
	}
	public void setAddFileDownCount(String addFileDownCount) {
		this.addFileDownCount = addFileDownCount;
	}
	public String getAddFileDel() {
		return addFileDel;
	}
	public void setAddFileDel(String addFileDel) {
		this.addFileDel = addFileDel;
	}
	public String getAddFileRegDate() {
		return addFileRegDate;
	}
	public void setAddFileRegDate(String addFileRegDate) {
		this.addFileRegDate = addFileRegDate;
	}
	public String getAddFileChanDate() {
		return addFileChanDate;
	}
	public void setAddFileChanDate(String addFileChanDate) {
		this.addFileChanDate = addFileChanDate;
	}
	public String getAddFileCheck() {
		return addFileCheck;
	}
	public void setAddFileCheck(String addFileCheck) {
		this.addFileCheck = addFileCheck;
	}
	public String getClassCode() {
		return classCode;
	}
	public void setClassCode(String classCode) {
		this.classCode = classCode;
	}
	public String getLawsuitCaseTyCode() {
		return lawsuitCaseTyCode;
	}
	public void setLawsuitCaseTyCode(String lawsuitCaseTyCode) {
		this.lawsuitCaseTyCode = lawsuitCaseTyCode;
	}
	public String getInstAdmCortCode() {
		return instAdmCortCode;
	}
	public void setInstAdmCortCode(String instAdmCortCode) {
		this.instAdmCortCode = instAdmCortCode;
	}
	public String getEdocAddFileSeq() {
		return edocAddFileSeq;
	}
	public void setEdocAddFileSeq(String edocAddFileSeq) {
		this.edocAddFileSeq = edocAddFileSeq;
	}
	public String getPreAddFileSeq() {
		return preAddFileSeq;
	}
	public void setPreAddFileSeq(String preAddFileSeq) {
		this.preAddFileSeq = preAddFileSeq;
	}
	public String getImgHeight() {
		return imgHeight;
	}
	public void setImgHeight(String imgHeight) {
		this.imgHeight = imgHeight;
	}
	public String getImgWidth() {
		return imgWidth;
	}
	public void setImgWidth(String imgWidth) {
		this.imgWidth = imgWidth;
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
