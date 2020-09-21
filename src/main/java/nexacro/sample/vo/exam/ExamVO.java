package nexacro.sample.vo.exam;

import nexacro.sample.vo.DefaultVO;

/**  
 * @Class Name : DepositVo.java
 * @Description : 
 * @Modification Information  
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 
 * 
 */

public class ExamVO extends DefaultVO {

	// 신체감정
		private String lawsuitAdmNo;
		private String instAdmCode;
		private String phyAprsCode;
		private String phyAprsName;
	    private String phyAprsHosCode;
	    private String phyAprsAccdCont;	
	   
	    
	    // 상세신체감정
		
		private String examinationSerialSeq;
		private String examinationSubjectCode;
		private String examinationDr;
		private String examinationTime;
		private String examinationProgCode;
		private String examinationDate;
		private String examinationReDate;
		private String examinationResult;
		private String examinationDiseaseName;
		private String examinationInjuryFacts;
		private String examinationReqDate;
		private String examinationClaimRank;
		private String examinationAdminRank;
		
		//부위별 신체감정
		
		private String injuryPositionSerialSeq;
		private String injuryPositionCode;
		private String injuryPositionFacts;
		private String injuryPositionPaymentRate;
		
		
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
		public String getPhyAprsCode() {
			return phyAprsCode;
		}
		public void setPhyAprsCode(String phyAprsCode) {
			this.phyAprsCode = phyAprsCode;
		}
		public String getPhyAprsName() {
			return phyAprsName;
		}
		public void setPhyAprsName(String phyAprsName) {
			this.phyAprsName = phyAprsName;
		}
		public String getPhyAprsHosCode() {
			return phyAprsHosCode;
		}
		public void setPhyAprsHosCode(String phyAprsHosCode) {
			this.phyAprsHosCode = phyAprsHosCode;
		}
		public String getPhyAprsAccdCont() {
			return phyAprsAccdCont;
		}
		public void setPhyAprsAccdCont(String phyAprsAccdCont) {
			this.phyAprsAccdCont = phyAprsAccdCont;
		}
		public String getExaminationSerialSeq() {
			return examinationSerialSeq;
		}
		public void setExaminationSerialSeq(String examinationSerialSeq) {
			this.examinationSerialSeq = examinationSerialSeq;
		}
		public String getExaminationSubjectCode() {
			return examinationSubjectCode;
		}
		public void setExaminationSubjectCode(String examinationSubjectCode) {
			this.examinationSubjectCode = examinationSubjectCode;
		}
		public String getExaminationDr() {
			return examinationDr;
		}
		public void setExaminationDr(String examinationDr) {
			this.examinationDr = examinationDr;
		}
		public String getExaminationTime() {
			return examinationTime;
		}
		public void setExaminationTime(String examinationTime) {
			this.examinationTime = examinationTime;
		}
		public String getExaminationProgCode() {
			return examinationProgCode;
		}
		public void setExaminationProgCode(String examinationProgCode) {
			this.examinationProgCode = examinationProgCode;
		}
		public String getExaminationDate() {
			return examinationDate;
		}
		public void setExaminationDate(String examinationDate) {
			this.examinationDate = examinationDate;
		}
		public String getExaminationReDate() {
			return examinationReDate;
		}
		public void setExaminationReDate(String examinationReDate) {
			this.examinationReDate = examinationReDate;
		}
		public String getExaminationResult() {
			return examinationResult;
		}
		public void setExaminationResult(String examinationResult) {
			this.examinationResult = examinationResult;
		}
		public String getExaminationDiseaseName() {
			return examinationDiseaseName;
		}
		public void setExaminationDiseaseName(String examinationDiseaseName) {
			this.examinationDiseaseName = examinationDiseaseName;
		}
		public String getExaminationInjuryFacts() {
			return examinationInjuryFacts;
		}
		public void setExaminationInjuryFacts(String examinationInjuryFacts) {
			this.examinationInjuryFacts = examinationInjuryFacts;
		}
		public String getExaminationReqDate() {
			return examinationReqDate;
		}
		public void setExaminationReqDate(String examinationReqDate) {
			this.examinationReqDate = examinationReqDate;
		}
		public String getExaminationClaimRank() {
			return examinationClaimRank;
		}
		public void setExaminationClaimRank(String examinationClaimRank) {
			this.examinationClaimRank = examinationClaimRank;
		}
		public String getExaminationAdminRank() {
			return examinationAdminRank;
		}
		public void setExaminationAdminRank(String examinationAdminRank) {
			this.examinationAdminRank = examinationAdminRank;
		}
		public String getInjuryPositionSerialSeq() {
			return injuryPositionSerialSeq;
		}
		public void setInjuryPositionSerialSeq(String injuryPositionSerialSeq) {
			this.injuryPositionSerialSeq = injuryPositionSerialSeq;
		}
		public String getInjuryPositionCode() {
			return injuryPositionCode;
		}
		public void setInjuryPositionCode(String injuryPositionCode) {
			this.injuryPositionCode = injuryPositionCode;
		}
		public String getInjuryPositionFacts() {
			return injuryPositionFacts;
		}
		public void setInjuryPositionFacts(String injuryPositionFacts) {
			this.injuryPositionFacts = injuryPositionFacts;
		}
		public String getInjuryPositionPaymentRate() {
			return injuryPositionPaymentRate;
		}
		public void setInjuryPositionPaymentRate(String injuryPositionPaymentRate) {
			this.injuryPositionPaymentRate = injuryPositionPaymentRate;
		}
		@Override
		public String toString() {
			return "ExamVO [lawsuitAdmNo=" + lawsuitAdmNo + ", instAdmCode="
					+ instAdmCode + ", phyAprsCode=" + phyAprsCode
					+ ", phyAprsName=" + phyAprsName + ", phyAprsHosCode="
					+ phyAprsHosCode + ", phyAprsAccdCont=" + phyAprsAccdCont
					+ ", examinationSerialSeq=" + examinationSerialSeq
					+ ", examinationSubjectCode=" + examinationSubjectCode
					+ ", examinationDr=" + examinationDr + ", examinationTime="
					+ examinationTime + ", examinationProgCode="
					+ examinationProgCode + ", examinationDate="
					+ examinationDate + ", examinationReDate="
					+ examinationReDate + ", examinationResult="
					+ examinationResult + ", examinationDiseaseName="
					+ examinationDiseaseName + ", examinationInjuryFacts="
					+ examinationInjuryFacts + ", examinationReqDate="
					+ examinationReqDate + ", examinationClaimRank="
					+ examinationClaimRank + ", examinationAdminRank="
					+ examinationAdminRank + ", injuryPositionSerialSeq="
					+ injuryPositionSerialSeq + ", injuryPositionCode="
					+ injuryPositionCode + ", injuryPositionFacts="
					+ injuryPositionFacts + ", injuryPositionPaymentRate="
					+ injuryPositionPaymentRate + "]";
		}	
}
