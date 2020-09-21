package nexacro.sample.service.impl.lawsuit;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.lawsuit.Lawsuit_ListDAO;
import nexacro.sample.service.depo.DepoService;
import nexacro.sample.service.lawsuit.Lawsuit_ListService;
import nexacro.sample.vo.depo.DepoVO;
import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("lawsuitlistservice")
public class Lawsuit_ListServiceImpl extends EgovAbstractServiceImpl implements Lawsuit_ListService{
	@Resource(name = "lawsuitlistDAO")
	private Lawsuit_ListDAO lawsuitlistDAO;
	
	@Override
	public List<Lawsuit_ListVO> selectCode(Map<String, Object> ListMap) {
		return lawsuitlistDAO.selectCode(ListMap);
	}
	
	@Override
	public List<Lawsuit_ListVO> getLawsuitDetail(Map<String, Object> ListMap) {
		return lawsuitlistDAO.getLawsuitDetail(ListMap);
	}
	
	@Override
	public List<Lawsuit_ListVO> getInstanceDetail(Map<String, Object> ListMap) {
		return lawsuitlistDAO.getInstanceDetail(ListMap);
	}
	
	@Override
	public List<Lawsuit_ListVO> getLawsuitStatus(Map<String, Object> ListMap) {
		return lawsuitlistDAO.getLawsuitStatus(ListMap);
	}
	
	@Override
	public List<Lawsuit_ListVO> getinstanceListAll(Map<String, Object> ListMap) {
		return lawsuitlistDAO.getinstanceListAll(ListMap);
	}
	@Override
	public List<Lawsuit_ListVO> getPlaDefDetail(Map<String, Object> ListMap) {
		return lawsuitlistDAO.getPlaDefDetail(ListMap);
	}
	@Override
	public List<Lawsuit_ListVO> getApprovalLineList(Map<String, Object> ListMap) {
		return lawsuitlistDAO.getApprovalLineList(ListMap);
	}
	
