package nexacro.sample.service.legal_ad;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.legal_ad.LegalAdListVo;
import nexacro.sample.vo.legal_ad.LegalAdVo;

public interface Legal_adService {

	String saveLegalAdDetail(List<LegalAdListVo> legalAdListVo);

	List<LegalAdListVo> selectLegaladList(Map<String, Object> selectMap);

	void saveLegalAdRep(List<LegalAdListVo> legalAdListVo);
	
	String saveLegalAdMandate(List<LegalAdListVo> legalAdListVo);
	
	List<LegalAdListVo> selectCost(Map<String, Object> selectMap);

	void saveCost(List<LegalAdListVo> legalAdListVo);

	List<LegalAdVo> selectLegalOfclList(Map<String, Object> selectMap);

	String saveLegalOfclInfo(List<LegalAdVo> legalAdVo);

	List<LegalAdListVo> selectLegaladOutList(Map<String, Object> selectMap);

	void saveLegalAdOutRep(List<LegalAdListVo> legalAdListVo);

	List<LegalAdListVo> legalAdStatList(Map<String, Object> selectMap);
	
	// 법률자문건현황 JKIM_2019.12.26
	List<LegalAdListVo> legal_advSelect(Map<String, Object> selectMap);

}