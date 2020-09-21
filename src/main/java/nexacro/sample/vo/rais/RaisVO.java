package nexacro.sample.vo.rais;

public class RaisVO {
	
	private String lawRaisreqNo;
	private String lawRaisreqReqId;	
	private String lawRaisreqClasCode;
	private String lawRaisreqRepWtr;	
	private String lawRaisreqWtr;
	
	//날짜 검색 값
	private String lawRaisreqDateMin;
	private String lawRaisreqDateMax;
	
	//회신 개수를 위한 변수
	private String lawRaisreqRepWtrY;
	//미회신 개수를 위한 변수
	private String lawRaisreqRepWtrN;
	
	//소송가능 개수를 위한 변수
	private String lawRaisreqWtrY;
	//소송불가능 개수를 위한 변수
	private String lawRaisreqWtrN;
	
	//피고목록 조회를 위한 변수
	private String raisreqNo;
	//피고목록 조회를 위한 변수
	private String lawsuitAdmNo;
	private String instAdmCode;
	private String pladefSeq;
	private String pladefRegNo;
	private String pladefName;
	private String pladefMainTel;
	private String pladefPos;
	private String pladefAddr1;
	private String pladefAddr2;
	private String INSA_NAME;
	
	
	public String getINSA_NAME() {
		return INSA_NAME;
	}
	public void setINSA_NAME(String iNSA_NAME) {
		INSA_NAME = iNSA_NAME;
	}

