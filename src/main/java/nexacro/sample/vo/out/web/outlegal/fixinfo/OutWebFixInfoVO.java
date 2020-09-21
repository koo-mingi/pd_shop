package nexacro.sample.vo.out.web.outlegal.fixinfo;

public class OutWebFixInfoVO {
	

/*
 * TAB_LAW_FIXINFO			소송기일정보
 * 
LAWSUIT_ADM_NO				소송관리번호			VARCHAR2
INST_ADM_CODE				심급코드				VARCHAR2
LAW_FIXINFO_NUM				일련번호				NUMBER
LAW_FIXINFO_SEPCODE			기일구분코드			VARCHAR2
LAW_FIXINFO_DATE			기일일시				DATE
LAW_FIXINFO_PLC				기일장소				VARCHAR2
LAW_FIXINFO_MAIN_ISSU		주요쟁점사항			VARCHAR2
LAW_FIXINFO_CP_INSI			당사주장				VARCHAR2
LAW_FIXINFO_OTH_INSI		상대방주장				VARCHAR2
LAW_FIXINFO_CORT_OPIN		재판부의견				VARCHAR2
LAW_FIXINFO_LYR_OPIN		변호사의견				VARCHAR2
LAW_FIXINFO_DLIN_DATE		기일마감일시			DATE
*/
	private String gbcode;				// 입력, 수정, 삭제 구분
	private String gbParam; 				// 전체, 세부 구분자
	
	private int page;					// 현재 페이지넘버
	private int tpage;				// 총페이지수 +1
	private int trow;				// 아이템수
	private int nrow;				// 마지막페이지 아이템 수, 나머지(%10) 아이템
	
	private String lawsuitAdmNo;	
	private String instAdmCode;
	private String lawFixinfoNum;	
	private String lawFixinfoSepcode;	
	private String lawFixinfoDate;
	private String lawFixinfoPlc;
	private String lawFixinfoMainIssu;
	private String lawFixinfoCpInsi;
	private String lawFixinfoOthInsi;	
	private String lawFixinfoCortOpin;	
	private String lawFixinfoLyrOpin;
	private String lawFixinfoDlinDate;
	
	private String legaladvOutReqLyrid;	                 //외부의뢰변호사ID	
	
	private String lawFixinfoDate1;
	private String lawFixinfoDate2;
	private String lawFixinfoDate3;
	private String lawFixinfoDlinDate1;
	private String lawFixinfoDlinDate2;
	private String lawFixinfoDlinDate3;
	
	
	/*
	LAWSUIT_ADM_NO				소송관리번호		
	INST_ADM_CODE				심급코드		
	INST_ADM_PRGR_CODE			소송진행상태코드		
	INST_ADM_CASE_NO			사건번호		
	INST_ADM_NAME				심급명		
	INST_ADM_CORT_CODE			수행법원코드		
	INST_ADM_PETI_SENDDATE		소장송부일자		
	INST_ADM_CORT_REQIDATE		법원접수일자		
	INST_ADM_ASIT_PARCDATE		보조참가일자		
	INST_ADM_ASIT_PARCOPIN		보조참가의견		
	INST_ADM_ISSU_POIN			쟁점사항		
	INST_ADM_CP_OPIN			당사의견		
	INST_ADM_CLAM_VOPCODE		청구소가화폐코드		
	INST_ADM_CLAM_VOP			청구소가		
	INST_ADM_DIV_RATE			총분담비율		
	INST_ADM_JUD_ID				판사ID		
	INST_ADM_ISSU_CHG			쟁점금액		
	INST_ADM_CTPMGR_NAME		상대담당자명		
	INST_ADM_CTRMGR_DEPUNAME	상대담당대리인명		
	INST_ADM_RAISREQ_DATE		소제기일자		
	INST_ADM_VOD_SEPCODE		승패소구분코드		
	INST_ADM_JUDG_DATE			판결일자		
	INST_ADM_JUDG_CFM_DATE		판결확정일자		
	INST_ADM_JUDG_DELIDATE		판결송달일자		
	INST_ADM_VOD_CHG			승패소금액		
	INST_ADM_REGN_CHG			인정금액		
	INST_ADM_PAY_DLINDATE		지급기한일자		
	INST_ADM_WINC_RATE			승소율		
	INST_ADM_JUDG_CONT			판결내용		
	INST_ADM_ENT_LYR_ID			위임변호사ID		
	 */

