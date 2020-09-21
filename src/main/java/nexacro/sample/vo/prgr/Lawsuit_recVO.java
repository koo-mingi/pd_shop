package nexacro.sample.vo.prgr;

import nexacro.sample.vo.DefaultVO;

public class Lawsuit_recVO extends DefaultVO {

	private String lawsuitAdmNo; //소송관리번호
	private String lawsuitCpPladefSepcode; // 당사 원피고 구분코드
	
	private String instAdmCode; //심급코드
	private String instAdmPrgrCode; //소송진행상태코드
	private String instAdmCortCode; // 수행법원코드
	private String instAdmCaseNo; //사건번호
	private String instAdmName;  // 심급명
	private String instAdmIssuChg; //쟁점금액
	private String instAdmCtpmgrName; //상대담당자명
	private String instAdmJudId; // 판사
	private String instAdmJudName; // 판사명
	private String instAdmIssuPoin; // 쟁점사항
	
	private String pladefSepCode; // 원피고구분코드
	private String pladefSeq; // 원피고일련번호
	private String pladefName; // 원피고명
	private String pladefRegNo; // 원피고등록번호
	private String pladefMainTel; // 원피고주요전화번호
	private String pladefAddTel; // 원피고추가전화번호
	private String pladefAddr1;
	private String pladefAddr2;
	private String pladefPos;
	private String pladefClamVol; // 원피고별 청구소가
	private String pladefLawConcSepcode; // 원피고별종료구분코드
	private String pladefConcDate; // 종결일자
	private String pladefLawconcInstcode; // 원피고별종료심급구분코드
	
	
	private String pladefRegInst; // 원피고 등록 심급코드
	private String pladefEndInst; // 소송 종결 심급코드	
	
	private String tabReconcilSeq;
	private String reconcilReqChg;
	private String reconcilAppvChg;
	private String reconcilMgrOpin;
	private String reconcilAppvDate;
	private String reconcilExptjudgChg;
	private String reconcilAppvId;
	private String reconcilAppvName;	//최종승인자명
	
	private String reconcilTempSaveWtr;
	
    private String aprvCheck;
	
	private String srcLawAdmNo; // 소송관리번호 파라미터
	private String srcCboInstCode; // 심급코드 파라미터
	
	
	

	public String getSrcLawAdmNo() {
		return srcLawAdmNo;
	}

	public void setSrcLawAdmNo(String srcLawAdmNo) {
		this.srcLawAdmNo = srcLawAdmNo;
	}

	public String getSrcCboInstCode() {
		return srcCboInstCode;
	}

	public void setSrcCboInstCode(String srcCboInstCode) {
		this.srcCboInstCode = srcCboInstCode;
	}

	public String getLawsuitAdmNo() {
		return lawsuitAdmNo;
	}

	public void setLawsuitAdmNo(String lawsuitAdmNo) {
		this.lawsuitAdmNo = lawsuitAdmNo;
	}

	public String getLawsuitCpPladefSepcode() {
		return lawsuitCpPladefSepcode;
	}

	public void setLawsuitCpPladefSepcode(String lawsuitCpPladefSepcode) {
		this.lawsuitCpPladefSepcode = lawsuitCpPladefSepcode;
	}

	public String getInstAdmCode() {
		return instAdmCode;
	}

	public void setInstAdmCode(String instAdmCode) {
		this.instAdmCode = instAdmCode;
	}

	public String getInstAdmPrgrCode() {
		return instAdmPrgrCode;
	}

	public void setInstAdmPrgrCode(String instAdmPrgrCode) {
		this.instAdmPrgrCode = instAdmPrgrCode;
	}

	public String getInstAdmCortCode() {
		return instAdmCortCode;
	}

	public void setInstAdmCortCode(String instAdmCortCode) {
		this.instAdmCortCode = instAdmCortCode;
	}

	public String getInstAdmCaseNo() {
		return instAdmCaseNo;
	}

	public void setInstAdmCaseNo(String instAdmCaseNo) {
		this.instAdmCaseNo = instAdmCaseNo;
	}

	public String getInstAdmName() {
		return instAdmName;
	}

	public void setInstAdmName(String instAdmName) {
		this.instAdmName = instAdmName;
	}

	public String getInstAdmIssuChg() {
		return instAdmIssuChg;
	}

