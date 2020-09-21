package nexacro.sample.service.impl.legal_ad;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.legal_ad.Legal_adDAO;
import nexacro.sample.service.legal_ad.Legal_adService;
import nexacro.sample.vo.legal_ad.LegalAdVo;
import nexacro.sample.vo.legal_ad.LegalAdListVo;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("legal_adService")
class Legal_adServiceImpl extends EgovAbstractServiceImpl implements Legal_adService{
	
	@Resource(name="legal_adDAO")
	private Legal_adDAO legal_adDAO;

	@Override
	public String saveLegalAdDetail(List<LegalAdListVo> legalAdListVo) {

		String confirmStr = "";
		
		for(int i=0; i<legalAdListVo.size(); i++){
			LegalAdListVo tempVo = legalAdListVo.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) tempVo;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				legal_adDAO.saveLegalAdDetail(tempVo);
				confirmStr = ""+tempVo.getLegaladvLawAdvReqNo();
			}
			else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				legal_adDAO.updateLegalAdDetail(tempVo);
				confirmStr = ""+tempVo.getLegaladvLawAdvReqNo();
			}
			else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
				legal_adDAO.deleteLegalAdDetail(tempVo);
			}
		}
		
		return confirmStr;
	}

	@Override
	public List<LegalAdListVo> selectLegaladList(Map<String, Object> selectMap) {
		return legal_adDAO.selectLegaladList(selectMap);
	}

	// 법률자문회신 저장
	@Override
	public void saveLegalAdRep(List<LegalAdListVo> legalAdListVo) {
		for(int i=0; i<legalAdListVo.size(); i++){
			LegalAdListVo tempVo = legalAdListVo.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) tempVo;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				legal_adDAO.updateLegalAdRep(tempVo);
			}
		}
	}
	
	@Override
	public String saveLegalAdMandate(List<LegalAdListVo> legalAdListVo) {
		String confirmStr = "";
		int size = legalAdListVo.size();
		 
		for(int i=0; i<size; i++){
			LegalAdListVo tempVo = legalAdListVo.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) tempVo;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){				
				legal_adDAO.insertLegaladvReq(tempVo);
				
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				legal_adDAO.updateLegaladvReq(tempVo);
				
			}
		}
		return confirmStr;
	}
	
	@Override
	public List<LegalAdListVo> selectCost(Map<String, Object> selectMap) {
		return legal_adDAO.selectCost(selectMap);

	}

	@Override
	public void saveCost(List<LegalAdListVo> legalAdListVo) {
		int size = legalAdListVo.size();
		 
		for(int i=0; i<size; i++){
			LegalAdListVo tempVo = legalAdListVo.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) tempVo;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){				
				legal_adDAO.saveCost(tempVo);
				
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				legal_adDAO.updateCost(tempVo);
				
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
				legal_adDAO.deleteCost(tempVo);
			}
		}
		
	}

	@Override
	public List<LegalAdVo> selectLegalOfclList(Map<String, Object> selectMap) {
		return legal_adDAO.selectLegalOfclList(selectMap);
	}

	@Override
	public String saveLegalOfclInfo(List<LegalAdVo> legalAdVo) {
		String confirm = null;
		int size = legalAdVo.size();
	
		for(int i=0; i<size; i++){
			LegalAdVo tempVo = legalAdVo.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) tempVo;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				legal_adDAO.saveLegalOfclInfo(tempVo);
				confirm = "저장";
				
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				legal_adDAO.updateLegalOfclInfo(tempVo);
				confirm = "수정";
				
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
				legal_adDAO.deleteLegalOfclInfo(tempVo);
			}
		}	
		return confirm;
	}

	@Override
	public List<LegalAdListVo> selectLegaladOutList(Map<String, Object> selectMap) {
		return legal_adDAO.selectLegaladOutList(selectMap);
	}

	// 외부법률자문회신 저장
	@Override
	public void saveLegalAdOutRep(List<LegalAdListVo> legalAdListVo) {
		// TODO Auto-generated method stub
		
	}

	// 법률자문건 현황
	@Override
	public List<LegalAdListVo> legalAdStatList(Map<String, Object> selectMap) {
		return legal_adDAO.selectLegalAdStatList(selectMap);
	}
	
	// 벌률자문건 조회 JKIM_2019.12.26
	@Override
	public List<LegalAdListVo> legal_advSelect(Map<String, Object> selectMap) {
		
		return legal_adDAO.legal_advSelect(selectMap);
	}

}
