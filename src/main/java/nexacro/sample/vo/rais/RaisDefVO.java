package nexacro.sample.vo.rais;

public class RaisDefVO {
	
	
	/*
	 * TAB_LAW_RAISREQ_DEF			소제기의뢰피고
	 * 
	LAW_RAISREQ_NO					소제기의뢰번호		VARCHAR2
	LAW_RAISREQ_DEF_SEQ				일련번호			NUMBER
	LAW_RAISREQ_DEF_REGNO			등록번호			VARCHAR2
	LAW_RAISREQ_DEF_NAME			피고명				VARCHAR2
	LAW_RAISREQ_DEF_TEL				연락처				VARCHAR2
	LAW_RAISREQ_DEF_POS				우편번호			VARCHAR2
	LAW_RAISREQ_DEF_ADDR			주소				VARCHAR2
	LAW_RAISREQ_DEF_CLAMCHG			청구금액			NUMBER
	*/
	
	private String lawRaisreqNo;	
	private String lawRaisreqDefSeq;
	private String lawRaisreqDefRegno;
	private String lawRaisreqDefName;
	private String lawRaisreqDefTel;
	private String lawRaisreqDefPos;
	private String lawRaisreqDefAddr;
	private String lawRaisreqDefClamchg;
	
	public String getLawRaisreqNo() {
		return lawRaisreqNo;
	}
	public void setLawRaisreqNo(String lawRaisreqNo) {
		this.lawRaisreqNo = lawRaisreqNo;
	}
	public String getLawRaisreqDefSeq() {
		return lawRaisreqDefSeq;
	}
	public void setLawRaisreqDefSeq(String lawRaisreqDefSeq) {
		this.lawRaisreqDefSeq = lawRaisreqDefSeq;
	}
	public String getLawRaisreqDefRegno() {
		return lawRaisreqDefRegno;
	}
	public void setLawRaisreqDefRegno(String lawRaisreqDefRegno) {
		this.lawRaisreqDefRegno = lawRaisreqDefRegno;
	}
	public String getLawRaisreqDefName() {
		return lawRaisreqDefName;
	}
	public void setLawRaisreqDefName(String lawRaisreqDefName) {
		this.lawRaisreqDefName = lawRaisreqDefName;
	}
	public String getLawRaisreqDefTel() {
		return lawRaisreqDefTel;
	}
	public void setLawRaisreqDefTel(String lawRaisreqDefTel) {
		this.lawRaisreqDefTel = lawRaisreqDefTel;
	}
	public String getLawRaisreqDefPos() {
		return lawRaisreqDefPos;
	}
	public void setLawRaisreqDefPos(String lawRaisreqDefPos) {
		this.lawRaisreqDefPos = lawRaisreqDefPos;
	}
	public String getLawRaisreqDefAddr() {
		return lawRaisreqDefAddr;
	}
	public void setLawRaisreqDefAddr(String lawRaisreqDefAddr) {
		this.lawRaisreqDefAddr = lawRaisreqDefAddr;
	}
	public String getLawRaisreqDefClamchg() {
		return lawRaisreqDefClamchg;
	}
	public void setLawRaisreqDefClamchg(String lawRaisreqDefClamchg) {
		this.lawRaisreqDefClamchg = lawRaisreqDefClamchg;
	}
	
	
}
