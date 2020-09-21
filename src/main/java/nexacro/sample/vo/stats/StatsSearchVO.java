package nexacro.sample.vo.stats;

public class StatsSearchVO {

	private String lawRaisreqReqId;
	private String lawRaisreqClasCode;
	private String lawRaisreqRepWtr;
	//넥사크로에서 넘겨주는 날짜 값을 이용하여 DB 에 접근하기 위한 날짜 변수
	private String lawRaisreqDateMin;
	private String lawRaisreqDateMax;
	
	public String getLawRaisreqReqId() {
		return lawRaisreqReqId;
	}
	public void setLawRaisreqReqId(String lawRaisreqReqId) {
		this.lawRaisreqReqId = lawRaisreqReqId;
	}
	public String getLawRaisreqClasCode() {
		return lawRaisreqClasCode;
	}
	public void setLawRaisreqClasCode(String lawRaisreqClasCode) {
		this.lawRaisreqClasCode = lawRaisreqClasCode;
	}
	public String getLawRaisreqRepWtr() {
		return lawRaisreqRepWtr;
	}
	public void setLawRaisreqRepWtr(String lawRaisreqRepWtr) {
		this.lawRaisreqRepWtr = lawRaisreqRepWtr;
	}
	public String getLawRaisreqDateMin() {
		return lawRaisreqDateMin;
	}
	public void setLawRaisreqDateMin(String lawRaisreqDateMin) {
		this.lawRaisreqDateMin = lawRaisreqDateMin;
	}
	public String getLawRaisreqDateMax() {
		return lawRaisreqDateMax;
	}
	public void setLawRaisreqDateMax(String lawRaisreqDateMax) {
		this.lawRaisreqDateMax = lawRaisreqDateMax;
	}
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("StatsSearchVO [lawRaisreqReqId=");
		builder.append(lawRaisreqReqId);
		builder.append(", lawRaisreqClasCode=");
		builder.append(lawRaisreqClasCode);
		builder.append(", lawRaisreqRepWtr=");
		builder.append(lawRaisreqRepWtr);
		builder.append(", lawRaisreqDateMin=");
		builder.append(lawRaisreqDateMin);
		builder.append(", lawRaisreqDateMax=");
		builder.append(lawRaisreqDateMax);
		builder.append("]");
		return builder.toString();
	}
	
}