	@Override
	public List<Lawsuit_ListVO> getMgrList(Map<String, Object> ListMap) {
		return lawsuitlistDAO.getMgrList(ListMap);
	}
	@Override
	public List<Lawsuit_ListVO> getMgrSelect(Map<String, Object> ListMap) {
		return lawsuitlistDAO.getMgrSelect(ListMap);
	}
	// 소제기 의뢰번호 당사 피고 검색
	@Override
	public List<Lawsuit_ListVO> getLawNotiNoSearch(Map<String, Object> ListMap) {
		return lawsuitlistDAO.getLawNotiNoSearch(ListMap);
	}
	// 당담판사 검색
	@Override
	public List<Lawsuit_ListVO> getLegalOfficials(Map<String, Object> ListMap) {
		return lawsuitlistDAO.getLegalOfficials(ListMap);
	}
	@Override
	public List<Lawsuit_ListVO> getNewAdmNo(Map<String, Object> ListMap) {
		return lawsuitlistDAO.getNewAdmNo(ListMap);
	}
	@Override
	@Transactional
	public int lawsuitMgrManage(List<Lawsuit_ListVO> Lawsuit_ListVO) {
		int result=0;
		int size = Lawsuit_ListVO.size();
        for (int i=0; i<size; i++) {
        	Lawsuit_ListVO ListVO = Lawsuit_ListVO.get(i);
        	System.out.println("Lawsuit_ListVO.get(i) = "+ Lawsuit_ListVO.get(i));
        	DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) ListVO;
    		if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
    			lawsuitlistDAO.insertLawsuitMgr(ListVO);
    		}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
    			lawsuitlistDAO.updateLawsuitMgr(ListVO);
    		}else if(accessor.getRowType() == DataSet.ROW_TYPE_NORMAL){
    			result=10;
    		}
        }
        return result;
	}
	@Override
	@Transactional
	public int saveAddLawsuit(List<Lawsuit_ListVO> Lawsuit_ListVO) {
		int result = 0;
		for (int i = 0; i < Lawsuit_ListVO.size(); i++) {
			Lawsuit_ListVO ListVO = Lawsuit_ListVO.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) ListVO;
			if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
				lawsuitlistDAO.updateAddLawsuit(ListVO);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				lawsuitlistDAO.updateAddLawsuit(ListVO);
    		}	
		}
		return result;
	}	
	
	//소송접수관리 저장.
	@Override
	@Transactional
	public String saveLawsuitAll(List<Lawsuit_ListVO> Lawsuit_ListVO,
							  List<Lawsuit_ListVO> Lawsuit_ListVO1,
							  List<Lawsuit_ListVO> Lawsuit_ListVO2){
		
		// insertLawsuit에서 채번된 lawsuitAdmNo를 담아서 심급과 원피고 테이블 저장에서 쓰도록 하기 위해 선언
		String lawsuitAdmNo = "";
		boolean insertFirst = false;

		for (int i = 0; i < Lawsuit_ListVO.size(); i++) {
			Lawsuit_ListVO ListVO = Lawsuit_ListVO.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) ListVO;
			if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
				lawsuitAdmNo = lawsuitlistDAO.insertLawsuitAll(ListVO);	// 저장 후 lawsuitAdmNo를 받아옴
			}
			else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
				lawsuitlistDAO.updateLawsuitAll(ListVO);
				lawsuitAdmNo = ListVO.getLawsuitAdmNo();
			}
		}
		for (int i = 0; i < Lawsuit_ListVO1.size(); i++) {
			Lawsuit_ListVO ListVO = Lawsuit_ListVO1.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) ListVO;
			if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
				if("001".equals(ListVO.getInstAdmCode())){
					ListVO.setLawsuitAdmNo(lawsuitAdmNo);		// lawsuitAdmNo 세팅
					insertFirst = true;
				}
				lawsuitlistDAO.insertInstanceAll(ListVO);	// 심급저장
			}
			else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
				lawsuitlistDAO.updateInstanceAll(ListVO);
			}
		}
		for (int i = 0; i < Lawsuit_ListVO2.size(); i++) {
			Lawsuit_ListVO ListVO = Lawsuit_ListVO2.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) ListVO;
			if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
				if(insertFirst){
					ListVO.setLawsuitAdmNo(lawsuitAdmNo);		// lawsuitAdmNo 세팅					
				}
				lawsuitlistDAO.insertPladefAll(ListVO);		// 원피고 저장
			}
			else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
				lawsuitlistDAO.updatePladefAll(ListVO);
			}
			else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED) {
				lawsuitlistDAO.deletePladefAll(ListVO);
			}
		}
		return lawsuitAdmNo;
	}

	@Override
	public int updatePlaDefAll(Lawsuit_ListVO pladefIn) {
		lawsuitlistDAO.updatePladefAll(pladefIn);
		return 0;
	} 
	
	
	//saveAddLawsuit
	/*public void getLawsuitDetail(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();
		lawsuitlistVO.setLawsuitAdmNo((String) inVar.get("lawsuitAdmNo")); 

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getLawsuitDetail(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	public void getLawsuitList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();

		//lawsuitlistVO.setSrcCampusGb((String) inVar.get("srcCampusGb"));
		

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getLawsuitList(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	//샘플 저장,수정,삭제
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveLawsuit(DataSetMap tranInfo, Map inVariableMap,
			Map inDataSetMap, Map ouVariableMap, Map outDataSetMap)
			throws Exception {
		// TODO Auto-generated method stub
		int result = 0;
		DataSetMap list = (DataSetMap) inDataSetMap.get("ds_input");
		for (int i = 0; i < list.size(); i++) {
			Map map = list.get(i);

			int rowType = ((Integer) map
					.get(XPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			map.put("registerId", inVariableMap.get("registerId"));
			
			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				lawsuitlistDAO.insertLawsuit(map);
			}

			else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				lawsuitlistDAO.updateLawsuit(map);

			} else if (rowType == DataSet.ROW_TYPE_DELETED) {
				lawsuitlistDAO.deleteLawsuit(map);
			}
		}
		
		return result;
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveLawsuitAll(DataSetMap tranInfo, Map inVariableMap,
			Map inDataSetMap, Map ouVariableMap, Map outDataSetMap)
			throws Exception {
		// TODO Auto-generated method stub
		int result = 0;
		DataSetMap list = (DataSetMap) inDataSetMap.get("ds_input");
		DataSetMap list1 = (DataSetMap) inDataSetMap.get("ds_input1");
		DataSetMap list2 = (DataSetMap) inDataSetMap.get("ds_input2");
		for (int i = 0; i < list.size(); i++) {
			Map map = list.get(i);

			int rowType = ((Integer) map
					.get(XPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			map.put("registerId", inVariableMap.get("registerId"));
			
			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				lawsuitlistDAO.insertLawsuitAll(map);
			}

			else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				lawsuitlistDAO.updateLawsuitAll(map);

			}
		}
		for (int i = 0; i < list1.size(); i++) {
			Map map = list1.get(i);

			int rowType = ((Integer) map
					.get(XPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			map.put("registerId", inVariableMap.get("registerId"));
			
			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				lawsuitlistDAO.insertInstanceAll(map);
			}

			else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				lawsuitlistDAO.updateInstanceAll(map);

			}
		}
		for (int i = 0; i < list2.size(); i++) {
			Map map = list2.get(i);

			int rowType = ((Integer) map
					.get(XPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			map.put("registerId", inVariableMap.get("registerId"));
			
			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				lawsuitlistDAO.insertPladefAll(map);
			}

			else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				lawsuitlistDAO.updatePladefAll(map);

			}
			
			else if (rowType == DataSet.ROW_TYPE_DELETED) {
				lawsuitlistDAO.deletePladefAll(map);
			}
		}
		
		return result;
	}
	
	public void getLawsuitAllDetail(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();

		//lawsuitlistVO.setSrcCampusGb((String) inVar.get("srcCampusGb"));
		

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getLawsuitAllDetail(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveInstanceAll(DataSetMap tranInfo, Map inVariableMap,
			Map inDataSetMap, Map ouVariableMap, Map outDataSetMap)
			throws Exception {
		// TODO Auto-generated method stub
		int result = 0;
		DataSetMap list = (DataSetMap) inDataSetMap.get("ds_input");
		for (int i = 0; i < list.size(); i++) {
			Map map = list.get(i);

			int rowType = ((Integer) map
					.get(XPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			map.put("registerId", inVariableMap.get("registerId"));
			
			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				lawsuitlistDAO.insertInstanceAll(map);
			}

			else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				lawsuitlistDAO.updateInstanceAll(map);
			}
		}
		
		return result;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveAddLawsuit(DataSetMap tranInfo, Map inVariableMap,
			Map inDataSetMap, Map ouVariableMap, Map outDataSetMap)
			throws Exception {
		// TODO Auto-generated method stub
		int result = 0;
		DataSetMap list = (DataSetMap) inDataSetMap.get("ds_input");
		for (int i = 0; i < list.size(); i++) {
			Map map = list.get(i);

			int rowType = ((Integer) map
					.get(XPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			map.put("registerId", inVariableMap.get("registerId"));

			//if (rowType == DataSet.ROW_TYPE_UPDATED) {
				lawsuitlistDAO.updateAddLawsuit(map);
			//}
		}
		
		return result;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int savePladefAll(DataSetMap tranInfo, Map inVariableMap,
			Map inDataSetMap, Map ouVariableMap, Map outDataSetMap)
			throws Exception {
		// TODO Auto-generated method stub
		int result = 0;
		DataSetMap list = (DataSetMap) inDataSetMap.get("ds_input");
		for (int i = 0; i < list.size(); i++) {
			Map map = list.get(i);

			int rowType = ((Integer) map
					.get(XPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			map.put("registerId", inVariableMap.get("registerId"));
			
			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				
				lawsuitlistDAO.insertPladefAll(map);
				
			}else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				
				lawsuitlistDAO.updatePladefAll(map);
				
			}else if (rowType == DataSet.ROW_TYPE_DELETED) {
				
				lawsuitlistDAO.deletePladefAll(map);
			}
		}
		
		return result;
	}
	
	public void getLawsuitNo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();

		//lawsuitlistVO.setSrcCampusGb((String) inVar.get("srcCampusGb"));
		

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getLawsuitNo(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	public void getLawsuitStatus(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();

		lawsuitlistVO.setLawsuitAdmNo((String) inVar.get("lawsuitAdmNo"));
		
		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getLawsuitStatus(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	public void selectCode(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();

		lawsuitlistVO.setSelectedId((String) inVar.get("selectedId"));
		lawsuitlistVO.setSelectedId1((String) inVar.get("selectedId1"));

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.selectCode(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	public void getInstanceDetail(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();

		lawsuitlistVO.setLawsuitAdmNo((String) inVar.get("lawsuitAdmNo"));
		lawsuitlistVO.setInstAdmCode((String) inVar.get("instAdmCode"));

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getInstanceDetail(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	public void getinstanceListAll(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();

		lawsuitlistVO.setLawsuitAdmNo((String) inVar.get("lawsuitAdmNo"));

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getinstanceListAll(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	public void getPlaDefDetail(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();

		lawsuitlistVO.setLawsuitAdmNo((String) inVar.get("lawsuitAdmNo"));
		lawsuitlistVO.setInstAdmCode((String) inVar.get("instAdmCode"));
		lawsuitlistVO.setLawsuitCpPladefSepcode((String) inVar.get("lawsuitCpPladefSepcode"));

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getPlaDefDetail(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	public void getApprovalLineList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();
		
		lawsuitlistVO.setAprvprgrInfoStepCode((String) inVar.get("aprvprgrInfoStepCode"));
		lawsuitlistVO.setAprvprgrInfoBookNo((String) inVar.get("aprvprgrInfoBookNo"));

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getApprovalLineList(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	public void getLegalOfficials(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();
		
		lawsuitlistVO.setSelectedId((String) inVar.get("selectedId"));
		lawsuitlistVO.setSelectedId1((String) inVar.get("selectedId1"));

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getLegalOfficials(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	public void getMgrSelect(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();
		
		lawsuitlistVO.setLawsuitAdmNo((String) inVar.get("lawsuitAdmNo"));

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getMgrSelect(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int lawsuitMgrManage(DataSetMap tranInfo, Map inVariableMap,
			Map inDataSetMap, Map ouVariableMap, Map outDataSetMap)
			throws Exception {
		// TODO Auto-generated method stub
		int result = 0;
		DataSetMap list = (DataSetMap) inDataSetMap.get("ds_input");
		for (int i = 0; i < list.size(); i++) {
			Map map = list.get(i);

			int rowType = ((Integer) map
					.get(XPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			map.put("registerId", inVariableMap.get("registerId"));
			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				lawsuitlistDAO.insertLawsuitMgr(map);
			}else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				lawsuitlistDAO.updateLawsuitMgr(map);
			}
		}
		
		return result;
	}
	
	public void getMgrList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();
		
		lawsuitlistVO.setInsaSabun((String) inVar.get("insaSabun"));
		lawsuitlistVO.setInsaName((String) inVar.get("insaName"));

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getMgrList(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	public void getLawNotiNoSearch(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();
		
		lawsuitlistVO.setSelectedId((String) inVar.get("selectedId"));
		lawsuitlistVO.setSelectedId1((String) inVar.get("selectedId1"));

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getLawNotiNoSearch(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}
	
	public void getNewAdmNo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// TODO Auto-generated method stub
		
		Lawsuit_ListVO lawsuitlistVO = new Lawsuit_ListVO();
		lawsuitlistVO.setLawsuitAplCaseCode((String) inVar.get("lawsuitAplCaseCode"));
		lawsuitlistVO.setSelectedId((String) inVar.get("selectedId"));

		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<Map> records = lawsuitlistDAO.getNewAdmNo(lawsuitlistVO);
		DataSetMap dsMap = new DataSetMap();
		dsMap.setRowMaps(records);

		outDataset.put("ds_output", dsMap);
	}*/
}
