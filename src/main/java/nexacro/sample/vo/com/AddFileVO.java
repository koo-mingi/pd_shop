package nexacro.sample.vo.com;

public class AddFileVO {
	private static final long serialVersionUID = 1L;
	
	// 제거한 컬럼
	private String addFileCode;			// 첨부파일구분코드
	private String addFileDownCount;	// 다운로드회수
	private String addFileCheck;		// 파일체크
	
	//첨부파일
	private String addFileRelSeq;		// 첨부파일일련번호
	private String addFilePcFile;		// PC파일명
	private String addFilePcFileExt;	// PC파일확장자	
	private String addFileSize;			// 파일크기
	private String addFileSerPath;		// 서버저장경로
	private String addFileSerFileName;	// 서버저장파일명
	private String addFileAdmName;		// 파일관리명

	//준비서면 첨부파일 내역
	private String instAdmCode;			// 심급코드		
	private String preAddFileSeq;		// 준비서면 첨부파일내역
	private String preIwrNo;			// 준비서면 일련번호		

	//서증 첨부파일 내역			
	private String edocAddFileSeq;		// 서증 첨부파일내역		
	private String edocAdmSeq;			// 서증 일련번호	
	
	//준비서면 & 서증 공통사항
	private String lawsuitAdmNo;		// 소송관리번호	
	private String addFileDel;			// 삭제여부
	private String addFileRegDate;		// 등록일시
	private String addFileChanDate;		// 변경일자
	
	public AddFileVO() {
		super();
	}
	
	public AddFileVO(String addFileCode, String addFileDownCount, String addFileCheck, String addFileRelSeq, String addFilePcFile, String addFilePcFileExt, String addFileSize,
			String addFileSerPath, String addFileSerFileName, String addFileAdmName, String instAdmCode, String preAddFileSeq, String preIwrNo, String edocAddFileSeq,
			String edocAdmSeq, String lawsuitAdmNo, String addFileDel, String addFileRegDate, String addFileChanDate) {
		super();
		this.addFileCode = addFileCode;
		this.addFileDownCount = addFileDownCount;
		this.addFileCheck = addFileCheck;
		this.addFileRelSeq = addFileRelSeq;
		this.addFilePcFile = addFilePcFile;
		this.addFilePcFileExt = addFilePcFileExt;
		this.addFileSize = addFileSize;
		this.addFileSerPath = addFileSerPath;
		this.addFileSerFileName = addFileSerFileName;
		this.addFileAdmName = addFileAdmName;
		this.instAdmCode = instAdmCode;
		this.preAddFileSeq = preAddFileSeq;
		this.preIwrNo = preIwrNo;
		this.edocAddFileSeq = edocAddFileSeq;
		this.edocAdmSeq = edocAdmSeq;
		this.lawsuitAdmNo = lawsuitAdmNo;
		this.addFileDel = addFileDel;
		this.addFileRegDate = addFileRegDate;
		this.addFileChanDate = addFileChanDate;
	}
	public String getAddFileCode() {
		return addFileCode;
	}
	public void setAddFileCode(String addFileCode) {
		this.addFileCode = addFileCode;
	}
	public String getAddFileDownCount() {
		return addFileDownCount;
	}
	public void setAddFileDownCount(String addFileDownCount) {
		this.addFileDownCount = addFileDownCount;
	}
	public String getAddFileCheck() {
		return addFileCheck;
	}
	public void setAddFileCheck(String addFileCheck) {
		this.addFileCheck = addFileCheck;
	}
	public String getAddFileRelSeq() {
		return addFileRelSeq;
	}
	public void setAddFileRelSeq(String addFileRelSeq) {
		this.addFileRelSeq = addFileRelSeq;
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
	public String getAddFileSize() {
		return addFileSize;
	}
	public void setAddFileSize(String addFileSize) {
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
	public String getAddFileAdmName() {
		return addFileAdmName;
	}
	public void setAddFileAdmName(String addFileAdmName) {
		this.addFileAdmName = addFileAdmName;
	}
	public String getInstAdmCode() {
		return instAdmCode;
	}
	public void setInstAdmCode(String instAdmCode) {
		this.instAdmCode = instAdmCode;
	}
	public String getPreAddFileSeq() {
		return preAddFileSeq;
	}
	public void setPreAddFileSeq(String preAddFileSeq) {
		this.preAddFileSeq = preAddFileSeq;
	}
	public String getPreIwrNo() {
		return preIwrNo;
	}
	public void setPreIwrNo(String preIwrNo) {
		this.preIwrNo = preIwrNo;
	}
	public String getEdocAddFileSeq() {
		return edocAddFileSeq;
	}
	public void setEdocAddFileSeq(String edocAddFileSeq) {
		this.edocAddFileSeq = edocAddFileSeq;
	}
	public String getEdocAdmSeq() {
		return edocAdmSeq;
	}
	public void setEdocAdmSeq(String edocAdmSeq) {
		this.edocAdmSeq = edocAdmSeq;
	}
	public String getLawsuitAdmNo() {
		return lawsuitAdmNo;
	}
	public void setLawsuitAdmNo(String lawsuitAdmNo) {
		this.lawsuitAdmNo = lawsuitAdmNo;
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}