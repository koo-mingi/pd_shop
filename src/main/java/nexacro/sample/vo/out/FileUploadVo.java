package nexacro.sample.vo.out;

import nexacro.sample.vo.DefaultVO;

public class FileUploadVo extends DefaultVO {
	
	private static final long serialVersionUID = 1L;
	
	private String addFileRelSeq;
	private String addFileAdmName;
	private String addFilePcFile;
	private String addFilePcFileExt;
	private String addFileSize;
	private String addFileSerPath;
	private String addFileSerFileName;
	
	
	//getter & setter
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
}
