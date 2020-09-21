package nexacro.sample.service.lawsuit;

import java.util.List;
import java.util.Map;

import com.nexacro.spring.data.NexacroResult;

import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;

public interface Lawsuit_ListService {
	//샘플공통코드검색
	
	
	List<Lawsuit_ListVO> selectCode(Map<String, Object> ListMap);
	List<Lawsuit_ListVO> getLawsuitDetail(Map<String, Object> ListMap);
	List<Lawsuit_ListVO> getInstanceDetail(Map<String, Object> ListMap);
	List<Lawsuit_ListVO> getLawsuitStatus(Map<String, Object> ListMap);
	List<Lawsuit_ListVO> getinstanceListAll(Map<String, Object> ListMap);
	List<Lawsuit_ListVO> getPlaDefDetail(Map<String, Object> ListMap);
	List<Lawsuit_ListVO> getApprovalLineList(Map<String, Object> ListMap);
	List<Lawsuit_ListVO> getMgrList(Map<String, Object> ListMap);
	List<Lawsuit_ListVO> getMgrSelect(Map<String, Object> ListMap);
	int lawsuitMgrManage(List<Lawsuit_ListVO> Lawsuit_ListVO);
	int saveAddLawsuit(List<Lawsuit_ListVO> Lawsuit_ListVO);
	List<Lawsuit_ListVO> getLawNotiNoSearch(Map<String, Object> ListMap);
	List<Lawsuit_ListVO> getLegalOfficials(Map<String, Object> ListMap);
	String saveLawsuitAll(List<Lawsuit_ListVO> Lawsuit_ListVO, List<Lawsuit_ListVO> lawsuit_ListVO1, List<Lawsuit_ListVO> lawsuit_ListVO2);
	List<Lawsuit_ListVO> getNewAdmNo(Map<String, Object> ListMap);
	int updatePlaDefAll(Lawsuit_ListVO pladefIn);

	/*void getLawsuitDetail(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	//샘플 저장, 수정 , 삭제

	@SuppressWarnings("rawtypes")
	int saveLawsuit(DataSetMap tranInfo, 
			Map inVariableMap, Map inDataSetMap,
			Map ouVariableMap, Map outDataSetMap) throws Exception;
	
	void getLawsuitList(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	//샘플 저장, 수정 , 삭제
	
	@SuppressWarnings("rawtypes")
	int saveLawsuitAll(DataSetMap tranInfo, 
			Map inVariableMap, Map inDataSetMap,
			Map ouVariableMap, Map outDataSetMap) throws Exception;
	
	void getLawsuitAllDetail(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);

	@SuppressWarnings("rawtypes")
	int saveInstanceAll(DataSetMap tranInfo, 
			Map inVariableMap, Map inDataSetMap,
			Map ouVariableMap, Map outDataSetMap) throws Exception;
	
	@SuppressWarnings("rawtypes")
	int savePladefAll(DataSetMap tranInfo, 
			Map inVariableMap, Map inDataSetMap,
			Map ouVariableMap, Map outDataSetMap) throws Exception;
	
	void getLawsuitNo(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	
	void getLawsuitStatus(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	
	void selectCode(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	
	void getInstanceDetail(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	
	void getinstanceListAll(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	
	void getPlaDefDetail(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	
	void getApprovalLineList(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	
	void getLegalOfficials(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	
	void getMgrSelect(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	
	@SuppressWarnings("rawtypes")
	int lawsuitMgrManage(DataSetMap tranInfo, 
			Map inVariableMap, Map inDataSetMap,
			Map ouVariableMap, Map outDataSetMap) throws Exception;
	
	void getMgrList(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	
	@SuppressWarnings("rawtypes")
	int saveAddLawsuit(DataSetMap tranInfo, 
			Map inVariableMap, Map inDataSetMap,
			Map ouVariableMap, Map outDataSetMap) throws Exception;
	
	void getLawNotiNoSearch(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);
	
	void getNewAdmNo(DataSetMap tranInfo,
			Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset);*/
}
