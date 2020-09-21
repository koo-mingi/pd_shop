package nexacro.sample.vo.out.web.outlegal.total;

public class FileWebVO {
	private String lawsuitAdmNo;	//소송관리번호
	private String instAdmCode;		//심급코드	
	private String preIwrNo;		//일련번호
	private String edocAdmSeq;		//서증일련번호
	private String addFileRelSeq; //  첨부파일일련번호		
	private String addFileAdmName; // 파일관리명		
	private String addFilePcFile; // PC파일명  
	private String addFilePcFileExt; //  PC파일확장자
	private Integer addFileSize;		//파일크기
	private String addFileSerPath; // 저장경로
	private String addFileSerFileName; // 저장파일명
	
	private String imgHeight = "";
	private String imgWidth = "";
	
	
	public String getAddFileRelSeq() {
		return addFileRelSeq;
	}
	public void setAddFileRelSeq(String addFileRelSeq) {
		this.addFileRelSeq = addFileRelSeq;
	}
	public String getAddFileAdmName() {
		return addFileAdmName;
	}
	public void setAddFileAdmName(String addFileAdmName) {
		this.addFileAdmName = addFileAdmName;
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
	public String getPreIwrNo() {
		return preIwrNo;
	}
	public void setPreIwrNo(String preIwrNo) {
		this.preIwrNo = preIwrNo;
	}
	public String getEdocAdmSeq() {
		return edocAdmSeq;
	}
	public void setEdocAdmSeq(String edocAdmSeq) {
		this.edocAdmSeq = edocAdmSeq;
	}
	
	
	
	
}
