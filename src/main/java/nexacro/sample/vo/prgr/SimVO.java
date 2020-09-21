package nexacro.sample.vo.prgr;

import nexacro.sample.vo.DefaultVO;

public class SimVO extends DefaultVO {

	private String codeNO;
	private String codeName;
	
	public void setCodeNO(String codeNO) {
		this.codeNO = codeNO;
	}

	public String getInstCodeNO() {
		return codeNO;
	}
	
	public void setCodeName(String codeName) {
		this.codeName = codeName;
	}

	public String getInstCodeName() {
		return codeName;
	}
}