	public void setInstAdmIssuChg(String instAdmIssuChg) {
		this.instAdmIssuChg = instAdmIssuChg;
	}

	public String getInstAdmCtpmgrName() {
		return instAdmCtpmgrName;
	}

	public void setInstAdmCtpmgrName(String instAdmCtpmgrName) {
		this.instAdmCtpmgrName = instAdmCtpmgrName;
	}

	public String getInstAdmJudId() {
		return instAdmJudId;
	}

	public void setInstAdmJudId(String instAdmJudId) {
		this.instAdmJudId = instAdmJudId;
	}

	public String getInstAdmJudName() {
		return instAdmJudName;
	}

	public void setInstAdmJudName(String instAdmJudName) {
		this.instAdmJudName = instAdmJudName;
	}

	public String getInstAdmIssuPoin() {
		return instAdmIssuPoin;
	}

	public void setInstAdmIssuPoin(String instAdmIssuPoin) {
		this.instAdmIssuPoin = instAdmIssuPoin;
	}

	public String getPladefSepCode() {
		return pladefSepCode;
	}

	public void setPladefSepCode(String pladefSepCode) {
		this.pladefSepCode = pladefSepCode;
	}

	public String getPladefSeq() {
		return pladefSeq;
	}

	public void setPladefSeq(String pladefSeq) {
		this.pladefSeq = pladefSeq;
	}

	public String getPladefName() {
		return pladefName;
	}

	public void setPladefName(String pladefName) {
		this.pladefName = pladefName;
	}

	public String getPladefRegNo() {
		return pladefRegNo;
	}

	public void setPladefRegNo(String pladefRegNo) {
		this.pladefRegNo = pladefRegNo;
	}

	public String getPladefMainTel() {
		return pladefMainTel;
	}

	public void setPladefMainTel(String pladefMainTel) {
		this.pladefMainTel = pladefMainTel;
	}

	public String getPladefAddTel() {
		return pladefAddTel;
	}

	public void setPladefAddTel(String pladefAddTel) {
		this.pladefAddTel = pladefAddTel;
	}

	public String getPladefAddr1() {
		return pladefAddr1;
	}

	public void setPladefAddr1(String pladefAddr1) {
		this.pladefAddr1 = pladefAddr1;
	}

	public String getPladefAddr2() {
		return pladefAddr2;
	}

	public void setPladefAddr2(String pladefAddr2) {
		this.pladefAddr2 = pladefAddr2;
	}

	public String getPladefPos() {
		return pladefPos;
	}

	public void setPladefPos(String pladefPos) {
		this.pladefPos = pladefPos;
	}

	public String getPladefClamVol() {
		return pladefClamVol;
	}

	public void setPladefClamVol(String pladefClamVol) {
		this.pladefClamVol = pladefClamVol;
	}

	public String getPladefLawConcSepcode() {
		return pladefLawConcSepcode;
	}

	public void setPladefLawConcSepcode(String pladefLawConcSepcode) {
		this.pladefLawConcSepcode = pladefLawConcSepcode;
	}

	public String getPladefConcDate() {
		return pladefConcDate;
	}

	public void setPladefConcDate(String pladefConcDate) {
		this.pladefConcDate = pladefConcDate;
	}

	public String getPladefLawconcInstcode() {
		return pladefLawconcInstcode;
	}

	public void setPladefLawconcInstcode(String pladefLawconcInstcode) {
		this.pladefLawconcInstcode = pladefLawconcInstcode;
	}

	public String getPladefRegInst() {
		return pladefRegInst;
	}

	public void setPladefRegInst(String pladefRegInst) {
		this.pladefRegInst = pladefRegInst;
	}

	public String getPladefEndInst() {
		return pladefEndInst;
	}

	public void setPladefEndInst(String pladefEndInst) {
		this.pladefEndInst = pladefEndInst;
	}

	public String getTabReconcilSeq() {
		return tabReconcilSeq;
	}

	public void setTabReconcilSeq(String tabReconcilSeq) {
		this.tabReconcilSeq = tabReconcilSeq;
	}

	public String getReconcilReqChg() {
		return reconcilReqChg;
	}

	public void setReconcilReqChg(String reconcilReqChg) {
		this.reconcilReqChg = reconcilReqChg;
	}