	/**
	 * @return the lawRaisreqNo
	 */
	public String getLawRaisreqNo() {
		return lawRaisreqNo;
	}
	/**
	 * @param lawRaisreqNo the lawRaisreqNo to set
	 */
	public void setLawRaisreqNo(String lawRaisreqNo) {
		this.lawRaisreqNo = lawRaisreqNo;
	}
	/**
	 * @return the lawRaisreqReqId
	 */
	public String getLawRaisreqReqId() {
		return lawRaisreqReqId;
	}
	/**
	 * @param lawRaisreqReqId the lawRaisreqReqId to set
	 */
	public void setLawRaisreqReqId(String lawRaisreqReqId) {
		this.lawRaisreqReqId = lawRaisreqReqId;
	}
	/**
	 * @return the lawRaisreqClasCode
	 */
	public String getLawRaisreqClasCode() {
		return lawRaisreqClasCode;
	}
	/**
	 * @param lawRaisreqClasCode the lawRaisreqClasCode to set
	 */
	public void setLawRaisreqClasCode(String lawRaisreqClasCode) {
		this.lawRaisreqClasCode = lawRaisreqClasCode;
	}
	/**
	 * @return the lawRaisreqRepWtr
	 */
	public String getLawRaisreqRepWtr() {
		return lawRaisreqRepWtr;
	}
	/**
	 * @param lawRaisreqRepWtr the lawRaisreqRepWtr to set
	 */
	public void setLawRaisreqRepWtr(String lawRaisreqRepWtr) {
		this.lawRaisreqRepWtr = lawRaisreqRepWtr;
	}
	/**
	 * @return the lawRaisreqWtr
	 */
	public String getLawRaisreqWtr() {
		return lawRaisreqWtr;
	}
	/**
	 * @param lawRaisreqWtr the lawRaisreqWtr to set
	 */
	public void setLawRaisreqWtr(String lawRaisreqWtr) {
		this.lawRaisreqWtr = lawRaisreqWtr;
	}
	/**
	 * @return the lawRaisreqDateMin
	 */
	public String getLawRaisreqDateMin() {
		return lawRaisreqDateMin;
	}
	/**
	 * @param lawRaisreqDateMin the lawRaisreqDateMin to set
	 */
	public void setLawRaisreqDateMin(String lawRaisreqDateMin) {
		this.lawRaisreqDateMin = lawRaisreqDateMin;
	}
	/**
	 * @return the lawRaisreqDateMax
	 */
	public String getLawRaisreqDateMax() {
		return lawRaisreqDateMax;
	}
	/**
	 * @param lawRaisreqDateMax the lawRaisreqDateMax to set
	 */
	public void setLawRaisreqDateMax(String lawRaisreqDateMax) {
		this.lawRaisreqDateMax = lawRaisreqDateMax;
	}
	/**
	 * @return the lawRaisreqRepWtrY
	 */
	public String getLawRaisreqRepWtrY() {
		return lawRaisreqRepWtrY;
	}
	/**
	 * @param lawRaisreqRepWtrY the lawRaisreqRepWtrY to set
	 */
	public void setLawRaisreqRepWtrY(String lawRaisreqRepWtrY) {
		this.lawRaisreqRepWtrY = lawRaisreqRepWtrY;
	}
	/**
	 * @return the lawRaisreqRepWtrN
	 */
	public String getLawRaisreqRepWtrN() {
		return lawRaisreqRepWtrN;
	}
	/**
	 * @param lawRaisreqRepWtrN the lawRaisreqRepWtrN to set
	 */
	public void setLawRaisreqRepWtrN(String lawRaisreqRepWtrN) {
		this.lawRaisreqRepWtrN = lawRaisreqRepWtrN;
	}
	/**
	 * @return the lawRaisreqWtrY
	 */
	public String getLawRaisreqWtrY() {
		return lawRaisreqWtrY;
	}
	/**
	 * @param lawRaisreqWtrY the lawRaisreqWtrY to set
	 */
	public void setLawRaisreqWtrY(String lawRaisreqWtrY) {
		this.lawRaisreqWtrY = lawRaisreqWtrY;
	}
	/**
	 * @return the lawRaisreqWtrN
	 */
	public String getLawRaisreqWtrN() {
		return lawRaisreqWtrN;
	}
	/**
	 * @param lawRaisreqWtrN the lawRaisreqWtrN to set
	 */
	public void setLawRaisreqWtrN(String lawRaisreqWtrN) {
		this.lawRaisreqWtrN = lawRaisreqWtrN;
	}
	/**
	 * @return the raisreqNo
	 */
	public String getRaisreqNo() {
		return raisreqNo;
	}
	/**
	 * @param raisreqNo the raisreqNo to set
	 */
	public void setRaisreqNo(String raisreqNo) {
		this.raisreqNo = raisreqNo;
	}
	/**
	 * @return the lawsuitAdmNo
	 */
	public String getLawsuitAdmNo() {
		return lawsuitAdmNo;
	}
	/**
	 * @param lawsuitAdmNo the lawsuitAdmNo to set
	 */
	public void setLawsuitAdmNo(String lawsuitAdmNo) {
		this.lawsuitAdmNo = lawsuitAdmNo;
	}
	/**
	 * @return the instAdmCode
	 */
	public String getInstAdmCode() {
		return instAdmCode;
	}
	/**
	 * @param instAdmCode the instAdmCode to set
	 */
	public void setInstAdmCode(String instAdmCode) {
		this.instAdmCode = instAdmCode;
	}
	/**
	 * @return the pladefSeq
	 */
	public String getPladefSeq() {
		return pladefSeq;
	}
	/**
	 * @param pladefSeq the pladefSeq to set
	 */
	public void setPladefSeq(String pladefSeq) {
		this.pladefSeq = pladefSeq;
	}
	/**
	 * @return the pladefRegNo
	 */
	public String getPladefRegNo() {
		return pladefRegNo;
	}
	/**
	 * @param pladefRegNo the pladefRegNo to set
	 */
	public void setPladefRegNo(String pladefRegNo) {
		this.pladefRegNo = pladefRegNo;
	}
	/**
	 * @return the pladefName
	 */
	public String getPladefName() {
		return pladefName;
	}
	/**
	 * @param pladefName the pladefName to set
	 */
	public void setPladefName(String pladefName) {
		this.pladefName = pladefName;
	}
	/**
	 * @return the pladefMainTel
	 */
	public String getPladefMainTel() {
		return pladefMainTel;
	}
	/**
	 * @param pladefMainTel the pladefMainTel to set
	 */
	public void setPladefMainTel(String pladefMainTel) {
		this.pladefMainTel = pladefMainTel;
	}
	/**
	 * @return the pladefPos
	 */
	public String getPladefPos() {
		return pladefPos;
	}
	/**
	 * @param pladefPos the pladefPos to set
	 */
	public void setPladefPos(String pladefPos) {
		this.pladefPos = pladefPos;
	}
	/**
	 * @return the pladefAddr1
	 */
	public String getPladefAddr1() {
		return pladefAddr1;
	}
	/**
	 * @param pladefAddr1 the pladefAddr1 to set
	 */
	public void setPladefAddr1(String pladefAddr1) {
		this.pladefAddr1 = pladefAddr1;
	}
	/**
	 * @return the pladefAddr2
	 */
	public String getPladefAddr2() {
		return pladefAddr2;
	}
	/**
	 * @param pladefAddr2 the pladefAddr2 to set
	 */
	public void setPladefAddr2(String pladefAddr2) {
		this.pladefAddr2 = pladefAddr2;
	}
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("RaisVO [lawRaisreqNo=");
		builder.append(lawRaisreqNo);
		builder.append(", lawRaisreqReqId=");
		builder.append(lawRaisreqReqId);
		builder.append(", lawRaisreqClasCode=");
		builder.append(lawRaisreqClasCode);
		builder.append(", lawRaisreqRepWtr=");
		builder.append(lawRaisreqRepWtr);
		builder.append(", lawRaisreqWtr=");
		builder.append(lawRaisreqWtr);
		builder.append(", lawRaisreqDateMin=");
		builder.append(lawRaisreqDateMin);
		builder.append(", lawRaisreqDateMax=");
		builder.append(lawRaisreqDateMax);
		builder.append(", lawRaisreqRepWtrY=");
		builder.append(lawRaisreqRepWtrY);
		builder.append(", lawRaisreqRepWtrN=");
		builder.append(lawRaisreqRepWtrN);
		builder.append(", lawRaisreqWtrY=");
		builder.append(lawRaisreqWtrY);
		builder.append(", lawRaisreqWtrN=");
		builder.append(lawRaisreqWtrN);
		builder.append(", raisreqNo=");
		builder.append(raisreqNo);
		builder.append(", lawsuitAdmNo=");
		builder.append(lawsuitAdmNo);
		builder.append(", instAdmCode=");
		builder.append(instAdmCode);
		builder.append(", pladefSeq=");
		builder.append(pladefSeq);
		builder.append(", pladefRegNo=");
		builder.append(pladefRegNo);
		builder.append(", pladefName=");
		builder.append(pladefName);
		builder.append(", pladefMainTel=");
		builder.append(pladefMainTel);
		builder.append(", pladefPos=");
		builder.append(pladefPos);
		builder.append(", pladefAddr1=");
		builder.append(pladefAddr1);
		builder.append(", pladefAddr2=");
		builder.append(pladefAddr2);
		builder.append("]");
		return builder.toString();
	}
	
}
