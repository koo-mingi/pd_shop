package nexacro.sample.service.dao.ibatis.out;


import java.util.List;

import nexacro.sample.vo.out.OutLegalVo;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("outLegalDao")
public class OutLegalDao extends EgovAbstractDAO{
	
	//법률자문 검색
	@SuppressWarnings("unchecked")
	public List<OutLegalVo> OutLegalAdList(OutLegalVo outLegalVo){
		return (List<OutLegalVo>) list("outLegalAdList",outLegalVo);
	}

	//변경(update)==법률자문회신사항
	public int OutLegalAdUpdate(OutLegalVo outLegalVo) {
		return update("outLegalAdUpdate", outLegalVo);
	}
	
	//법률자문비 검색
	@SuppressWarnings("unchecked")
	public List<OutLegalVo> getCostList(OutLegalVo outLegalVo){
		return (List<OutLegalVo>)list("outLegalAdCostList",outLegalVo);
	}
	
	//등록(insert)==법률자문비내역
	public void insertCost(OutLegalVo outLegalVo){
		insert("outLegalAdCostInsert", outLegalVo);
	}

	//변경(update)==법률자문비내역
	public void updateCost(OutLegalVo outLegalVo) {
		update("outLegalAdCostUpdate", outLegalVo);
	}
	
	//삭제(delete)==법률자문비내역 
	public void deleteCost(OutLegalVo outLegalVo) {
		delete("outLegalAdCostDelete", outLegalVo);
	}
	
}