	public String getReconcilAppvChg() {
		return reconcilAppvChg;
	}

	public void setReconcilAppvChg(String reconcilAppvChg) {
		this.reconcilAppvChg = reconcilAppvChg;
	}

	public String getReconcilMgrOpin() {
		return reconcilMgrOpin;
	}

	public void setReconcilMgrOpin(String reconcilMgrOpin) {
		this.reconcilMgrOpin = reconcilMgrOpin;
	}

	public String getReconcilAppvDate() {
		return reconcilAppvDate;
	}

	public void setReconcilAppvDate(String reconcilAppvDate) {
		this.reconcilAppvDate = reconcilAppvDate;
	}

	public String getReconcilExptjudgChg() {
		return reconcilExptjudgChg;
	}

	public void setReconcilExptjudgChg(String reconcilExptjudgChg) {
		this.reconcilExptjudgChg = reconcilExptjudgChg;
	}

	public String getReconcilAppvId() {
		return reconcilAppvId;
	}

	public void setReconcilAppvId(String reconcilAppvId) {
		this.reconcilAppvId = reconcilAppvId;
	}

	public String getReconcilAppvName() {
		return reconcilAppvName;
	}

	public void setReconcilAppvName(String reconcilAppvName) {
		this.reconcilAppvName = reconcilAppvName;
	}

	public String getReconcilTempSaveWtr() {
		return reconcilTempSaveWtr;
	}

	public void setReconcilTempSaveWtr(String reconcilTempSaveWtr) {
		this.reconcilTempSaveWtr = reconcilTempSaveWtr;
	}

	public String getAprvCheck() {
		return aprvCheck;
	}

	public void setAprvCheck(String aprvCheck) {
		this.aprvCheck = aprvCheck;
	}

	@Override
	public String toString() {
		return "Lawsuit_recVO [lawsuitAdmNo=" + lawsuitAdmNo
				+ ", lawsuitCpPladefSepcode=" + lawsuitCpPladefSepcode
				+ ", instAdmCode=" + instAdmCode + ", instAdmPrgrCode="
				+ instAdmPrgrCode + ", instAdmCortCode=" + instAdmCortCode
				+ ", instAdmCaseNo=" + instAdmCaseNo + ", instAdmName="
				+ instAdmName + ", instAdmIssuChg=" + instAdmIssuChg
				+ ", instAdmCtpmgrName=" + instAdmCtpmgrName
				+ ", instAdmJudId=" + instAdmJudId + ", instAdmJudName="
				+ instAdmJudName + ", instAdmIssuPoin=" + instAdmIssuPoin
				+ ", pladefSepCode=" + pladefSepCode + ", pladefSeq="
				+ pladefSeq + ", pladefName=" + pladefName + ", pladefRegNo="
				+ pladefRegNo + ", pladefMainTel=" + pladefMainTel
				+ ", pladefAddTel=" + pladefAddTel + ", pladefAddr1="
				+ pladefAddr1 + ", pladefAddr2=" + pladefAddr2 + ", pladefPos="
				+ pladefPos + ", pladefClamVol=" + pladefClamVol
				+ ", pladefLawConcSepcode=" + pladefLawConcSepcode
				+ ", pladefConcDate=" + pladefConcDate
				+ ", pladefLawconcInstcode=" + pladefLawconcInstcode
				+ ", pladefRegInst=" + pladefRegInst + ", pladefEndInst="
				+ pladefEndInst + ", tabReconcilSeq=" + tabReconcilSeq
				+ ", reconcilReqChg=" + reconcilReqChg + ", reconcilAppvChg="
				+ reconcilAppvChg + ", reconcilMgrOpin=" + reconcilMgrOpin
				+ ", reconcilAppvDate=" + reconcilAppvDate
				+ ", reconcilExptjudgChg=" + reconcilExptjudgChg
				+ ", reconcilAppvId=" + reconcilAppvId + ", reconcilAppvName="
				+ reconcilAppvName + ", reconcilTempSaveWtr="
				+ reconcilTempSaveWtr + ", aprvCheck=" + aprvCheck
				+ ", srcLawAdmNo=" + srcLawAdmNo + ", srcCboInstCode="
				+ srcCboInstCode + "]";
	}
	
	
	
	
	
	
}
