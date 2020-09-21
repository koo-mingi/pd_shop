package nexacro.sample.service.dao.ibatis.legal_ad;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

import nexacro.sample.vo.legal_ad.LegalAdListVo;
import nexacro.sample.vo.legal_ad.LegalAdVo;

@Repository("legal_adDAO")
public class Legal_adDAO extends NexacroIbatisAbstractDAO {

	public String saveLegalAdDetail(LegalAdListVo tempVo) {
		return (String) insert("legalAd.LegalAdDAO.insertLegalAdReq",tempVo);
	}

	public void updateLegalAdDetail(LegalAdListVo tempVo) {
		update("legalAd.LegalAdDAO.updateLegalAdReq", tempVo);
	}

	public void deleteLegalAdDetail(LegalAdListVo tempVo) {
		delete("legalAd.LegalAdDAO.deleteLegalAdList", tempVo);
	}

	public List<LegalAdListVo> selectLegaladList(Map<String, Object> selectMap) {
		return (List<LegalAdListVo>) list("legalAd.LegalAdDAO.selectLegalAdList", selectMap);
	}

	public List<LegalAdListVo> selectCost(Map<String, Object> selectMap) {
		return (List<LegalAdListVo>)list("legalAd.LegalAdDAO.selectCost", selectMap);
	}

	public void saveCost(LegalAdListVo tempVo) {
		insert("legalAd.LegalAdDAO.insertCost", tempVo);
		
	}

	public void updateCost(LegalAdListVo tempVo) {
		update("legalAd.LegalAdDAO.updateCost", tempVo);
		
	}

	public void deleteCost(LegalAdListVo tempVo) {
		delete("legalAd.LegalAdDAO.deleteCost", tempVo);
		
	}

	public List<LegalAdVo> selectLegalOfclList(Map<String, Object> selectMap) {
		return (List<LegalAdVo>) list("legalAd.LegalAdDAO.selectLegalOfclList", selectMap);
	}

	public void saveLegalOfclInfo(LegalAdVo tempVo) {
		insert("legalAd.LegalAdDAO.insertLegalOfclInfo", tempVo);
		
	}

	public void updateLegalOfclInfo(LegalAdVo tempVo) {
		update("legalAd.LegalAdDAO.updateLegalOfclInfo", tempVo);
		
	}

	public void deleteLegalOfclInfo(LegalAdVo tempVo) {
		delete("legalAd.LegalAdDAO.deleteLegalOfclInfo", tempVo);
		
	}

	public List<LegalAdListVo> selectLegaladOutList(Map<String, Object> selectMap) {
		return (List<LegalAdListVo>) list("legalAd.LegalAdDAO.selectLegalAdOutList", selectMap);
	}

	public void updateLegalAdRep(LegalAdListVo tempVo) {
		update("legalAd.LegalAdDAO.updateLegalAdRep", tempVo);
		
	}

	public List selectLegalAdStatList(
			Map<String, Object> selectMap) {
		
		return list("legalAd.LegalAdDAO.legalAdStatement", selectMap);
	}
	
	// 법률자문건 현환 JKIM_2019.12.26
	@SuppressWarnings("unchecked")
	public List<LegalAdListVo> legal_advSelect(Map<String, Object> selectMap) {
		return (List<LegalAdListVo>)list("legalAd.LegalAdDAO.legal_advSelect", selectMap);
	}

	public void insertLegaladvReq(LegalAdListVo tempVo) {
		insert("legalAd.LegalAdDAO.insertLegaladvReq", tempVo);		
	}

	public void updateLegaladvReq(LegalAdListVo tempVo) {
		update("legalAd.LegalAdDAO.updateLegaladvReq", tempVo);		
	}
}