	private String instAdmPrgrCode;	
	private String instAdmCaseNo;	
	private String instAdmName;	
	private String instAdmCortCode;	
	private String instAdmPetiSenddate;	
	private String instAdmCortReqidate;
	private String instAdmAsitParcdate;	
	private String instAdmAsitParcopin;	
	private String instAdmIssuPoin;	
	private String instAdmCpOpin;	
	private String instAdmClamVopcode;	
	private String instAdmClamVop;	
	private String instAdmDivRate;	
	private String instAdmJudId;	
	private String instAdmIssuChg;	
	private String instAdmCtpmgrName;	
	private String instAdmCtrmgrDepuname;	
	private String instAdmRaisreqDate;	
	private String instAdmVodSepcode;	
	private String instAdmJudgDate;	
	private String instAdmJudgCfmDate;	
	private String instAdmJudgDelidate;	
	private String instAdmVodChg;	
	private String instAdmRegnChg;	
	private String instAdmPayDlindate;	
	private String instAdmWincRate;	
	private String instAdmJudgCont;	
	private String instAdmEntLyrId;	
	
	
	/*
		LAWSUIT_ADM_NO				소송관리번호		
		LAW_RAISREQ_NO				소제기의뢰번호		
		LAWSUIT_APL_CORT_CODE		신청법원코드		
		LAWSUIT_APL_CASE_CODE		신청사건번호		
		LAWSUIT_CASE_TY_CODE		사건유형코드		
		LAWSUIT_CP_PLADEF_SEPCODE	당사원피고구분코드		
		LAWSUIT_ASIT_PARC_WTR		보조참가여부		
		LAWSUIT_CTA_WTR				반소여부		
		LAWSUIT_CTA_NO				반소송번호		
		LAWSUIT_CTA_CASE_NO			반소사건번호		
		LAWSUIT_CTA_CHG				반소금액		
		LAWSUIT_TEMP_REQI_DATE		소송가접수일자		
		LAWSUIT_RAIS_REA			소송제기사유		
		LAWSUIT_COST_CFN_APLDATE	소송비용확정신청일자		
		LAWSUIT_CONC_DATE			종결일자		
		LAWSUIT_FULF_DETM_WTR		이행권고결정여부		

	 
	 */
	
	
	private String lawRaisreqNo;
	private String lawsuitAplCortCode;	
	private String lawsuitAplCaseCode;	
	private String lawsuitCaseTyCode;
	private String lawsuitCpPladefSepcode;	
	private String lawsuitAsitParcWtr;	
	private String lawsuitCtaWtr;	
	private String lawsuitCtaNo;	
	private String lawsuitCtaCaseNo;	
	private String lawsuitCtaChg;	
	private String lawsuitTempReqiDate;	
	private String lawsuitRaisRea;	
	private String lawsuitCostCfnApldate;	
	private String lawsuitConcDate;	
	private String lawsuitFulfDetmWtr;	

	
	/*
		PLADEF_SEQ				원피고일련번호		
		PLADEF_NAME				원피고명		
		PLADEF_REG_NO			원피고등록번호		
		PLADEF_MAIN_TEL			주요연락처전화번호		
		PLADEF_ADD_TEL			추가연락처전화번호		
		PLADEF_POS				우편번호		
		PLADEF_ADDR1			주소1		
		PLADEF_ADDR2			주소2		
		PLADEF_CLAM_VOL			청구소가		
		PLADEF_LAW_CONC_SEPCODE	소송종결구분코드		
		PLADEF_CONC_DATE		종결일자		
		PLADEF_LAWCONC_INSTCODE	소송종료심급구분코드		
		PLADEF_JUDG_POIN		판결사항		
		PLADEF_JUDG_CHG			판결금액		
		PLADEF_CONC_CONT		종결내용		
	 */
	private String pladefSeq;	
	private String pladefName;	
	private String pladefRegNo;	
	private String pladefMainTel;	
	private String pladefAddTel;	
	private String pladefPos;	
	private String pladefAddr1;	
	private String pladefAddr2;	
	private String pladefClamVol;	
	private String pladefLawConcSepcode	;
	private String pladefConcDate;	
	private String pladefLawconcInstcode;	
	private String pladefJudgPoin;	
	private String pladefJudgchg;	
	private String pladefConcCont;	

	
	
	
	
	
	public String getLawRaisreqNo() {
		return lawRaisreqNo;
	}
	public void setLawRaisreqNo(String lawRaisreqNo) {
		this.lawRaisreqNo = lawRaisreqNo;
	}
	public String getLawsuitAplCortCode() {
		return lawsuitAplCortCode;
	}
	public void setLawsuitAplCortCode(String lawsuitAplCortCode) {
		this.lawsuitAplCortCode = lawsuitAplCortCode;
	}
	public String getLawsuitAplCaseCode() {
		return lawsuitAplCaseCode;
	}
	public void setLawsuitAplCaseCode(String lawsuitAplCaseCode) {
		this.lawsuitAplCaseCode = lawsuitAplCaseCode;
	}
	public String getLawsuitCaseTyCode() {
		return lawsuitCaseTyCode;
	}
	public void setLawsuitCaseTyCode(String lawsuitCaseTyCode) {
		this.lawsuitCaseTyCode = lawsuitCaseTyCode;
	}
	public String getLawsuitCpPladefSepcode() {
		return lawsuitCpPladefSepcode;
	}
	public void setLawsuitCpPladefSepcode(String lawsuitCpPladefSepcode) {
		this.lawsuitCpPladefSepcode = lawsuitCpPladefSepcode;
	}
	public String getLawsuitAsitParcWtr() {
		return lawsuitAsitParcWtr;
	}
	public void setLawsuitAsitParcWtr(String lawsuitAsitParcWtr) {
		this.lawsuitAsitParcWtr = lawsuitAsitParcWtr;
	}
	public String getLawsuitCtaWtr() {
		return lawsuitCtaWtr;
	}
	public void setLawsuitCtaWtr(String lawsuitCtaWtr) {
		this.lawsuitCtaWtr = lawsuitCtaWtr;
	}
	public String getLawsuitCtaNo() {
		return lawsuitCtaNo;
	}
	public void setLawsuitCtaNo(String lawsuitCtaNo) {
		this.lawsuitCtaNo = lawsuitCtaNo;
	}
	public String getLawsuitCtaCaseNo() {
		return lawsuitCtaCaseNo;
	}
	public void setLawsuitCtaCaseNo(String lawsuitCtaCaseNo) {
		this.lawsuitCtaCaseNo = lawsuitCtaCaseNo;
	}
	public String getLawsuitCtaChg() {
		return lawsuitCtaChg;
	}
	public void setLawsuitCtaChg(String lawsuitCtaChg) {
		this.lawsuitCtaChg = lawsuitCtaChg;
	}
	public String getLawsuitTempReqiDate() {
		return lawsuitTempReqiDate;
	}
	public void setLawsuitTempReqiDate(String lawsuitTempReqiDate) {
		this.lawsuitTempReqiDate = lawsuitTempReqiDate;
	}
	public String getLawsuitRaisRea() {
		return lawsuitRaisRea;
	}
	public void setLawsuitRaisRea(String lawsuitRaisRea) {
		this.lawsuitRaisRea = lawsuitRaisRea;
	}
	public String getLawsuitCostCfnApldate() {
		return lawsuitCostCfnApldate;
	}
	public void setLawsuitCostCfnApldate(String lawsuitCostCfnApldate) {
		this.lawsuitCostCfnApldate = lawsuitCostCfnApldate;
	}
	public String getLawsuitConcDate() {
		return lawsuitConcDate;
	}
	public void setLawsuitConcDate(String lawsuitConcDate) {
		this.lawsuitConcDate = lawsuitConcDate;
	}
	public String getLawsuitFulfDetmWtr() {
		return lawsuitFulfDetmWtr;
	}
	public void setLawsuitFulfDetmWtr(String lawsuitFulfDetmWtr) {
		this.lawsuitFulfDetmWtr = lawsuitFulfDetmWtr;
	}
	public String getInstAdmPrgrCode() {
		return instAdmPrgrCode;
	}
	public void setInstAdmPrgrCode(String instAdmPrgrCode) {
		this.instAdmPrgrCode = instAdmPrgrCode;
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
	public String getLawFixinfoNum() {
		return lawFixinfoNum;
	}
	public void setLawFixinfoNum(String lawFixinfoNum) {
		this.lawFixinfoNum = lawFixinfoNum;
	}
	public String getLawFixinfoSepcode() {
		return lawFixinfoSepcode;
	}
	public void setLawFixinfoSepcode(String lawFixinfoSepcode) {
		this.lawFixinfoSepcode = lawFixinfoSepcode;
	}
	public String getLawFixinfoDate() {
		return lawFixinfoDate;
	}
	public void setLawFixinfoDate(String lawFixinfoDate) {
		this.lawFixinfoDate = lawFixinfoDate;
	}
	public String getLawFixinfoPlc() {
		return lawFixinfoPlc;
	}
	public void setLawFixinfoPlc(String lawFixinfoPlc) {
		this.lawFixinfoPlc = lawFixinfoPlc;
	}
	public String getLawFixinfoMainIssu() {
		return lawFixinfoMainIssu;
	}
	public void setLawFixinfoMainIssu(String lawFixinfoMainIssu) {
		this.lawFixinfoMainIssu = lawFixinfoMainIssu;
	}
	public String getLawFixinfoCpInsi() {
		return lawFixinfoCpInsi;
	}
	public void setLawFixinfoCpInsi(String lawFixinfoCpInsi) {
		this.lawFixinfoCpInsi = lawFixinfoCpInsi;
	}
	public String getLawFixinfoOthInsi() {
		return lawFixinfoOthInsi;
	}
	public void setLawFixinfoOthInsi(String lawFixinfoOthInsi) {
		this.lawFixinfoOthInsi = lawFixinfoOthInsi;
	}
	public String getLawFixinfoCortOpin() {
		return lawFixinfoCortOpin;
	}
	public void setLawFixinfoCortOpin(String lawFixinfoCortOpin) {
		this.lawFixinfoCortOpin = lawFixinfoCortOpin;
	}
	public String getLawFixinfoLyrOpin() {
		return lawFixinfoLyrOpin;
	}
	public void setLawFixinfoLyrOpin(String lawFixinfoLyrOpin) {
		this.lawFixinfoLyrOpin = lawFixinfoLyrOpin;
	}
	public String getLawFixinfoDlinDate() {
		return lawFixinfoDlinDate;
	}
	public void setLawFixinfoDlinDate(String lawFixinfoDlinDate) {
		this.lawFixinfoDlinDate = lawFixinfoDlinDate;
	}
	public String getLegaladvOutReqLyrid() {
		return legaladvOutReqLyrid;
	}
	public void setLegaladvOutReqLyrid(String legaladvOutReqLyrid) {
		this.legaladvOutReqLyrid = legaladvOutReqLyrid;
	}
	public String getLawFixinfoDate1() {
		return lawFixinfoDate1;
	}
	public void setLawFixinfoDate1(String lawFixinfoDate1) {
		this.lawFixinfoDate1 = lawFixinfoDate1;
	}
	public String getLawFixinfoDate2() {
		return lawFixinfoDate2;
	}
	public void setLawFixinfoDate2(String lawFixinfoDate2) {
		this.lawFixinfoDate2 = lawFixinfoDate2;
	}
	public String getLawFixinfoDate3() {
		return lawFixinfoDate3;
	}
	public void setLawFixinfoDate3(String lawFixinfoDate3) {
		this.lawFixinfoDate3 = lawFixinfoDate3;
	}
	public String getLawFixinfoDlinDate1() {
		return lawFixinfoDlinDate1;
	}
	public void setLawFixinfoDlinDate1(String lawFixinfoDlinDate1) {
		this.lawFixinfoDlinDate1 = lawFixinfoDlinDate1;
	}
	public String getLawFixinfoDlinDate2() {
		return lawFixinfoDlinDate2;
	}
	public void setLawFixinfoDlinDate2(String lawFixinfoDlinDate2) {
		this.lawFixinfoDlinDate2 = lawFixinfoDlinDate2;
	}
	public String getLawFixinfoDlinDate3() {
		return lawFixinfoDlinDate3;
	}
	public void setLawFixinfoDlinDate3(String lawFixinfoDlinDate3) {
		this.lawFixinfoDlinDate3 = lawFixinfoDlinDate3;
	}
	public String getGbParam() {
		return gbParam;
	}
	public void setGbParam(String gbParam) {
		this.gbParam = gbParam;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getTpage() {
		return tpage;
	}
	public void setTpage(int tpage) {
		this.tpage = tpage;
	}
	public int getTrow() {
		return trow;
	}
	public void setTrow(int trow) {
		this.trow = trow;
	}
	public int getNrow() {
		return nrow;
	}
	public void setNrow(int nrow) {
		this.nrow = nrow;
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
	public String getInstAdmCortCode() {
		return instAdmCortCode;
	}
	public void setInstAdmCortCode(String instAdmCortCode) {
		this.instAdmCortCode = instAdmCortCode;
	}
	public String getInstAdmPetiSenddate() {
		return instAdmPetiSenddate;
	}
	public void setInstAdmPetiSenddate(String instAdmPetiSenddate) {
		this.instAdmPetiSenddate = instAdmPetiSenddate;
	}
	public String getInstAdmCortReqidate() {
		return instAdmCortReqidate;
	}
	public void setInstAdmCortReqidate(String instAdmCortReqidate) {
		this.instAdmCortReqidate = instAdmCortReqidate;
	}
	public String getInstAdmAsitParcdate() {
		return instAdmAsitParcdate;
	}
	public void setInstAdmAsitParcdate(String instAdmAsitParcdate) {
		this.instAdmAsitParcdate = instAdmAsitParcdate;
	}
	public String getInstAdmAsitParcopin() {
		return instAdmAsitParcopin;
	}
	public void setInstAdmAsitParcopin(String instAdmAsitParcopin) {
		this.instAdmAsitParcopin = instAdmAsitParcopin;
	}
	public String getInstAdmIssuPoin() {
		return instAdmIssuPoin;
	}
	public void setInstAdmIssuPoin(String instAdmIssuPoin) {
		this.instAdmIssuPoin = instAdmIssuPoin;
	}
	public String getInstAdmCpOpin() {
		return instAdmCpOpin;
	}
	public void setInstAdmCpOpin(String instAdmCpOpin) {
		this.instAdmCpOpin = instAdmCpOpin;
	}
	public String getInstAdmClamVopcode() {
		return instAdmClamVopcode;
	}
	public void setInstAdmClamVopcode(String instAdmClamVopcode) {
		this.instAdmClamVopcode = instAdmClamVopcode;
	}
	public String getInstAdmClamVop() {
		return instAdmClamVop;
	}
	public void setInstAdmClamVop(String instAdmClamVop) {
		this.instAdmClamVop = instAdmClamVop;
	}
	public String getInstAdmDivRate() {
		return instAdmDivRate;
	}
	public void setInstAdmDivRate(String instAdmDivRate) {
		this.instAdmDivRate = instAdmDivRate;
	}
	public String getInstAdmJudId() {
		return instAdmJudId;
	}
	public void setInstAdmJudId(String instAdmJudId) {
		this.instAdmJudId = instAdmJudId;
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
	public String getInstAdmCtrmgrDepuname() {
		return instAdmCtrmgrDepuname;
	}
	public void setInstAdmCtrmgrDepuname(String instAdmCtrmgrDepuname) {
		this.instAdmCtrmgrDepuname = instAdmCtrmgrDepuname;
	}
	public String getInstAdmRaisreqDate() {
		return instAdmRaisreqDate;
	}
	public void setInstAdmRaisreqDate(String instAdmRaisreqDate) {
		this.instAdmRaisreqDate = instAdmRaisreqDate;
	}
	public String getInstAdmVodSepcode() {
		return instAdmVodSepcode;
	}
	public void setInstAdmVodSepcode(String instAdmVodSepcode) {
		this.instAdmVodSepcode = instAdmVodSepcode;
	}
	public String getInstAdmJudgDate() {
		return instAdmJudgDate;
	}
	public void setInstAdmJudgDate(String instAdmJudgDate) {
		this.instAdmJudgDate = instAdmJudgDate;
	}
	public String getInstAdmJudgCfmDate() {
		return instAdmJudgCfmDate;
	}
	public void setInstAdmJudgCfmDate(String instAdmJudgCfmDate) {
		this.instAdmJudgCfmDate = instAdmJudgCfmDate;
	}
	public String getInstAdmJudgDelidate() {
		return instAdmJudgDelidate;
	}
	public void setInstAdmJudgDelidate(String instAdmJudgDelidate) {
		this.instAdmJudgDelidate = instAdmJudgDelidate;
	}
	public String getInstAdmVodChg() {
		return instAdmVodChg;
	}
	public void setInstAdmVodChg(String instAdmVodChg) {
		this.instAdmVodChg = instAdmVodChg;
	}
	public String getInstAdmRegnChg() {
		return instAdmRegnChg;
	}
	public void setInstAdmRegnChg(String instAdmRegnChg) {
		this.instAdmRegnChg = instAdmRegnChg;
	}
	public String getInstAdmPayDlindate() {
		return instAdmPayDlindate;
	}
	public void setInstAdmPayDlindate(String instAdmPayDlindate) {
		this.instAdmPayDlindate = instAdmPayDlindate;
	}
	public String getInstAdmWincRate() {
		return instAdmWincRate;
	}
	public void setInstAdmWincRate(String instAdmWincRate) {
		this.instAdmWincRate = instAdmWincRate;
	}
	public String getInstAdmJudgCont() {
		return instAdmJudgCont;
	}
	public void setInstAdmJudgCont(String instAdmJudgCont) {
		this.instAdmJudgCont = instAdmJudgCont;
	}
	public String getInstAdmEntLyrId() {
		return instAdmEntLyrId;
	}
	public void setInstAdmEntLyrId(String instAdmEntLyrId) {
		this.instAdmEntLyrId = instAdmEntLyrId;
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
	public String getPladefPos() {
		return pladefPos;
	}
	public void setPladefPos(String pladefPos) {
		this.pladefPos = pladefPos;
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
	public String getPladefJudgPoin() {
		return pladefJudgPoin;
	}
	public void setPladefJudgPoin(String pladefJudgPoin) {
		this.pladefJudgPoin = pladefJudgPoin;
	}
	public String getPladefJudgchg() {
		return pladefJudgchg;
	}
	public void setPladefJudgchg(String pladefJudgchg) {
		this.pladefJudgchg = pladefJudgchg;
	}
	public String getPladefConcCont() {
		return pladefConcCont;
	}
	public void setPladefConcCont(String pladefConcCont) {
		this.pladefConcCont = pladefConcCont;
	}
	public String getGbcode() {
		return gbcode;
	}
	public void setGbcode(String gbcode) {
		this.gbcode = gbcode;
	}
	

	

}
